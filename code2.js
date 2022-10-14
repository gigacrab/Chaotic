gdjs.GameCode = {};
gdjs.GameCode.GDBigGuyObjects1_1final = [];

gdjs.GameCode.GDCaptainObjects1_1final = [];

gdjs.GameCode.GDBigGuyObjects1= [];
gdjs.GameCode.GDBigGuyObjects2= [];
gdjs.GameCode.GDBigGuyObjects3= [];
gdjs.GameCode.GDMergedFullBackgroundObjects1= [];
gdjs.GameCode.GDMergedFullBackgroundObjects2= [];
gdjs.GameCode.GDMergedFullBackgroundObjects3= [];
gdjs.GameCode.GDMergedFullBackground2Objects1= [];
gdjs.GameCode.GDMergedFullBackground2Objects2= [];
gdjs.GameCode.GDMergedFullBackground2Objects3= [];
gdjs.GameCode.GDCornerPlatformObjects1= [];
gdjs.GameCode.GDCornerPlatformObjects2= [];
gdjs.GameCode.GDCornerPlatformObjects3= [];
gdjs.GameCode.GDPlatform2Objects1= [];
gdjs.GameCode.GDPlatform2Objects2= [];
gdjs.GameCode.GDPlatform2Objects3= [];
gdjs.GameCode.GDCaptainObjects1= [];
gdjs.GameCode.GDCaptainObjects2= [];
gdjs.GameCode.GDCaptainObjects3= [];
gdjs.GameCode.GDHitBoxPlayer1Objects1= [];
gdjs.GameCode.GDHitBoxPlayer1Objects2= [];
gdjs.GameCode.GDHitBoxPlayer1Objects3= [];
gdjs.GameCode.GDPlayer2HealthDisplayObjects1= [];
gdjs.GameCode.GDPlayer2HealthDisplayObjects2= [];
gdjs.GameCode.GDPlayer2HealthDisplayObjects3= [];
gdjs.GameCode.GDHitboxPlayer2Objects1= [];
gdjs.GameCode.GDHitboxPlayer2Objects2= [];
gdjs.GameCode.GDHitboxPlayer2Objects3= [];
gdjs.GameCode.GDPlayer1HealthDisplayObjects1= [];
gdjs.GameCode.GDPlayer1HealthDisplayObjects2= [];
gdjs.GameCode.GDPlayer1HealthDisplayObjects3= [];
gdjs.GameCode.GDPauseButton2Objects1= [];
gdjs.GameCode.GDPauseButton2Objects2= [];
gdjs.GameCode.GDPauseButton2Objects3= [];
gdjs.GameCode.GDPlatform1Objects1= [];
gdjs.GameCode.GDPlatform1Objects2= [];
gdjs.GameCode.GDPlatform1Objects3= [];
gdjs.GameCode.GDBigGuy2Objects1= [];
gdjs.GameCode.GDBigGuy2Objects2= [];
gdjs.GameCode.GDBigGuy2Objects3= [];
gdjs.GameCode.GDCaptain2Objects1= [];
gdjs.GameCode.GDCaptain2Objects2= [];
gdjs.GameCode.GDCaptain2Objects3= [];
gdjs.GameCode.GDBlueBoxObjects1= [];
gdjs.GameCode.GDBlueBoxObjects2= [];
gdjs.GameCode.GDBlueBoxObjects3= [];
gdjs.GameCode.GDBlueBox2Objects1= [];
gdjs.GameCode.GDBlueBox2Objects2= [];
gdjs.GameCode.GDBlueBox2Objects3= [];
gdjs.GameCode.GDNewSpriteObjects1= [];
gdjs.GameCode.GDNewSpriteObjects2= [];
gdjs.GameCode.GDNewSpriteObjects3= [];
gdjs.GameCode.GDMusicButtonObjects1= [];
gdjs.GameCode.GDMusicButtonObjects2= [];
gdjs.GameCode.GDMusicButtonObjects3= [];
gdjs.GameCode.GDoverlayObjects1= [];
gdjs.GameCode.GDoverlayObjects2= [];
gdjs.GameCode.GDoverlayObjects3= [];
gdjs.GameCode.GDNewSprite2Objects1= [];
gdjs.GameCode.GDNewSprite2Objects2= [];
gdjs.GameCode.GDNewSprite2Objects3= [];
gdjs.GameCode.GDHealthKitObjects1= [];
gdjs.GameCode.GDHealthKitObjects2= [];
gdjs.GameCode.GDHealthKitObjects3= [];
gdjs.GameCode.GDUpgradedPotionOrangeObjects1= [];
gdjs.GameCode.GDUpgradedPotionOrangeObjects2= [];
gdjs.GameCode.GDUpgradedPotionOrangeObjects3= [];
gdjs.GameCode.GDMenuPopupBackgroundObjects1= [];
gdjs.GameCode.GDMenuPopupBackgroundObjects2= [];
gdjs.GameCode.GDMenuPopupBackgroundObjects3= [];
gdjs.GameCode.GDbutton_95resumeObjects1= [];
gdjs.GameCode.GDbutton_95resumeObjects2= [];
gdjs.GameCode.GDbutton_95resumeObjects3= [];
gdjs.GameCode.GDbutton_95mainmenuObjects1= [];
gdjs.GameCode.GDbutton_95mainmenuObjects2= [];
gdjs.GameCode.GDbutton_95mainmenuObjects3= [];
gdjs.GameCode.GDbutton_95quitObjects1= [];
gdjs.GameCode.GDbutton_95quitObjects2= [];
gdjs.GameCode.GDbutton_95quitObjects3= [];
gdjs.GameCode.GDNewSprite3Objects1= [];
gdjs.GameCode.GDNewSprite3Objects2= [];
gdjs.GameCode.GDNewSprite3Objects3= [];

gdjs.GameCode.conditionTrue_0 = {val:false};
gdjs.GameCode.condition0IsTrue_0 = {val:false};
gdjs.GameCode.condition1IsTrue_0 = {val:false};
gdjs.GameCode.condition2IsTrue_0 = {val:false};
gdjs.GameCode.condition3IsTrue_0 = {val:false};
gdjs.GameCode.condition4IsTrue_0 = {val:false};
gdjs.GameCode.conditionTrue_1 = {val:false};
gdjs.GameCode.condition0IsTrue_1 = {val:false};
gdjs.GameCode.condition1IsTrue_1 = {val:false};
gdjs.GameCode.condition2IsTrue_1 = {val:false};
gdjs.GameCode.condition3IsTrue_1 = {val:false};
gdjs.GameCode.condition4IsTrue_1 = {val:false};
gdjs.GameCode.conditionTrue_2 = {val:false};
gdjs.GameCode.condition0IsTrue_2 = {val:false};
gdjs.GameCode.condition1IsTrue_2 = {val:false};
gdjs.GameCode.condition2IsTrue_2 = {val:false};
gdjs.GameCode.condition3IsTrue_2 = {val:false};
gdjs.GameCode.condition4IsTrue_2 = {val:false};


gdjs.GameCode.eventsList0 = function(runtimeScene) {

};gdjs.GameCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.GameCode.GDBigGuyObjects1, gdjs.GameCode.GDBigGuyObjects2);


gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDBigGuyObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDBigGuyObjects2[i].getVariableBoolean(gdjs.GameCode.GDBigGuyObjects2[i].getVariables().get("FacingLeft"), false) ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDBigGuyObjects2[k] = gdjs.GameCode.GDBigGuyObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDBigGuyObjects2.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDBigGuyObjects2 */
gdjs.copyArray(runtimeScene.getObjects("HitBoxPlayer1"), gdjs.GameCode.GDHitBoxPlayer1Objects2);
{for(var i = 0, len = gdjs.GameCode.GDHitBoxPlayer1Objects2.length ;i < len;++i) {
    gdjs.GameCode.GDHitBoxPlayer1Objects2[i].putAroundObject((gdjs.GameCode.GDBigGuyObjects2.length !== 0 ? gdjs.GameCode.GDBigGuyObjects2[0] : null), 35, 15);
}
}}

}


{

/* Reuse gdjs.GameCode.GDBigGuyObjects1 */

gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDBigGuyObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDBigGuyObjects1[i].getVariableBoolean(gdjs.GameCode.GDBigGuyObjects1[i].getVariables().get("FacingLeft"), true) ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDBigGuyObjects1[k] = gdjs.GameCode.GDBigGuyObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDBigGuyObjects1.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDBigGuyObjects1 */
gdjs.copyArray(runtimeScene.getObjects("HitBoxPlayer1"), gdjs.GameCode.GDHitBoxPlayer1Objects1);
{for(var i = 0, len = gdjs.GameCode.GDHitBoxPlayer1Objects1.length ;i < len;++i) {
    gdjs.GameCode.GDHitBoxPlayer1Objects1[i].putAroundObject((gdjs.GameCode.GDBigGuyObjects1.length !== 0 ? gdjs.GameCode.GDBigGuyObjects1[0] : null), 35, 165);
}
}}

}


};gdjs.GameCode.eventsList2 = function(runtimeScene) {

};gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDHitBoxPlayer1Objects1Objects = Hashtable.newFrom({"HitBoxPlayer1": gdjs.GameCode.GDHitBoxPlayer1Objects1});
gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDCaptainObjects1Objects = Hashtable.newFrom({"Captain": gdjs.GameCode.GDCaptainObjects1});
gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDHitboxPlayer2Objects1Objects = Hashtable.newFrom({"HitboxPlayer2": gdjs.GameCode.GDHitboxPlayer2Objects1});
gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDBigGuyObjects1Objects = Hashtable.newFrom({"BigGuy": gdjs.GameCode.GDBigGuyObjects1});
gdjs.GameCode.eventsList3 = function(runtimeScene) {

};gdjs.GameCode.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.GameCode.GDCaptainObjects1, gdjs.GameCode.GDCaptainObjects2);


gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDCaptainObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDCaptainObjects2[i].getVariableBoolean(gdjs.GameCode.GDCaptainObjects2[i].getVariables().getFromIndex(1), false) ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDCaptainObjects2[k] = gdjs.GameCode.GDCaptainObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDCaptainObjects2.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDCaptainObjects2 */
gdjs.copyArray(runtimeScene.getObjects("HitboxPlayer2"), gdjs.GameCode.GDHitboxPlayer2Objects2);
{for(var i = 0, len = gdjs.GameCode.GDHitboxPlayer2Objects2.length ;i < len;++i) {
    gdjs.GameCode.GDHitboxPlayer2Objects2[i].putAroundObject((gdjs.GameCode.GDCaptainObjects2.length !== 0 ? gdjs.GameCode.GDCaptainObjects2[0] : null), 35, 15);
}
}}

}


{

/* Reuse gdjs.GameCode.GDCaptainObjects1 */

gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDCaptainObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDCaptainObjects1[i].getVariableBoolean(gdjs.GameCode.GDCaptainObjects1[i].getVariables().getFromIndex(1), true) ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDCaptainObjects1[k] = gdjs.GameCode.GDCaptainObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDCaptainObjects1.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDCaptainObjects1 */
gdjs.copyArray(runtimeScene.getObjects("HitboxPlayer2"), gdjs.GameCode.GDHitboxPlayer2Objects1);
{for(var i = 0, len = gdjs.GameCode.GDHitboxPlayer2Objects1.length ;i < len;++i) {
    gdjs.GameCode.GDHitboxPlayer2Objects1[i].putAroundObject((gdjs.GameCode.GDCaptainObjects1.length !== 0 ? gdjs.GameCode.GDCaptainObjects1[0] : null), 35, 165);
}
}}

}


};gdjs.GameCode.eventsList5 = function(runtimeScene) {

};gdjs.GameCode.eventsList6 = function(runtimeScene) {

};gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPauseButton2Objects1Objects = Hashtable.newFrom({"PauseButton2": gdjs.GameCode.GDPauseButton2Objects1});
gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDoverlayObjects1Objects = Hashtable.newFrom({"overlay": gdjs.GameCode.GDoverlayObjects1});
gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDUpgradedPotionOrangeObjects1Objects = Hashtable.newFrom({"UpgradedPotionOrange": gdjs.GameCode.GDUpgradedPotionOrangeObjects1});
gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDMusicButtonObjects1Objects = Hashtable.newFrom({"MusicButton": gdjs.GameCode.GDMusicButtonObjects1});
gdjs.GameCode.eventsList7 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.GameCode.GDMusicButtonObjects1, gdjs.GameCode.GDMusicButtonObjects2);


gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDMusicButtonObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDMusicButtonObjects2[i].isCurrentAnimationName("on") ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDMusicButtonObjects2[k] = gdjs.GameCode.GDMusicButtonObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDMusicButtonObjects2.length = k;}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
gdjs.GameCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) == 1;
}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDMusicButtonObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDMusicButtonObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDMusicButtonObjects2[i].setAnimationName("off");
}
}{gdjs.evtTools.sound.pauseMusicOnChannel(runtimeScene, 1);
}{runtimeScene.getVariables().getFromIndex(2).setNumber(0);
}}

}


{

/* Reuse gdjs.GameCode.GDMusicButtonObjects1 */

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDMusicButtonObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDMusicButtonObjects1[i].isCurrentAnimationName("off") ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDMusicButtonObjects1[k] = gdjs.GameCode.GDMusicButtonObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDMusicButtonObjects1.length = k;}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
gdjs.GameCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) == 1;
}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDMusicButtonObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDMusicButtonObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDMusicButtonObjects1[i].setAnimationName("on");
}
}{gdjs.evtTools.sound.continueMusicOnChannel(runtimeScene, 1);
}{runtimeScene.getVariables().getFromIndex(2).setNumber(0);
}}

}


};gdjs.GameCode.eventsList8 = function(runtimeScene) {

{


gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
{gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition1IsTrue_0;
gdjs.GameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(13349364);
}
}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(2).add(1);
}
{ //Subevents
gdjs.GameCode.eventsList7(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDbutton_9595resumeObjects2Objects = Hashtable.newFrom({"button_resume": gdjs.GameCode.GDbutton_95resumeObjects2});
gdjs.GameCode.eventsList9 = function(runtimeScene) {

{


gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
{gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition1IsTrue_0;
gdjs.GameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(13353732);
}
}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getVariables().getFromIndex(0), false);
}{gdjs.evtTools.sound.playSound(runtimeScene, "button2.wav", false, 100, 1);
}}

}


};gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDbutton_9595mainmenuObjects2Objects = Hashtable.newFrom({"button_mainmenu": gdjs.GameCode.GDbutton_95mainmenuObjects2});
gdjs.GameCode.eventsList10 = function(runtimeScene) {

{


gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
{gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition1IsTrue_0;
gdjs.GameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(13354924);
}
}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", false);
}{runtimeScene.getGame().getVariables().getFromIndex(7).add(1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "button2.wav", false, 100, 1);
}}

}


};gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDbutton_9595quitObjects1Objects = Hashtable.newFrom({"button_quit": gdjs.GameCode.GDbutton_95quitObjects1});
gdjs.GameCode.eventsList11 = function(runtimeScene) {

{


gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
{gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition1IsTrue_0;
gdjs.GameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(13356564);
}
}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}{gdjs.evtTools.sound.playSound(runtimeScene, "button2.wav", false, 100, 1);
}}

}


};gdjs.GameCode.eventsList12 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("button_resume"), gdjs.GameCode.GDbutton_95resumeObjects2);

gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDbutton_9595resumeObjects2Objects, runtimeScene, true, false);
}if (gdjs.GameCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.GameCode.eventsList9(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("button_mainmenu"), gdjs.GameCode.GDbutton_95mainmenuObjects2);

gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDbutton_9595mainmenuObjects2Objects, runtimeScene, true, false);
}if (gdjs.GameCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.GameCode.eventsList10(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("button_quit"), gdjs.GameCode.GDbutton_95quitObjects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDbutton_9595quitObjects1Objects, runtimeScene, true, false);
}if (gdjs.GameCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.GameCode.eventsList11(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDBigGuyObjects1Objects = Hashtable.newFrom({"BigGuy": gdjs.GameCode.GDBigGuyObjects1});
gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDUpgradedPotionOrangeObjects1Objects = Hashtable.newFrom({"UpgradedPotionOrange": gdjs.GameCode.GDUpgradedPotionOrangeObjects1});
gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDCaptainObjects1Objects = Hashtable.newFrom({"Captain": gdjs.GameCode.GDCaptainObjects1});
gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDUpgradedPotionOrangeObjects1Objects = Hashtable.newFrom({"UpgradedPotionOrange": gdjs.GameCode.GDUpgradedPotionOrangeObjects1});
gdjs.GameCode.eventsList13 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Captain"), gdjs.GameCode.GDCaptainObjects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDCaptainObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDCaptainObjects1[i].getAnimationFrame() == 6 ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDCaptainObjects1[k] = gdjs.GameCode.GDCaptainObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDCaptainObjects1.length = k;}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDCaptainObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDCaptainObjects1[i].isCurrentAnimationName("Attack") ) {
        gdjs.GameCode.condition1IsTrue_0.val = true;
        gdjs.GameCode.GDCaptainObjects1[k] = gdjs.GameCode.GDCaptainObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDCaptainObjects1.length = k;}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("CornerPlatform"), gdjs.GameCode.GDCornerPlatformObjects1);
gdjs.copyArray(runtimeScene.getObjects("HitboxPlayer2"), gdjs.GameCode.GDHitboxPlayer2Objects1);
{for(var i = 0, len = gdjs.GameCode.GDHitboxPlayer2Objects1.length ;i < len;++i) {
    gdjs.GameCode.GDHitboxPlayer2Objects1[i].putAroundObject((gdjs.GameCode.GDCornerPlatformObjects1.length !== 0 ? gdjs.GameCode.GDCornerPlatformObjects1[0] : null), 20, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BigGuy"), gdjs.GameCode.GDBigGuyObjects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDBigGuyObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDBigGuyObjects1[i].hasAnimationEnded() ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDBigGuyObjects1[k] = gdjs.GameCode.GDBigGuyObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDBigGuyObjects1.length = k;}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDBigGuyObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDBigGuyObjects1[i].isCurrentAnimationName("Attack") ) {
        gdjs.GameCode.condition1IsTrue_0.val = true;
        gdjs.GameCode.GDBigGuyObjects1[k] = gdjs.GameCode.GDBigGuyObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDBigGuyObjects1.length = k;}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDBigGuyObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDBigGuyObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDBigGuyObjects1[i].setVariableBoolean(gdjs.GameCode.GDBigGuyObjects1[i].getVariables().getFromIndex(1), false);
}
}}

}


