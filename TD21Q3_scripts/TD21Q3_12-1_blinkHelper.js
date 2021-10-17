// Purpose is to speed up the setting of blink cylcles on eyelid elements with drawing substiutions
//( not intended for master controllers)

function setBlink(){
	MessageLog.trace("blink helper started")

	// assume correct node is selected
	var myBlink_node = selection.selectedNode(0)
	MessageLog.trace("Node = " + myBlink_node)
	
	var myBlink_drawingColumn = node.linkedColumn(myBlink_node, "DRAWING.ELEMENT")
	MessageLog.trace("Column = " + myBlink_drawingColumn)
MessageLog.trace("Column name  = " + column.getDisplayName(myBlink_drawingColumn))
	

	// test setting the value to a drawing in the blink cycle
	column.setEntry(myBlink_drawingColumn, 1, 1, "OFF");


	// what are the names of the different drawing substitutions
	var b_0 = "OFF"
	var b_1 = "Down_1" 
	var b_2 = "Down_2"
	var b_3 = "Down_3"
	

	/*
	This is the type of timing we want to implement
	|----------------------------|
	 -----011223322110-----------
	*/

	var blinkTiming = [b_0, b_1, b_1 , b_2 , b_2 , b_3 , b_3 , b_2, b_2 , b_1 , b_1, b_0 ]




	MessageLog.trace("blink helper finished")
}