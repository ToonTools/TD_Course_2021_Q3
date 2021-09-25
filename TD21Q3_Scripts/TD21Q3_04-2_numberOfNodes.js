function numberOfNodes(){

	var number_of_nodes = node.numberOfSubNodes(node.root())
	var sceneName 		= scene.currentScene()
	var message 		= "number of subnodes in " + sceneName + " = " + number_of_nodes

	MessageLog.trace("\n\n" + message + "\n\n")
	//ControlCentre.printToConsole(message)
	//System.println(message)
} 

