## variables
* naming prefix for blink element
* drawing element names from blink
* drawing timings for blink
* default min/max threshold


## process
* select node
* check if node is named as an eye drawing [ see dictionary ]
* check if node has correctly numbered drawings to do blink cycle [ see dictionary ]
* user defines threshold ( min frame spacing, max frame spacing between blinks )
* tool uses random number generator to add blink cycles [see dictionary] at those spacings




## problems
How to get drawinng names from a node?

// get column from node
* node.linkedColumn (String node, String attrName) // use "drawings" as the name probably
// get drawings from column
* column.getDrawingName(String columnName, int frame)