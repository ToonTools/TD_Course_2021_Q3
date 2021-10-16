function onPoint2dValueChanged(params, point2dVal)
{
  var targetAttr = params.targetAttrs[0];
  for(var i=0; i<params.targetNodes.length; ++i)
  {
    var targetNode = params.targetNodes[i];
    node.setTextAttr(targetNode, targetAttr + ".X", frame.current(), point2dVal.x );
    node.setTextAttr(targetNode, targetAttr + ".Y", frame.current(), point2dVal.y );
  }
}


include(fileMapper.toNativePath(specialFolders.resource+"/scripts/utilities/ui/functionWizard/mcs/mcPoint2dFunction.js"))