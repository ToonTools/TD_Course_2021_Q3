function configure()
{
  if(about.isStageEssentials() || about.isStageAdvanced() || about.isPaintMode())
    return;

    addShortcut()
}

function addShortcut(){
    msg_funcName		= 	"TD21Q3_addShortcut"
    msg_start 		= 	" --- Started : " + msg_funcName + "  --- " 
    msg_end  			= 	" --- Finished : " + msg_funcName + "  --- " 
  
    MessageLog.trace(msg_start)
  
    //MessageLog.trace( JSON.stringify(ScriptManager,null,2) )
    
    ScriptManager.addShortcut( { 	text     		: "get node attributes",
                    id       		: "getNodeAttributes",
                    longDesc 		: "gets attribute information for selected node",
                    action   		: "numberOfNodes in TD21Q3_04-2_numberOfNodes.js",
                    order    		: "256",
                    categoryId   	: "TD_Custom", 
                    categoryText 	: "TD_Custom",
                    value 			: "#" 
                  })
    
    MessageLog.trace(msg_end)

}

exports.configure = configure;