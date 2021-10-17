function regularPolygonToolName() {
    return "com.toonboom.RegularPolygonTool";
  }

function registerRegularPolygonTool(packageFolder) {
    System.println("Registering TD_regularPolygonTool: " + __file__);

    Tools.registerTool({
        name: regularPolygonToolName(),
        displayName: "My TD Polygon Tool",
        icon: "TD_regularPolygonTool.png",
        toolType: "drawing",
        canBeOverridenBySelectOrTransformTool: false,
        options: {
            numSides: 6,
            createStar: false,
            ratio: 0.5
        },
        resourceFolder: "resources",
        preferenceName: function () {
            return this.name + ".settings";
        },
        defaultOptions: {
            numSides: 6,
            createStar: false,
            ratio: 0.5
        },
        loadFromPreferences: function () {
          try {
            var v = preferences.getString(this.preferenceName(), JSON.stringify(this.defaultOptions));
            this.options = JSON.parse(v);
          }
          catch (e) {
            this.options = this.defaultOptions;
          }
        },
        storeToPreferences: function () {
            preferences.setString(this.preferenceName(), JSON.stringify(this.options));
        },
        onRegister: function () {
            // This is called once when registering the tool
            // Here the developer can, for example, initialize the tool options
            // from the preferences 
            System.println("Registered my custom (line 44) tool : " + this.resourceFolder);
            this.loadFromPreferences();
        },
        onCreate: function (ctx) {
            // This is called once for each instance in a view
            // The context could be populated with instance data
        },
        onMouseDown: function (ctx) {
            MessageLog.trace("On mouse down");
            ctx.origin = ctx.currentPoint;
            return true;
        },
        onMouseMove: function (ctx) {
            this.buildPolygon(ctx, ctx.currentPoint);
            return true;
        },
        onMouseUp: function (ctx) {
            MessageLog.trace("On mouse up");
            var settings = Tools.getToolSettings();
            
            if (!ctx.overlay || !ctx.overlay.paths || !ctx.overlay.paths.length)
              return false;
      
            // make a copy of the path to use because the
            // Tools.createDrawing() will have the side effect
            // of resetting the tool...
            var path = ctx.overlay.paths[0].path;
      
            var success = true;
            scene.beginUndoRedoAccum("Regular polygon tool");
            try {
              if (!settings.currentDrawing) {
                settings = Tools.createDrawing();
                if (!settings)
                {
                  System.println("Could not create drawing");
                  success = false;
                }
              }
      
              if (success) {
                var cid = PaletteManager.getCurrentColorId();
                DrawingTools.createLayers({
                  drawing: settings.currentDrawing,
                  art: 2,
                  layers: [
                    {
                      contours: [
                        {
                          stroke: true,
                          colorId: cid,
                          polygon: true,
                          path: path
                        }
                      ]
                    }
                  ]
                });
              }
            }
            catch(e)
            {
              System.println("Exception: " + e);
              success = false;
            }
            ctx.overlay = {};
            if (success)
              scene.endUndoRedoAccum();
            else
              scene.cancelUndoRedoAccum();
            return true;
        },
        onResetTool: function (ctx) {
            ctx.overlay = {};
        },
        loadPanel: function (dialog, responder) {
            var uiFile = this.resourceFolder + "/TD_regularPolygonTool.ui";
            System.println("UIfilename:" + uiFile);
            try {
              var ui = UiLoader.load({ uiFile: uiFile, parent: dialog, folder: this.resourceFolder });
      
              this.ui = ui;
      
              ui.options.numSides.setValue(this.options.numSides);
              ui.options.numSides['valueChanged(int)'].connect(this, function (v) {
                this.options.numSides = v;
                this.storeToPreferences();
              });
              ui.options.createStar.setChecked(this.options.createStar);
              ui.options.createStar.toggled.connect(this, function (checked) {
                this.options.createStar = checked;
                ui.options.ratio.setEnabled(this.options.createStar);
                this.storeToPreferences();
              });
              ui.options.ratio.setEnabled(this.options.createStar);
              ui.options.ratio.setValue(Math.round(this.options.ratio * 1000));
              ui.options.ratio['valueChanged(int)'].connect(this, function (v) {
                this.options.ratio = v / 1000.0;
                this.storeToPreferences();
              });
              ui.show();
            }
            catch (e) {
              System.println("Exception: " + e);
            }
            System.println("Loaded panel");
      
        },
        refreshPanel: function (dialog, responder) {
            // In here, the panel could react to changes in the selection or other external sources
            System.println("Refresh panel");
        },
        buildPolygon: function (ctx, pt) {
            var dx = pt.x - ctx.origin.x;
            var dy = pt.y - ctx.origin.y;
            var l = Math.sqrt(dx * dx + dy * dy);
            var angle = Math.atan2(dy, dx);
            var poly = [];
            var numSides = this.options.numSides;
            var createStar = this.options.createStar;
            var r1 = 1;
            if (createStar) {
              r1 = this.options.ratio;
              numSides *= 2;
            }
            var d = Math.PI * 2 / numSides;
            for (var i = 0; i < numSides; i++) {
              var r = 1;
              if (i % 2)
                r = r1;
              poly.push({ x: ctx.origin.x + r * l * Math.cos(angle + i * d), y: ctx.origin.y + r * l * Math.sin(angle + i * d) });
            }
            poly.push(poly[0]);
            ctx.overlay = { paths: [{ path: poly, color: { r: 0, g: 0, b: 255, a: 255 } }] }
        }
    })
}


exports.toolname = regularPolygonToolName();
exports.registerTool = registerRegularPolygonTool;