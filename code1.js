gdjs.Game_32Scene_321Code = {};
gdjs.Game_32Scene_321Code.GDBackgroundV2Objects1= [];
gdjs.Game_32Scene_321Code.GDBackgroundV2Objects2= [];
gdjs.Game_32Scene_321Code.GDBackgroundV2Objects3= [];
gdjs.Game_32Scene_321Code.GDPlayerObjects1= [];
gdjs.Game_32Scene_321Code.GDPlayerObjects2= [];
gdjs.Game_32Scene_321Code.GDPlayerObjects3= [];
gdjs.Game_32Scene_321Code.GDCrateObjects1= [];
gdjs.Game_32Scene_321Code.GDCrateObjects2= [];
gdjs.Game_32Scene_321Code.GDCrateObjects3= [];
gdjs.Game_32Scene_321Code.GDGraveyardTileObjects1= [];
gdjs.Game_32Scene_321Code.GDGraveyardTileObjects2= [];
gdjs.Game_32Scene_321Code.GDGraveyardTileObjects3= [];
gdjs.Game_32Scene_321Code.GDEnemyObjects1= [];
gdjs.Game_32Scene_321Code.GDEnemyObjects2= [];
gdjs.Game_32Scene_321Code.GDEnemyObjects3= [];
gdjs.Game_32Scene_321Code.GDLeftArrowObjects1= [];
gdjs.Game_32Scene_321Code.GDLeftArrowObjects2= [];
gdjs.Game_32Scene_321Code.GDLeftArrowObjects3= [];

gdjs.Game_32Scene_321Code.conditionTrue_0 = {val:false};
gdjs.Game_32Scene_321Code.condition0IsTrue_0 = {val:false};
gdjs.Game_32Scene_321Code.condition1IsTrue_0 = {val:false};
gdjs.Game_32Scene_321Code.condition2IsTrue_0 = {val:false};


gdjs.Game_32Scene_321Code.eventsList0 = function(runtimeScene) {

};gdjs.Game_32Scene_321Code.mapOfGDgdjs_46Game_9532Scene_95321Code_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Game_32Scene_321Code.GDPlayerObjects1});
gdjs.Game_32Scene_321Code.mapOfGDgdjs_46Game_9532Scene_95321Code_46GDGraveyardTileObjects1Objects = Hashtable.newFrom({"GraveyardTile": gdjs.Game_32Scene_321Code.GDGraveyardTileObjects1});
gdjs.Game_32Scene_321Code.eventsList1 = function(runtimeScene) {

{


gdjs.Game_32Scene_321Code.condition0IsTrue_0.val = false;
{
gdjs.Game_32Scene_321Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
}if (gdjs.Game_32Scene_321Code.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.Game_32Scene_321Code.GDPlayerObjects1, gdjs.Game_32Scene_321Code.GDPlayerObjects2);

{for(var i = 0, len = gdjs.Game_32Scene_321Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Game_32Scene_321Code.GDPlayerObjects2[i].setAnimationName("Jump");
}
}}

}


{


gdjs.Game_32Scene_321Code.condition0IsTrue_0.val = false;
{
gdjs.Game_32Scene_321Code.condition0IsTrue_0.val = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space"));
}if (gdjs.Game_32Scene_321Code.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.Game_32Scene_321Code.GDPlayerObjects1, gdjs.Game_32Scene_321Code.GDPlayerObjects2);

{for(var i = 0, len = gdjs.Game_32Scene_321Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Game_32Scene_321Code.GDPlayerObjects2[i].setAnimationName("Walk");
}
}}

}


{


gdjs.Game_32Scene_321Code.condition0IsTrue_0.val = false;
gdjs.Game_32Scene_321Code.condition1IsTrue_0.val = false;
{
gdjs.Game_32Scene_321Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if ( gdjs.Game_32Scene_321Code.condition0IsTrue_0.val ) {
{
gdjs.Game_32Scene_321Code.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(1), false);
}}
if (gdjs.Game_32Scene_321Code.condition1IsTrue_0.val) {
gdjs.copyArray(gdjs.Game_32Scene_321Code.GDPlayerObjects1, gdjs.Game_32Scene_321Code.GDPlayerObjects2);

{for(var i = 0, len = gdjs.Game_32Scene_321Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Game_32Scene_321Code.GDPlayerObjects2[i].flipX(false);
}
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(1), true);
}}

}


