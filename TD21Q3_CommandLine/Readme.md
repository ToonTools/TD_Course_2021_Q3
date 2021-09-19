## command prompt for Harmony

`HarmonyPremium -help` and `ControlCenter -help` to get intitial help and check paths are working

## Using Command Prompt
You dont HAVE to set up your environment variables before doing this, but its easiest if you set your Harmony Path to an environment variable. This way you can launch command prompt from any context and the Harmony processes will be available.

Launch command prompt by:
* selecting the windows icon on the bottom left of yoru desktop then typing "cmd" then the enter key.
  <br>or
* typing "cmd" into the directory path 
![](../images/directory%20path%20menu.png)


## Commands available
Some of the services that could be useful to use from command line are: ( the `-help` flag will display all available flags for that command )

* `harmonyPremium` Harmony launcher
* `utransform` rasterise image
<br> e.g.
convert a .tvg file to a .png file
``` python
utransform -outformat PNG4 -outfile "C:\Users\chris\Desktop\TEMP\sketchOut.png"  "C:\Users\chris\Desktop\TEMP\HAR_004_sketch_sketch-1.tvg"
```
* `pix2vec` vectorise image
* `setdef` Set render environments and machines
* `ControlCenter` Control Center[[Control Center class reference](https://docs.toonboom.com/help/harmony-20/scripting/dbscript/classControlCentre.html)] [[Control Center scripting introduction](https://docs.toonboom.com/help/harmony-20/scripting/dbscript/index.html)]
* `ControlCenter -help` 
```python
Controlcenter -runScript <script_file> -user <user_name>

ControlCenter -runScript "C:\Users\chris\Documents\ToonBoom_Projects\TD Course 2021 Q2\Demo_Files\D3\ccScript_demo.js" -user usabatch
```



## You can use a helper function like this to print the output message to your context
This will not work on ControlCenter -runStageScript commands, you will either need to figure out what the message output fommand for that is, or write the inforamtion to a text log file somwehere. See [[TD_6-2_makeAndRead_textFile.js](https://github.com/ToonTools/TD_Course_2021_Q2/blob/main/TD_6-2_makeAndRead_textFile.js)] for help on that.
``` javascript
function consoleWrite(message){
	MessageLog.trace(message)
	System.println(message)
}
```

### Harmony Standalone execute on 1 file:
``` javascript
HarmonyPremium -compile <script full path> <.xstage file full path>
``` 
```javascript
HarmonyPremium -compile "SCRIPT_DIRECTORY\SCRIPT_NAME" "FILE_DIRECTORY\FILE_XSTAGE_NAME"
```  

### Control Center execute on 1 file:
```javascript
HarmonyPremium -compile <script full path> -env <environment name> -job <job name> -scene <scene name>
``` 
```javascript
HarmonyPremium -compile "SCRIPT_DIRECTORY\SCRIPT_NAME" -env TCH_TheCatch -job TCH_101_Pilot -scene 010_001A
```

### Control Center execute on all scenes in a job
```
Controlcenter -runStageScript <qsa_script_name> -env <environment name> -job <job name>
```
```javascript
Controlcenter -runStageScript "SCRIPT_DIRECTORY\SCRIPT_NAME" -env TCH_TheCatch -job TCH_101_Pilot
```
---