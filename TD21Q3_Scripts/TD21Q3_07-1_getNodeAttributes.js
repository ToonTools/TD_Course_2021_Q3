/*
input: target a single node in a harmony scene
output: text information of all of that nodes attributes and their values

*/

function getNodeAttributes(){
	//MessageLog.trace("getNodeAttributes started")
	
	var frame				= 1
	
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
		
		
		for( n in myNode_attrNames ){
			var myNode_attr_name 		= myNode_attrNames[n]
			var myNode_attr_key 		= myNode_attrKeys[n]
			var myNode_attr_value 	= node.getTextAttr(myNode, frame, myNode_attr_key)
			MessageLog.trace("\t" + myNode_attr_key + " (" + myNode_attr_name + ")\n\t\t= " +  myNode_attr_value +"\n" )
			
			if( myNode_attr_value == ""){
				MessageLog.trace("\t\t\t ERROR, no value found")
			}
			
		}

		
		// check if that node has any attributes
		
		// if it does have attributes, then go through each attribute and display its name and its value
	}
}
