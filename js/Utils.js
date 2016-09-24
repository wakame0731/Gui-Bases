function base64ToBitmap(base64Image){
	var byteData=Base64.decode(base64Image,0);
	var bitmap=BitmapFactory.decodeByteArray(byteData,0,byteData.length);
	return bitmap;
}

function getDisplayMetrics(){
	var displayMetrics=new DisplayMetrics();
	activity.getWindowManager().getDefaultDisplay().getMetrics(displayMetrics);
	return displayMetrics;
}

function getRandomString(len){
	var seed="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
	var seedLength=seed.length;
	var randomString="";
	for(var i=len;i>0;i--){
		randomString+=seed[Math.floor(Math.random()*seedLength)];
	}
	return randomString;
}

var mcpe={
	deprecated:false,
	density:0,
	setDensity:function(){
		var displayMetrics=getDisplayMetrics();
		var densityTemp=Math.ceil(displayMetrics.density);
		if(densityTemp<2){
			densityTemp=2;
			this.deprecated=true;
		}
		this.density=densityTemp;
	},
	loadMods:function(){
		var task=new Thread({run:function(){
			var scripts=ScriptManager.scripts;
			for(var loop=0;loop<scripts.size();loop++){
				var script=scripts.get(loop);
				// if(script.name=="Gui Bases.js"){
				// 	continue;
				// }
				if(ModDatas.loadModNameList.indexOf(script.name)==-1){
					var scriptable=script.scope;
					ScriptableObject.putProperty(scriptable,"GB",GB);
					ScriptableObject.putProperty(scriptable,"UpdatedInformation",UpdatedInformation);
					ScriptableObject.putProperty(scriptable,"GuiComponent",GuiComponent);
					ScriptableObject.putProperty(scriptable,"HeaderType",HeaderType);
					ScriptableObject.putProperty(scriptable,"SlotDatas",SlotDatas);
					ScriptableObject.putProperty(scriptable,"ItemInstance",ItemInstance);
					ScriptableObject.putProperty(scriptable,"HungerGage",HungerGage);
					ScriptableObject.putProperty(scriptable,"ImageGenerator",ImageGenerator);
					ScriptableObject.putProperty(scriptable,"Recipe",Recipe);
					ScriptableObject.putProperty(scriptable,"OreGenerator",OreGenerator);
					ScriptableObject.putProperty(scriptable,"LevelData",LevelData);
					ScriptableObject.putProperty(scriptable,"NinePatchChunk",NinePatchChunk);
					//ScriptableObject.putProperty(scriptable,"",);
					ModDatas.loadModNameList.push(script.name);
				}
			}
			if(ModDatas.loadMode){
				Thread.sleep(500);
				mcpe.loadMods();
			}
		}}).start();
	},
};