// TD21Q3 demonstration of custom menu content

function configure(){
    if ( about.isPaintMode()){
        return;
    }
    // create menu item
    ScriptManager.addMenuItem( {targetMenuId : "TD_Custom",
                                id          : "customAction",
                                text        : "my custom action",
                                action      : "myCustomFunction in ./configure.js"
                            })
}

function myCustomFunction(){
    MessageBox.information("This is my custom action!")

}



exports.configure   = configure;
//exports.init        = init;