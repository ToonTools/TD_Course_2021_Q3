/*
Input : any number of nodes in a scene that the user selects
Output: adds a composite and then a display to that composite that is then set to global display

How to use: 
    within Harmony :  add addComposite() as a button. Select a node. Press the button, composite and diplay will be added

*/

function addAndUserDisplays(){
    scene.beginUndoRedoAccum("addAndUseDisplays()")
	MessageLog.trace("\t -- started: addAndUseDisplays()")


	MessageLog.trace("\t -- completed: addAndUseDisplays()")
	scene.endUndoRedoAccum()
}