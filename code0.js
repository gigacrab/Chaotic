gdjs.MenuCode = {};
gdjs.MenuCode.GDBackgroundObjects1= [];
gdjs.MenuCode.GDBackgroundObjects2= [];
gdjs.MenuCode.GDBackgroundObjects3= [];
gdjs.MenuCode.GDWitchObjects1= [];
gdjs.MenuCode.GDWitchObjects2= [];
gdjs.MenuCode.GDWitchObjects3= [];
gdjs.MenuCode.GDTitleObjects1= [];
gdjs.MenuCode.GDTitleObjects2= [];
gdjs.MenuCode.GDTitleObjects3= [];
gdjs.MenuCode.GDPlayButtonObjects1= [];
gdjs.MenuCode.GDPlayButtonObjects2= [];
gdjs.MenuCode.GDPlayButtonObjects3= [];
gdjs.MenuCode.GDStartButtonObjects1= [];
gdjs.MenuCode.GDStartButtonObjects2= [];
gdjs.MenuCode.GDStartButtonObjects3= [];
gdjs.MenuCode.GDCaptainObjects1= [];
gdjs.MenuCode.GDCaptainObjects2= [];
gdjs.MenuCode.GDCaptainObjects3= [];
gdjs.MenuCode.GDBigGuyObjects1= [];
gdjs.MenuCode.GDBigGuyObjects2= [];
gdjs.MenuCode.GDBigGuyObjects3= [];
gdjs.MenuCode.GDBackground2Objects1= [];
gdjs.MenuCode.GDBackground2Objects2= [];
gdjs.MenuCode.GDBackground2Objects3= [];
gdjs.MenuCode.GDPlayObjects1= [];
gdjs.MenuCode.GDPlayObjects2= [];
gdjs.MenuCode.GDPlayObjects3= [];
gdjs.MenuCode.GDStartButton2Objects1= [];
gdjs.MenuCode.GDStartButton2Objects2= [];
gdjs.MenuCode.GDStartButton2Objects3= [];
gdjs.MenuCode.GDManualButtonObjects1= [];
gdjs.MenuCode.GDManualButtonObjects2= [];
gdjs.MenuCode.GDManualButtonObjects3= [];
gdjs.MenuCode.GDbackbuttonObjects1= [];
gdjs.MenuCode.GDbackbuttonObjects2= [];
gdjs.MenuCode.GDbackbuttonObjects3= [];
gdjs.MenuCode.GDChaoticLogoObjects1= [];
gdjs.MenuCode.GDChaoticLogoObjects2= [];
gdjs.MenuCode.GDChaoticLogoObjects3= [];
gdjs.MenuCode.GDstarttextObjects1= [];
gdjs.MenuCode.GDstarttextObjects2= [];
gdjs.MenuCode.GDstarttextObjects3= [];
gdjs.MenuCode.GDmanualtextObjects1= [];
gdjs.MenuCode.GDmanualtextObjects2= [];
gdjs.MenuCode.GDmanualtextObjects3= [];
gdjs.MenuCode.GDmanualframeObjects1= [];
gdjs.MenuCode.GDmanualframeObjects2= [];
gdjs.MenuCode.GDmanualframeObjects3= [];
gdjs.MenuCode.GDMenuPopupBackgroundObjects1= [];
gdjs.MenuCode.GDMenuPopupBackgroundObjects2= [];
gdjs.MenuCode.GDMenuPopupBackgroundObjects3= [];
gdjs.MenuCode.GDmanualObjects1= [];
gdjs.MenuCode.GDmanualObjects2= [];
gdjs.MenuCode.GDmanualObjects3= [];
gdjs.MenuCode.GDmanual2Objects1= [];
gdjs.MenuCode.GDmanual2Objects2= [];
gdjs.MenuCode.GDmanual2Objects3= [];
gdjs.MenuCode.GDbacktextObjects1= [];
gdjs.MenuCode.GDbacktextObjects2= [];
gdjs.MenuCode.GDbacktextObjects3= [];

gdjs.MenuCode.conditionTrue_0 = {val:false};
gdjs.MenuCode.condition0IsTrue_0 = {val:false};
gdjs.MenuCode.condition1IsTrue_0 = {val:false};
gdjs.MenuCode.condition2IsTrue_0 = {val:false};
gdjs.MenuCode.condition3IsTrue_0 = {val:false};
gdjs.MenuCode.condition4IsTrue_0 = {val:false};
gdjs.MenuCode.condition5IsTrue_0 = {val:false};
gdjs.MenuCode.conditionTrue_1 = {val:false};
gdjs.MenuCode.condition0IsTrue_1 = {val:false};
gdjs.MenuCode.condition1IsTrue_1 = {val:false};
gdjs.MenuCode.condition2IsTrue_1 = {val:false};
gdjs.MenuCode.condition3IsTrue_1 = {val:false};
gdjs.MenuCode.condition4IsTrue_1 = {val:false};
gdjs.MenuCode.condition5IsTrue_1 = {val:false};


