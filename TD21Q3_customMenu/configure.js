// TD21Q3 demonstration of custom menu content

function configure(){
    if ( about.isPaintMode()){
        return;
    }
    // create menu items

    // access a script that is lives in this configuration *FILE*
    ScriptManager.addMenuItem( {targetMenuId : "TD_Custom",
                                id          : "customAction",
                                text        : "my custom action",
                                action      : "myCustomFunction in ./configure.js"
                            })

    // access a script that lives in the *SCRIPT* folder
    ScriptManager.addMenuItem( {targetMenuId : "TD_Custom",
                                id          : "numberOfNodes",
                                text        : "number of nodes in scene",
                                action      : "numberOfNodes in TD21Q3_04-2_numberOfNodes.js"
                            })

    // access a script that is lives in this *PACKAGE* folder
    ScriptManager.addMenuItem( {targetMenuId : "TD_Custom",
                                id          : "hello",
                                text        : "hello",
                                action      : "hello in helloWorld.js"
                            })
}
function init(){
    MessageLog.trace("initialising TD21Q3_customMenu/configure.js...")
}

function myCustomFunction(){
    MessageBox.information("This is my custom action!")

}

exports.configure   = configure;
exports.init        = init;