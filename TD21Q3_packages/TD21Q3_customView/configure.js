function configure()
{
  if(about.isStageEssentials() || about.isStageAdvanced() || about.isPaintMode())
    return;

  ScriptManager.addView( { id : "TDcustomView",
                           text : translator.tr("TD Custom View"),
                           action : "createView in ./configure.js"} );
}
function createView()
{
  var view = require("./view.js");
  view.initView();
}

exports.configure = configure;