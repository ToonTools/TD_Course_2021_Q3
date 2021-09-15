//this function will set your script packages folder to a speciffic "desiredFolder"

function setPackages(){

    MessageLog.trace(" --- " + setPackages.name + " started ---" )

    var preferenceToSet = "TB_EXTERNAL_SCRIPT_PACKAGES_FOLDER"
    var valueToSet      = "C:\Github\ToonTools\TD_Course_2021_Q3\TD21Q3_Scripts"	
	valueToSet.replace("\\","//")
    
    MessageLog.trace("about to set : '" + preferenceToSet + "' to '" + valueToSet + "'")

    // set the preference
	preferences.setString(preferenceToSet, valueToSet)

    // now check the preference has been set correctly
	preferenceStringValue = preferences.getString(preferenceToSet,"")

	if ( valueToSet == preferenceStringValue ){
		MessageLog.trace("SUCCESS: prefernces set correctly")
	}
	else{
		MessageLog.trace("ERROR: preference not set correctly")
	}

    MessageLog.trace(" --- " + setPackages.name + " completed ---" )
}