gdjs.MenuCode.eventsList0 = function(runtimeScene) {

};gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDStartButton2Objects1Objects = Hashtable.newFrom({"StartButton2": gdjs.MenuCode.GDStartButton2Objects1});
gdjs.MenuCode.eventsList1 = function(runtimeScene) {

{


gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
gdjs.MenuCode.condition2IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
{gdjs.MenuCode.conditionTrue_1 = gdjs.MenuCode.condition1IsTrue_0;
gdjs.MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(13204732);
}
}if ( gdjs.MenuCode.condition1IsTrue_0.val ) {
{
gdjs.MenuCode.condition2IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) == 0;
}}
}
if (gdjs.MenuCode.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}{gdjs.evtTools.sound.playSound(runtimeScene, "button2.wav", false, 100, 1);
}}

}


{


gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
gdjs.MenuCode.condition2IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
gdjs.MenuCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) == 1;
}if ( gdjs.MenuCode.condition1IsTrue_0.val ) {
{
{gdjs.MenuCode.conditionTrue_1 = gdjs.MenuCode.condition2IsTrue_0;
gdjs.MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(13205964);
}
}}
}
if (gdjs.MenuCode.condition2IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(7).setNumber(0);
}}

}


};gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDManualButtonObjects1Objects = Hashtable.newFrom({"ManualButton": gdjs.MenuCode.GDManualButtonObjects1});
gdjs.MenuCode.eventsList2 = function(runtimeScene) {

{


gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
gdjs.MenuCode.condition2IsTrue_0.val = false;
gdjs.MenuCode.condition3IsTrue_0.val = false;
gdjs.MenuCode.condition4IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
gdjs.MenuCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) == 0;
}if ( gdjs.MenuCode.condition1IsTrue_0.val ) {
{
gdjs.MenuCode.condition2IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getVariables().getFromIndex(1), false);
}if ( gdjs.MenuCode.condition2IsTrue_0.val ) {
{
{gdjs.MenuCode.conditionTrue_1 = gdjs.MenuCode.condition3IsTrue_0;
gdjs.MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(13207596);
}
}if ( gdjs.MenuCode.condition3IsTrue_0.val ) {
{
gdjs.MenuCode.condition4IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 0;
}}
}
}
}
if (gdjs.MenuCode.condition4IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("MenuPopupBackground"), gdjs.MenuCode.GDMenuPopupBackgroundObjects2);
gdjs.copyArray(runtimeScene.getObjects("backbutton"), gdjs.MenuCode.GDbackbuttonObjects2);
gdjs.copyArray(runtimeScene.getObjects("backtext"), gdjs.MenuCode.GDbacktextObjects2);
gdjs.copyArray(runtimeScene.getObjects("manual2"), gdjs.MenuCode.GDmanual2Objects2);
{gdjs.evtTools.sound.playSound(runtimeScene, "button2.wav", false, 100, 1);
}{for(var i = 0, len = gdjs.MenuCode.GDMenuPopupBackgroundObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDMenuPopupBackgroundObjects2[i].setPosition(44,4);
}
}{for(var i = 0, len = gdjs.MenuCode.GDbacktextObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDbacktextObjects2[i].setPosition(590,492);
}
}{for(var i = 0, len = gdjs.MenuCode.GDmanual2Objects2.length ;i < len;++i) {
    gdjs.MenuCode.GDmanual2Objects2[i].setPosition(258,141);
}
}{for(var i = 0, len = gdjs.MenuCode.GDbackbuttonObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDbackbuttonObjects2[i].setPosition(499,458);
}
}{runtimeScene.getVariables().getFromIndex(0).add(1);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getVariables().getFromIndex(1), true);
}}

}


{


gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
gdjs.MenuCode.condition2IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
gdjs.MenuCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) == 1;
}if ( gdjs.MenuCode.condition1IsTrue_0.val ) {
{
{gdjs.MenuCode.conditionTrue_1 = gdjs.MenuCode.condition2IsTrue_0;
gdjs.MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(13209820);
}
}}
}
if (gdjs.MenuCode.condition2IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(7).setNumber(0);
}}

}


