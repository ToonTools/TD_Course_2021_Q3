function configure(packageFolder, packageName)
{
  if (about.isPaintMode())
    return;

  //---------------------------
  //Create Toolbar
  var customToolToolbar = new ScriptToolbarDef({
    id: "com.toonboom.TD_CustomToolToolbar",
    text: "TD Custom Tools",
    customizable: true
  });

  customToolToolbar.addButton({
    text: "TD Regular Polygon Tool",
    icon: "TD_regularPolygonTool.png",
    checkable: true,
    responder: "scriptResponder",
    slot: "onActionActivateToolByName(QString)",
    itemParameter: TD_regularPolygonTool,
    shortcut: "TD_RegularPolygonToolShortcut"
  });

  ScriptManager.addShortcut({
    id: "TD_RegularPolygonToolShortcut",
    text: "TD Regular Polygon Tool",
    responder: "scriptResponder",
    slot: "onActionActivateToolByName(QString)",
    itemParameter: TD_regularPolygonTool,
    longDesc: "TD Regular Polygon Tool",
    order: "256",
    categoryId: "Tools",
    categoryText: "Scripts"
  });


   require("./index.js").registerTool(packageFolder);
}

exports.configure = configure;