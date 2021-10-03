# Initial settup
Setting the **System Variable** Location [storing scripts in a custom directory](https://docs.toonboom.com/help/harmony-20/essentials/scripting/store-script-custom-folder.html)

if no Harmony 20 bin environment variable has been set, you will have to replace replace `HarmonyPremium` with
`C:\Program Files (x86)\Toon Boom Animation\Toon Boom Harmony 20 Premium\win64\bin` in the followign examples.


* Notepad++ bin location  `C:\Program Files (x86)\Notepad++\notepad++.exe
`

[creating a dialog tutorial](https://docs.toonboom.com/help/harmony-20/scripting/script/Dialog.html])


## Harmony Standalone
Harmony<Edition> PathToScene/Scene.xstage -batch -compile PathToScript/Script.js

``` javascript
HarmonyPremium "C:\Users\chris\Documents\ToonBoom_Projects\TD Course 2021 Q3\TD21Q3_Demo_Local\Day_4\scripting_day_1\script_locations\script_locations.xstage" -batch -compile "C:\Github\ToonTools\TD_Course_2021_Q3\TD21Q3_Scripts\TD21Q3_04-2_numberOfNodes.js"
```


## Harmony Server
Harmony<Edition> -env EnvironmentName -job JobName -scene SceneName -user UserName -batch -compile PathToScript/Script.js

```javascript
HarmonyPremium -env Env_01 -job Pose_copier_test -scene PC_01 -user chrisc -batch -compile "C:\Github\ToonTools\TD_Course_2021_Q3\TD21Q3_Scripts\TD21Q3_04-2_numberOfNodes.js"
```


## image as tooltip

```html
<img alt="image tooltip" src="path to image file" >
```
```html
<img alt="C:\Github\ToonTools\TD_Course_2021_Q3\images\image tooltip.JPG" src="C:\Github\ToonTools\TD_Course_2021_Q3\images\image tooltip.JPG" >
```
(can be any web image)

## sorting 

Mozilla [array.prototype.sort](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) documentation
 
``` javascript
var sortedSelection = userSelection.sort(function(a, b) {
		return parseFloat(node.coordX(a)) - parseFloat(node.coordX(b));
	});
```
