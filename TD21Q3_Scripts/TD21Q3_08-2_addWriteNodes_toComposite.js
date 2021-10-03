/*
Input : any harmony scene with speciffically named composite nodes
Output: adds write nodes to upstream nodes of the speciffic composite nodes

How to use: 
    choose the comp node name you want to add write nodes to and choose a write node export Location
*/

function addWriteNodes_toComposite(){
	scene.beginUndoRedoAccum("---");
	MessageLog.trace("addWriteNodes_toComposite : Started")
	
	var write_prefix 		= "WritePNG_"
	var renderFolder_root 	= "C:/_dev/renderFolder/"
	var scene_name 			= scene.currentScene()
	
	
	// define compositing node we want to recognise
	var	choiceCompName 	= ["Animation_CMP" , "Prop_CMP"]
	
	for( c in choiceCompName ){
		var currentNodeView			= "Top"
		var selPath  				= currentNodeView + "/" + choiceCompName[c]
		var selName 				= node.getName(selPath)
		if( selName == ""){
			MessageLog.trace("could not find: " + selPath + " in this scene")
			return false
		}
		
		// for each composite, check all of its input nodes
		var selPath_numInput = node.numberOfInputPorts(selPath)
		MessageLog.trace("[" + selPath + "] has [" +selPath_numInput + "] inputs")
		for (var i = 0 ; i< selPath_numInput ; i++){
			var src_node 			= node.srcNode(selPath,i)
			var src_node_name		= src_node.substring(currentNodeView.length + 1 )
			var newWrite_name 		= write_prefix + src_node_name
			var posY_offset 		= 150 
			var newWrite_posX 		= node.coordX(src_node)
			var newWrite_posY 		= (node.coordY(src_node) ) + posY_offset
		
			// create new write node
			newWrite 				= node.add(currentNodeView,newWrite_name, "WRITE", newWrite_posX, newWrite_posY, 0); 	
			// connect the write to the source node
			node.link(src_node, 0, newWrite, 0) 	
			// sets attributes on the write node [colour space, image type, export folder, sequence name ]
			node.setTextAttr(newWrite,"colorSpace",0,"sRGB");
			node.setTextAttr(newWrite,"drawingType",0,"PNG4");
			var framesExportFolder		= renderFolder_root +  scene_name + "/" + src_node_name + "/"
			var framesExportName 		= scene_name + "_" + src_node_name + "_"
			var framesExportFullPath 	= framesExportFolder + "/" + framesExportName
			node.setTextAttr(newWrite,"drawingName" ,0,framesExportFullPath);
			
			MessageLog.trace(choiceCompName[c] + " --- " + newWrite_name +  " < " + framesExportFullPath + " >")
			
		}
		
	}
	
	MessageLog.trace("addWriteNodes_toComposite : Completed")
	scene.endUndoRedoAccum()
}











