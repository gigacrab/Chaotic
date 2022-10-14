gdjs.Win_32ScreenCode = {};
gdjs.Win_32ScreenCode.GDSummerBackgroundObjects1= [];
gdjs.Win_32ScreenCode.GDSummerBackgroundObjects2= [];
gdjs.Win_32ScreenCode.GDSummerBackgroundObjects3= [];
gdjs.Win_32ScreenCode.GDWinnerDisplayObjects1= [];
gdjs.Win_32ScreenCode.GDWinnerDisplayObjects2= [];
gdjs.Win_32ScreenCode.GDWinnerDisplayObjects3= [];
gdjs.Win_32ScreenCode.GDButtonHomeScreenObjects1= [];
gdjs.Win_32ScreenCode.GDButtonHomeScreenObjects2= [];
gdjs.Win_32ScreenCode.GDButtonHomeScreenObjects3= [];
gdjs.Win_32ScreenCode.GDCaptainObjects1= [];
gdjs.Win_32ScreenCode.GDCaptainObjects2= [];
gdjs.Win_32ScreenCode.GDCaptainObjects3= [];
gdjs.Win_32ScreenCode.GDBigGuyObjects1= [];
gdjs.Win_32ScreenCode.GDBigGuyObjects2= [];
gdjs.Win_32ScreenCode.GDBigGuyObjects3= [];
gdjs.Win_32ScreenCode.GDMusicButtonObjects1= [];
gdjs.Win_32ScreenCode.GDMusicButtonObjects2= [];
gdjs.Win_32ScreenCode.GDMusicButtonObjects3= [];

gdjs.Win_32ScreenCode.conditionTrue_0 = {val:false};
gdjs.Win_32ScreenCode.condition0IsTrue_0 = {val:false};
gdjs.Win_32ScreenCode.condition1IsTrue_0 = {val:false};
gdjs.Win_32ScreenCode.condition2IsTrue_0 = {val:false};
gdjs.Win_32ScreenCode.conditionTrue_1 = {val:false};
gdjs.Win_32ScreenCode.condition0IsTrue_1 = {val:false};
gdjs.Win_32ScreenCode.condition1IsTrue_1 = {val:false};
gdjs.Win_32ScreenCode.condition2IsTrue_1 = {val:false};


gdjs.Win_32ScreenCode.mapOfGDgdjs_46Win_9532ScreenCode_46GDButtonHomeScreenObjects1Objects = Hashtable.newFrom({"ButtonHomeScreen": gdjs.Win_32ScreenCode.GDButtonHomeScreenObjects1});
gdjs.Win_32ScreenCode.eventsList0 = function(runtimeScene) {

{


gdjs.Win_32ScreenCode.condition0IsTrue_0.val = false;
{
gdjs.Win_32ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.Win_32ScreenCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", false);
}{gdjs.evtTools.sound.playSound(runtimeScene, "button2.wav", false, 100, 1);
}}

}


};gdjs.Win_32ScreenCode.mapOfGDgdjs_46Win_9532ScreenCode_46GDMusicButtonObjects1Objects = Hashtable.newFrom({"MusicButton": gdjs.Win_32ScreenCode.GDMusicButtonObjects1});
gdjs.Win_32ScreenCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.Win_32ScreenCode.GDMusicButtonObjects1, gdjs.Win_32ScreenCode.GDMusicButtonObjects2);


gdjs.Win_32ScreenCode.condition0IsTrue_0.val = false;
gdjs.Win_32ScreenCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Win_32ScreenCode.GDMusicButtonObjects2.length;i<l;++i) {
    if ( gdjs.Win_32ScreenCode.GDMusicButtonObjects2[i].isCurrentAnimationName("on") ) {
        gdjs.Win_32ScreenCode.condition0IsTrue_0.val = true;
        gdjs.Win_32ScreenCode.GDMusicButtonObjects2[k] = gdjs.Win_32ScreenCode.GDMusicButtonObjects2[i];
        ++k;
    }
}
gdjs.Win_32ScreenCode.GDMusicButtonObjects2.length = k;}if ( gdjs.Win_32ScreenCode.condition0IsTrue_0.val ) {
{
gdjs.Win_32ScreenCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 1;
}}
if (gdjs.Win_32ScreenCode.condition1IsTrue_0.val) {
/* Reuse gdjs.Win_32ScreenCode.GDMusicButtonObjects2 */
{for(var i = 0, len = gdjs.Win_32ScreenCode.GDMusicButtonObjects2.length ;i < len;++i) {
    gdjs.Win_32ScreenCode.GDMusicButtonObjects2[i].setAnimationName("off");
}
}{gdjs.evtTools.sound.pauseMusicOnChannel(runtimeScene, 1);
}{runtimeScene.getVariables().getFromIndex(0).setNumber(0);
}}

}


