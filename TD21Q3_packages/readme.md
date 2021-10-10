# Toon Boom Harmony Packages folder

Packages are before a harmony scene is opened and can be used to create menus, windows, tools, set preferences.

The default location for packages is:
```
C:\Program Files (x86)\Toon Boom Animation\Toon Boom Harmony 20 Premium\Plugins\ScriptingInterfaces\resources\packages
```

## Custom Package folder

You can set a speciffic location to be looked at as a package folder ( by harmony on scene launch ) by specifying it as a prefererence in the AppData...**Harmony Premium-pref.xml** for the Harmony version being run
```
C:\Users\chris\AppData\Roaming\Toon Boom Animation\Toon Boom Harmony Premium\full-2000-pref\Harmony Premium-pref.xml
```
and modifying or creating a path as the value for: 
``` javascript
<string value="PACKAGE_PATH" id="TB_EXTERNAL_SCRIPT_PACKAGES_FOLDER"/>
```
Linked is a script which can be run to set this prefrence [setPackagesLocation.js](../TD21Q3_Scripts/TD21Q3_09-0_setPackagesLocation.js)

# Custom Menu

## Creating Menu in the Menus.xml
You can add a menu item here : `C:\Program Files (x86)\Toon Boom Animation\Toon Boom Harmony 20 Premium\resources\menus.xml`

A package item such as [customMenu/configure](TD21Q3_customMenu/configure.js) can be configured to add content to that menu

## Creating Menu using script
``` javascript
function addMenu(){
	var myMenuBar 	= QApplication.activeWindow().menuBar()
	var myMenu 		= myMenuBar.addMenu("my shiny new menu")
	MessageLog.trace("we should now have a new menu")
}
```