{


gdjs.GameCode.eventsList0(runtimeScene);
}


{



}


{

gdjs.GameCode.GDBigGuyObjects1.length = 0;


gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
{gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition0IsTrue_0;
gdjs.GameCode.GDBigGuyObjects1_1final.length = 0;gdjs.GameCode.condition0IsTrue_1.val = false;
gdjs.GameCode.condition1IsTrue_1.val = false;
{
gdjs.copyArray(runtimeScene.getObjects("BigGuy"), gdjs.GameCode.GDBigGuyObjects2);
{gdjs.GameCode.conditionTrue_2 = gdjs.GameCode.condition0IsTrue_1;
gdjs.GameCode.condition0IsTrue_2.val = false;
gdjs.GameCode.condition1IsTrue_2.val = false;
gdjs.GameCode.condition2IsTrue_2.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDBigGuyObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDBigGuyObjects2[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.GameCode.condition0IsTrue_2.val = true;
        gdjs.GameCode.GDBigGuyObjects2[k] = gdjs.GameCode.GDBigGuyObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDBigGuyObjects2.length = k;}if ( gdjs.GameCode.condition0IsTrue_2.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDBigGuyObjects2.length;i<l;++i) {
    if ( !(gdjs.GameCode.GDBigGuyObjects2[i].getBehavior("PlatformerObject").isMovingEvenALittle()) ) {
        gdjs.GameCode.condition1IsTrue_2.val = true;
        gdjs.GameCode.GDBigGuyObjects2[k] = gdjs.GameCode.GDBigGuyObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDBigGuyObjects2.length = k;}if ( gdjs.GameCode.condition1IsTrue_2.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDBigGuyObjects2.length;i<l;++i) {
    if ( !(gdjs.GameCode.GDBigGuyObjects2[i].isCurrentAnimationName("Attack")) ) {
        gdjs.GameCode.condition2IsTrue_2.val = true;
        gdjs.GameCode.GDBigGuyObjects2[k] = gdjs.GameCode.GDBigGuyObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDBigGuyObjects2.length = k;}}
}
gdjs.GameCode.conditionTrue_2.val = true && gdjs.GameCode.condition0IsTrue_2.val && gdjs.GameCode.condition1IsTrue_2.val && gdjs.GameCode.condition2IsTrue_2.val;
}
if( gdjs.GameCode.condition0IsTrue_1.val ) {
    gdjs.GameCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.GameCode.GDBigGuyObjects2.length;j<jLen;++j) {
        if ( gdjs.GameCode.GDBigGuyObjects1_1final.indexOf(gdjs.GameCode.GDBigGuyObjects2[j]) === -1 )
            gdjs.GameCode.GDBigGuyObjects1_1final.push(gdjs.GameCode.GDBigGuyObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("BigGuy"), gdjs.GameCode.GDBigGuyObjects2);
{gdjs.GameCode.conditionTrue_2 = gdjs.GameCode.condition1IsTrue_1;
gdjs.GameCode.condition0IsTrue_2.val = false;
gdjs.GameCode.condition1IsTrue_2.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDBigGuyObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDBigGuyObjects2[i].isCurrentAnimationName("Attack") ) {
        gdjs.GameCode.condition0IsTrue_2.val = true;
        gdjs.GameCode.GDBigGuyObjects2[k] = gdjs.GameCode.GDBigGuyObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDBigGuyObjects2.length = k;}if ( gdjs.GameCode.condition0IsTrue_2.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDBigGuyObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDBigGuyObjects2[i].hasAnimationEnded() ) {
        gdjs.GameCode.condition1IsTrue_2.val = true;
        gdjs.GameCode.GDBigGuyObjects2[k] = gdjs.GameCode.GDBigGuyObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDBigGuyObjects2.length = k;}}
gdjs.GameCode.conditionTrue_2.val = true && gdjs.GameCode.condition0IsTrue_2.val && gdjs.GameCode.condition1IsTrue_2.val;
}
if( gdjs.GameCode.condition1IsTrue_1.val ) {
    gdjs.GameCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.GameCode.GDBigGuyObjects2.length;j<jLen;++j) {
        if ( gdjs.GameCode.GDBigGuyObjects1_1final.indexOf(gdjs.GameCode.GDBigGuyObjects2[j]) === -1 )
            gdjs.GameCode.GDBigGuyObjects1_1final.push(gdjs.GameCode.GDBigGuyObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.GameCode.GDBigGuyObjects1_1final, gdjs.GameCode.GDBigGuyObjects1);
}
}
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDBigGuyObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDBigGuyObjects1[i].getVariableBoolean(gdjs.GameCode.GDBigGuyObjects1[i].getVariables().get("GettingHit"), false) ) {
        gdjs.GameCode.condition1IsTrue_0.val = true;
        gdjs.GameCode.GDBigGuyObjects1[k] = gdjs.GameCode.GDBigGuyObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDBigGuyObjects1.length = k;}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDBigGuyObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDBigGuyObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDBigGuyObjects1[i].setAnimationName("Idle");
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("BigGuy"), gdjs.GameCode.GDBigGuyObjects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDBigGuyObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDBigGuyObjects1[i].getVariableBoolean(gdjs.GameCode.GDBigGuyObjects1[i].getVariables().get("GettingHit"), false) ) {
        gdjs.GameCode.condition1IsTrue_0.val = true;
        gdjs.GameCode.GDBigGuyObjects1[k] = gdjs.GameCode.GDBigGuyObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDBigGuyObjects1.length = k;}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDBigGuyObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDBigGuyObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDBigGuyObjects1[i].flipX(true);
}
}{for(var i = 0, len = gdjs.GameCode.GDBigGuyObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDBigGuyObjects1[i].setVariableBoolean(gdjs.GameCode.GDBigGuyObjects1[i].getVariables().get("FacingLeft"), true);
}
}{for(var i = 0, len = gdjs.GameCode.GDBigGuyObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDBigGuyObjects1[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BigGuy"), gdjs.GameCode.GDBigGuyObjects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDBigGuyObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDBigGuyObjects1[i].getVariableBoolean(gdjs.GameCode.GDBigGuyObjects1[i].getVariables().get("GettingHit"), false) ) {
        gdjs.GameCode.condition1IsTrue_0.val = true;
        gdjs.GameCode.GDBigGuyObjects1[k] = gdjs.GameCode.GDBigGuyObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDBigGuyObjects1.length = k;}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDBigGuyObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDBigGuyObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDBigGuyObjects1[i].flipX(false);
}
}{for(var i = 0, len = gdjs.GameCode.GDBigGuyObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDBigGuyObjects1[i].setVariableBoolean(gdjs.GameCode.GDBigGuyObjects1[i].getVariables().get("FacingLeft"), false);
}
}{for(var i = 0, len = gdjs.GameCode.GDBigGuyObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDBigGuyObjects1[i].getBehavior("PlatformerObject").simulateRightKey();
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("BigGuy"), gdjs.GameCode.GDBigGuyObjects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDBigGuyObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDBigGuyObjects1[i].getAnimationFrame() == 4 ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDBigGuyObjects1[k] = gdjs.GameCode.GDBigGuyObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDBigGuyObjects1.length = k;}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDBigGuyObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDBigGuyObjects1[i].isCurrentAnimationName("Attack") ) {
        gdjs.GameCode.condition1IsTrue_0.val = true;
        gdjs.GameCode.GDBigGuyObjects1[k] = gdjs.GameCode.GDBigGuyObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDBigGuyObjects1.length = k;}}