{

/* Reuse gdjs.Win_32ScreenCode.GDMusicButtonObjects1 */

gdjs.Win_32ScreenCode.condition0IsTrue_0.val = false;
gdjs.Win_32ScreenCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Win_32ScreenCode.GDMusicButtonObjects1.length;i<l;++i) {
    if ( gdjs.Win_32ScreenCode.GDMusicButtonObjects1[i].isCurrentAnimationName("off") ) {
        gdjs.Win_32ScreenCode.condition0IsTrue_0.val = true;
        gdjs.Win_32ScreenCode.GDMusicButtonObjects1[k] = gdjs.Win_32ScreenCode.GDMusicButtonObjects1[i];
        ++k;
    }
}
gdjs.Win_32ScreenCode.GDMusicButtonObjects1.length = k;}if ( gdjs.Win_32ScreenCode.condition0IsTrue_0.val ) {
{
gdjs.Win_32ScreenCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 1;
}}
if (gdjs.Win_32ScreenCode.condition1IsTrue_0.val) {
/* Reuse gdjs.Win_32ScreenCode.GDMusicButtonObjects1 */
{for(var i = 0, len = gdjs.Win_32ScreenCode.GDMusicButtonObjects1.length ;i < len;++i) {
    gdjs.Win_32ScreenCode.GDMusicButtonObjects1[i].setAnimationName("on");
}
}{gdjs.evtTools.sound.continueMusicOnChannel(runtimeScene, 1);
}{runtimeScene.getVariables().getFromIndex(0).setNumber(0);
}}

}


};gdjs.Win_32ScreenCode.eventsList2 = function(runtimeScene) {

{


gdjs.Win_32ScreenCode.condition0IsTrue_0.val = false;
gdjs.Win_32ScreenCode.condition1IsTrue_0.val = false;
{
gdjs.Win_32ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.Win_32ScreenCode.condition0IsTrue_0.val ) {
{
{gdjs.Win_32ScreenCode.conditionTrue_1 = gdjs.Win_32ScreenCode.condition1IsTrue_0;
gdjs.Win_32ScreenCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(13466188);
}
}}
if (gdjs.Win_32ScreenCode.condition1IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).add(1);
}
{ //Subevents
gdjs.Win_32ScreenCode.eventsList1(runtimeScene);} //End of subevents
}

}


};gdjs.Win_32ScreenCode.eventsList3 = function(runtimeScene) {

{



}


{


{
gdjs.copyArray(runtimeScene.getObjects("WinnerDisplay"), gdjs.Win_32ScreenCode.GDWinnerDisplayObjects1);
{for(var i = 0, len = gdjs.Win_32ScreenCode.GDWinnerDisplayObjects1.length ;i < len;++i) {
    gdjs.Win_32ScreenCode.GDWinnerDisplayObjects1[i].setString("The winner is Player " + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(6)));
}
}{gdjs.evtTools.window.setFullScreen(runtimeScene, false, true);
}}

}


{


gdjs.Win_32ScreenCode.condition0IsTrue_0.val = false;
{
gdjs.Win_32ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Win_32ScreenCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("BigGuy"), gdjs.Win_32ScreenCode.GDBigGuyObjects1);
{for(var i = 0, len = gdjs.Win_32ScreenCode.GDBigGuyObjects1.length ;i < len;++i) {
    gdjs.Win_32ScreenCode.GDBigGuyObjects1[i].flipX(true);
}
}{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "Cloud Victory Theme.mp3", 1, false, 20, 1);
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("ButtonHomeScreen"), gdjs.Win_32ScreenCode.GDButtonHomeScreenObjects1);

gdjs.Win_32ScreenCode.condition0IsTrue_0.val = false;
{
gdjs.Win_32ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Win_32ScreenCode.mapOfGDgdjs_46Win_9532ScreenCode_46GDButtonHomeScreenObjects1Objects, runtimeScene, true, false);
}if (gdjs.Win_32ScreenCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Win_32ScreenCode.eventsList0(runtimeScene);} //End of subevents
}

}


