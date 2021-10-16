function onPoint2dValueChanged(params, point2dVal)
{
    try{
        MessageLog.trace("START")
        var targetAttr = params.targetAttrs[0];

        for(var i=0; i<params.targetNodes.length; ++i){
    
            var targetNode  = params.targetNodes[i];

            var pos_x       = node.getTextAttr(targetNode, frame.current(),"OFFSET.X" )
            var pos_y       = node.getTextAttr(targetNode, frame.current(),"OFFSET.Y" )

            var delta_x     = point2dVal.x - pos_x
            var delta_y     = point2dVal.y - pos_y
            var angle       = Math.atan2(delta_y, delta_x) *180 / Math.PI;

            //MessageLog.trace("Node : " + i + " Name : " + targetNode + " X:" + pos_x + "Y:" + pos_y + " Angle:" + angle)

            node.setTextAttr( targetNode, "ROTATION.ANGLEZ", frame.current(), angle)
    
        }
        MessageLog.trace("END")

    }
    catch(error){
        MessageLog.trace("ERROR : " + error)
    }

}

include(fileMapper.toNativePath(specialFolders.resource+"/scripts/utilities/ui/functionWizard/mcs/mcPoint2dFunction.js"))
