//https://docs.toonboom.com/help/harmony-20/scripting/script/classAction.html#ad9b65553c0959c0b7295a448f7bd1e3e


var rList = Action.getResponderList();
for(var i=0; i < rList.length; ++i)
{
  MessageLog.trace( "ResponderIdentity=" + rList[i] );
}

/*
var aList = Action.getActionList("Node View");
for(var i=0; i < aList.length; ++i)
{
  MessageLog.trace( "availableAction=" + aList[i] );
}
*/