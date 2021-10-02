/*
input: target a single node in a harmony scene
output: text information of all of that nodes attributes and their values

*/

function getNodeAttributes(){
	//MessageLog.trace("getNodeAttributes started")
	
	if ( selection.numberOfNodesSelected() > 1 ){
		MessageLog.trace("you have too many nodes selected, just select one and try again")
		return
	}
	else if (selection.numberOfNodesSelected() <= 0 ){
		MessageLog.trace("you have no nodes selected, just select one and try again")
		return
	}
	else{
		// check that only one node has been selected
		var myNode = selection.selectedNode(0)
		
		var myNode_attrNames 	= node.getAllAttrNames(myNode)
		var myNode_attrKeys 	= node.getAllAttrKeywords(myNode)
		
		MessageLog.trace("[" + myNode + "] has " + myNode_attrNames.length + " attributes"  )
		
		//MessageLog.trace("myNode_attrNames = " + myNode_attrNames)
		
		//MessageLog.trace("myNode_attrKeys = " + myNode_attrKeys)
		
		
		
		
		
		
		// check if that node has any attributes
		
		// if it does have attributes, then go through each attribute and display its name and its value
	}
}
