// Purpose is to speed up the setting of blink cylcles on eyelid elements with drawing substiutions
//( not intended for master controllers)


function setBlink(myBlink_node, blinkStartFrame){
	
	try{
		MessageLog.trace("blink helper started looking at Node : " + myBlink_node + " will start blink at frame: " + blinkStartFrame )
		// assume correct node is selected
		
		var myBlink_drawingColumn = node.linkedColumn(myBlink_node, "DRAWING.ELEMENT")
		MessageLog.trace("Column = " + myBlink_drawingColumn)
		MessageLog.trace("Column name  = " + column.getDisplayName(myBlink_drawingColumn))

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

		// for each element in the blinkTiming array, set the drawing on the element column
		// start at blinkStartFrame
		var blink_f = blinkStartFrame
		for( t in blinkTiming ){

			var myBlinkDrawing = blinkTiming[t]
			column.setEntry(myBlink_drawingColumn, 1 , blink_f , myBlinkDrawing);
			blink_f += 1
		}

		MessageLog.trace("blink helper finished")
	}catch(error){
		MessageLog.trace("ERROR: setBlink() : " + error)
	}
}

function findEyelidNode(characterRig_Group){
	// characterRig_Group is the top level of the group containing an entire characterRig_Group
	// this character will have an eyelid in it which we will find
	try{
	
		MessageLog.trace("I am going to find the eyelid node inside of :" + characterRig_Group )
		
		// our answer is: /PNK_Head/PNK_Eye_Clone/PNK_Eyelid_Upper
		var myGroup_parentNode = node.parentNode(characterRig_Group)
		var myGroupName_minusPath = characterRig_Group.substring(myGroup_parentNode.length + 1  )//Top/PNK_Punk -> PNK_Punk
		
		// we are assuming character prefixes are ALWAYS 3 characters long
		var myPrefix = myGroupName_minusPath.substring(0,3)

		// go inside head :  keep PNK prefix, but after that add "_Head"
		var myHead 			= myPrefix + "_Head"
		var myHead_path 	= characterRig_Group +"/" + myHead
		var myHead_subNodes = node.subNodes(myHead_path)
		
		// go inside any eye : keep PNK prefix, add _Eye_ look for anything that matches ( we expect 2 hits )
		var myEye_start = myPrefix + "_Eye"
		
		// go through subnodes, if they are a GROUP & if they start with myEye_start then assume they are containing eyelids
		MessageLog.trace("looking throught the subnodes ")
		for( var n = 0 ; n < myHead_subNodes.length ; n++){
			var mySubNode = myHead_subNodes[n]
			if (node.type(mySubNode) == "GROUP"){
				if( mySubNode.indexOf(myEye_start)> 0 ){
					// go inside the eyelid : keep PNK prexif add _Eyelid_Upper
					var myExpectedEyelidNode = mySubNode + "/" + myPrefix + "_Eyelid_Upper"
					MessageLog.trace("myExpectedEyelidNode = " + myExpectedEyelidNode )
				}	
			}
		}
	
		
		
		var blinkNode 			= selection.selectedNode(0)
		var blinkStartFrame 	= 8
		setBlink(blinkNode, blinkStartFrame)
		
	}catch(error){
		MessageLog.trace("ERROR: findEyelidNode() : " + error)
	}
	
}

function findRigGroup(){
	// find the rig group of the current selection
	try{
	
		var rigGroup = "Top/PNK_Punk"
		
		
		findEyelidNode(rigGroup)
	
	
	}catch(error){
		MessageLog.trace("ERROR: findRigGroup() : " + error)
	}
	
}
