var uiUtilLib    = require(specialFolders.resource+"/scripts/utilities/ui/TB_UiUtil.js");

function initView()
{
  try
  {
    var scriptedView = ScriptManager.getView("TDcustomView");
    scriptedView.minimumWidth = UiLoader.dpiScale(375);
    scriptedView.setPreferredLayoutSize(UiLoader.dpiScale(320), UiLoader.dpiScale(380));
    
    var ui = ScriptManager.loadViewUI(scriptedView, "./TDcustomView.ui");
   
    var button_1_function = function(){
      MessageBox.information("This is the action for toolButton_1 !");

    }
    var button_2_function = function(){
        MessageBox.information("This is the action for toolButton_2 !");
      }


    ui.toolButton_1.clicked.connect(this, button_1_function);
    ui.toolButton_2.clicked.connect(this, button_2_function);

    ui.show();
  }
  catch(e)
  {
    MessageLog.trace("Error: " + e);
    print("Error: " + e);
  }
}

exports.initView = initView;