if (gdjs.GameCode.condition1IsTrue_0.val) {

{ //Subevents
gdjs.GameCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BigGuy"), gdjs.GameCode.GDBigGuyObjects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
gdjs.GameCode.condition2IsTrue_0.val = false;
gdjs.GameCode.condition3IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDBigGuyObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDBigGuyObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDBigGuyObjects1[k] = gdjs.GameCode.GDBigGuyObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDBigGuyObjects1.length = k;}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDBigGuyObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDBigGuyObjects1[i].getBehavior("PlatformerObject").isMovingEvenALittle() ) {
        gdjs.GameCode.condition1IsTrue_0.val = true;
        gdjs.GameCode.GDBigGuyObjects1[k] = gdjs.GameCode.GDBigGuyObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDBigGuyObjects1.length = k;}if ( gdjs.GameCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDBigGuyObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDBigGuyObjects1[i].getVariableBoolean(gdjs.GameCode.GDBigGuyObjects1[i].getVariables().getFromIndex(1), false) ) {
        gdjs.GameCode.condition2IsTrue_0.val = true;
        gdjs.GameCode.GDBigGuyObjects1[k] = gdjs.GameCode.GDBigGuyObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDBigGuyObjects1.length = k;}if ( gdjs.GameCode.condition2IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDBigGuyObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDBigGuyObjects1[i].getVariableBoolean(gdjs.GameCode.GDBigGuyObjects1[i].getVariables().get("GettingHit"), false) ) {
        gdjs.GameCode.condition3IsTrue_0.val = true;
        gdjs.GameCode.GDBigGuyObjects1[k] = gdjs.GameCode.GDBigGuyObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDBigGuyObjects1.length = k;}}
}
}
if (gdjs.GameCode.condition3IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDBigGuyObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDBigGuyObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDBigGuyObjects1[i].setAnimationName("Run");
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("BigGuy"), gdjs.GameCode.GDBigGuyObjects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
gdjs.GameCode.condition2IsTrue_0.val = false;
gdjs.GameCode.condition3IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDBigGuyObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDBigGuyObjects1[i].getVariableBoolean(gdjs.GameCode.GDBigGuyObjects1[i].getVariables().getFromIndex(1), false) ) {
        gdjs.GameCode.condition1IsTrue_0.val = true;
        gdjs.GameCode.GDBigGuyObjects1[k] = gdjs.GameCode.GDBigGuyObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDBigGuyObjects1.length = k;}if ( gdjs.GameCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDBigGuyObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDBigGuyObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.GameCode.condition2IsTrue_0.val = true;
        gdjs.GameCode.GDBigGuyObjects1[k] = gdjs.GameCode.GDBigGuyObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDBigGuyObjects1.length = k;}if ( gdjs.GameCode.condition2IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDBigGuyObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDBigGuyObjects1[i].getVariableBoolean(gdjs.GameCode.GDBigGuyObjects1[i].getVariables().get("GettingHit"), false) ) {
        gdjs.GameCode.condition3IsTrue_0.val = true;
        gdjs.GameCode.GDBigGuyObjects1[k] = gdjs.GameCode.GDBigGuyObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDBigGuyObjects1.length = k;}}
}
}
if (gdjs.GameCode.condition3IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDBigGuyObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDBigGuyObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDBigGuyObjects1[i].setAnimationName("Jump");
}
}{for(var i = 0, len = gdjs.GameCode.GDBigGuyObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDBigGuyObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BigGuy"), gdjs.GameCode.GDBigGuyObjects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
gdjs.GameCode.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDBigGuyObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDBigGuyObjects1[i].getBehavior("PlatformerObject").isFalling() ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDBigGuyObjects1[k] = gdjs.GameCode.GDBigGuyObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDBigGuyObjects1.length = k;}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDBigGuyObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDBigGuyObjects1[i].getVariableBoolean(gdjs.GameCode.GDBigGuyObjects1[i].getVariables().getFromIndex(1), false) ) {
        gdjs.GameCode.condition1IsTrue_0.val = true;
        gdjs.GameCode.GDBigGuyObjects1[k] = gdjs.GameCode.GDBigGuyObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDBigGuyObjects1.length = k;}if ( gdjs.GameCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDBigGuyObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDBigGuyObjects1[i].getVariableBoolean(gdjs.GameCode.GDBigGuyObjects1[i].getVariables().get("GettingHit"), false) ) {
        gdjs.GameCode.condition2IsTrue_0.val = true;
        gdjs.GameCode.GDBigGuyObjects1[k] = gdjs.GameCode.GDBigGuyObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDBigGuyObjects1.length = k;}}
}
if (gdjs.GameCode.condition2IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDBigGuyObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDBigGuyObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDBigGuyObjects1[i].setAnimationName("Fall");
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("BigGuy"), gdjs.GameCode.GDBigGuyObjects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "l");
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDBigGuyObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDBigGuyObjects1[i].getVariableBoolean(gdjs.GameCode.GDBigGuyObjects1[i].getVariables().get("GettingHit"), false) ) {
        gdjs.GameCode.condition1IsTrue_0.val = true;
        gdjs.GameCode.GDBigGuyObjects1[k] = gdjs.GameCode.GDBigGuyObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDBigGuyObjects1.length = k;}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDBigGuyObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDBigGuyObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDBigGuyObjects1[i].setAnimationName("Attack");
}
}{for(var i = 0, len = gdjs.GameCode.GDBigGuyObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDBigGuyObjects1[i].setVariableBoolean(gdjs.GameCode.GDBigGuyObjects1[i].getVariables().getFromIndex(1), true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BigGuy"), gdjs.GameCode.GDBigGuyObjects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDBigGuyObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDBigGuyObjects1[i].getAnimationFrame() == 5 ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDBigGuyObjects1[k] = gdjs.GameCode.GDBigGuyObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDBigGuyObjects1.length = k;}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDBigGuyObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDBigGuyObjects1[i].isCurrentAnimationName("Attack") ) {
        gdjs.GameCode.condition1IsTrue_0.val = true;
        gdjs.GameCode.GDBigGuyObjects1[k] = gdjs.GameCode.GDBigGuyObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDBigGuyObjects1.length = k;}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("CornerPlatform"), gdjs.GameCode.GDCornerPlatformObjects1);
gdjs.copyArray(runtimeScene.getObjects("HitBoxPlayer1"), gdjs.GameCode.GDHitBoxPlayer1Objects1);
{for(var i = 0, len = gdjs.GameCode.GDHitBoxPlayer1Objects1.length ;i < len;++i) {
    gdjs.GameCode.GDHitBoxPlayer1Objects1[i].putAroundObject((gdjs.GameCode.GDCornerPlatformObjects1.length !== 0 ? gdjs.GameCode.GDCornerPlatformObjects1[0] : null), 20, 0);
}
}}

}