{


gdjs.Game_32Scene_321Code.condition0IsTrue_0.val = false;
gdjs.Game_32Scene_321Code.condition1IsTrue_0.val = false;
{
gdjs.Game_32Scene_321Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if ( gdjs.Game_32Scene_321Code.condition0IsTrue_0.val ) {
{
gdjs.Game_32Scene_321Code.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(1), true);
}}
if (gdjs.Game_32Scene_321Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Game_32Scene_321Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Game_32Scene_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Game_32Scene_321Code.GDPlayerObjects1[i].flipX(true);
}
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(1), false);
}}

}


};gdjs.Game_32Scene_321Code.mapOfGDgdjs_46Game_9532Scene_95321Code_46GDEnemyObjects1Objects = Hashtable.newFrom({"Enemy": gdjs.Game_32Scene_321Code.GDEnemyObjects1});
gdjs.Game_32Scene_321Code.mapOfGDgdjs_46Game_9532Scene_95321Code_46GDLeftArrowObjects1Objects = Hashtable.newFrom({"LeftArrow": gdjs.Game_32Scene_321Code.GDLeftArrowObjects1});
gdjs.Game_32Scene_321Code.eventsList2 = function(runtimeScene) {

{


gdjs.Game_32Scene_321Code.eventsList0(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("GraveyardTile"), gdjs.Game_32Scene_321Code.GDGraveyardTileObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32Scene_321Code.GDPlayerObjects1);

gdjs.Game_32Scene_321Code.condition0IsTrue_0.val = false;
gdjs.Game_32Scene_321Code.condition1IsTrue_0.val = false;
{
gdjs.Game_32Scene_321Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Game_32Scene_321Code.mapOfGDgdjs_46Game_9532Scene_95321Code_46GDPlayerObjects1Objects, gdjs.Game_32Scene_321Code.mapOfGDgdjs_46Game_9532Scene_95321Code_46GDGraveyardTileObjects1Objects, false, runtimeScene, false);
}if ( gdjs.Game_32Scene_321Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Game_32Scene_321Code.GDPlayerObjects1.length;i<l;++i) {
    if ( !(gdjs.Game_32Scene_321Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").isMovingEvenALittle()) ) {
        gdjs.Game_32Scene_321Code.condition1IsTrue_0.val = true;
        gdjs.Game_32Scene_321Code.GDPlayerObjects1[k] = gdjs.Game_32Scene_321Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Game_32Scene_321Code.GDPlayerObjects1.length = k;}}
if (gdjs.Game_32Scene_321Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Game_32Scene_321Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Game_32Scene_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Game_32Scene_321Code.GDPlayerObjects1[i].setAnimationName("Idle");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32Scene_321Code.GDPlayerObjects1);

gdjs.Game_32Scene_321Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Game_32Scene_321Code.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Game_32Scene_321Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").isMovingEvenALittle() ) {
        gdjs.Game_32Scene_321Code.condition0IsTrue_0.val = true;
        gdjs.Game_32Scene_321Code.GDPlayerObjects1[k] = gdjs.Game_32Scene_321Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Game_32Scene_321Code.GDPlayerObjects1.length = k;}if (gdjs.Game_32Scene_321Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Game_32Scene_321Code.eventsList1(runtimeScene);} //End of subevents
}

}


{



}


{


gdjs.Game_32Scene_321Code.condition0IsTrue_0.val = false;
{
gdjs.Game_32Scene_321Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "e");
}if (gdjs.Game_32Scene_321Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32Scene_321Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Game_32Scene_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Game_32Scene_321Code.GDPlayerObjects1[i].setAnimationName("Attack");
}
}}

}