{


gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
gdjs.MenuCode.condition2IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
gdjs.MenuCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 1;
}if ( gdjs.MenuCode.condition1IsTrue_0.val ) {
{
{gdjs.MenuCode.conditionTrue_1 = gdjs.MenuCode.condition2IsTrue_0;
gdjs.MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(13210492);
}
}}
}
if (gdjs.MenuCode.condition2IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).setNumber(0);
}}

}


};gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDbackbuttonObjects1Objects = Hashtable.newFrom({"backbutton": gdjs.MenuCode.GDbackbuttonObjects1});
gdjs.MenuCode.eventsList3 = function(runtimeScene) {

{


gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
{gdjs.MenuCode.conditionTrue_1 = gdjs.MenuCode.condition1IsTrue_0;
gdjs.MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(13211876);
}
}}
if (gdjs.MenuCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("MenuPopupBackground"), gdjs.MenuCode.GDMenuPopupBackgroundObjects2);
gdjs.copyArray(gdjs.MenuCode.GDbackbuttonObjects1, gdjs.MenuCode.GDbackbuttonObjects2);

gdjs.copyArray(runtimeScene.getObjects("backtext"), gdjs.MenuCode.GDbacktextObjects2);
gdjs.copyArray(runtimeScene.getObjects("manual2"), gdjs.MenuCode.GDmanual2Objects2);
{for(var i = 0, len = gdjs.MenuCode.GDMenuPopupBackgroundObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDMenuPopupBackgroundObjects2[i].setPosition(2000,2000);
}
}{for(var i = 0, len = gdjs.MenuCode.GDbacktextObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDbacktextObjects2[i].setPosition(2000,2000);
}
}{for(var i = 0, len = gdjs.MenuCode.GDmanual2Objects2.length ;i < len;++i) {
    gdjs.MenuCode.GDmanual2Objects2[i].setPosition(2000,2000);
}
}{for(var i = 0, len = gdjs.MenuCode.GDbackbuttonObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDbackbuttonObjects2[i].setPosition(2000,2000);
}
}{runtimeScene.getVariables().getFromIndex(0).add(1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "button2.wav", false, 100, 1);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getVariables().getFromIndex(1), false);
}}

}


{


gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
{gdjs.MenuCode.conditionTrue_1 = gdjs.MenuCode.condition1IsTrue_0;
gdjs.MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(13214116);
}
}}
if (gdjs.MenuCode.condition1IsTrue_0.val) {
}

}


};gdjs.MenuCode.eventsList4 = function(runtimeScene) {

{


gdjs.MenuCode.eventsList0(runtimeScene);
}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("StartButton2"), gdjs.MenuCode.GDStartButton2Objects1);

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDStartButton2Objects1Objects, runtimeScene, true, false);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.MenuCode.eventsList1(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("ManualButton"), gdjs.MenuCode.GDManualButtonObjects1);

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDManualButtonObjects1Objects, runtimeScene, true, false);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.MenuCode.eventsList2(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("backbutton"), gdjs.MenuCode.GDbackbuttonObjects1);

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDbackbuttonObjects1Objects, runtimeScene, true, false);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.MenuCode.eventsList3(runtimeScene);} //End of subevents
}

}


{



}


{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("BigGuy"), gdjs.MenuCode.GDBigGuyObjects1);
gdjs.copyArray(runtimeScene.getObjects("MenuPopupBackground"), gdjs.MenuCode.GDMenuPopupBackgroundObjects1);
gdjs.copyArray(runtimeScene.getObjects("backbutton"), gdjs.MenuCode.GDbackbuttonObjects1);
gdjs.copyArray(runtimeScene.getObjects("backtext"), gdjs.MenuCode.GDbacktextObjects1);
gdjs.copyArray(runtimeScene.getObjects("manual2"), gdjs.MenuCode.GDmanual2Objects1);
{for(var i = 0, len = gdjs.MenuCode.GDBigGuyObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDBigGuyObjects1[i].flipX(true);
}
}{gdjs.evtTools.window.setFullScreen(runtimeScene, false, true);
}{for(var i = 0, len = gdjs.MenuCode.GDMenuPopupBackgroundObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDMenuPopupBackgroundObjects1[i].setPosition(2000,2000);
}
}{for(var i = 0, len = gdjs.MenuCode.GDbacktextObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDbacktextObjects1[i].setPosition(2000,2000);
}
}{for(var i = 0, len = gdjs.MenuCode.GDmanual2Objects1.length ;i < len;++i) {
    gdjs.MenuCode.GDmanual2Objects1[i].setPosition(2000,2000);
}
}{for(var i = 0, len = gdjs.MenuCode.GDbackbuttonObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDbackbuttonObjects1[i].setPosition(2000,2000);
}
}}

}


};