{


gdjs.GameCode.eventsList2(runtimeScene);
}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Captain"), gdjs.GameCode.GDCaptainObjects1);
gdjs.copyArray(runtimeScene.getObjects("HitBoxPlayer1"), gdjs.GameCode.GDHitBoxPlayer1Objects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
gdjs.GameCode.condition2IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDHitBoxPlayer1Objects1Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDCaptainObjects1Objects, false, runtimeScene, false);
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDCaptainObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDCaptainObjects1[i].getVariableBoolean(gdjs.GameCode.GDCaptainObjects1[i].getVariables().getFromIndex(3), false) ) {
        gdjs.GameCode.condition1IsTrue_0.val = true;
        gdjs.GameCode.GDCaptainObjects1[k] = gdjs.GameCode.GDCaptainObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDCaptainObjects1.length = k;}if ( gdjs.GameCode.condition1IsTrue_0.val ) {
{
{gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition2IsTrue_0;
gdjs.GameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(13315084);
}
}}
}
if (gdjs.GameCode.condition2IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("BigGuy"), gdjs.GameCode.GDBigGuyObjects1);
/* Reuse gdjs.GameCode.GDCaptainObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDCaptainObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDCaptainObjects1[i].returnVariable(gdjs.GameCode.GDCaptainObjects1[i].getVariables().getFromIndex(0)).sub((gdjs.RuntimeObject.getVariableNumber(((gdjs.GameCode.GDBigGuyObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDBigGuyObjects1[0].getVariables()).getFromIndex(2))));
}
}{for(var i = 0, len = gdjs.GameCode.GDCaptainObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDCaptainObjects1[i].setAnimationName("Hit");
}
}{for(var i = 0, len = gdjs.GameCode.GDCaptainObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDCaptainObjects1[i].setVariableBoolean(gdjs.GameCode.GDCaptainObjects1[i].getVariables().getFromIndex(3), true);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "hurt.wav", false, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Captain"), gdjs.GameCode.GDCaptainObjects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDCaptainObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDCaptainObjects1[i].isCurrentAnimationName("Hit") ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDCaptainObjects1[k] = gdjs.GameCode.GDCaptainObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDCaptainObjects1.length = k;}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDCaptainObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDCaptainObjects1[i].hasAnimationEnded() ) {
        gdjs.GameCode.condition1IsTrue_0.val = true;
        gdjs.GameCode.GDCaptainObjects1[k] = gdjs.GameCode.GDCaptainObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDCaptainObjects1.length = k;}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDCaptainObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDCaptainObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDCaptainObjects1[i].setVariableBoolean(gdjs.GameCode.GDCaptainObjects1[i].getVariables().getFromIndex(3), false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BigGuy"), gdjs.GameCode.GDBigGuyObjects1);
gdjs.copyArray(runtimeScene.getObjects("HitboxPlayer2"), gdjs.GameCode.GDHitboxPlayer2Objects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
gdjs.GameCode.condition2IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDHitboxPlayer2Objects1Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDBigGuyObjects1Objects, false, runtimeScene, false);
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
{gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition1IsTrue_0;
gdjs.GameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(13317012);
}
}if ( gdjs.GameCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDBigGuyObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDBigGuyObjects1[i].getVariableBoolean(gdjs.GameCode.GDBigGuyObjects1[i].getVariables().get("GettingHit"), false) ) {
        gdjs.GameCode.condition2IsTrue_0.val = true;
        gdjs.GameCode.GDBigGuyObjects1[k] = gdjs.GameCode.GDBigGuyObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDBigGuyObjects1.length = k;}}
}
if (gdjs.GameCode.condition2IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDBigGuyObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Captain"), gdjs.GameCode.GDCaptainObjects1);
{for(var i = 0, len = gdjs.GameCode.GDBigGuyObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDBigGuyObjects1[i].setVariableBoolean(gdjs.GameCode.GDBigGuyObjects1[i].getVariables().get("GettingHit"), true);
}
}{for(var i = 0, len = gdjs.GameCode.GDBigGuyObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDBigGuyObjects1[i].returnVariable(gdjs.GameCode.GDBigGuyObjects1[i].getVariables().getFromIndex(0)).sub((gdjs.RuntimeObject.getVariableNumber(((gdjs.GameCode.GDCaptainObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDCaptainObjects1[0].getVariables()).getFromIndex(4))));
}
}{for(var i = 0, len = gdjs.GameCode.GDBigGuyObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDBigGuyObjects1[i].setAnimationName("Hit");
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "hurt.wav", false, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BigGuy"), gdjs.GameCode.GDBigGuyObjects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDBigGuyObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDBigGuyObjects1[i].isCurrentAnimationName("Hit") ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDBigGuyObjects1[k] = gdjs.GameCode.GDBigGuyObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDBigGuyObjects1.length = k;}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDBigGuyObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDBigGuyObjects1[i].hasAnimationEnded() ) {
        gdjs.GameCode.condition1IsTrue_0.val = true;
        gdjs.GameCode.GDBigGuyObjects1[k] = gdjs.GameCode.GDBigGuyObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDBigGuyObjects1.length = k;}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDBigGuyObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDBigGuyObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDBigGuyObjects1[i].setVariableBoolean(gdjs.GameCode.GDBigGuyObjects1[i].getVariables().get("GettingHit"), false);
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("BigGuy"), gdjs.GameCode.GDBigGuyObjects1);
gdjs.copyArray(runtimeScene.getObjects("BigGuy2"), gdjs.GameCode.GDBigGuy2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Captain"), gdjs.GameCode.GDCaptainObjects1);
gdjs.copyArray(runtimeScene.getObjects("Captain2"), gdjs.GameCode.GDCaptain2Objects1);
gdjs.copyArray(runtimeScene.getObjects("MergedFullBackground"), gdjs.GameCode.GDMergedFullBackgroundObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player1HealthDisplay"), gdjs.GameCode.GDPlayer1HealthDisplayObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player2HealthDisplay"), gdjs.GameCode.GDPlayer2HealthDisplayObjects1);
gdjs.copyArray(runtimeScene.getObjects("overlay"), gdjs.GameCode.GDoverlayObjects1);
{gdjs.evtTools.camera.centerCameraWithinLimits(runtimeScene, (gdjs.GameCode.GDMergedFullBackgroundObjects1.length !== 0 ? gdjs.GameCode.GDMergedFullBackgroundObjects1[0] : null), -(117), -(80), 880, 746, true, "", 0);
}{for(var i = 0, len = gdjs.GameCode.GDPlayer2HealthDisplayObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlayer2HealthDisplayObjects1[i].putAroundObject((gdjs.GameCode.GDCaptain2Objects1.length !== 0 ? gdjs.GameCode.GDCaptain2Objects1[0] : null), 105, 350);
}
}{for(var i = 0, len = gdjs.GameCode.GDPlayer2HealthDisplayObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlayer2HealthDisplayObjects1[i].setString(gdjs.evtTools.common.toString((gdjs.RuntimeObject.getVariableNumber(((gdjs.GameCode.GDCaptainObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDCaptainObjects1[0].getVariables()).getFromIndex(0)))) + "/100");
}
}{for(var i = 0, len = gdjs.GameCode.GDPlayer1HealthDisplayObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlayer1HealthDisplayObjects1[i].putAroundObject((gdjs.GameCode.GDBigGuy2Objects1.length !== 0 ? gdjs.GameCode.GDBigGuy2Objects1[0] : null), 115, 360);
}
}{for(var i = 0, len = gdjs.GameCode.GDPlayer1HealthDisplayObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlayer1HealthDisplayObjects1[i].setString(gdjs.evtTools.common.toString((gdjs.RuntimeObject.getVariableNumber(((gdjs.GameCode.GDBigGuyObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDBigGuyObjects1[0].getVariables()).getFromIndex(0)))) + "/100");
}
}{for(var i = 0, len = gdjs.GameCode.GDoverlayObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDoverlayObjects1[i].setHeight(gdjs.evtTools.window.getWindowInnerHeight() + 200);
}
}{for(var i = 0, len = gdjs.GameCode.GDoverlayObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDoverlayObjects1[i].setWidth(gdjs.evtTools.window.getWindowInnerWidth() + 200);
}
}}

}


{


gdjs.GameCode.eventsList3(runtimeScene);
}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Captain"), gdjs.GameCode.GDCaptainObjects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDCaptainObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDCaptainObjects1[i].hasAnimationEnded() ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDCaptainObjects1[k] = gdjs.GameCode.GDCaptainObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDCaptainObjects1.length = k;}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDCaptainObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDCaptainObjects1[i].isCurrentAnimationName("Attack") ) {
        gdjs.GameCode.condition1IsTrue_0.val = true;
        gdjs.GameCode.GDCaptainObjects1[k] = gdjs.GameCode.GDCaptainObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDCaptainObjects1.length = k;}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDCaptainObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDCaptainObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDCaptainObjects1[i].setVariableBoolean(gdjs.GameCode.GDCaptainObjects1[i].getVariables().getFromIndex(2), false);
}
}}

}


{

gdjs.GameCode.GDCaptainObjects1.length = 0;


gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
{gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition0IsTrue_0;
gdjs.GameCode.GDCaptainObjects1_1final.length = 0;gdjs.GameCode.condition0IsTrue_1.val = false;
gdjs.GameCode.condition1IsTrue_1.val = false;
{
gdjs.copyArray(runtimeScene.getObjects("Captain"), gdjs.GameCode.GDCaptainObjects2);
{gdjs.GameCode.conditionTrue_2 = gdjs.GameCode.condition0IsTrue_1;
gdjs.GameCode.condition0IsTrue_2.val = false;
gdjs.GameCode.condition1IsTrue_2.val = false;
gdjs.GameCode.condition2IsTrue_2.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDCaptainObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDCaptainObjects2[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.GameCode.condition0IsTrue_2.val = true;
        gdjs.GameCode.GDCaptainObjects2[k] = gdjs.GameCode.GDCaptainObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDCaptainObjects2.length = k;}if ( gdjs.GameCode.condition0IsTrue_2.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDCaptainObjects2.length;i<l;++i) {
    if ( !(gdjs.GameCode.GDCaptainObjects2[i].getBehavior("PlatformerObject").isMovingEvenALittle()) ) {
        gdjs.GameCode.condition1IsTrue_2.val = true;
        gdjs.GameCode.GDCaptainObjects2[k] = gdjs.GameCode.GDCaptainObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDCaptainObjects2.length = k;}if ( gdjs.GameCode.condition1IsTrue_2.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDCaptainObjects2.length;i<l;++i) {
    if ( !(gdjs.GameCode.GDCaptainObjects2[i].isCurrentAnimationName("Attack")) ) {
        gdjs.GameCode.condition2IsTrue_2.val = true;
        gdjs.GameCode.GDCaptainObjects2[k] = gdjs.GameCode.GDCaptainObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDCaptainObjects2.length = k;}}
}
gdjs.GameCode.conditionTrue_2.val = true && gdjs.GameCode.condition0IsTrue_2.val && gdjs.GameCode.condition1IsTrue_2.val && gdjs.GameCode.condition2IsTrue_2.val;
}
if( gdjs.GameCode.condition0IsTrue_1.val ) {
    gdjs.GameCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.GameCode.GDCaptainObjects2.length;j<jLen;++j) {
        if ( gdjs.GameCode.GDCaptainObjects1_1final.indexOf(gdjs.GameCode.GDCaptainObjects2[j]) === -1 )
            gdjs.GameCode.GDCaptainObjects1_1final.push(gdjs.GameCode.GDCaptainObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Captain"), gdjs.GameCode.GDCaptainObjects2);
{gdjs.GameCode.conditionTrue_2 = gdjs.GameCode.condition1IsTrue_1;
gdjs.GameCode.condition0IsTrue_2.val = false;
gdjs.GameCode.condition1IsTrue_2.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDCaptainObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDCaptainObjects2[i].isCurrentAnimationName("Attack") ) {
        gdjs.GameCode.condition0IsTrue_2.val = true;
        gdjs.GameCode.GDCaptainObjects2[k] = gdjs.GameCode.GDCaptainObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDCaptainObjects2.length = k;}if ( gdjs.GameCode.condition0IsTrue_2.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDCaptainObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDCaptainObjects2[i].hasAnimationEnded() ) {
        gdjs.GameCode.condition1IsTrue_2.val = true;
        gdjs.GameCode.GDCaptainObjects2[k] = gdjs.GameCode.GDCaptainObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDCaptainObjects2.length = k;}}
gdjs.GameCode.conditionTrue_2.val = true && gdjs.GameCode.condition0IsTrue_2.val && gdjs.GameCode.condition1IsTrue_2.val;
}
if( gdjs.GameCode.condition1IsTrue_1.val ) {
    gdjs.GameCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.GameCode.GDCaptainObjects2.length;j<jLen;++j) {
        if ( gdjs.GameCode.GDCaptainObjects1_1final.indexOf(gdjs.GameCode.GDCaptainObjects2[j]) === -1 )
            gdjs.GameCode.GDCaptainObjects1_1final.push(gdjs.GameCode.GDCaptainObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.GameCode.GDCaptainObjects1_1final, gdjs.GameCode.GDCaptainObjects1);
}
}
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDCaptainObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDCaptainObjects1[i].getVariableBoolean(gdjs.GameCode.GDCaptainObjects1[i].getVariables().getFromIndex(3), false) ) {
        gdjs.GameCode.condition1IsTrue_0.val = true;
        gdjs.GameCode.GDCaptainObjects1[k] = gdjs.GameCode.GDCaptainObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDCaptainObjects1.length = k;}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDCaptainObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDCaptainObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDCaptainObjects1[i].setAnimationName("Idle");
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Captain"), gdjs.GameCode.GDCaptainObjects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDCaptainObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDCaptainObjects1[i].getVariableBoolean(gdjs.GameCode.GDCaptainObjects1[i].getVariables().getFromIndex(3), false) ) {
        gdjs.GameCode.condition1IsTrue_0.val = true;
        gdjs.GameCode.GDCaptainObjects1[k] = gdjs.GameCode.GDCaptainObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDCaptainObjects1.length = k;}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDCaptainObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDCaptainObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDCaptainObjects1[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}{for(var i = 0, len = gdjs.GameCode.GDCaptainObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDCaptainObjects1[i].flipX(true);
}
}{for(var i = 0, len = gdjs.GameCode.GDCaptainObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDCaptainObjects1[i].setVariableBoolean(gdjs.GameCode.GDCaptainObjects1[i].getVariables().getFromIndex(1), true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Captain"), gdjs.GameCode.GDCaptainObjects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDCaptainObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDCaptainObjects1[i].getVariableBoolean(gdjs.GameCode.GDCaptainObjects1[i].getVariables().getFromIndex(3), false) ) {
        gdjs.GameCode.condition1IsTrue_0.val = true;
        gdjs.GameCode.GDCaptainObjects1[k] = gdjs.GameCode.GDCaptainObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDCaptainObjects1.length = k;}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDCaptainObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDCaptainObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDCaptainObjects1[i].setVariableBoolean(gdjs.GameCode.GDCaptainObjects1[i].getVariables().getFromIndex(1), false);
}
}{for(var i = 0, len = gdjs.GameCode.GDCaptainObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDCaptainObjects1[i].flipX(false);
}
}{for(var i = 0, len = gdjs.GameCode.GDCaptainObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDCaptainObjects1[i].getBehavior("PlatformerObject").simulateRightKey();
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Captain"), gdjs.GameCode.GDCaptainObjects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
gdjs.GameCode.condition2IsTrue_0.val = false;
gdjs.GameCode.condition3IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDCaptainObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDCaptainObjects1[i].getVariableBoolean(gdjs.GameCode.GDCaptainObjects1[i].getVariables().getFromIndex(2), false) ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDCaptainObjects1[k] = gdjs.GameCode.GDCaptainObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDCaptainObjects1.length = k;}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDCaptainObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDCaptainObjects1[i].getBehavior("PlatformerObject").isMovingEvenALittle() ) {
        gdjs.GameCode.condition1IsTrue_0.val = true;
        gdjs.GameCode.GDCaptainObjects1[k] = gdjs.GameCode.GDCaptainObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDCaptainObjects1.length = k;}if ( gdjs.GameCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDCaptainObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDCaptainObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.GameCode.condition2IsTrue_0.val = true;
        gdjs.GameCode.GDCaptainObjects1[k] = gdjs.GameCode.GDCaptainObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDCaptainObjects1.length = k;}if ( gdjs.GameCode.condition2IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDCaptainObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDCaptainObjects1[i].getVariableBoolean(gdjs.GameCode.GDCaptainObjects1[i].getVariables().getFromIndex(3), false) ) {
        gdjs.GameCode.condition3IsTrue_0.val = true;
        gdjs.GameCode.GDCaptainObjects1[k] = gdjs.GameCode.GDCaptainObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDCaptainObjects1.length = k;}}
}
}
if (gdjs.GameCode.condition3IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDCaptainObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDCaptainObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDCaptainObjects1[i].setAnimationName("Run");
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Captain"), gdjs.GameCode.GDCaptainObjects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
gdjs.GameCode.condition2IsTrue_0.val = false;
gdjs.GameCode.condition3IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDCaptainObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDCaptainObjects1[i].getVariableBoolean(gdjs.GameCode.GDCaptainObjects1[i].getVariables().getFromIndex(2), false) ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDCaptainObjects1[k] = gdjs.GameCode.GDCaptainObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDCaptainObjects1.length = k;}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
gdjs.GameCode.condition1IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
}if ( gdjs.GameCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDCaptainObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDCaptainObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.GameCode.condition2IsTrue_0.val = true;
        gdjs.GameCode.GDCaptainObjects1[k] = gdjs.GameCode.GDCaptainObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDCaptainObjects1.length = k;}if ( gdjs.GameCode.condition2IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDCaptainObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDCaptainObjects1[i].getVariableBoolean(gdjs.GameCode.GDCaptainObjects1[i].getVariables().getFromIndex(3), false) ) {
        gdjs.GameCode.condition3IsTrue_0.val = true;
        gdjs.GameCode.GDCaptainObjects1[k] = gdjs.GameCode.GDCaptainObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDCaptainObjects1.length = k;}}
}
}
if (gdjs.GameCode.condition3IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDCaptainObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDCaptainObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDCaptainObjects1[i].setAnimationName("Jump");
}
}{for(var i = 0, len = gdjs.GameCode.GDCaptainObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDCaptainObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Captain"), gdjs.GameCode.GDCaptainObjects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
gdjs.GameCode.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDCaptainObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDCaptainObjects1[i].getBehavior("PlatformerObject").isFalling() ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDCaptainObjects1[k] = gdjs.GameCode.GDCaptainObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDCaptainObjects1.length = k;}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDCaptainObjects1.length;i<l;++i) {
    if ( !(gdjs.GameCode.GDCaptainObjects1[i].getVariableBoolean(gdjs.GameCode.GDCaptainObjects1[i].getVariables().getFromIndex(2), false)) ) {
        gdjs.GameCode.condition1IsTrue_0.val = true;
        gdjs.GameCode.GDCaptainObjects1[k] = gdjs.GameCode.GDCaptainObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDCaptainObjects1.length = k;}if ( gdjs.GameCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDCaptainObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDCaptainObjects1[i].getVariableBoolean(gdjs.GameCode.GDCaptainObjects1[i].getVariables().getFromIndex(3), false) ) {
        gdjs.GameCode.condition2IsTrue_0.val = true;
        gdjs.GameCode.GDCaptainObjects1[k] = gdjs.GameCode.GDCaptainObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDCaptainObjects1.length = k;}}
}
if (gdjs.GameCode.condition2IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("BigGuy"), gdjs.GameCode.GDBigGuyObjects1);
{for(var i = 0, len = gdjs.GameCode.GDBigGuyObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDBigGuyObjects1[i].setAnimationName("Fall");
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Captain"), gdjs.GameCode.GDCaptainObjects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "e");
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDCaptainObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDCaptainObjects1[i].getVariableBoolean(gdjs.GameCode.GDCaptainObjects1[i].getVariables().getFromIndex(3), false) ) {
        gdjs.GameCode.condition1IsTrue_0.val = true;
        gdjs.GameCode.GDCaptainObjects1[k] = gdjs.GameCode.GDCaptainObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDCaptainObjects1.length = k;}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDCaptainObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDCaptainObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDCaptainObjects1[i].setAnimationName("Attack");
}
}{for(var i = 0, len = gdjs.GameCode.GDCaptainObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDCaptainObjects1[i].setVariableBoolean(gdjs.GameCode.GDCaptainObjects1[i].getVariables().getFromIndex(2), true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Captain"), gdjs.GameCode.GDCaptainObjects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDCaptainObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDCaptainObjects1[i].isCurrentAnimationName("Attack") ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDCaptainObjects1[k] = gdjs.GameCode.GDCaptainObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDCaptainObjects1.length = k;}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDCaptainObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDCaptainObjects1[i].getAnimationFrame() == 5 ) {
        gdjs.GameCode.condition1IsTrue_0.val = true;
        gdjs.GameCode.GDCaptainObjects1[k] = gdjs.GameCode.GDCaptainObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDCaptainObjects1.length = k;}}
if (gdjs.GameCode.condition1IsTrue_0.val) {

{ //Subevents
gdjs.GameCode.eventsList4(runtimeScene);} //End of subevents
}

}


{


gdjs.GameCode.eventsList5(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("BigGuy"), gdjs.GameCode.GDBigGuyObjects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDBigGuyObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDBigGuyObjects1[i].getVariableNumber(gdjs.GameCode.GDBigGuyObjects1[i].getVariables().getFromIndex(0)) <= 0 ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDBigGuyObjects1[k] = gdjs.GameCode.GDBigGuyObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDBigGuyObjects1.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDBigGuyObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDBigGuyObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDBigGuyObjects1[i].setAnimationName("Dead Ground");
}
}{runtimeScene.getGame().getVariables().getFromIndex(6).setNumber(2);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Win Screen", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Captain"), gdjs.GameCode.GDCaptainObjects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDCaptainObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDCaptainObjects1[i].getVariableNumber(gdjs.GameCode.GDCaptainObjects1[i].getVariables().getFromIndex(0)) <= 0 ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDCaptainObjects1[k] = gdjs.GameCode.GDCaptainObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDCaptainObjects1.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDCaptainObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDCaptainObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDCaptainObjects1[i].setAnimationName("Dead Ground");
}
}{runtimeScene.getGame().getVariables().getFromIndex(6).setNumber(1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Win Screen", false);
}}

}


{


gdjs.GameCode.eventsList6(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("Captain"), gdjs.GameCode.GDCaptainObjects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDCaptainObjects1.length;i<l;++i) {
    if ( !(gdjs.GameCode.GDCaptainObjects1[i].getBehavior("InOnScreen").IsOnScreen(0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDCaptainObjects1[k] = gdjs.GameCode.GDCaptainObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDCaptainObjects1.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDCaptainObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDCaptainObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDCaptainObjects1[i].returnVariable(gdjs.GameCode.GDCaptainObjects1[i].getVariables().getFromIndex(0)).setNumber(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BigGuy"), gdjs.GameCode.GDBigGuyObjects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDBigGuyObjects1.length;i<l;++i) {
    if ( !(gdjs.GameCode.GDBigGuyObjects1[i].getBehavior("InOnScreen").IsOnScreen(0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDBigGuyObjects1[k] = gdjs.GameCode.GDBigGuyObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDBigGuyObjects1.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDBigGuyObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDBigGuyObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDBigGuyObjects1[i].returnVariable(gdjs.GameCode.GDBigGuyObjects1[i].getVariables().getFromIndex(0)).setNumber(0);
}
}}

}


{



}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getVariables().getFromIndex(0), false);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("MenuPopupBackground"), gdjs.GameCode.GDMenuPopupBackgroundObjects1);
gdjs.copyArray(runtimeScene.getObjects("button_mainmenu"), gdjs.GameCode.GDbutton_95mainmenuObjects1);
gdjs.copyArray(runtimeScene.getObjects("button_quit"), gdjs.GameCode.GDbutton_95quitObjects1);
gdjs.copyArray(runtimeScene.getObjects("button_resume"), gdjs.GameCode.GDbutton_95resumeObjects1);
gdjs.copyArray(runtimeScene.getObjects("overlay"), gdjs.GameCode.GDoverlayObjects1);
{gdjs.evtTools.runtimeScene.setTimeScale(runtimeScene, 1);
}{for(var i = 0, len = gdjs.GameCode.GDoverlayObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDoverlayObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.GameCode.GDbutton_95quitObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDbutton_95quitObjects1[i].setPosition(1000,1000);
}
}{for(var i = 0, len = gdjs.GameCode.GDbutton_95resumeObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDbutton_95resumeObjects1[i].setPosition(1000,1000);
}
}{for(var i = 0, len = gdjs.GameCode.GDbutton_95mainmenuObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDbutton_95mainmenuObjects1[i].setPosition(1000,1000);
}
}{for(var i = 0, len = gdjs.GameCode.GDMenuPopupBackgroundObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDMenuPopupBackgroundObjects1[i].setPosition(1000,1000);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("PauseButton2"), gdjs.GameCode.GDPauseButton2Objects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
gdjs.GameCode.condition2IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPauseButton2Objects1Objects, runtimeScene, true, false);
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
gdjs.GameCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.GameCode.condition1IsTrue_0.val ) {
{
{gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition2IsTrue_0;
gdjs.GameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(13342220);
}
}}
}
if (gdjs.GameCode.condition2IsTrue_0.val) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getVariables().getFromIndex(0), true);
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getVariables().getFromIndex(0), true);
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
{gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition1IsTrue_0;
gdjs.GameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(13341628);
}
}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("MenuPopupBackground"), gdjs.GameCode.GDMenuPopupBackgroundObjects1);
gdjs.copyArray(runtimeScene.getObjects("button_mainmenu"), gdjs.GameCode.GDbutton_95mainmenuObjects1);
gdjs.copyArray(runtimeScene.getObjects("button_quit"), gdjs.GameCode.GDbutton_95quitObjects1);
gdjs.copyArray(runtimeScene.getObjects("button_resume"), gdjs.GameCode.GDbutton_95resumeObjects1);
gdjs.GameCode.GDoverlayObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDoverlayObjects1Objects, -(100), -(100), "UI");
}{gdjs.evtTools.runtimeScene.setTimeScale(runtimeScene, 0);
}{for(var i = 0, len = gdjs.GameCode.GDoverlayObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDoverlayObjects1[i].setOpacity(1000);
}
}{for(var i = 0, len = gdjs.GameCode.GDMenuPopupBackgroundObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDMenuPopupBackgroundObjects1[i].setWidth(451.5);
}
}{for(var i = 0, len = gdjs.GameCode.GDMenuPopupBackgroundObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDMenuPopupBackgroundObjects1[i].setHeight(301);
}
}{for(var i = 0, len = gdjs.GameCode.GDMenuPopupBackgroundObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDMenuPopupBackgroundObjects1[i].setPosition(266,130);
}
}{for(var i = 0, len = gdjs.GameCode.GDbutton_95resumeObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDbutton_95resumeObjects1[i].setPosition(439,195);
}
}{for(var i = 0, len = gdjs.GameCode.GDbutton_95mainmenuObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDbutton_95mainmenuObjects1[i].setPosition(413,262);
}
}{for(var i = 0, len = gdjs.GameCode.GDbutton_95quitObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDbutton_95quitObjects1[i].setPosition(455,331);
}
}{for(var i = 0, len = gdjs.GameCode.GDoverlayObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDoverlayObjects1[i].setZOrder(10);
}
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("MenuPopupBackground"), gdjs.GameCode.GDMenuPopupBackgroundObjects1);
gdjs.copyArray(runtimeScene.getObjects("button_mainmenu"), gdjs.GameCode.GDbutton_95mainmenuObjects1);
gdjs.copyArray(runtimeScene.getObjects("button_quit"), gdjs.GameCode.GDbutton_95quitObjects1);
gdjs.copyArray(runtimeScene.getObjects("button_resume"), gdjs.GameCode.GDbutton_95resumeObjects1);
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "Komiku_-_12_-_Bicycle.mp3", 1, true, 20, 1);
}{gdjs.evtTools.window.setFullScreen(runtimeScene, false, true);
}{for(var i = 0, len = gdjs.GameCode.GDMenuPopupBackgroundObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDMenuPopupBackgroundObjects1[i].setPosition(1000,1000);
}
}{for(var i = 0, len = gdjs.GameCode.GDbutton_95mainmenuObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDbutton_95mainmenuObjects1[i].setPosition(1000,1000);
}
}{for(var i = 0, len = gdjs.GameCode.GDbutton_95resumeObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDbutton_95resumeObjects1[i].setPosition(1000,1000);
}
}{for(var i = 0, len = gdjs.GameCode.GDbutton_95quitObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDbutton_95quitObjects1[i].setPosition(1000,1000);
}
}}

}


{

gdjs.GameCode.GDBigGuyObjects1.length = 0;

gdjs.GameCode.GDCaptainObjects1.length = 0;


gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
{gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition0IsTrue_0;
gdjs.GameCode.GDBigGuyObjects1_1final.length = 0;gdjs.GameCode.GDCaptainObjects1_1final.length = 0;gdjs.GameCode.condition0IsTrue_1.val = false;
gdjs.GameCode.condition1IsTrue_1.val = false;
{
gdjs.copyArray(runtimeScene.getObjects("BigGuy"), gdjs.GameCode.GDBigGuyObjects2);
for(var i = 0, k = 0, l = gdjs.GameCode.GDBigGuyObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDBigGuyObjects2[i].getVariableNumber(gdjs.GameCode.GDBigGuyObjects2[i].getVariables().getFromIndex(0)) < 31 ) {
        gdjs.GameCode.condition0IsTrue_1.val = true;
        gdjs.GameCode.GDBigGuyObjects2[k] = gdjs.GameCode.GDBigGuyObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDBigGuyObjects2.length = k;if( gdjs.GameCode.condition0IsTrue_1.val ) {
    gdjs.GameCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.GameCode.GDBigGuyObjects2.length;j<jLen;++j) {
        if ( gdjs.GameCode.GDBigGuyObjects1_1final.indexOf(gdjs.GameCode.GDBigGuyObjects2[j]) === -1 )
            gdjs.GameCode.GDBigGuyObjects1_1final.push(gdjs.GameCode.GDBigGuyObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Captain"), gdjs.GameCode.GDCaptainObjects2);
for(var i = 0, k = 0, l = gdjs.GameCode.GDCaptainObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDCaptainObjects2[i].getVariableNumber(gdjs.GameCode.GDCaptainObjects2[i].getVariables().getFromIndex(0)) < 31 ) {
        gdjs.GameCode.condition1IsTrue_1.val = true;
        gdjs.GameCode.GDCaptainObjects2[k] = gdjs.GameCode.GDCaptainObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDCaptainObjects2.length = k;if( gdjs.GameCode.condition1IsTrue_1.val ) {
    gdjs.GameCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.GameCode.GDCaptainObjects2.length;j<jLen;++j) {
        if ( gdjs.GameCode.GDCaptainObjects1_1final.indexOf(gdjs.GameCode.GDCaptainObjects2[j]) === -1 )
            gdjs.GameCode.GDCaptainObjects1_1final.push(gdjs.GameCode.GDCaptainObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.GameCode.GDBigGuyObjects1_1final, gdjs.GameCode.GDBigGuyObjects1);
gdjs.copyArray(gdjs.GameCode.GDCaptainObjects1_1final, gdjs.GameCode.GDCaptainObjects1);
}
}
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
{gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition1IsTrue_0;
gdjs.GameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(13347092);
}
}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
gdjs.GameCode.GDUpgradedPotionOrangeObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDUpgradedPotionOrangeObjects1Objects, 360, 0, "");
}{for(var i = 0, len = gdjs.GameCode.GDUpgradedPotionOrangeObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDUpgradedPotionOrangeObjects1[i].setScale(3);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("MusicButton"), gdjs.GameCode.GDMusicButtonObjects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDMusicButtonObjects1Objects, runtimeScene, true, false);
}if (gdjs.GameCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.GameCode.eventsList8(runtimeScene);} //End of subevents
}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getVariables().getFromIndex(0), true);
}if (gdjs.GameCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.GameCode.eventsList12(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("BigGuy"), gdjs.GameCode.GDBigGuyObjects1);
gdjs.copyArray(runtimeScene.getObjects("UpgradedPotionOrange"), gdjs.GameCode.GDUpgradedPotionOrangeObjects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDBigGuyObjects1Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDUpgradedPotionOrangeObjects1Objects, false, runtimeScene, false);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDBigGuyObjects1 */
/* Reuse gdjs.GameCode.GDUpgradedPotionOrangeObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDUpgradedPotionOrangeObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDUpgradedPotionOrangeObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.GameCode.GDBigGuyObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDBigGuyObjects1[i].returnVariable(gdjs.GameCode.GDBigGuyObjects1[i].getVariables().getFromIndex(0)).add(30);
}
}{for(var i = 0, len = gdjs.GameCode.GDBigGuyObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDBigGuyObjects1[i].returnVariable(gdjs.GameCode.GDBigGuyObjects1[i].getVariables().getFromIndex(2)).add(3);
}
}{for(var i = 0, len = gdjs.GameCode.GDBigGuyObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDBigGuyObjects1[i].setEffectStringParameter("Effect", "color", "Black");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Captain"), gdjs.GameCode.GDCaptainObjects1);
gdjs.copyArray(runtimeScene.getObjects("UpgradedPotionOrange"), gdjs.GameCode.GDUpgradedPotionOrangeObjects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDCaptainObjects1Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDUpgradedPotionOrangeObjects1Objects, false, runtimeScene, false);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDCaptainObjects1 */
/* Reuse gdjs.GameCode.GDUpgradedPotionOrangeObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDUpgradedPotionOrangeObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDUpgradedPotionOrangeObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.GameCode.GDCaptainObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDCaptainObjects1[i].returnVariable(gdjs.GameCode.GDCaptainObjects1[i].getVariables().getFromIndex(0)).add(30);
}
}{for(var i = 0, len = gdjs.GameCode.GDCaptainObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDCaptainObjects1[i].returnVariable(gdjs.GameCode.GDCaptainObjects1[i].getVariables().getFromIndex(4)).add(5);
}
}{for(var i = 0, len = gdjs.GameCode.GDCaptainObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDCaptainObjects1[i].setEffectStringParameter("Effect", "color", "Black");
}
}}

}


};

gdjs.GameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameCode.GDBigGuyObjects1.length = 0;
gdjs.GameCode.GDBigGuyObjects2.length = 0;
gdjs.GameCode.GDBigGuyObjects3.length = 0;
gdjs.GameCode.GDMergedFullBackgroundObjects1.length = 0;
gdjs.GameCode.GDMergedFullBackgroundObjects2.length = 0;
gdjs.GameCode.GDMergedFullBackgroundObjects3.length = 0;
gdjs.GameCode.GDMergedFullBackground2Objects1.length = 0;
gdjs.GameCode.GDMergedFullBackground2Objects2.length = 0;
gdjs.GameCode.GDMergedFullBackground2Objects3.length = 0;
gdjs.GameCode.GDCornerPlatformObjects1.length = 0;
gdjs.GameCode.GDCornerPlatformObjects2.length = 0;
gdjs.GameCode.GDCornerPlatformObjects3.length = 0;
gdjs.GameCode.GDPlatform2Objects1.length = 0;
gdjs.GameCode.GDPlatform2Objects2.length = 0;
gdjs.GameCode.GDPlatform2Objects3.length = 0;
gdjs.GameCode.GDCaptainObjects1.length = 0;
gdjs.GameCode.GDCaptainObjects2.length = 0;
gdjs.GameCode.GDCaptainObjects3.length = 0;
gdjs.GameCode.GDHitBoxPlayer1Objects1.length = 0;
gdjs.GameCode.GDHitBoxPlayer1Objects2.length = 0;
gdjs.GameCode.GDHitBoxPlayer1Objects3.length = 0;
gdjs.GameCode.GDPlayer2HealthDisplayObjects1.length = 0;
gdjs.GameCode.GDPlayer2HealthDisplayObjects2.length = 0;
gdjs.GameCode.GDPlayer2HealthDisplayObjects3.length = 0;
gdjs.GameCode.GDHitboxPlayer2Objects1.length = 0;
gdjs.GameCode.GDHitboxPlayer2Objects2.length = 0;
gdjs.GameCode.GDHitboxPlayer2Objects3.length = 0;
gdjs.GameCode.GDPlayer1HealthDisplayObjects1.length = 0;
gdjs.GameCode.GDPlayer1HealthDisplayObjects2.length = 0;
gdjs.GameCode.GDPlayer1HealthDisplayObjects3.length = 0;
gdjs.GameCode.GDPauseButton2Objects1.length = 0;
gdjs.GameCode.GDPauseButton2Objects2.length = 0;
gdjs.GameCode.GDPauseButton2Objects3.length = 0;
gdjs.GameCode.GDPlatform1Objects1.length = 0;
gdjs.GameCode.GDPlatform1Objects2.length = 0;
gdjs.GameCode.GDPlatform1Objects3.length = 0;
gdjs.GameCode.GDBigGuy2Objects1.length = 0;
gdjs.GameCode.GDBigGuy2Objects2.length = 0;
gdjs.GameCode.GDBigGuy2Objects3.length = 0;
gdjs.GameCode.GDCaptain2Objects1.length = 0;
gdjs.GameCode.GDCaptain2Objects2.length = 0;
gdjs.GameCode.GDCaptain2Objects3.length = 0;
gdjs.GameCode.GDBlueBoxObjects1.length = 0;
gdjs.GameCode.GDBlueBoxObjects2.length = 0;
gdjs.GameCode.GDBlueBoxObjects3.length = 0;
gdjs.GameCode.GDBlueBox2Objects1.length = 0;
gdjs.GameCode.GDBlueBox2Objects2.length = 0;
gdjs.GameCode.GDBlueBox2Objects3.length = 0;
gdjs.GameCode.GDNewSpriteObjects1.length = 0;
gdjs.GameCode.GDNewSpriteObjects2.length = 0;
gdjs.GameCode.GDNewSpriteObjects3.length = 0;
gdjs.GameCode.GDMusicButtonObjects1.length = 0;
gdjs.GameCode.GDMusicButtonObjects2.length = 0;
gdjs.GameCode.GDMusicButtonObjects3.length = 0;
gdjs.GameCode.GDoverlayObjects1.length = 0;
gdjs.GameCode.GDoverlayObjects2.length = 0;
gdjs.GameCode.GDoverlayObjects3.length = 0;
gdjs.GameCode.GDNewSprite2Objects1.length = 0;
gdjs.GameCode.GDNewSprite2Objects2.length = 0;
gdjs.GameCode.GDNewSprite2Objects3.length = 0;
gdjs.GameCode.GDHealthKitObjects1.length = 0;
gdjs.GameCode.GDHealthKitObjects2.length = 0;
gdjs.GameCode.GDHealthKitObjects3.length = 0;
gdjs.GameCode.GDUpgradedPotionOrangeObjects1.length = 0;
gdjs.GameCode.GDUpgradedPotionOrangeObjects2.length = 0;
gdjs.GameCode.GDUpgradedPotionOrangeObjects3.length = 0;
gdjs.GameCode.GDMenuPopupBackgroundObjects1.length = 0;
gdjs.GameCode.GDMenuPopupBackgroundObjects2.length = 0;
gdjs.GameCode.GDMenuPopupBackgroundObjects3.length = 0;
gdjs.GameCode.GDbutton_95resumeObjects1.length = 0;
gdjs.GameCode.GDbutton_95resumeObjects2.length = 0;
gdjs.GameCode.GDbutton_95resumeObjects3.length = 0;
gdjs.GameCode.GDbutton_95mainmenuObjects1.length = 0;
gdjs.GameCode.GDbutton_95mainmenuObjects2.length = 0;
gdjs.GameCode.GDbutton_95mainmenuObjects3.length = 0;
gdjs.GameCode.GDbutton_95quitObjects1.length = 0;
gdjs.GameCode.GDbutton_95quitObjects2.length = 0;
gdjs.GameCode.GDbutton_95quitObjects3.length = 0;
gdjs.GameCode.GDNewSprite3Objects1.length = 0;
gdjs.GameCode.GDNewSprite3Objects2.length = 0;
gdjs.GameCode.GDNewSprite3Objects3.length = 0;

gdjs.GameCode.eventsList13(runtimeScene);
return;

}

gdjs['GameCode'] = gdjs.GameCode;
