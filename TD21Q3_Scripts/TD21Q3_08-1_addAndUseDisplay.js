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

    // create composite and link source nodes to it
    var newCompositeNode = node.add(nodeParent, compName, "COMPOSITE", comp_x, comp_y, comp_z)
    // set composite type to bitmap on creation
    node.setTextAttr(newCompositeNode, "compositeMode", 1, "compositeBitmap");
    linkNodes_toNode(userSelection, newCompositeNode)

    // create display, link composite to it
	var newDisplayName = firstNodeName + "_DIS"
	var newDisplayPath = firstNodeParent + "/" + newDisplayName

    // --------
    // --- TODO make number incrementing the same as how harmony does it by default
    // -------

    while( !checkName_alreadyExists(newDisplayPath)){
		newDisplayName += "_1"
		newDisplayPath += "_1"
	}

	var display_x = comp_x
	var display_y = comp_y + offset_y
	var display_z = 0

	var newDisplayNode = node.add(nodeParent, newDisplayName, "DISPLAY", display_x, display_y,display_z )

    // connect display to composite
    node.link(newCompositeNode, 0, newDisplayNode, 0)
    
    node.setAsGlobalDisplay(newDisplayNode)

	MessageLog.trace("\t -- completed: addAndUseDisplays()")
	scene.endUndoRedoAccum()
}

function linkNodes_toNode( src_Nodes, dst_Nodes){
    // input
    //      src_nodes = array of nodes
    //      dst_nodes = single node
    // node.link all src_nodes to the dst_node
    // this function will sort the nodes in horizontal L -> R order before connecting them

    var src_Nodes_sorted = src_Nodes.sort(function(a, b) {
		return parseFloat(node.coordX(a)) - parseFloat(node.coordX(b));
	});

    for( k in src_Nodes_sorted ){
		node.link(src_Nodes_sorted[k], 0 , dst_Nodes , 0, false, true)
	}
}

function checkName_alreadyExists(nodeFullPath){
    if( node.getName(nodeFullPath) !="") {
        return false
    }
    return true
} 