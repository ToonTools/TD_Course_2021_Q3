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
	
	// check if the file exists
	var myTextFile = new File(fileCompletePath)
	if(!myTextFile.exists){
		MessageBox.info("File does not exists :" + myTextFile )
		return
	}
	
	// open the file and read its content
	myTextFile.open(FileAccess.ReadOnly)
	var content = myTextFile.read()
	
	// create a dialog box that will display our information
	var fileRead_dialog 	= new Dialog()
	fileRead_dialog.title 	= fileCompletePath
	
	// add the content of the text file to a label
	fileRead_content 		= new Label
	fileRead_content.text 	= content
	
	// add that label to the dialog box
	fileRead_dialog.add(fileRead_content)
	fileRead_dialog.exec()
	
}
