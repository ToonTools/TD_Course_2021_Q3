/*
Input : any number of nodes in a scene that the user selects
Output: adds a composite and then a display to that composite that is then set to global display

How to use: 
    within Harmony :  add addComposite() as a button. Select a node. Press the button, composite and diplay will be added

*/

function addAndUserDisplays(){
    scene.beginUndoRedoAccum("addAndUseDisplays()")
	MessageLog.trace("\t -- started: addAndUseDisplays()")

    // get current selection, reject if nothing is selected
	var userSelection = selection.selectedNodes()
	if(userSelection.length <= 0){
		MessageLog.trace("nothing selected, will end process")
		return
	}

    // -------------
    // TODO ----------- might add in validation later on 
    // -------------

    var firstNodeInSelection 	= userSelection[0]
	var firstNodeName 			= node.getName(firstNodeInSelection)
	var firstNodeParent			= node.parentNode(firstNodeInSelection)

    // calculate average x pos of selection
	// calulcate min y pos of selection
	var total_x = 0
	var min_y 	= -999

	for( n in userSelection ){

		var sel_x 	= node.coordX(userSelection[n])
		total_x 	+= sel_x 

		var sel_y = node.coordY(userSelection[n])
		if( sel_y > min_y ){
			min_y = sel_y
		}
	}

	var average_x   = total_x/userSelection.length
	var nodeParent  = firstNodeParent + "/"
	var compName    = firstNodeName + "_CMP"
	var offset_y    = 100
	var comp_x      = average_x
	var comp_y      = min_y + offset_y
	var comp_z      = 0

    var newCompositeNode = node.add(nodeParent, compName, "COMPOSITE", comp_x, comp_y, comp_z)
    // set composite type to bitmap on creation
    node.setTextAttr(newCompositeNode, "compositeMode", 1, "compositeBitmap");

	MessageLog.trace("\t -- completed: addAndUseDisplays()")
	scene.endUndoRedoAccum()
}