function onPoint2dValueChanged(params, point2dVal)
{
    MessageLog.trace("START")
  var targetAttr = params.targetAttrs[0];
    MessageLog.trace("Attribute Name: " + targetAttr)
  for(var i=0; i<params.targetNodes.length; ++i)
  {
    var targetNode = params.targetNodes[i];
    MessageLog.trace("------------------")
    MessageLog.trace("Node INdex : " + i)
    Messagelog.trace("Node Identifier: " + targetNode)

  }
    MessageLog.trace("END")
}


include(fileMapper.toNativePath(specialFolders.resource+"/scripts/utilities/ui/functionWizard/mcs/mcPoint2dFunction.js"))