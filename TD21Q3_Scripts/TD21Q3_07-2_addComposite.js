/*
Input : one node in a scene
Output: adds a composite node to that element

How to use: 
    within Harmony :  add addComposite() as a button. Select a node. Press the button, composite will be added

Note: very minimal validation in this script so there will be many use cases where this does not work
*/

function addComposite(){
	MessageLog.trace("--- addComposite() called ---")
	
	// build composite	
	var parentGroup = "Top"
	var nodeName 	= "myComposite"
	var nodeType 	= "COMPOSITE"
	var node_x		= 0
	var node_y		= 0
	var node_z		= 0
	
	node.add( parentGroup , nodeName, nodeType , node_x , node_y , node_z )
	
	
	MessageLog.trace("--- addComposite() completed  ---")
}