{



}


{


gdjs.Win_32ScreenCode.condition0IsTrue_0.val = false;
{
gdjs.Win_32ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)) == 1;
}if (gdjs.Win_32ScreenCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("BigGuy"), gdjs.Win_32ScreenCode.GDBigGuyObjects1);
gdjs.copyArray(runtimeScene.getObjects("Captain"), gdjs.Win_32ScreenCode.GDCaptainObjects1);
{for(var i = 0, len = gdjs.Win_32ScreenCode.GDBigGuyObjects1.length ;i < len;++i) {
    gdjs.Win_32ScreenCode.GDBigGuyObjects1[i].setAnimationName("Idle");
}
}{for(var i = 0, len = gdjs.Win_32ScreenCode.GDCaptainObjects1.length ;i < len;++i) {
    gdjs.Win_32ScreenCode.GDCaptainObjects1[i].setAnimationName("Dead Ground");
}
}}

}


{


gdjs.Win_32ScreenCode.condition0IsTrue_0.val = false;
{
gdjs.Win_32ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)) == 2;
}if (gdjs.Win_32ScreenCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("BigGuy"), gdjs.Win_32ScreenCode.GDBigGuyObjects1);
gdjs.copyArray(runtimeScene.getObjects("Captain"), gdjs.Win_32ScreenCode.GDCaptainObjects1);
{for(var i = 0, len = gdjs.Win_32ScreenCode.GDCaptainObjects1.length ;i < len;++i) {
    gdjs.Win_32ScreenCode.GDCaptainObjects1[i].setAnimationName("Idle");
}
}{for(var i = 0, len = gdjs.Win_32ScreenCode.GDBigGuyObjects1.length ;i < len;++i) {
    gdjs.Win_32ScreenCode.GDBigGuyObjects1[i].setAnimationName("Dead Ground");
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("MusicButton"), gdjs.Win_32ScreenCode.GDMusicButtonObjects1);

gdjs.Win_32ScreenCode.condition0IsTrue_0.val = false;
{
gdjs.Win_32ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Win_32ScreenCode.mapOfGDgdjs_46Win_9532ScreenCode_46GDMusicButtonObjects1Objects, runtimeScene, true, false);
}if (gdjs.Win_32ScreenCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Win_32ScreenCode.eventsList2(runtimeScene);} //End of subevents
}

}


};

gdjs.Win_32ScreenCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Win_32ScreenCode.GDSummerBackgroundObjects1.length = 0;
gdjs.Win_32ScreenCode.GDSummerBackgroundObjects2.length = 0;
gdjs.Win_32ScreenCode.GDSummerBackgroundObjects3.length = 0;
gdjs.Win_32ScreenCode.GDWinnerDisplayObjects1.length = 0;
gdjs.Win_32ScreenCode.GDWinnerDisplayObjects2.length = 0;
gdjs.Win_32ScreenCode.GDWinnerDisplayObjects3.length = 0;
gdjs.Win_32ScreenCode.GDButtonHomeScreenObjects1.length = 0;
gdjs.Win_32ScreenCode.GDButtonHomeScreenObjects2.length = 0;
gdjs.Win_32ScreenCode.GDButtonHomeScreenObjects3.length = 0;
gdjs.Win_32ScreenCode.GDCaptainObjects1.length = 0;
gdjs.Win_32ScreenCode.GDCaptainObjects2.length = 0;
gdjs.Win_32ScreenCode.GDCaptainObjects3.length = 0;
gdjs.Win_32ScreenCode.GDBigGuyObjects1.length = 0;
gdjs.Win_32ScreenCode.GDBigGuyObjects2.length = 0;
gdjs.Win_32ScreenCode.GDBigGuyObjects3.length = 0;
gdjs.Win_32ScreenCode.GDMusicButtonObjects1.length = 0;
gdjs.Win_32ScreenCode.GDMusicButtonObjects2.length = 0;
gdjs.Win_32ScreenCode.GDMusicButtonObjects3.length = 0;

gdjs.Win_32ScreenCode.eventsList3(runtimeScene);
return;

}

gdjs['Win_32ScreenCode'] = gdjs.Win_32ScreenCode;
