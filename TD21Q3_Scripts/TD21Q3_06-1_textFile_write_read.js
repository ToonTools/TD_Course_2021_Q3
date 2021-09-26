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
	if(!myTextFile.exists){
		MessageLog.trace("file does not exist so I will make it")
		myTextFile.open(FileAccess.WriteOnly)
		myTextFile.close()
	}
	// we will assume it already exists
	var message = "my test message"
	// then ask user if they want to add to it
	
	// give user a dialog box in which they can input a message
	
	// write that message to the text file
	myTextFile.open(FileAccess.Append)
	myTextFile.writeLine(message)
	myTextFile.close()
	MessageLog.trace("'" + message +"' was written to the text file  ")
	
}

// read text file
function textFile_read(){
	MessageLog.trace("textFile_read button pressed")
	
	var myTextFile = new File(fileCompletePath)
	if(!myTextFile.exists){
		MessageBox.info("File does not exists :" + myTextFile )
		return
	}
	
	myTextFile.open(FileAccess.ReadOnly)
	var content = myTextFile.read()
	var message = fileCompletePath + "content = \n " + content +" \n"
	
	MessageLog.trace(message)
	
}
