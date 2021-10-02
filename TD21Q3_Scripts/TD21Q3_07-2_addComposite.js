/*
Input : one node in a scene
Output: adds a composite node to that element

How to use: 
    within Harmony :  add addComposite() as a button. Select a node. Press the button, composite will be added

Note: very minimal validation in this script so there will be many use cases where this does not work
*/

function addComposite(){
	MessageLog.trace("--- addComposite() called ---")
	
	var selNode			= selection.selectedNode(0)
	var selNode_name 	= node.getName(selNode)
	var selNode_x		= node.coordX(selNode)
	var selNode_y		= node.coordY(selNode)

	
	// build composite	
	var parentGroup = "Top"
	var nodeName 	= selNode_name + "_COMP"
	var nodeType 	= "COMPOSITE"
	var offset		= 200
	var node_x		= selNode_x
	var node_y		= selNode_y + offset
	var node_z		= 0


	var newCompNode = node.add( parentGroup , nodeName, nodeType , node_x , node_y , node_z )
	MessageLog.trace("--- built : " + newCompNode)
	
	
	// link composite node to initial selection
	node.link(selNode, 0, newCompNode, 0 , true, true )
	MessageLog.trace("------ connected to --- " + selNode)
	
	// TODO add popup allowing user to choose which type of composite 
	// OR
	// Shift + click adds Bitmap
	// click adds passthroug
	
}
