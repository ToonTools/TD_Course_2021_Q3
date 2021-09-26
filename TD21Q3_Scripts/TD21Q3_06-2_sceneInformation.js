/*
input: speciffic scene
output: text information in the message log describing elements of the scene

*/

function write(message){
	MessageLog.trace(message)
}

function getSelectionInformation(){
	MessageLog.trace("getSelectionInformation() has been clicked")
	
	var env_path 		= scene.currentEnvironmentPath() 
	var proj_path 		= scene.currentProjectPath() 
	var proj_temp_path 	= scene.tempProjectPathRemapped() 
	var scene_start_f	= scene.getStartFrame() 
	var scene_stop_f	= scene.getStopFrame() 
	var scene_length 	= scene_stop_f - scene_start_f
	
	var outputMessage   = ""

	outputMessage += ("\nEnvironment  = " + env_path)
	outputMessage += ("\nProject          = " + proj_path)
	outputMessage += ("\nProject TEMP = " + proj_temp_path)
	outputMessage += ("\nTotal frames  = " + scene_length +" ["+ scene_start_f + " -> " + scene_stop_f + "]")
	
	write(outputMessage)
}

