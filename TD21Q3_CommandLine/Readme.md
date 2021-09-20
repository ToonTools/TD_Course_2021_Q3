# Using Command Prompt with Harmony

## set Harmony Binaries to Environment Variables
* [Adding Harmony Binaries to the $PATH Environment Variable](https://docs.toonboom.com/help/harmony-20/installation/installation/basic/mac/add-to-path-mac.html)
  
Once you have set the harmony binary files to the $PATH environment, you can access harmony binaries (executable files) from any directory on the machine, this makes it easier to use the command prompt as you now dont need to navigate the path `C:\Program Files (x86)\Toon Boom Animation\Toon Boom Harmony 20 Premium\win64\bin` to launch the processes

Launch command prompt by:
* selecting the windows icon on the bottom left of yoru desktop then typing "cmd" then the enter key.
  <br>or
* typing "cmd" into the directory path 
![](../images/directory%20path%20menu.png)

### Test the $PATH is set correctly 

`HarmonyPremium -help` and `ControlCenter -help` to get intitial help and check paths are working

---
## Commands available
Some of the services that could be useful to use from command line are: ( the `-help` flag will display all available flags for that command )

* `harmonyPremium` Harmony launcher
* `utransform` rasterise image [ *.png / *.jpg -> *.tvg ]
* `pix2vec` vectorise image [ *.tvg -> *.png / *.jpg ]
* `setdef` Set render environments and machines
* `ControlCenter` Control Center[[Control Center class reference](https://docs.toonboom.com/help/harmony-20/scripting/dbscript/classControlCentre.html)] [[Control Center scripting introduction](https://docs.toonboom.com/help/harmony-20/scripting/dbscript/index.html)]

---
## Examples
* pix2vc
.tvg -> .png -> .tvg
``` python
Pix2vec -infile "C:\Users\chris\Desktop\TEMP\triangleOut.png" -outfile "C:\Users\chris\Desktop\TEMP\triangleOut_vector.tvg"
```

* utransform 
.png -> .tvg and increasing the scale *2 ( will not change the total image resolution)
``` python
utransform -scale 2 -outformat PNG4 -outfile "C:\Users\chris\Desktop\TEMP\triangleOut.png"  "C:\Users\chris\Documents\ToonBoom_Projects\TD Course 2021 Q3\TD21Q3_Demo_Local\Day_4\scripting_day_1\script_locations\elements\triangle\triangle-1.tvg"
```
* control center
```python
Controlcenter -runScript <script_file> -user <user_name>

ControlCenter -runScript "C:\Users\chris\Documents\ToonBoom_Projects\TD Course 2021 Q2\Demo_Files\D3\ccScript_demo.js" -user usabatch
```

## Further Control Centre scripting

* message output
  
When using `controlcenter -runscript` the `MessageLog.trace` class will not print to console, you need to use `System.println` instead. You can use a function like this if you are creating a function that will be being run from Control Center as well as within a Harmony scene directly.
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