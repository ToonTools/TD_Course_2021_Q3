// set the name of the text file
var userName 			= about.getUserName()
var myDesktopPath 		= "C:\\Users\\" + userName + "\\Desktop\\"
var fileName 			= "myTextFile.txt"
var fileCompletePath 	= myDesktopPath + fileName

// make text file
function textFile_write(){
	MessageLog.trace("textFile_make button pressed")
	
	var myTextFile = new File(fileCompletePath)
	
	// check if the text file already exists
	// if it does not exist then create it
	if(myTextFile.exists){
		MessageLog.trace("the file exists")
	}
	else{
		MessageLog.trace("the file does NOT exists")
	}
	// we will assume it already exists
	
	
	MessageLog.trace(fileCompletePath)
	
	
	
	
	
	// then ask user if they want to add to it
	
	// give user a dialog box in which they can input a message
	
	// write that message to the text file
	
	
}

// read text file
function textFile_read(){
	MessageLog.trace("textFile_read button pressed")
}
