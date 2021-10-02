/*
input: speciffic scene
output: text information in the message log describing elements of the scene

*/

function write(message){
	MessageLog.trace(message)
	System.println(message)
}

function getSelectionInformation(){
	//MessageLog.trace("getSelectionInformation() has been clicked")
	
	var nodeTypesToShow = ["WRITE", "MultiLayerWrite"]
	
	var env_path 		= scene.currentEnvironmentPath() 
	var proj_path 		= scene.currentProjectPath() 
	var proj_temp_path 	= scene.tempProjectPathRemapped() 
	var scene_name		= scene.currentScene()
	var scene_start_f	= scene.getStartFrame() 
	var scene_stop_f	= scene.getStopFrame() 
	var scene_length 	= scene_stop_f - scene_start_f
	
	var outputMessage   = "Scene Information:"

	// give me information on the current scene
	//outputMessage += ("\nEnvironment  = " + env_path)
	//outputMessage += ("\nProject          = " + proj_path)
	//outputMessage += ("\nProject TEMP = " + proj_temp_path)
	outputMessage += scene.currentScene()
	outputMessage += ("\t" + scene_length +"f ["+ scene_start_f + " -> " + scene_stop_f + "]")
	
	write(outputMessage)
	
	// give me a list of all nodes selected
	var myNodeSelection_total = selection.numberOfNodesSelected()
	if (myNodeSelection_total <= 0){
		// if none are selected then list all nodes in the scene
		selection.selectAll()
	}
	
	var myNodeSelection 	= selection.selectedNodes()
	var writeCounter 		= 0
	

	for( n in myNodeSelection ){
		
		var thisNode		= myNodeSelection[n]
		var thisNode_type 	= node.type(thisNode)
		
		for ( t in nodeTypesToShow){
			var thisType = nodeTypesToShow[t]
			
			if( thisNode_type == thisType ){
				writeCounter += 1
				write( "Write Node ["+ writeCounter + "] " + myNodeSelection[n] + " [" + node.type(thisNode) +"]" )
				
				// we will now get the render path for this write node
				var thisNode_drawingPath = node.getTextAttr("Top/Write", frame.current(),"drawingName") 
				var thisNode_moviePath 	= node.getTextAttr("Top/Write", frame.current(),"moviePath") 

				write( "Drawing Path = " + thisNode_drawingPath )
				write( "Movie Path = " + thisNode_moviePath )

			}
		}
	}

	
	write("\n\n")
}

//getSelectionInformation()


// TODO output the Movie & image sequence export path for each write node.

