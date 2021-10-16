// this is where the functionality will live for the custom master controller script

Controller.onShowControl = function(){

    Controller.controls =[]
    
    var valAttr = node.getAttr(Controller.node, frame.current(), "checkbox_value")
    var checkBox = new CheckboxWidget({
        data: valAttr,
            position        : Point2d(0., 0.),
            screen_space    : false,
            outer_color     : ColourRGBA(0,0,0,255),
            on_color        : ColourRGBA(0,255,0,128),
            off_color       : ColourRGBA(255,0,0,128),
            size            : 1
    })

    checkBox.valueChanged.connect(toggleValue)

    Controller.controlls = [checkBox]

}

function toggleValue(valAttr){
    MessageLog.trace("Value has been toggled : " + valAttr);

}