{


gdjs.Game_32Scene_321Code.condition0IsTrue_0.val = false;
{
gdjs.Game_32Scene_321Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Game_32Scene_321Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32Scene_321Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Game_32Scene_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Game_32Scene_321Code.GDPlayerObjects1[i].flipX(true);
}
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(1), false);
}{runtimeScene.getGame().getVariables().getFromIndex(2).setString("right");
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32Scene_321Code.GDPlayerObjects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.Game_32Scene_321Code.GDPlayerObjects1.length !== 0 ? gdjs.Game_32Scene_321Code.GDPlayerObjects1[0] : null), true, "", 0);
}}

}


{



}


{


gdjs.Game_32Scene_321Code.condition0IsTrue_0.val = false;
{
gdjs.Game_32Scene_321Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 0;
}if (gdjs.Game_32Scene_321Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.Game_32Scene_321Code.GDEnemyObjects1);
{for(var i = 0, len = gdjs.Game_32Scene_321Code.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.Game_32Scene_321Code.GDEnemyObjects1[i].addPolarForce(gdjs.evtTools.camera.getCameraBorderLeft(runtimeScene, "right", 0), 50, 0);
}
}{for(var i = 0, len = gdjs.Game_32Scene_321Code.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.Game_32Scene_321Code.GDEnemyObjects1[i].setAnimationName("Walk");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.Game_32Scene_321Code.GDEnemyObjects1);
gdjs.copyArray(runtimeScene.getObjects("LeftArrow"), gdjs.Game_32Scene_321Code.GDLeftArrowObjects1);

gdjs.Game_32Scene_321Code.condition0IsTrue_0.val = false;
{
gdjs.Game_32Scene_321Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Game_32Scene_321Code.mapOfGDgdjs_46Game_9532Scene_95321Code_46GDEnemyObjects1Objects, gdjs.Game_32Scene_321Code.mapOfGDgdjs_46Game_9532Scene_95321Code_46GDLeftArrowObjects1Objects, false, runtimeScene, true);
}if (gdjs.Game_32Scene_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Game_32Scene_321Code.GDEnemyObjects1 */
{for(var i = 0, len = gdjs.Game_32Scene_321Code.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.Game_32Scene_321Code.GDEnemyObjects1[i].flipX(true);
}
}}

}


{


{
}

}


};

gdjs.Game_32Scene_321Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Game_32Scene_321Code.GDBackgroundV2Objects1.length = 0;
gdjs.Game_32Scene_321Code.GDBackgroundV2Objects2.length = 0;
gdjs.Game_32Scene_321Code.GDBackgroundV2Objects3.length = 0;
gdjs.Game_32Scene_321Code.GDPlayerObjects1.length = 0;
gdjs.Game_32Scene_321Code.GDPlayerObjects2.length = 0;
gdjs.Game_32Scene_321Code.GDPlayerObjects3.length = 0;
gdjs.Game_32Scene_321Code.GDCrateObjects1.length = 0;
gdjs.Game_32Scene_321Code.GDCrateObjects2.length = 0;
gdjs.Game_32Scene_321Code.GDCrateObjects3.length = 0;
gdjs.Game_32Scene_321Code.GDGraveyardTileObjects1.length = 0;
gdjs.Game_32Scene_321Code.GDGraveyardTileObjects2.length = 0;
gdjs.Game_32Scene_321Code.GDGraveyardTileObjects3.length = 0;
gdjs.Game_32Scene_321Code.GDEnemyObjects1.length = 0;
gdjs.Game_32Scene_321Code.GDEnemyObjects2.length = 0;
gdjs.Game_32Scene_321Code.GDEnemyObjects3.length = 0;
gdjs.Game_32Scene_321Code.GDLeftArrowObjects1.length = 0;
gdjs.Game_32Scene_321Code.GDLeftArrowObjects2.length = 0;
gdjs.Game_32Scene_321Code.GDLeftArrowObjects3.length = 0;

gdjs.Game_32Scene_321Code.eventsList2(runtimeScene);
return;

}

gdjs['Game_32Scene_321Code'] = gdjs.Game_32Scene_321Code;