gdjs.MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MenuCode.GDBackgroundObjects1.length = 0;
gdjs.MenuCode.GDBackgroundObjects2.length = 0;
gdjs.MenuCode.GDBackgroundObjects3.length = 0;
gdjs.MenuCode.GDWitchObjects1.length = 0;
gdjs.MenuCode.GDWitchObjects2.length = 0;
gdjs.MenuCode.GDWitchObjects3.length = 0;
gdjs.MenuCode.GDTitleObjects1.length = 0;
gdjs.MenuCode.GDTitleObjects2.length = 0;
gdjs.MenuCode.GDTitleObjects3.length = 0;
gdjs.MenuCode.GDPlayButtonObjects1.length = 0;
gdjs.MenuCode.GDPlayButtonObjects2.length = 0;
gdjs.MenuCode.GDPlayButtonObjects3.length = 0;
gdjs.MenuCode.GDStartButtonObjects1.length = 0;
gdjs.MenuCode.GDStartButtonObjects2.length = 0;
gdjs.MenuCode.GDStartButtonObjects3.length = 0;
gdjs.MenuCode.GDCaptainObjects1.length = 0;
gdjs.MenuCode.GDCaptainObjects2.length = 0;
gdjs.MenuCode.GDCaptainObjects3.length = 0;
gdjs.MenuCode.GDBigGuyObjects1.length = 0;
gdjs.MenuCode.GDBigGuyObjects2.length = 0;
gdjs.MenuCode.GDBigGuyObjects3.length = 0;
gdjs.MenuCode.GDBackground2Objects1.length = 0;
gdjs.MenuCode.GDBackground2Objects2.length = 0;
gdjs.MenuCode.GDBackground2Objects3.length = 0;
gdjs.MenuCode.GDPlayObjects1.length = 0;
gdjs.MenuCode.GDPlayObjects2.length = 0;
gdjs.MenuCode.GDPlayObjects3.length = 0;
gdjs.MenuCode.GDStartButton2Objects1.length = 0;
gdjs.MenuCode.GDStartButton2Objects2.length = 0;
gdjs.MenuCode.GDStartButton2Objects3.length = 0;
gdjs.MenuCode.GDManualButtonObjects1.length = 0;
gdjs.MenuCode.GDManualButtonObjects2.length = 0;
gdjs.MenuCode.GDManualButtonObjects3.length = 0;
gdjs.MenuCode.GDbackbuttonObjects1.length = 0;
gdjs.MenuCode.GDbackbuttonObjects2.length = 0;
gdjs.MenuCode.GDbackbuttonObjects3.length = 0;
gdjs.MenuCode.GDChaoticLogoObjects1.length = 0;
gdjs.MenuCode.GDChaoticLogoObjects2.length = 0;
gdjs.MenuCode.GDChaoticLogoObjects3.length = 0;
gdjs.MenuCode.GDstarttextObjects1.length = 0;
gdjs.MenuCode.GDstarttextObjects2.length = 0;
gdjs.MenuCode.GDstarttextObjects3.length = 0;
gdjs.MenuCode.GDmanualtextObjects1.length = 0;
gdjs.MenuCode.GDmanualtextObjects2.length = 0;
gdjs.MenuCode.GDmanualtextObjects3.length = 0;
gdjs.MenuCode.GDmanualframeObjects1.length = 0;
gdjs.MenuCode.GDmanualframeObjects2.length = 0;
gdjs.MenuCode.GDmanualframeObjects3.length = 0;
gdjs.MenuCode.GDMenuPopupBackgroundObjects1.length = 0;
gdjs.MenuCode.GDMenuPopupBackgroundObjects2.length = 0;
gdjs.MenuCode.GDMenuPopupBackgroundObjects3.length = 0;
gdjs.MenuCode.GDmanualObjects1.length = 0;
gdjs.MenuCode.GDmanualObjects2.length = 0;
gdjs.MenuCode.GDmanualObjects3.length = 0;
gdjs.MenuCode.GDmanual2Objects1.length = 0;
gdjs.MenuCode.GDmanual2Objects2.length = 0;
gdjs.MenuCode.GDmanual2Objects3.length = 0;
gdjs.MenuCode.GDbacktextObjects1.length = 0;
gdjs.MenuCode.GDbacktextObjects2.length = 0;
gdjs.MenuCode.GDbacktextObjects3.length = 0;

gdjs.MenuCode.eventsList4(runtimeScene);
return;

}

gdjs['MenuCode'] = gdjs.MenuCode;
