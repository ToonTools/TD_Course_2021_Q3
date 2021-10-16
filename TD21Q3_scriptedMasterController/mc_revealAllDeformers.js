// this is where the functionality will live for the custom master controller script

Controller.onShowControl = function(){

    MessageLog.trace("Master Controller is visible");

    Controller.controls = [];
    var checkboxValue   = node.getAttr(Controller.node, frame.current(), "checkbox_value")
    var checkBox = new  CheckboxWidget({ 
   
            data: checkboxValue,
               position     : Point2d(0.,0.),
               screen_space : false,
               outer_color  : ColorRGBA(0,0,0,255),
               on_color     : ColorRGBA(0,255,0,128),
               off_color    : ColorRGBA(255,0,0,128),
               size         : 1
       });
   
    checkBox.valueChanged.connect(toggleValue);
     
    Controller.controls = [checkBox];
}

Controller.onHideControl = function(){

    MessageLog.trace("Master Controller is hidden");
    node.setTextAttr(Controller.node, "checbox_value" , frame.current(), false)
}

function toggleValue(checkboxValue){
    MessageLog.trace("Value has been toggled : " + checkboxValue );


    // define the types of nodes you want to reveal
    var typesToShow = ["CurveModule"]
    var nodesToShow = node.getNodes(typesToShow)

    // go through all of those node type in the scene
    if(checkboxValue){
        // populate selection
        for( var i = 0 ; i< nodesToShow.length ; i++){
            selection.addNodeToSelection(nodesToShow[i])
        }
        // show deformers
        Action.perform("onActionShowSelectedDeformers()", "miniPegModuleResponder");
        selection.clearSelection()
        selection.addNodeToSelection(Controller.node)
    }else{
        // clear selection
        selection.clearSelection()
        selection.addNodeToSelection(Controller.node)
        // hide all deformers
        Action.perform("onActionShowSelectedDeformers()", "miniPegModuleResponder");
    }
}