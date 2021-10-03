/*
Input : one node in a scene
Output: adds a composite node to that element

How to use: 
    within Harmony :  add addComposite() as a button. Select a node. Press the button, composite will be added

Note: very minimal validation in this script so there will be many use cases where this does not work
*/

function addComposite(){
	MessageLog.trace("--- addComposite() called ---")

	scene.beginUndoRedoAccum("addComposite()")
	
	// escapes from this process if no nodes are selected
	if( selection.numberOfNodesSelected() <= 0 ){
		MessageLog.trace(" no nodes are selected so I will stop")
		return
	}

	// sort the array, so it is in left -> right horizontal order
	var userSelection = selection.selectedNodes()
	var sortedSelection = userSelection.sort(function(a, b) {
		return parseFloat(node.coordX(a)) - parseFloat(node.coordX(b));
	});

	// starting values for total_X and minimum_Y
	var total_x = 0
	var min_y	= -999
	// look at the x and y node position of all selected nodes
	for( n in sortedSelection ){
		// count the total x value to work out the average later
		total_x 	+= node.coordX(sortedSelection[n])

		// find the lowest y position 
		var sel_y = node.coordY(sortedSelection[n])
		if( sel_y > min_y ){
			min_y = sel_y
		}
	}

	var average_x = total_x/sortedSelection.length

	// use the leftmost item as the name of the comp node
	var selNode			= sortedSelection[0]
	var selNode_name 	= node.getName(selNode)
	
	// build composite	
	var parentGroup = "Top"
	var nodeName 	= selNode_name + "_COMP"
	var nodeType 	= "COMPOSITE"
	var offset		= 200
	var node_x		= average_x
	var node_y		= min_y + offset
	var node_z		= 0

 
	var newCompNode = node.add( parentGroup , nodeName, nodeType , node_x , node_y , node_z )


	// set the composite type
	var compositeType = "compositeBitmap"

	// if Shift is pressed, change composite type to pasthrough
	if(KeyModifiers.IsShiftPressed()){
		compositeType = "compositePassthrough"
	}
	// if Control is pressed, give us some options for which composite to use
	else if( KeyModifiers.IsControlPressed()){
		MessageBox.information("Control was pressed")

		var dialog 			= new Dialog()
		dialog.title 		= "Choose your composite type"
		
		var userInput 		= new ComboBox();
		userInput.label 	= "Type = "
		userInput.editable 	= true;
		userInput.itemList 	= ["compositeBitmap", "compositePassthrough", "compositeVector","compositeVectorToBitmap" ];

		dialog.add(userInput)
		
		if( dialog.exec()){
			compositeType = userInput.currentItem 
		}	
	}

	node.setTextAttr(newCompNode, "compositeMode", 1, compositeType);

	MessageLog.trace("--- built : " + newCompNode)
	
	
	// link composite node to initial selection
	// for any nodes selected make sure they can be connected
	for( n in sortedSelection){
		var mySelectedNode =sortedSelection[n]
		var linkOutput = node.link(mySelectedNode, 0, newCompNode, 0 , true, true )
		if(linkOutput){ 
			MessageLog.trace("----- connected to : " + selNode)
		}
		else{
			MessageLog.trace("X X X no connection to : " + selNode)
		}
	}
	
	scene.endUndoRedoAccum()
	
	// TODO add popup allowing user to choose which type of composite 
	// OR
	// Shift + click adds Bitmap
	// click adds passthroug
	
}
