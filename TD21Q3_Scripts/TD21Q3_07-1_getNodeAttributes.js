/*
input: target a single node in a harmony scene
output: text information of all of that nodes attributes and their values

*/

function getNodeAttributes(){
	MessageLog.trace("getNodeAttributes started")
	
	if ( selection.numberOfNodesSelected() > 1 ){
		MessageLog.trace("you have too many nodes selected, just select one and try again")
		return
	}
	else if (selection.numberOfNodesSelected() <= 0 ){
		MessageLog.trace("you have no nodes selected, just select one and try again")
		return
	}
	
	var myNode = selection.selectedNode(0)
	MessageLog.trace(myNode)
	
	
	// check that only one node has been selected
	
	// check if that node has any attributes
	
	// if it does have attributes, then go through each attribute and display its name and its value
	
	
	





}
