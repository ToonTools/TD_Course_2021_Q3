/*
input: target a single node in a harmony scene
output: text information of all of that nodes attributes and their values

TB getAttrList documentaiton : https://docs.toonboom.com/help/harmony-20/scripting/script/classnode.html#ad06cab49b313f4fafee05446cb04ef0a

*/

function getNodeAttributes(){
	//MessageLog.trace("getNodeAttributes started")
	var fNow				= frame.current()
	
	if ( selection.numberOfNodesSelected() > 1 ){
		MessageLog.trace("you have too many nodes selected, just select one and try again")
		return
	}
	else if (selection.numberOfNodesSelected() <= 0 ){
		MessageLog.trace("you have no nodes selected, just select one and try again")
		return
	}
	else{
		// check that only one node has been selected
		var myNode = selection.selectedNode(0)

		//TB get sub attributes documentaiton : https://docs.toonboom.com/help/harmony-20/scripting/script/classnode.html#ad06cab49b313f4fafee05446cb04ef0a
		function getAttributes(attribute, attributeList)
		{
		  attributeList.push(attribute);
		  var subAttrList = attribute.getSubAttributes();
		  for (var j = 0; j < subAttrList.length; ++j)
		  {
			if(typeof(subAttrList[j].keyword()) === 'undefined' || subAttrList[j].keyword().length == 0)
			  continue;
			getAttributes(subAttrList[j], attributeList);
		  }
		}
		function getFullAttributeList(nodePath)
		{
		  var attributeList = [];
		  var topAttributeList = node.getAttrList(nodePath, 1);
		  for (var i = 0; i < topAttributeList.length; ++i)
		  {
			getAttributes(topAttributeList[i], attributeList);
		  }
		  return attributeList;
		}
		function addPadding(stringToPad, paddingDepth , paddingCharacter){
			
			var paddedString = stringToPad.toString()

			// if the input string is already longer or equal to the padding length then just return it 
			if (paddedString.length >= paddingDepth) {
				return paddedString
			}
			
			// add the padding to the beginning of the string 
			for(var i=paddedString.length;i<paddingDepth;i++){
				paddedString = paddingCharacter + paddedString
			}

			return paddedString
		}
		var myNode_attributeList = getFullAttributeList(myNode)

		MessageLog.trace("[" + myNode + "] has " + myNode_attributeList.length + " attributes & sub attributes"  )

		for( a in myNode_attributeList){
			var sel_attribute 			= myNode_attributeList[a]
			var sel_attribute_typeName 	= sel_attribute.typeName()
			var sel_attribute_value 	= sel_attribute_typeName

			if(sel_attribute.hasSubAttributes()){
				sel_attribute_value = "\\"
			}
			else{
				switch (sel_attribute.typeName()){
					case "BOOL":
						sel_attribute_value = sel_attribute.boolValue()
					case "GENERIC_ENUM":
						sel_attribute_value = sel_attribute.doubleValue(fNow)
					case "INT":
						sel_attribute_value = sel_attribute.intValueAt(fNow)
					case "DOUBLE":
						sel_attribute_value = sel_attribute.doubleValueAt(fNow)
					case "DOUBLEVB":
						sel_attribute_value = sel_attribute.doubleValueAt(fNow)
					case "STRING":
						sel_attribute_value = sel_attribute.textValueAt(fNow)
					case "QUATERNION_PATH":
						sel_attribute_value = sel_attribute. pos3dValueAt(fNow) // I dont think this is correct way to grab quarternion as they are 4D
					case "ALIAS":
						sel_attribute_value = sel_attribute.textValueAt(fNow)
					case "PATH_3D":
						sel_attribute_value = sel_attribute.pos3dValueAt(fNow)
					case "TIMING":
						sel_attribute_value = sel_attribute.textValueAt(fNow)
				}
			}

			var attrCount 			= parseInt(a) +1		
			var attrCountPadded 	= addPadding( attrCount , 2 , 0 )
			var namePadding 		= addPadding(sel_attribute.name() , 25 , "-")

			MessageLog.trace("-" +attrCountPadded + namePadding + "\t" + sel_attribute_value + "\t" + "<" +sel_attribute_typeName+">")
		}
	}
}
