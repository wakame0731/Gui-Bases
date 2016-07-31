function create(){
	mcpe.setDensity();
	var density=mcpe.density;
	var imageDatas=["iVBORw0KGgoAAAANSUhEUgAAACAAAAAECAIAAABgJaqDAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4AQRDDUkUJ34GwAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAAFUlEQVQY02Nk+M9AU8DEwDBqAX4AAIghAQeTsglpAAAAAElFTkSuQmCC",
	"iVBORw0KGgoAAAANSUhEUgAAACAAAAAECAIAAABgJaqDAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4AQRDDUFHPToRQAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAAFklEQVQY02NMTkxmoCVgYqAxGPoWAADEcQEvoOlRyAAAAABJRU5ErkJggg==",
	"iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAIAAAACDbGyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4AUOEBkL4luagQAAACNJREFUCNdjYEACkjKSjAwMDIaGhhD+i9cvmBhQATqfAU0/AMBPA/Bc+uuZAAAAAElFTkSuQmCC",
	"iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAABuwAAAbsBOuzj4gAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAPvSURBVFiFxZddTJtVGMf/PS3t20+obfkuLawKGzSIncFF3erYSDYvzLhxxrgmk5kZEy+83I0XC8tUjAkhC9GoAV1wBrIFtgRINsJ0FSkMBhkQa1tWRge0dS1Cafv2fesFrUHooPJRfsl7dZ73/P/nyTnPeQ4HSVJd//5hmVr5UYZG9bI0T6kSysUUX0zx6GCYCfsDtP+x1++ZmJ5yWaxd/Q0dTQDmAEQ3m5ezWcCbjR+aNMayi5mlBfnJxAOA3+leGmm+3d1b13YBoZAVAPu/DVTX1xq0xtIfcg26kmSF1+KZnF7o/6rj28Gvu74AMIsEGeEm+vFEw7mzFaaqdnlRds5WxQFApEwX6E4efIVKF1faeoYHAHjXmlhnoKblk0svmqo+40uEaVsVXg2HcDjqQyUaRXHe0Yl2swVrMvEfAycazr1bbjpWz+OnJczMdsjSa5WCdJHe1j08AMAdN/GvUHV9raHCVHWDL6H4Oy0eJ6+yOC/g8StcFusQAB8AkPig1lj2IyWXULslDgCEcDhHPn3nlDQrwwiAAmIZONl4/r2StyprsY0Nlyx8McXl8LgaW/d9M4A5AgBao74uFeJxKs4e18vyFa8CEJNjl8+8FisyKYOSibjlZ6reBqAlzxXlfIwUrj5O4Rv6EgCFRFagOphqcQDIMegyAGQSaZ5StRcGhHIJV3VAXURECumuHr2NyCjMLiBcwc5XvWThiwUywtKRZ16Vuw0dCDIk6FsK75WBxSc+L1mY9izshXgkGGZnH9htxDP5eGovDLiGbMtshHUTl8XatRcGHvWNzQOYI/0NHU1+p3spleJMhImOXe27B8BBAMyNNN/uTqWBh613PfPjzj4AMwRAtLeu7YL7odOXCnE6EGL7Lv7UA2AQwOJKQxIKWX9v6PyeoZlN+/jtYv7y+iOv1dUFwAEgEq+CUdfQn6M8Aa9cc7hs326JT1z/7enN81euALiFlb6QXV2Glxx3RocUxflHs/SaHb+gZizWwLWaSy1MiG5FbPXA+rbcO9FuHuDy0/bnHypRE0J2pE/4o3PA93NNXXPQH2gBMAkgFB9bayAKYNZx50H/sndBlfuS7nm+VLjly4oOhNhfL7dNdX7Q2BQJ0q0AJgAEV8ckmjwKwOuyWAfvf9czzNBMbpZem50m5JMEsQlhIkx0/Nov3rbTn98Ybzd/A+AmADtWrTzORinmABAAeEGmVrxeYTp+WnOkdH+OQZchlEvWGY8Ew+yTYfvyVO/o/NjVvnvz4867WDlqdgCLAJhniWwGASACUBj7MlUH1EUKXW4hT0RJwn8H6MW5p3/NjthtbIR1Y+VZ7gAwExOOYINn+j8y6Wi8OAzLWwAAAABJRU5ErkJggg==",
	"iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAIAAAD91JpzAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4AUPBTEktoYPjAAAABJJREFUCNdj+M/wnwEC/jP8BwAb8gP9+g6D2QAAAABJRU5ErkJggg=="];
	imageBuffer=new Array();
	imageBuffer["spritesheetBitmap"]=BitmapFactory.decodeStream(ModPE.openInputStreamFromTexturePack("images/gui/spritesheet.png"));

	var imageValue1=imageBuffer["spritesheetBitmap"].getWidth()/256;

	imageBuffer["backgroundBitmap"]=CreateBitmap.trimmingBitmap(imageBuffer["spritesheetBitmap"],0,0,16,16,density,imageValue1);

	imageBuffer["closeButton_Off_Drawable"]=CreateBitmap.trimmingBitmapDrawable(imageBuffer["spritesheetBitmap"],60,0,18,18,density,imageValue1);
	imageBuffer["closeButton_On_Drawable"]=CreateBitmap.trimmingBitmapDrawable(imageBuffer["spritesheetBitmap"],78,0,18,18,density,imageValue1);

	imageBuffer["button_Off_Bitmap"]=CreateBitmap.trimmingBitmap(imageBuffer["spritesheetBitmap"],8,32,8,8,density,imageValue1);

	imageBuffer["button_On_Bitmap"]=CreateBitmap.trimmingBitmap(imageBuffer["spritesheetBitmap"],0,32,8,8,density,imageValue1);

	var imageValue2=density;
	var paint6=new Paint();

	var rect6_1=new Rect(0,0,15*imageValue1,15*imageValue1);
	rect6_1.offset(40*imageValue1,20*imageValue1);
	var rect6_2=new Rect(0,0,30*imageValue2,30*imageValue2);
	var bitmap6=Bitmap.createBitmap(30*imageValue2,30*imageValue2,Bitmap.Config.ARGB_8888);
	var canvas6=new Canvas(bitmap6);
	canvas6.translate(15*imageValue2,15*imageValue2);
	canvas6.rotate(90);
	canvas6.translate(-15*imageValue2,-15*imageValue2);
	canvas6.drawBitmap(imageBuffer["spritesheetBitmap"],rect6_1,rect6_2,paint6);
	imageBuffer["fire_backgroundDrawable"]=new BitmapDrawable(bitmap6);

	var paint7=new Paint();

	var rect7_1=new Rect(0,0,15*imageValue1,15*imageValue1);
	rect7_1.offset(56*imageValue1,20*imageValue1);
	var rect7_2=new Rect(0,0,30*imageValue2,30*imageValue2);
	var bitmap7=Bitmap.createBitmap(30*imageValue2,30*imageValue2,Bitmap.Config.ARGB_8888);
	var canvas7=new Canvas(bitmap7);
	canvas7.translate(15*imageValue2,15*imageValue2);
	canvas7.rotate(90);
	canvas7.translate(-15*imageValue2,-15*imageValue2);
	canvas7.drawBitmap(imageBuffer["spritesheetBitmap"],rect7_1,rect7_2,paint7);
	imageBuffer["fire_progressDrawable"]=new ClipDrawable(new BitmapDrawable(bitmap7),Gravity.LEFT,ClipDrawable.HORIZONTAL);
	
	imageBuffer["arrow_backgroundDrawable"]=CreateBitmap.trimmingBitmapDrawable(imageBuffer["spritesheetBitmap"],73,20,22,16,density,imageValue1);
	imageBuffer["arrow_progressDrawable"]=CreateBitmap.trimmingClipDrawable(imageBuffer["spritesheetBitmap"],73,36,22,16,density,imageValue1);

	imageBuffer["waveAnimationDrawable_1"]=CreateBitmap.trimmingBitmapDrawable(imageBuffer["spritesheetBitmap"],97,26,10,9,density,imageValue1);
	imageBuffer["waveAnimationDrawable_2"]=CreateBitmap.trimmingBitmapDrawable(imageBuffer["spritesheetBitmap"],97,14,10,9,density,imageValue1);
	imageBuffer["waveAnimationDrawable_3"]=CreateBitmap.trimmingBitmapDrawable(imageBuffer["spritesheetBitmap"],97,2,10,9,density,imageValue1);


	imageBuffer["guiBitmap"]=BitmapFactory.decodeStream(ModPE.openInputStreamFromTexturePack("images/gui/gui.png"));

	var imageValue1=imageBuffer["guiBitmap"].getWidth()/256;

	imageBuffer["slotBitmap"]=CreateBitmap.trimmingBitmap(imageBuffer["guiBitmap"],200,46,16,16,density*1.625,imageValue1);

	imageBuffer["effectWindowDrawable"]=CreateBitmap.trimmingBitmapDrawable(imageBuffer["guiBitmap"],130,106,120,32,density,imageValue1);
	imageBuffer["mcButton_false_bitmap"]=CreateBitmap.trimmingBitmap(imageBuffer["guiBitmap"],46,0,200,20,density,imageValue1);
	imageBuffer["mcButton_off_bitmap"]=CreateBitmap.trimmingBitmap(imageBuffer["guiBitmap"],66,0,200,20,density,imageValue1);
	imageBuffer["mcButton_on_bitmap"]=CreateBitmap.trimmingBitmap(imageBuffer["guiBitmap"],86,0,200,20,density,imageValue1);


	imageBuffer["headBitmap"]=BitmapFactory.decodeStream(ModPE.openInputStreamFromTexturePack("images/gui/newgui/TopBar.png"));

	var imageValue1=imageBuffer["headBitmap"].getWidth()/8;

	var bitmap=CreateBitmap.trimmingBitmap(imageBuffer["headBitmap"],0,0,5,8,density,imageValue1);
	var byte=NinePatchChunk.createSimpleNinePatchChunk(2,2,2,2);
	imageBuffer["headDrawable"]=new NinePatchDrawable(bitmap,byte,new Rect(),null);


	imageBuffer["touchguiBitmap"]=BitmapFactory.decodeStream(ModPE.openInputStreamFromTexturePack("images/gui/touchgui.png"));

	var imageValue1=imageBuffer["touchguiBitmap"].getWidth()/256;

	imageBuffer["seekBarToggleDrawable"]=CreateBitmap.trimmingBitmapDrawable(imageBuffer["touchguiBitmap"],225,125,11,17,density,imageValue1);
	imageBuffer["toggleSwitch1_off"]=CreateBitmap.trimmingBitmapDrawable(imageBuffer["touchguiBitmap"],160,206,38,19,density,imageValue1);
	imageBuffer["toggleSwitch1_on"]=CreateBitmap.trimmingBitmapDrawable(imageBuffer["touchguiBitmap"],198,206,38,19,density,imageValue1);
	imageBuffer["toggleSwitch2_off"]=CreateBitmap.trimmingBitmapDrawable(imageBuffer["touchguiBitmap"],160,226,39,20,density,imageValue1);
	imageBuffer["toggleSwitch2_on"]=CreateBitmap.trimmingBitmapDrawable(imageBuffer["touchguiBitmap"],199,226,39,20,density,imageValue1);


	imageBuffer["iconsBitmap"]=BitmapFactory.decodeStream(ModPE.openInputStreamFromTexturePack("images/gui/icons.png"));

	var imageValue1=imageBuffer["iconsBitmap"].getWidth()/256;


	imageBuffer["experienceBar_backgroundDrawable"]=CreateBitmap.trimmingBitmapDrawable(imageBuffer["iconsBitmap"],0,64,182,5,density,imageValue1);
	imageBuffer["experienceBar_progressDrawable"]=CreateBitmap.trimmingClipDrawable(imageBuffer["iconsBitmap"],0,69,182,5,density,imageValue1);

	imageBuffer["hitPointBar_backgroundDrawable"]=CreateBitmap.trimmingBitmapDrawable(imageBuffer["iconsBitmap"],0,74,182,5,density,imageValue1);
	imageBuffer["hitPointBar_progressDrawable"]=CreateBitmap.trimmingClipDrawable(imageBuffer["iconsBitmap"],0,79,182,5,density,imageValue1);

	imageBuffer["horseJumpBar_backgroundDrawable"]=CreateBitmap.trimmingBitmapDrawable(imageBuffer["iconsBitmap"],0,84,182,5,density,imageValue1);
	imageBuffer["horseJumpBar_progressDrawable"]=CreateBitmap.trimmingClipDrawable(imageBuffer["iconsBitmap"],0,89,182,5,density,imageValue1);

	imageBuffer["progressWaveDrawable_1"]=CreateBitmap.trimmingBitmapDrawable(imageBuffer["iconsBitmap"],10,176,10,8,density,imageValue1);
	imageBuffer["progressWaveDrawable_2"]=CreateBitmap.trimmingBitmapDrawable(imageBuffer["iconsBitmap"],10,184,10,8,density,imageValue1);
	imageBuffer["progressWaveDrawable_3"]=CreateBitmap.trimmingBitmapDrawable(imageBuffer["iconsBitmap"],10,192,10,8,density,imageValue1);
	imageBuffer["progressWaveDrawable_4"]=CreateBitmap.trimmingBitmapDrawable(imageBuffer["iconsBitmap"],10,200,10,8,density,imageValue1);
	imageBuffer["progressWaveDrawable_5"]=CreateBitmap.trimmingBitmapDrawable(imageBuffer["iconsBitmap"],10,208,10,8,density,imageValue1);


	var paint211=new Paint();

	var rect211_1=new Rect(0,0,9*imageValue1,9*imageValue1);
	rect211_1.offset(16*imageValue1,0);
	var rect211_2=new Rect(0,0,18*imageValue2,18*imageValue2);
	var bitmap211=Bitmap.createBitmap(162*imageValue2,18*imageValue2,Bitmap.Config.ARGB_8888);
	var canvas211=new Canvas(bitmap211);
	for(var loop=10;loop!=0;loop--){
		canvas211.drawBitmap(imageBuffer["iconsBitmap"],rect211_1,rect211_2,paint211);
		canvas211.translate(16*imageValue2,0);
	}
	imageBuffer["hitPointGage_BackgroundDrawable"]=new BitmapDrawable(bitmap211);

	var paint212=new Paint();

	var rect212_1=new Rect(0,0,9*imageValue1,9*imageValue1);
	rect212_1.offset(52*imageValue1,0);
	var rect212_2=new Rect(0,0,18*imageValue2,18*imageValue2);
	var bitmap212=Bitmap.createBitmap(162*imageValue2,18*imageValue2,Bitmap.Config.ARGB_8888);
	var canvas212=new Canvas(bitmap212);
	for(var loop=10;loop!=0;loop--){
		canvas212.drawBitmap(imageBuffer["iconsBitmap"],rect212_1,rect212_2,paint212);
		canvas212.translate(16*imageValue2,0);
	}
	imageBuffer["hitPointGage_ProgressDrawable"]=new ClipDrawable(new BitmapDrawable(bitmap212),Gravity.LEFT,ClipDrawable.HORIZONTAL);

	var paint213=new Paint();

	var rect213_1=new Rect(0,0,9*imageValue1,9*imageValue1);
	rect213_1.offset(16*imageValue1,9);
	var rect213_2=new Rect(0,0,18*imageValue2,18*imageValue2);
	var bitmap213=Bitmap.createBitmap(162*imageValue2,18*imageValue2,Bitmap.Config.ARGB_8888);
	var canvas213=new Canvas(bitmap213);
	for(var loop=10;loop!=0;loop--){
		canvas213.drawBitmap(imageBuffer["iconsBitmap"],rect213_1,rect213_2,paint213);
		canvas213.translate(16*imageValue2,0);
	}
	imageBuffer["armorPointGage_BackgroundDrawable"]=new BitmapDrawable(bitmap213);

	var paint214=new Paint();

	var rect214_1=new Rect(0,0,9*imageValue1,9*imageValue1);
	rect214_1.offset(34*imageValue1,9);
	var rect214_2=new Rect(0,0,18*imageValue2,18*imageValue2);
	var bitmap214=Bitmap.createBitmap(162*imageValue2,18*imageValue2,Bitmap.Config.ARGB_8888);
	var canvas214=new Canvas(bitmap214);
	for(var loop=10;loop!=0;loop--){
		canvas214.drawBitmap(imageBuffer["iconsBitmap"],rect214_1,rect214_2,paint214);
		canvas214.translate(16*imageValue2,0);
	}
	imageBuffer["armorPointGage_ProgressDrawable"]=new ClipDrawable(new BitmapDrawable(bitmap214),Gravity.LEFT,ClipDrawable.HORIZONTAL);
	
	var paint215=new Paint();

	var rect215_1=new Rect(0,0,9*imageValue1,9*imageValue1);
	rect215_1.offset(16*imageValue1,27);
	var rect215_2=new Rect(0,0,18*imageValue2,18*imageValue2);
	var bitmap215=Bitmap.createBitmap(162*imageValue2,18*imageValue2,Bitmap.Config.ARGB_8888);
	var canvas215=new Canvas(bitmap215);
	for(var loop=10;loop!=0;loop--){
		canvas215.drawBitmap(imageBuffer["iconsBitmap"],rect215_1,rect215_2,paint215);
		canvas215.translate(16*imageValue2,0);
	}
	//imageBuffer["hungerPointGage_SecondaryProgressDrawable"]=new ClipDrawable(new BitmapDrawable(bitmap215),Gravity.LEFT,ClipDrawable.HORIZONTAL);
	imageBuffer["hungerPointGage_ProgressDrawable"]=new ClipDrawable(new BitmapDrawable(bitmap215),Gravity.LEFT,ClipDrawable.HORIZONTAL);

	var paint216=new Paint();

	var rect216_1=new Rect(0,0,9*imageValue1,9*imageValue1);
	rect216_1.offset(52*imageValue1,27);
	var rect216_2=new Rect(0,0,18*imageValue2,18*imageValue2);
	var bitmap216=Bitmap.createBitmap(162*imageValue2,18*imageValue2,Bitmap.Config.ARGB_8888);
	var canvas216=new Canvas(bitmap216);
	canvas216.drawBitmap(bitmap215,0,0,paint216);
	for(var loop=10;loop!=0;loop--){
		canvas216.drawBitmap(imageBuffer["iconsBitmap"],rect216_1,rect216_2,paint216);
		canvas216.translate(16*imageValue2,0);
	}
	imageBuffer["hungerPointGage_BackgroundDrawable"]=new BitmapDrawable(bitmap216);

	var paint217=new Paint();

	var rect217_1=new Rect(0,0,9*imageValue1,9*imageValue1);
	rect217_1.offset(61*imageValue1,27);
	var rect217_2=new Rect(0,0,18*imageValue2,18*imageValue2);
	var bitmap217=Bitmap.createBitmap(162*imageValue2,18*imageValue2,Bitmap.Config.ARGB_8888);
	var canvas217=new Canvas(bitmap217);
	canvas217.drawBitmap(bitmap215,0,0,paint217);
	for(var loop=10;loop!=0;loop--){
		canvas217.drawBitmap(imageBuffer["iconsBitmap"],rect217_1,rect217_2,paint217);
		canvas217.translate(16*imageValue2,0);
	}
	//imageBuffer["hungerPointGage_ProgressDrawable"]=new ClipDrawable(new BitmapDrawable(bitmap217),Gravity.LEFT,ClipDrawable.HORIZONTAL);
	imageBuffer["hungerPointGage_SecondaryProgressDrawable"]=new ClipDrawable(new BitmapDrawable(bitmap217),Gravity.LEFT,ClipDrawable.HORIZONTAL);


	//imageBuffer["items-opaqueBitmap"]=TGALoader.load(ModPE.openInputStreamFromTexturePack("images/items-opaque.tga"),false);
	//imageBuffer["terrain-atlasBitmap"]=TGALoader.load(ModPE.openInputStreamFromTexturePack("images/terrain-atlas.tga"),false);

	//imageBuffer["compassBitmap"]=BitmapFactory.decodeStream(ModPE.openInputStreamFromTexturePack("images/compass.png"));
	//imageBuffer["watch-atlasBitmap"]=BitmapFactory.decodeStream(ModPE.openInputStreamFromTexturePack("images/watch-atlas.png"));


	imageBuffer["slotProgressBar_progressBitmap"]=base64ToBitmap(imageDatas[0]);
	imageBuffer["slotProgressBar_progressDrawable"]=new ClipDrawable(new BitmapDrawable(imageBuffer["slotProgressBar_progressBitmap"]),Gravity.LEFT,ClipDrawable.HORIZONTAL);
	imageBuffer["slotProgressBar_backgroundBitmap"]=base64ToBitmap(imageDatas[1]);
	imageBuffer["slotProgressBar_backgroundDrawable"]=new BitmapDrawable(imageBuffer["slotProgressBar_backgroundBitmap"]);
	imageBuffer["noItemImageBitmap"]=CreateBitmap.trimmingBitmap(base64ToBitmap(imageDatas[4]),0,0,2,2,4);

	imageBuffer["slotBackgroundBitmap"]=base64ToBitmap(imageDatas[2]);
	imageBuffer["modBitmap"]=CreateBitmap.trimmingBitmap(base64ToBitmap(imageDatas[3]),0,0,32,32,1);

	//ImageGeneratorPrivate.allItem();
	//ImageGeneratorPrivate.allBlock();
}

var ImageGenerator={
	item:function(id){
		var density=mcpe.density;
		if(Item.isValidItem(id)){
			for(var loop=0;loop<16;loop++){
				var textureCoords=Item.getTextureCoords(id,loop);
				var bitmap=Bitmap.createBitmap(52*density,52*density,Bitmap.Config.ARGB_8888);
				var paint=new Paint();
				var canvas=new Canvas(bitmap);
				canvas.translate(10*density,10*density);
				var rect_1=new Rect(textureCoords[0],textureCoords[1],textureCoords[2],textureCoords[3]);
				var rect_2=new Rect(0,0,32*density,32*density);
				canvas.drawBitmap(imageBuffer["items-opaqueBitmap"],rect_1,rect_2,paint);
				itemImages[id+":"+loop]=new BitmapDrawable(bitmap);
			}
		}
	},
	block:function(id){
		// var displayMetrics=getDisplayMetrics();
		// var density=mcpe.density;
		var density=2;
		var renderType=Block.getRenderType(id);
		switch(id){
			case 92:
				renderType=0x1000;
			break;
			case 116:
			case 120:
				renderType=0x1001;
			break;
			case 151:
			case 178:
				renderType=0x1002;
			break;
			case 198:
				renderType=0x1003;
			break;
			case 96:
			case 167:
				renderType=0x1004;
			break;
			case 77:
			case 143:
				renderType=0x1005;
			break;
			case 70:
			case 72:
			case 78:
			case 147:
			case 148:
				renderType=0x1006;
			break;
			case 171:
				renderType=0x1007;
			break;
		}
		switch(renderType){
			case 0:
			case 22:
			case 26:
			case 31:
			case 75:
				for(var loop=0;loop<16;loop++){
					var bitmap1=ImageGeneratorPrivate.getBlockTextureBitmap(id,loop,1,2);
					var bitmap2=ImageGeneratorPrivate.getBlockTextureBitmap(id,loop,3,2);
					var bitmap3=ImageGeneratorPrivate.getBlockTextureBitmap(id,loop,5,2);
					bitmap2=CreateBitmap.changeAlpha(bitmap2,0xaa);
					bitmap3=CreateBitmap.changeAlpha(bitmap3,0x66);
					var finalBitmap=Bitmap.createBitmap(104,116,Bitmap.Config.ARGB_8888);
					var paint1=new Paint();
					var matrix1=new Matrix();
					matrix1.postRotate(-45,16,16);
					matrix1.postTranslate(6,34);
					matrix1.postScale(1.2,0.6);
					var paint2=new Paint();
					var matrix2=new Matrix();
					matrix2.postSkew(0,0.44);
					matrix2.postTranslate(0,32);
					matrix2.postScale(0.84,0.95);
					var paint3=new Paint();
					var matrix3=new Matrix();
					matrix3.postSkew(0,-0.44);
					matrix3.postTranslate(62,60);
					matrix3.postScale(0.84,0.95);
					var finalCanvas=new Canvas(finalBitmap);
					//finalCanvas.drawColor(Color.parseColor("#ffffff"));
					finalCanvas.drawBitmap(bitmap1,matrix1,paint1);
					finalCanvas.drawBitmap(bitmap2,matrix2,paint2);
					finalCanvas.drawBitmap(bitmap3,matrix3,paint3);
					var bitmap=Bitmap.createBitmap(52*density,52*density,Bitmap.Config.ARGB_8888);
					var paint=new Paint();
					var canvas=new Canvas(bitmap);
					var rect_1=new Rect(0,0,104,116);
					var rect_2=new Rect(0,0,26*density,29*density);
					canvas.translate(14*density,12*density);
					canvas.drawBitmap(finalBitmap,rect_1,rect_2,paint);
					
					itemImages[id+":"+loop]=new BitmapDrawable(bitmap);
					bitmap1.recycle();
					bitmap2.recycle();
					bitmap3.recycle();
					finalBitmap.recycle();
					bitmap1=null;
					bitmap2=null;
					bitmap3=null;
					finalBitmap=null;
					bitmap=null;
				}
			break;
			case 10:
				for(var loop=0;loop<16;loop++){
					var tempBitmap1=ImageGeneratorPrivate.getBlockTextureBitmap(id,loop,1,0.5);
					var tempBitmap2=ImageGeneratorPrivate.getBlockTextureBitmap(id,loop,3,0.5);
					var tempBitmap3=ImageGeneratorPrivate.getBlockTextureBitmap(id,loop,5,0.5);
					var bitmap1=CreateBitmap.trimmingBitmap(tempBitmap1,0,0,16,8,2);
					var bitmap2=CreateBitmap.trimmingBitmap(tempBitmap1,0,8,16,8,2);
					var bitmap3=CreateBitmap.trimmingBitmap(tempBitmap2,0,0,8,8,2);
					var bitmap4=CreateBitmap.trimmingBitmap(tempBitmap2,0,8,16,8,2);
					var bitmap5=CreateBitmap.trimmingBitmap(tempBitmap3,0,0,16,8,2);
					var bitmap6=CreateBitmap.trimmingBitmap(tempBitmap3,0,8,16,8,2);
					bitmap3=CreateBitmap.changeAlpha(bitmap3,0xaa);
					bitmap4=CreateBitmap.changeAlpha(bitmap4,0xaa);
					bitmap5=CreateBitmap.changeAlpha(bitmap5,0x66);
					bitmap6=CreateBitmap.changeAlpha(bitmap6,0x66);
					var finalBitmap=Bitmap.createBitmap(104,116,Bitmap.Config.ARGB_8888);
					var paint1=new Paint();
					var matrix1=new Matrix();
					matrix1.postRotate(-45,16,16);
					matrix1.postTranslate(7,34);
					matrix1.postScale(1.2,0.6);
					var paint2=new Paint();
					var matrix2=new Matrix();
					matrix2.postRotate(-45,16,16);
					matrix2.postTranslate(30,107);
					matrix2.postScale(1.2,0.6);
					var paint3=new Paint();
					var matrix3=new Matrix();
					matrix3.postSkew(0,0.44);
					matrix3.postTranslate(0,32);
					matrix3.postScale(0.84,0.95);
					var paint4=new Paint();
					var matrix4=new Matrix();
					matrix4.postSkew(0,0.44);
					matrix4.postTranslate(0,64);
					matrix4.postScale(0.84,0.95);
					var paint5=new Paint();
					var matrix5=new Matrix();
					matrix5.postSkew(0,-0.44);
					matrix5.postTranslate(32,47);
					matrix5.postScale(0.84,0.95);
					var paint6=new Paint();
					var matrix6=new Matrix();
					matrix6.postSkew(0,-0.44);
					matrix6.postTranslate(64,91);
					matrix6.postScale(0.84,0.95);
					var finalCanvas=new Canvas(finalBitmap);
					finalCanvas.drawBitmap(bitmap1,matrix1,paint1);
					finalCanvas.drawBitmap(bitmap2,matrix2,paint2);
					finalCanvas.drawBitmap(bitmap3,matrix3,paint3);
					finalCanvas.drawBitmap(bitmap4,matrix4,paint4);
					finalCanvas.drawBitmap(bitmap5,matrix5,paint5);
					finalCanvas.drawBitmap(bitmap6,matrix6,paint6);
					var bitmap=Bitmap.createBitmap(52*density,52*density,Bitmap.Config.ARGB_8888);
					var paint=new Paint();
					var canvas=new Canvas(bitmap);
					var rect_1=new Rect(0,0,104,116);
					var rect_2=new Rect(0,0,26*density,29*density);
					canvas.translate(14*density,12*density);
					canvas.drawBitmap(finalBitmap,rect_1,rect_2,paint);
					itemImages[id+":"+loop]=new BitmapDrawable(bitmap);
					tempBitmap1.recycle();
					tempBitmap2.recycle();
					tempBitmap3.recycle();
					bitmap1.recycle();
					bitmap2.recycle();
					bitmap3.recycle();
					bitmap4.recycle();
					bitmap5.recycle();
					bitmap6.recycle();
					finalBitmap.recycle();
					tempBitmap1=null;
					tempBitmap2=null;
					tempBitmap3=null;
					bitmap1=null;
					bitmap2=null;
					bitmap3=null;
					bitmap4=null;
					bitmap5=null;
					bitmap6=null;
					finalBitmap=null;
					bitmap=null;
				}
			break;
			case 11:
				for(var loop=0;loop<16;loop++){
					var tempBitmap1=ImageGeneratorPrivate.getBlockTextureBitmap(id,loop,1,0.5);
					var tempBitmap2=ImageGeneratorPrivate.getBlockTextureBitmap(id,loop,3,0.5);
					var tempBitmap3=ImageGeneratorPrivate.getBlockTextureBitmap(id,loop,5,0.5);
					var bitmap1=CreateBitmap.trimmingBitmap(tempBitmap1,0,0,4,4,2);
					var bitmap2=CreateBitmap.trimmingBitmap(tempBitmap1,12,0,4,4,2);
					var bitmap3=CreateBitmap.trimmingBitmap(tempBitmap1,0,0,1.6,16,2.5);
					var bitmap4=CreateBitmap.trimmingBitmap(tempBitmap1,0,0,1.6,16,2.5);
					var bitmap5=CreateBitmap.trimmingBitmap(tempBitmap2,0,0,3.2,16,2.5);
					var bitmap6=CreateBitmap.trimmingBitmap(tempBitmap2,0,0,3.2,16,2.5);
					var bitmap7=CreateBitmap.trimmingBitmap(tempBitmap2,0,1,16,1.6,2.5);
					var bitmap8=CreateBitmap.trimmingBitmap(tempBitmap2,0,8,16,1.6,2.5);
					var bitmap9=CreateBitmap.trimmingBitmap(tempBitmap3,0,0,3.2,16,2.5);
					var bitmap10=CreateBitmap.trimmingBitmap(tempBitmap3,12,0,3.2,16,2.5);
					var bitmap11=CreateBitmap.trimmingBitmap(tempBitmap3,0,1,2,2,2);
					var bitmap12=CreateBitmap.trimmingBitmap(tempBitmap3,0,8,2,2,2);
					bitmap5=CreateBitmap.changeAlpha(bitmap5,0xaa);
					bitmap6=CreateBitmap.changeAlpha(bitmap6,0xaa);
					bitmap7=CreateBitmap.changeAlpha(bitmap7,0xaa);
					bitmap8=CreateBitmap.changeAlpha(bitmap8,0xaa);
					bitmap9=CreateBitmap.changeAlpha(bitmap9,0x66);
					bitmap10=CreateBitmap.changeAlpha(bitmap10,0x66);
					bitmap11=CreateBitmap.changeAlpha(bitmap11,0x66);
					bitmap12=CreateBitmap.changeAlpha(bitmap12,0x66);
					var finalBitmap=Bitmap.createBitmap(104,116,Bitmap.Config.ARGB_8888);
					var paint1=new Paint();
					var matrix1=new Matrix();
					matrix1.postRotate(-45,16,16);
					matrix1.postTranslate(22,7);
					matrix1.postScale(1.2,0.6);
					var paint2=new Paint();
					var matrix2=new Matrix();
					matrix2.postRotate(-45,16,16);
					matrix2.postTranslate(56,43);
					matrix2.postScale(1.2,0.6);
					var paint3=new Paint();
					var matrix3=new Matrix();
					matrix3.postRotate(-45,16,16);
					matrix3.postTranslate(18,16);
					matrix3.postScale(1.2,0.6);
					var paint4=new Paint();
					var matrix4=new Matrix();
					matrix4.postRotate(-45,16,16);
					matrix4.postTranslate(18,70);
					matrix4.postScale(1.2,0.6);
					var paint5=new Paint();
					var matrix5=new Matrix();
					matrix5.postSkew(0,0.44);
					matrix5.postTranslate(24,12);
					matrix5.postScale(0.84,0.95);
					var paint6=new Paint();
					var matrix6=new Matrix();
					matrix6.postSkew(0,0.44);
					matrix6.postTranslate(72,36);
					matrix6.postScale(0.84,0.95);
					var paint7=new Paint();
					var matrix7=new Matrix();
					matrix7.postSkew(0,0.44);
					matrix7.postTranslate(18,18);
					matrix7.postScale(0.84,0.95);
					var paint8=new Paint();
					var matrix8=new Matrix();
					matrix8.postSkew(0,0.44);
					matrix8.postTranslate(18,56);
					matrix8.postScale(0.84,0.95);
					var paint9=new Paint();
					var matrix9=new Matrix();
					matrix9.postSkew(0,-0.44);
					matrix9.postTranslate(40,20);
					matrix9.postScale(0.84,0.95);
					var paint10=new Paint();
					var matrix10=new Matrix();
					matrix10.postSkew(0,-0.44);
					matrix10.postTranslate(88,42);
					matrix10.postScale(0.84,0.95);
					var paint11=new Paint();
					var matrix11=new Matrix();
					matrix11.postSkew(0,-0.44);
					matrix11.postTranslate(98,54);
					matrix11.postScale(0.84,0.95);
					var paint12=new Paint();
					var matrix12=new Matrix();
					matrix12.postSkew(0,-0.44);
					matrix12.postTranslate(98,92);
					matrix12.postScale(0.84,0.95);
					var finalCanvas=new Canvas(finalBitmap);
					finalCanvas.drawBitmap(bitmap1,matrix1,paint1);
					finalCanvas.drawBitmap(bitmap2,matrix2,paint2);
					finalCanvas.drawBitmap(bitmap9,matrix9,paint9);
					finalCanvas.drawBitmap(bitmap10,matrix10,paint10);
					finalCanvas.drawBitmap(bitmap5,matrix5,paint5);
					finalCanvas.drawBitmap(bitmap6,matrix6,paint6);
					finalCanvas.drawBitmap(bitmap3,matrix3,paint3);
					finalCanvas.drawBitmap(bitmap7,matrix7,paint7);
					finalCanvas.drawBitmap(bitmap11,matrix11,paint11);
					finalCanvas.drawBitmap(bitmap4,matrix4,paint4);
					finalCanvas.drawBitmap(bitmap8,matrix8,paint8);
					finalCanvas.drawBitmap(bitmap12,matrix12,paint12);
					var bitmap=Bitmap.createBitmap(52*density,52*density,Bitmap.Config.ARGB_8888);
					var paint=new Paint();
					var canvas=new Canvas(bitmap);
					var rect_1=new Rect(0,0,104,116);
					var rect_2=new Rect(0,0,26*density,29*density);
					canvas.translate(14*density,12*density);
					canvas.drawBitmap(finalBitmap,rect_1,rect_2,paint);
					itemImages[id+":"+loop]=new BitmapDrawable(bitmap);
					tempBitmap1.recycle();
					tempBitmap2.recycle();
					tempBitmap3.recycle();
					bitmap1.recycle();
					bitmap2.recycle();
					bitmap3.recycle();
					bitmap4.recycle();
					bitmap5.recycle();
					bitmap6.recycle();
					bitmap7.recycle();
					bitmap8.recycle();
					bitmap9.recycle();
					bitmap10.recycle();
					bitmap11.recycle();
					bitmap12.recycle();
					finalBitmap.recycle();
					tempBitmap1=null;
					tempBitmap2=null;
					tempBitmap3=null;
					bitmap1=null;
					bitmap2=null;
					bitmap3=null;
					bitmap4=null;
					bitmap5=null;
					bitmap6=null;
					bitmap7=null;
					bitmap8=null;
					bitmap9=null;
					bitmap10=null;
					bitmap11=null;
					bitmap12=null;
					finalBitmap=null;
				}
			break;
			case 13:
				for(var loop=0;loop<16;loop++){
					var bitmap1=ImageGeneratorPrivate.getBlockTextureBitmap(id,loop,1,2);
					var bitmap2=ImageGeneratorPrivate.getBlockTextureBitmap(id,loop,3,2);
					var bitmap3=ImageGeneratorPrivate.getBlockTextureBitmap(id,loop,5,2);
					bitmap2=CreateBitmap.changeAlpha(bitmap2,0xaa);
					bitmap3=CreateBitmap.changeAlpha(bitmap3,0x66);
					var finalBitmap=Bitmap.createBitmap(104,116,Bitmap.Config.ARGB_8888);
					var paint1=new Paint();
					var matrix1=new Matrix();
					matrix1.postRotate(-45,16,16);
					matrix1.postTranslate(5,36);
					matrix1.postScale(1.2,0.6);
					var paint2=new Paint();
					var matrix2=new Matrix();
					matrix2.postSkew(0,0.44);
					matrix2.postTranslate(4,32);
					matrix2.postScale(0.84,0.95);
					var paint3=new Paint();
					var matrix3=new Matrix();
					matrix3.postSkew(0,-0.44);
					matrix3.postTranslate(56,60);
					matrix3.postScale(0.84,0.95);
					var finalCanvas=new Canvas(finalBitmap);
					// finalCanvas.drawColor(Color.parseColor("#ffffff"));
					finalCanvas.drawBitmap(bitmap1,matrix1,paint1);
					finalCanvas.drawBitmap(bitmap2,matrix2,paint2);
					finalCanvas.drawBitmap(bitmap3,matrix3,paint3);
					var bitmap=Bitmap.createBitmap(52*density,52*density,Bitmap.Config.ARGB_8888);
					var paint=new Paint();
					var canvas=new Canvas(bitmap);
					var rect_1=new Rect(0,0,104,116);
					var rect_2=new Rect(0,0,26*density,29*density);
					canvas.translate(14*density,12*density);
					canvas.drawBitmap(finalBitmap,rect_1,rect_2,paint);
					
					itemImages[id+":"+loop]=new BitmapDrawable(bitmap);
					bitmap1.recycle();
					bitmap2.recycle();
					bitmap3.recycle();
					finalBitmap.recycle();
					bitmap1=null;
					bitmap2=null;
					bitmap3=null;
					finalBitmap=null;
				}
			break;
			case 21:
				for(var loop=0;loop<16;loop++){
					var tempBitmap1=ImageGeneratorPrivate.getBlockTextureBitmap(id,loop,1,0.5);
					var tempBitmap2=ImageGeneratorPrivate.getBlockTextureBitmap(id,loop,3,0.5);
					var tempBitmap3=ImageGeneratorPrivate.getBlockTextureBitmap(id,loop,5,0.5);
					var bitmap1=CreateBitmap.trimmingBitmap(tempBitmap1,0,0,2,2,2);
					var bitmap2=CreateBitmap.trimmingBitmap(tempBitmap1,1,2,2,12,2);
					var bitmap3=CreateBitmap.trimmingBitmap(tempBitmap1,0,14,2,2,2);
					var bitmap4=CreateBitmap.trimmingBitmap(tempBitmap2,0,0,2,11,2);
					var bitmap5=CreateBitmap.trimmingBitmap(tempBitmap2,2,1,12,7,2);
					var bitmap6=CreateBitmap.trimmingBitmap(tempBitmap2,14,0,2,11,2);
					var bitmap7=CreateBitmap.trimmingBitmap(tempBitmap3,0,0,2,11,2);
					var bitmap8=CreateBitmap.trimmingBitmap(tempBitmap3,14,0,2,11,2);
					bitmap4=CreateBitmap.changeAlpha(bitmap4,0xaa);
					bitmap5=CreateBitmap.changeAlpha(bitmap5,0xaa);
					bitmap6=CreateBitmap.changeAlpha(bitmap6,0xaa);
					bitmap7=CreateBitmap.changeAlpha(bitmap7,0x66);
					bitmap8=CreateBitmap.changeAlpha(bitmap8,0x66);
					var finalBitmap=Bitmap.createBitmap(104,116,Bitmap.Config.ARGB_8888);
					var paint1=new Paint();
					var matrix1=new Matrix();
					matrix1.postRotate(-45,16,16);
					matrix1.postTranslate(24,8);
					matrix1.postScale(1.2,0.6);
					var paint2=new Paint();
					var matrix2=new Matrix();
					matrix2.postRotate(-45,16,16);
					matrix2.postTranslate(28,16);
					matrix2.postScale(1.2,0.6);
					var paint3=new Paint();
					var matrix3=new Matrix();
					matrix3.postRotate(-45,16,16);
					matrix3.postTranslate(63,44);
					matrix3.postScale(1.2,0.6);
					var paint4=new Paint();
					var matrix4=new Matrix();
					matrix4.postSkew(0,0.44);
					matrix4.postTranslate(24,14);
					matrix4.postScale(0.84,0.95);
					var paint5=new Paint();
					var matrix5=new Matrix();
					matrix5.postSkew(0,0.44);
					matrix5.postTranslate(32,21);
					matrix5.postScale(0.84,0.95);
					var paint6=new Paint();
					var matrix6=new Matrix();
					matrix6.postSkew(0,0.44);
					matrix6.postTranslate(80,38);
					matrix6.postScale(0.84,0.95);
					var paint7=new Paint();
					var matrix7=new Matrix();
					matrix7.postSkew(0,-0.44);
					matrix7.postTranslate(32,19);
					matrix7.postScale(0.84,0.95);
					var paint8=new Paint();
					var matrix8=new Matrix();
					matrix8.postSkew(0,-0.44);
					matrix8.postTranslate(88,42);
					matrix8.postScale(0.84,0.95);

					var finalCanvas=new Canvas(finalBitmap);
					finalCanvas.drawBitmap(bitmap1,matrix1,paint1);
					finalCanvas.drawBitmap(bitmap4,matrix4,paint4);
					finalCanvas.drawBitmap(bitmap7,matrix7,paint7);
					finalCanvas.drawBitmap(bitmap2,matrix2,paint2);
					finalCanvas.drawBitmap(bitmap5,matrix5,paint5);
					finalCanvas.drawBitmap(bitmap3,matrix3,paint3);
					finalCanvas.drawBitmap(bitmap6,matrix6,paint6);
					finalCanvas.drawBitmap(bitmap8,matrix8,paint8);
					var bitmap=Bitmap.createBitmap(52*density,52*density,Bitmap.Config.ARGB_8888);
					var paint=new Paint();
					var canvas=new Canvas(bitmap);
					var rect_1=new Rect(0,0,104,116);
					var rect_2=new Rect(0,0,26*density,29*density);
					canvas.translate(14*density,12*density);
					canvas.drawBitmap(finalBitmap,rect_1,rect_2,paint);
					itemImages[id+":"+loop]=new BitmapDrawable(bitmap);
					tempBitmap1.recycle();
					tempBitmap2.recycle();
					tempBitmap3.recycle();
					bitmap1.recycle();
					bitmap2.recycle();
					bitmap3.recycle();
					bitmap4.recycle();
					bitmap5.recycle();
					bitmap6.recycle();
					bitmap7.recycle();
					bitmap8.recycle();
					finalBitmap.recycle();
					tempBitmap1=null;
					tempBitmap2=null;
					tempBitmap3=null;
					bitmap1=null;
					bitmap2=null;
					bitmap3=null;
					bitmap4=null;
					bitmap5=null;
					bitmap6=null;
					bitmap7=null;
					bitmap8=null;
					finalBitmap=null;
				}
			break;
			case 32:
				for(var loop=0;loop<1;loop++){
					var tempBitmap1=ImageGeneratorPrivate.getBlockTextureBitmap(id,loop,1,0.5);
					var tempBitmap2=ImageGeneratorPrivate.getBlockTextureBitmap(id,loop,3,0.5);
					var tempBitmap3=ImageGeneratorPrivate.getBlockTextureBitmap(id,loop,5,0.5);
					var bitmap1=CreateBitmap.trimmingBitmap(tempBitmap1,0,4,8,8,2);
					var bitmap2=CreateBitmap.trimmingBitmap(tempBitmap1,4,4,8,4,2);
					var bitmap3=CreateBitmap.trimmingBitmap(tempBitmap1,0,4,8,8,2);
					var bitmap4=CreateBitmap.trimmingBitmap(tempBitmap2,4,0,8,16,2);
					var bitmap5=CreateBitmap.trimmingBitmap(tempBitmap2,4,0,8,16,2);
					var bitmap6=CreateBitmap.trimmingBitmap(tempBitmap3,4,0,8,16,2);
					var bitmap7=CreateBitmap.trimmingBitmap(tempBitmap3,4,3,8,15,2);
					var bitmap8=CreateBitmap.trimmingBitmap(tempBitmap3,4,0,8,16,2);
					bitmap4=CreateBitmap.changeAlpha(bitmap4,0xaa);
					bitmap5=CreateBitmap.changeAlpha(bitmap5,0xaa);
					bitmap6=CreateBitmap.changeAlpha(bitmap6,0x66);
					bitmap7=CreateBitmap.changeAlpha(bitmap7,0x66);
					bitmap8=CreateBitmap.changeAlpha(bitmap8,0x66);
					var finalBitmap=Bitmap.createBitmap(104,116,Bitmap.Config.ARGB_8888);
					var paint1=new Paint();
					var matrix1=new Matrix();
					matrix1.postRotate(-45,16,16);
					matrix1.postTranslate(50,8);
					matrix1.postScale(1.2,0.6);
					var paint2=new Paint();
					var matrix2=new Matrix();
					matrix2.postRotate(-45,16,16);
					matrix2.postTranslate(34,54);
					matrix2.postScale(1.2,0.6);
					var paint3=new Paint();
					var matrix3=new Matrix();
					matrix3.postRotate(-45,16,16);
					matrix3.postTranslate(6,56);
					matrix3.postScale(1.2,0.6);
					var paint4=new Paint();
					var matrix4=new Matrix();
					matrix4.postSkew(0,0.44);
					matrix4.postTranslate(62,14);
					matrix4.postScale(0.84,0.95);
					var paint5=new Paint();
					var matrix5=new Matrix();
					matrix5.postSkew(0,0.44);
					matrix5.postTranslate(0,46);
					matrix5.postScale(0.84,0.95);
					var paint6=new Paint();
					var matrix6=new Matrix();
					matrix6.postSkew(0,-0.44);
					matrix6.postTranslate(94,28);
					matrix6.postScale(0.84,0.95);
					var paint7=new Paint();
					var matrix7=new Matrix();
					matrix7.postSkew(0,-0.44);
					matrix7.postTranslate(54,50);
					matrix7.postScale(0.84,0.95);
					var paint8=new Paint();
					var matrix8=new Matrix();
					matrix8.postSkew(0,-0.44);
					matrix8.postTranslate(32,58);
					matrix8.postScale(0.84,0.95);
					var finalCanvas=new Canvas(finalBitmap);
					finalCanvas.drawBitmap(bitmap4,matrix4,paint4);
					finalCanvas.drawBitmap(bitmap6,matrix6,paint6);
					finalCanvas.drawBitmap(bitmap1,matrix1,paint1);
					finalCanvas.drawBitmap(bitmap2,matrix2,paint2);
					finalCanvas.drawBitmap(bitmap7,matrix7,paint7);
					finalCanvas.drawBitmap(bitmap5,matrix5,paint5);
					finalCanvas.drawBitmap(bitmap8,matrix8,paint8);
					finalCanvas.drawBitmap(bitmap3,matrix3,paint3);
					var bitmap=Bitmap.createBitmap(52*density,52*density,Bitmap.Config.ARGB_8888);
					var paint=new Paint();
					var canvas=new Canvas(bitmap);
					var rect_1=new Rect(0,0,104,116);
					var rect_2=new Rect(0,0,26*density,29*density);
					canvas.translate(14*density,12*density);
					canvas.drawBitmap(finalBitmap,rect_1,rect_2,paint);
					itemImages[id+":"+loop]=new BitmapDrawable(bitmap);
					tempBitmap1.recycle();
					tempBitmap2.recycle();
					tempBitmap3.recycle();
					bitmap1.recycle();
					bitmap2.recycle();
					bitmap3.recycle();
					bitmap4.recycle();
					bitmap5.recycle();
					bitmap6.recycle();
					bitmap7.recycle();
					bitmap8.recycle();
					finalBitmap.recycle();
					tempBitmap1=null;
					tempBitmap2=null;
					tempBitmap3=null;
					bitmap1=null;
					bitmap2=null;
					bitmap3=null;
					bitmap4=null;
					bitmap5=null;
					bitmap6=null;
					bitmap7=null;
					bitmap8=null;
					finalBitmap=null;
				}
			break;
			case 67:
				for(var loop=0;loop<16;loop++){
					var bitmap1=ImageGeneratorPrivate.getBlockTextureBitmap(id,loop,1,2);
					var tempBitmap2=ImageGeneratorPrivate.getBlockTextureBitmap(id,loop,3,0.5);
					var tempBitmap3=ImageGeneratorPrivate.getBlockTextureBitmap(id,loop,5,0.5);
					var bitmap2=CreateBitmap.trimmingBitmap(tempBitmap2,0,0,16,8,2);
					var bitmap3=CreateBitmap.trimmingBitmap(tempBitmap3,0,0,16,8,2);
					bitmap2=CreateBitmap.changeAlpha(bitmap2,0xaa);
					bitmap3=CreateBitmap.changeAlpha(bitmap3,0x66);
					var finalBitmap=Bitmap.createBitmap(104,116,Bitmap.Config.ARGB_8888);
					var paint1=new Paint();
					var matrix1=new Matrix();
					matrix1.postRotate(-45,16,16);
					matrix1.postTranslate(6,85);
					matrix1.postScale(1.2,0.6);
					var paint2=new Paint();
					var matrix2=new Matrix();
					matrix2.postSkew(0,0.44);
					matrix2.postTranslate(0,64);
					matrix2.postScale(0.84,0.95);
					var paint3=new Paint();
					var matrix3=new Matrix();
					matrix3.postSkew(0,-0.44);
					matrix3.postTranslate(62,92);
					matrix3.postScale(0.84,0.95);
					var finalCanvas=new Canvas(finalBitmap);
					// finalCanvas.drawColor(Color.parseColor("#ffffff"));
					finalCanvas.drawBitmap(bitmap1,matrix1,paint1);
					finalCanvas.drawBitmap(bitmap2,matrix2,paint2);
					finalCanvas.drawBitmap(bitmap3,matrix3,paint3);
					var bitmap=Bitmap.createBitmap(52*density,52*density,Bitmap.Config.ARGB_8888);
					var paint=new Paint();
					var canvas=new Canvas(bitmap);
					var rect_1=new Rect(0,0,104,116);
					var rect_2=new Rect(0,0,26*density,29*density);
					canvas.translate(14*density,12*density);
					canvas.drawBitmap(finalBitmap,rect_1,rect_2,paint);
					
					itemImages[id+":"+loop]=new BitmapDrawable(bitmap);
					tempBitmap2.recycle();
					tempBitmap3.recycle();
					bitmap1.recycle();
					bitmap2.recycle();
					bitmap3.recycle();
					finalBitmap.recycle();
					tempBitmap2=null;
					tempBitmap3=null;
					bitmap1=null;
					bitmap2=null;
					bitmap3=null;
					finalBitmap=null;
				}
			break;
			case 43:
				for(var loop=0;loop<1;loop++){
					var tempBitmap1=ImageGeneratorPrivate.getBlockTextureBitmap(id,loop,1,0.5);
					var tempBitmap2=ImageGeneratorPrivate.getBlockTextureBitmap(id,loop,3,0.5);
					var tempBitmap3=ImageGeneratorPrivate.getBlockTextureBitmap(id,loop,5,0.5);
					var bitmap1=CreateBitmap.trimmingBitmap(tempBitmap1,3,0,10,16,2);
					var bitmap2=CreateBitmap.trimmingBitmap(tempBitmap1,4,3,8,10,2);
					var bitmap3=CreateBitmap.trimmingBitmap(tempBitmap1,2,2,12,12,2);
					var bitmap4=CreateBitmap.trimmingBitmap(tempBitmap2,0,0,16,6,2);
					var bitmap5=CreateBitmap.trimmingBitmap(tempBitmap2,4,7,8,5,2);
					var bitmap6=CreateBitmap.trimmingBitmap(tempBitmap2,3,15,10,1,2);
					var bitmap7=CreateBitmap.trimmingBitmap(tempBitmap2,2,12,12,4,2);
					var bitmap8=CreateBitmap.trimmingBitmap(tempBitmap3,3,0,10,6,2);
					var bitmap9=CreateBitmap.trimmingBitmap(tempBitmap3,6,7,4,5,2);
					var bitmap10=CreateBitmap.trimmingBitmap(tempBitmap3,4,15,8,1,2);
					var bitmap11=CreateBitmap.trimmingBitmap(tempBitmap3,2,12,12,4,2);
					bitmap4=CreateBitmap.changeAlpha(bitmap4,0x66);
					bitmap5=CreateBitmap.changeAlpha(bitmap5,0x66);
					bitmap6=CreateBitmap.changeAlpha(bitmap6,0x66);
					bitmap7=CreateBitmap.changeAlpha(bitmap7,0x66);
					bitmap8=CreateBitmap.changeAlpha(bitmap8,0xaa);
					bitmap9=CreateBitmap.changeAlpha(bitmap9,0xaa);
					bitmap10=CreateBitmap.changeAlpha(bitmap10,0xaa);
					bitmap11=CreateBitmap.changeAlpha(bitmap11,0xaa);
					var finalBitmap=Bitmap.createBitmap(104,116,Bitmap.Config.ARGB_8888);
					var paint1=new Paint();
					var matrix1=new Matrix();
					matrix1.postRotate(-45,16,16);
					matrix1.postTranslate(12,24);
					matrix1.postScale(1.2,0.6);
					var paint2=new Paint();
					var matrix2=new Matrix();
					matrix2.postRotate(-45,16,16);
					matrix2.postTranslate(26,110);
					matrix2.postScale(1.2,0.6);
					var paint3=new Paint();
					var matrix3=new Matrix();
					matrix3.postRotate(-45,16,16);
					matrix3.postTranslate(16,116);
					matrix3.postScale(1.2,0.6);
					var paint4=new Paint();
					var matrix4=new Matrix();
					matrix4.postSkew(0,0.44);
					matrix4.postTranslate(8,26);
					matrix4.postScale(0.84,0.95);
					var paint5=new Paint();
					var matrix5=new Matrix();
					matrix5.postSkew(0,0.44);
					matrix5.postTranslate(36,62);
					matrix5.postScale(0.84,0.95);
					var paint6=new Paint();
					var matrix6=new Matrix();
					matrix6.postSkew(0,0.44);
					matrix6.postTranslate(28,80);
					matrix6.postScale(0.84,0.95);
					var paint7=new Paint();
					var matrix7=new Matrix();
					matrix7.postSkew(0,0.44);
					matrix7.postTranslate(16,84);
					matrix7.postScale(0.84,0.95);
					var paint8=new Paint();
					var matrix8=new Matrix();
					matrix8.postSkew(0,-0.44);
					matrix8.postTranslate(72,54);
					matrix8.postScale(0.84,0.95);
					var paint9=new Paint();
					var matrix9=new Matrix();
					matrix9.postSkew(0,-0.44);
					matrix9.postTranslate(68,75);
					matrix9.postScale(0.84,0.95);
					var paint10=new Paint();
					var matrix10=new Matrix();
					matrix10.postSkew(0,-0.44);
					matrix10.postTranslate(64,98);
					matrix10.postScale(0.84,0.95);
					var paint11=new Paint();
					var matrix11=new Matrix();
					matrix11.postSkew(0,-0.44);
					matrix11.postTranslate(62,104);
					matrix11.postScale(0.84,0.95);
					var finalCanvas=new Canvas(finalBitmap);
					// finalCanvas.drawColor(Color.parseColor("#ffffff"));
					
					finalCanvas.drawBitmap(bitmap3,matrix3,paint3);
					finalCanvas.drawBitmap(bitmap7,matrix7,paint7);
					finalCanvas.drawBitmap(bitmap11,matrix11,paint11);
					
					finalCanvas.drawBitmap(bitmap2,matrix2,paint2);
					finalCanvas.drawBitmap(bitmap6,matrix6,paint6);
					finalCanvas.drawBitmap(bitmap10,matrix10,paint10);
					
					finalCanvas.drawBitmap(bitmap5,matrix5,paint5);
					finalCanvas.drawBitmap(bitmap9,matrix9,paint9);

					finalCanvas.drawBitmap(bitmap1,matrix1,paint1);
					finalCanvas.drawBitmap(bitmap4,matrix4,paint4);
					finalCanvas.drawBitmap(bitmap8,matrix8,paint8);
					var bitmap=Bitmap.createBitmap(52*density,52*density,Bitmap.Config.ARGB_8888);
					var paint=new Paint();
					var canvas=new Canvas(bitmap);
					var rect_1=new Rect(0,0,104,116);
					var rect_2=new Rect(0,0,26*density,29*density);
					canvas.translate(14*density,12*density);
					canvas.drawBitmap(finalBitmap,rect_1,rect_2,paint);
					itemImages[id+":"+loop]=new BitmapDrawable(bitmap);
					tempBitmap1.recycle();
					tempBitmap2.recycle();
					tempBitmap3.recycle();
					bitmap1.recycle();
					bitmap2.recycle();
					bitmap3.recycle();
					bitmap4.recycle();
					bitmap5.recycle();
					bitmap6.recycle();
					bitmap7.recycle();
					bitmap8.recycle();
					bitmap9.recycle();
					bitmap10.recycle();
					bitmap11.recycle();
					finalBitmap.recycle();
					tempBitmap1=null;
					tempBitmap2=null;
					tempBitmap3=null;
					bitmap1=null;
					bitmap2=null;
					bitmap3=null;
					bitmap4=null;
					bitmap5=null;
					bitmap6=null;
					bitmap7=null;
					bitmap8=null;
					bitmap9=null;
					bitmap10=null;
					bitmap11=null;
					finalBitmap=null;
				}
			break;
			case -1:
			case 1:
			case 2:
			case 3:
			case 4:
			case 5:
			case 6:
			case 7:
			case 8:
			case 9:
			case 12:
			case 14:
			case 18:
			case 19:
			case 20:
			case 23:
			case 25:
			case 28:
			case 42:
			case 65:
			case 66:
			case 69:
			case 70:
			case 71:
			case 72:
			case 73:
			case 74:
				for(var loop=0;loop<16;loop++){
					var tempBitmap=ImageGeneratorPrivate.getBlockTextureBitmap(id,loop,2,density);
					var bitmap=Bitmap.createBitmap(52*density,52*density,Bitmap.Config.ARGB_8888);
					var paint=new Paint();
					var canvas=new Canvas(bitmap);
					canvas.translate(10*density,10*density);
					canvas.drawBitmap(tempBitmap,0,0,paint);
					itemImages[id+":"+loop]=new BitmapDrawable(bitmap);
					tempBitmap.recycle();
					tempBitmap=null;
				}
			break;
			case 0x1000: //ケーキ
				for(var loop=0;loop<16;loop++){
					var bitmap1=ImageGeneratorPrivate.getBlockTextureBitmap(id,loop,1,2);
					var bitmap2=ImageGeneratorPrivate.getBlockTextureBitmap(id,loop,3,2);
					var bitmap3=ImageGeneratorPrivate.getBlockTextureBitmap(id,loop,5,2);
					bitmap2=CreateBitmap.changeAlpha(bitmap2,0xaa);
					bitmap3=CreateBitmap.changeAlpha(bitmap3,0x66);
					var finalBitmap=Bitmap.createBitmap(104,116,Bitmap.Config.ARGB_8888);
					var paint1=new Paint();
					var matrix1=new Matrix();
					matrix1.postRotate(-45,16,16);
					matrix1.postTranslate(6,86);
					matrix1.postScale(1.2,0.6);
					var paint2=new Paint();
					var matrix2=new Matrix();
					matrix2.postSkew(0,0.44);
					matrix2.postTranslate(3,32);
					matrix2.postScale(0.84,0.95);
					var paint3=new Paint();
					var matrix3=new Matrix();
					matrix3.postSkew(0,-0.44);
					matrix3.postTranslate(59,60);
					matrix3.postScale(0.84,0.95);
					var finalCanvas=new Canvas(finalBitmap);
					//finalCanvas.drawColor(Color.parseColor("#ffffff"));
					finalCanvas.drawBitmap(bitmap1,matrix1,paint1);
					finalCanvas.drawBitmap(bitmap2,matrix2,paint2);
					finalCanvas.drawBitmap(bitmap3,matrix3,paint3);
					var bitmap=Bitmap.createBitmap(52*density,52*density,Bitmap.Config.ARGB_8888);
					var paint=new Paint();
					var canvas=new Canvas(bitmap);
					var rect_1=new Rect(0,0,104,116);
					var rect_2=new Rect(0,0,26*density,29*density);
					canvas.translate(14*density,12*density);
					canvas.drawBitmap(finalBitmap,rect_1,rect_2,paint);
					
					itemImages[id+":"+loop]=new BitmapDrawable(bitmap);
					bitmap1.recycle();
					bitmap2.recycle();
					bitmap3.recycle();
					finalBitmap.recycle();
					bitmap1=null;
					bitmap2=null;
					bitmap3=null;
					finalBitmap=null;
				}
			break;
			case 0x1001: //エンチャントテーブル・エンドポータルフレーム
				for(var loop=0;loop<16;loop++){
					var bitmap1=ImageGeneratorPrivate.getBlockTextureBitmap(id,loop,1,2);
					var bitmap2=ImageGeneratorPrivate.getBlockTextureBitmap(id,loop,3,2);
					var bitmap3=ImageGeneratorPrivate.getBlockTextureBitmap(id,loop,5,2);
					bitmap2=CreateBitmap.changeAlpha(bitmap2,0xaa);
					bitmap3=CreateBitmap.changeAlpha(bitmap3,0x66);
					var finalBitmap=Bitmap.createBitmap(104,116,Bitmap.Config.ARGB_8888);
					var paint1=new Paint();
					var matrix1=new Matrix();
					matrix1.postRotate(-45,16,16);
					matrix1.postTranslate(6,58);
					matrix1.postScale(1.2,0.6);
					var paint2=new Paint();
					var matrix2=new Matrix();
					matrix2.postSkew(0,0.44);
					matrix2.postTranslate(0,32);
					matrix2.postScale(0.84,0.95);
					var paint3=new Paint();
					var matrix3=new Matrix();
					matrix3.postSkew(0,-0.44);
					matrix3.postTranslate(62,60);
					matrix3.postScale(0.84,0.95);
					var finalCanvas=new Canvas(finalBitmap);
					//finalCanvas.drawColor(Color.parseColor("#ffffff"));
					finalCanvas.drawBitmap(bitmap1,matrix1,paint1);
					finalCanvas.drawBitmap(bitmap2,matrix2,paint2);
					finalCanvas.drawBitmap(bitmap3,matrix3,paint3);
					var bitmap=Bitmap.createBitmap(52*density,52*density,Bitmap.Config.ARGB_8888);
					var paint=new Paint();
					var canvas=new Canvas(bitmap);
					var rect_1=new Rect(0,0,104,116);
					var rect_2=new Rect(0,0,26*density,29*density);
					canvas.translate(14*density,12*density);
					canvas.drawBitmap(finalBitmap,rect_1,rect_2,paint);
					
					itemImages[id+":"+loop]=new BitmapDrawable(bitmap);
					bitmap1.recycle();
					bitmap2.recycle();
					bitmap3.recycle();
					finalBitmap.recycle();
					bitmap1=null;
					bitmap2=null;
					bitmap3=null;
					finalBitmap=null;
				}
			break;
			case 0x1002: //日照センサー
				for(var loop=0;loop<16;loop++){
					var bitmap1=ImageGeneratorPrivate.getBlockTextureBitmap(id,loop,1,2);
					var tempBitmap2=ImageGeneratorPrivate.getBlockTextureBitmap(id,loop,3,0.5);
					var tempBitmap3=ImageGeneratorPrivate.getBlockTextureBitmap(id,loop,5,0.5);
					var bitmap2=CreateBitmap.trimmingBitmap(tempBitmap2,0,0,16,6,2);
					var bitmap3=CreateBitmap.trimmingBitmap(tempBitmap3,0,0,16,6,2);
					bitmap2=CreateBitmap.changeAlpha(bitmap2,0xaa);
					bitmap3=CreateBitmap.changeAlpha(bitmap3,0x66);
					var finalBitmap=Bitmap.createBitmap(104,116,Bitmap.Config.ARGB_8888);
					var paint1=new Paint();
					var matrix1=new Matrix();
					matrix1.postRotate(-45,16,16);
					matrix1.postTranslate(6,98);
					matrix1.postScale(1.2,0.6);
					var paint2=new Paint();
					var matrix2=new Matrix();
					matrix2.postSkew(0,0.44);
					matrix2.postTranslate(0,73);
					matrix2.postScale(0.84,0.95);
					var paint3=new Paint();
					var matrix3=new Matrix();
					matrix3.postSkew(0,-0.44);
					matrix3.postTranslate(62,102);
					matrix3.postScale(0.84,0.95);
					var finalCanvas=new Canvas(finalBitmap);
					// finalCanvas.drawColor(Color.parseColor("#ffffff"));
					finalCanvas.drawBitmap(bitmap1,matrix1,paint1);
					finalCanvas.drawBitmap(bitmap2,matrix2,paint2);
					finalCanvas.drawBitmap(bitmap3,matrix3,paint3);
					var bitmap=Bitmap.createBitmap(52*density,52*density,Bitmap.Config.ARGB_8888);
					var paint=new Paint();
					var canvas=new Canvas(bitmap);
					var rect_1=new Rect(0,0,104,116);
					var rect_2=new Rect(0,0,26*density,29*density);
					canvas.translate(14*density,12*density);
					canvas.drawBitmap(finalBitmap,rect_1,rect_2,paint);
					
					itemImages[id+":"+loop]=new BitmapDrawable(bitmap);
					tempBitmap2.recycle();
					tempBitmap3.recycle();
					bitmap1.recycle();
					bitmap2.recycle();
					bitmap3.recycle();
					finalBitmap.recycle();
					tempBitmap2=null;
					tempBitmap3=null;
					bitmap1=null;
					bitmap2=null;
					bitmap3=null;
					finalBitmap=null;
				}
			break;
			case 0x1003: //道ブロック
				for(var loop=0;loop<16;loop++){
					var bitmap1=ImageGeneratorPrivate.getBlockTextureBitmap(id,loop,1,2);
					var bitmap2=ImageGeneratorPrivate.getBlockTextureBitmap(id,loop,3,2);
					var bitmap3=ImageGeneratorPrivate.getBlockTextureBitmap(id,loop,5,2);
					bitmap2=CreateBitmap.changeAlpha(bitmap2,0xaa);
					bitmap3=CreateBitmap.changeAlpha(bitmap3,0x66);
					var finalBitmap=Bitmap.createBitmap(104,116,Bitmap.Config.ARGB_8888);
					var paint1=new Paint();
					var matrix1=new Matrix();
					matrix1.postRotate(-45,16,16);
					matrix1.postTranslate(6,42);
					matrix1.postScale(1.2,0.6);
					var paint2=new Paint();
					var matrix2=new Matrix();
					matrix2.postSkew(0,0.44);
					matrix2.postTranslate(0,34);
					matrix2.postScale(0.84,0.95);
					var paint3=new Paint();
					var matrix3=new Matrix();
					matrix3.postSkew(0,-0.44);
					matrix3.postTranslate(62,60);
					matrix3.postScale(0.84,0.95);
					var finalCanvas=new Canvas(finalBitmap);
					finalCanvas.drawBitmap(bitmap1,matrix1,paint1);
					finalCanvas.drawBitmap(bitmap2,matrix2,paint2);
					finalCanvas.drawBitmap(bitmap3,matrix3,paint3);
					var bitmap=Bitmap.createBitmap(52*density,52*density,Bitmap.Config.ARGB_8888);
					var paint=new Paint();
					var canvas=new Canvas(bitmap);
					var rect_1=new Rect(0,0,104,116);
					var rect_2=new Rect(0,0,26*density,29*density);
					canvas.translate(14*density,12*density);
					canvas.drawBitmap(finalBitmap,rect_1,rect_2,paint);
					
					itemImages[id+":"+loop]=new BitmapDrawable(bitmap);
					bitmap1.recycle();
					bitmap2.recycle();
					bitmap3.recycle();
					finalBitmap.recycle();
					bitmap1=null;
					bitmap2=null;
					bitmap3=null;
					finalBitmap=null;
				}
			break;
			case 0x1004: //トラップドア
				for(var loop=0;loop<16;loop++){
					var bitmap1=ImageGeneratorPrivate.getBlockTextureBitmap(id,loop,1,2);
					var tempBitmap2=ImageGeneratorPrivate.getBlockTextureBitmap(id,loop,3,0.5);
					var tempBitmap3=ImageGeneratorPrivate.getBlockTextureBitmap(id,loop,5,0.5);
					var bitmap2=CreateBitmap.trimmingBitmap(tempBitmap2,0,0,16,3,2);
					var bitmap3=CreateBitmap.trimmingBitmap(tempBitmap3,0,0,16,3,2);
					bitmap2=CreateBitmap.changeAlpha(bitmap2,0xaa);
					bitmap3=CreateBitmap.changeAlpha(bitmap3,0x66);
					var finalBitmap=Bitmap.createBitmap(104,116,Bitmap.Config.ARGB_8888);
					var paint1=new Paint();
					var matrix1=new Matrix();
					matrix1.postRotate(-45,16,16);
					matrix1.postTranslate(6,117);
					matrix1.postScale(1.2,0.6);
					var paint2=new Paint();
					var matrix2=new Matrix();
					matrix2.postSkew(0,0.44);
					matrix2.postTranslate(0,84);
					matrix2.postScale(0.84,0.95);
					var paint3=new Paint();
					var matrix3=new Matrix();
					matrix3.postSkew(0,-0.44);
					matrix3.postTranslate(62,112);
					matrix3.postScale(0.84,0.95);
					var finalCanvas=new Canvas(finalBitmap);
					finalCanvas.drawBitmap(bitmap1,matrix1,paint1);
					finalCanvas.drawBitmap(bitmap2,matrix2,paint2);
					finalCanvas.drawBitmap(bitmap3,matrix3,paint3);
					var bitmap=Bitmap.createBitmap(52*density,52*density,Bitmap.Config.ARGB_8888);
					var paint=new Paint();
					var canvas=new Canvas(bitmap);
					var rect_1=new Rect(0,0,104,116);
					var rect_2=new Rect(0,0,26*density,29*density);
					canvas.translate(14*density,12*density);
					canvas.drawBitmap(finalBitmap,rect_1,rect_2,paint);
					
					itemImages[id+":"+loop]=new BitmapDrawable(bitmap);
					tempBitmap2.recycle();
					tempBitmap3.recycle();
					bitmap1.recycle();
					bitmap2.recycle();
					bitmap3.recycle();
					finalBitmap.recycle();
					tempBitmap2=null;
					tempBitmap3=null;
					bitmap1=null;
					bitmap2=null;
					bitmap3=null;
					finalBitmap=null;
				}
			break;
			case 0x1005: //ボタン
				for(var loop=0;loop<16;loop++){
					var tempBitmap1=ImageGeneratorPrivate.getBlockTextureBitmap(id,loop,1,0.5);
					var tempBitmap2=ImageGeneratorPrivate.getBlockTextureBitmap(id,loop,3,0.5);
					var tempBitmap3=ImageGeneratorPrivate.getBlockTextureBitmap(id,loop,5,0.5);
					var bitmap1=CreateBitmap.trimmingBitmap(tempBitmap1,0,0,2,6,2);
					var bitmap2=CreateBitmap.trimmingBitmap(tempBitmap2,0,0,6,4,2);
					var bitmap3=CreateBitmap.trimmingBitmap(tempBitmap3,0,0,2,4,2);
					bitmap2=CreateBitmap.changeAlpha(bitmap2,0xaa);
					bitmap3=CreateBitmap.changeAlpha(bitmap3,0x66);
					var finalBitmap=Bitmap.createBitmap(104,116,Bitmap.Config.ARGB_8888);
					var paint1=new Paint();
					var matrix1=new Matrix();
					matrix1.postRotate(-45,16,16);
					matrix1.postTranslate(6,85);
					matrix1.postScale(1.2,0.6);
					var paint2=new Paint();
					var matrix2=new Matrix();
					matrix2.postSkew(0,0.44);
					matrix2.postTranslate(0,64);
					matrix2.postScale(0.84,0.95);
					var paint3=new Paint();
					var matrix3=new Matrix();
					matrix3.postSkew(0,-0.44);
					matrix3.postTranslate(24,74);
					matrix3.postScale(0.84,0.95);
					var finalCanvas=new Canvas(finalBitmap);
					finalCanvas.drawBitmap(bitmap1,matrix1,paint1);
					finalCanvas.drawBitmap(bitmap2,matrix2,paint2);
					finalCanvas.drawBitmap(bitmap3,matrix3,paint3);
					var bitmap=Bitmap.createBitmap(52*density,52*density,Bitmap.Config.ARGB_8888);
					var paint=new Paint();
					var canvas=new Canvas(bitmap);
					var rect_1=new Rect(0,0,104,116);
					var rect_2=new Rect(0,0,26*density,29*density);
					canvas.translate(14*density,12*density);
					canvas.drawBitmap(finalBitmap,rect_1,rect_2,paint);
					
					itemImages[id+":"+loop]=new BitmapDrawable(bitmap);
					tempBitmap1.recycle();
					tempBitmap2.recycle();
					tempBitmap3.recycle();
					bitmap1.recycle();
					bitmap2.recycle();
					bitmap3.recycle();
					finalBitmap.recycle();
					tempBitmap1=null;
					tempBitmap2=null;
					tempBitmap3=null;
					bitmap1=null;
					bitmap2=null;
					bitmap3=null;
					finalBitmap=null;
				}
			break;
			case 0x1006: //感圧版
				for(var loop=0;loop<16;loop++){
					var tempBitmap1=ImageGeneratorPrivate.getBlockTextureBitmap(id,loop,1,0.5);
					var tempBitmap2=ImageGeneratorPrivate.getBlockTextureBitmap(id,loop,3,0.5);
					var tempBitmap3=ImageGeneratorPrivate.getBlockTextureBitmap(id,loop,5,0.5);
					var bitmap1=CreateBitmap.trimmingBitmap(tempBitmap1,1,1,14,14,2);
					var bitmap2=CreateBitmap.trimmingBitmap(tempBitmap2,1,0,14,2,2);
					var bitmap3=CreateBitmap.trimmingBitmap(tempBitmap3,1,0,14,2,2);
					bitmap2=CreateBitmap.changeAlpha(bitmap2,0xaa);
					bitmap3=CreateBitmap.changeAlpha(bitmap3,0x66);
					var finalBitmap=Bitmap.createBitmap(104,116,Bitmap.Config.ARGB_8888);
					var paint1=new Paint();
					var matrix1=new Matrix();
					matrix1.postRotate(-45,16,16);
					matrix1.postTranslate(12,128);
					matrix1.postScale(1.2,0.6);
					var paint2=new Paint();
					var matrix2=new Matrix();
					matrix2.postSkew(0,0.44);
					matrix2.postTranslate(8,90);
					matrix2.postScale(0.84,0.95);
					var paint3=new Paint();
					var matrix3=new Matrix();
					matrix3.postSkew(0,-0.44);
					matrix3.postTranslate(64,116);
					matrix3.postScale(0.84,0.95);
					var finalCanvas=new Canvas(finalBitmap);
					//finalCanvas.drawColor(Color.parseColor("#ffffff"));
					finalCanvas.drawBitmap(bitmap1,matrix1,paint1);
					finalCanvas.drawBitmap(bitmap2,matrix2,paint2);
					finalCanvas.drawBitmap(bitmap3,matrix3,paint3);
					var bitmap=Bitmap.createBitmap(52*density,52*density,Bitmap.Config.ARGB_8888);
					var paint=new Paint();
					var canvas=new Canvas(bitmap);
					var rect_1=new Rect(0,0,104,116);
					var rect_2=new Rect(0,0,26*density,29*density);
					canvas.translate(14*density,12*density);
					canvas.drawBitmap(finalBitmap,rect_1,rect_2,paint);
					
					itemImages[id+":"+loop]=new BitmapDrawable(bitmap);
					tempBitmap1.recycle();
					tempBitmap2.recycle();
					tempBitmap3.recycle();
					bitmap1.recycle();
					bitmap2.recycle();
					bitmap3.recycle();
					finalBitmap.recycle();
					tempBitmap1=null;
					tempBitmap2=null;
					tempBitmap3=null;
					bitmap1=null;
					bitmap2=null;
					bitmap3=null;
					finalBitmap=null;
				}
			break;
			case 0x1007: //カーペット
				for(var loop=0;loop<16;loop++){
					var bitmap1=ImageGeneratorPrivate.getBlockTextureBitmap(id,loop,1,2);
					var tempBitmap2=ImageGeneratorPrivate.getBlockTextureBitmap(id,loop,3,0.5);
					var tempBitmap3=ImageGeneratorPrivate.getBlockTextureBitmap(id,loop,5,0.5);
					var bitmap2=CreateBitmap.trimmingBitmap(tempBitmap2,0,0,16,1,2);
					var bitmap3=CreateBitmap.trimmingBitmap(tempBitmap3,0,0,16,1,2);
					bitmap2=CreateBitmap.changeAlpha(bitmap2,0xaa);
					bitmap3=CreateBitmap.changeAlpha(bitmap3,0x66);
					var finalBitmap=Bitmap.createBitmap(104,116,Bitmap.Config.ARGB_8888);
					var paint1=new Paint();
					var matrix1=new Matrix();
					matrix1.postRotate(-45,16,16);
					matrix1.postTranslate(6,130);
					matrix1.postScale(1.2,0.6);
					var paint2=new Paint();
					var matrix2=new Matrix();
					matrix2.postSkew(0,0.44);
					matrix2.postTranslate(0,90);
					matrix2.postScale(0.84,0.95);
					var paint3=new Paint();
					var matrix3=new Matrix();
					matrix3.postSkew(0,-0.44);
					matrix3.postTranslate(62,118);
					matrix3.postScale(0.84,0.95);
					var finalCanvas=new Canvas(finalBitmap);
					// finalCanvas.drawColor(Color.parseColor("#111111"));
					finalCanvas.drawBitmap(bitmap1,matrix1,paint1);
					finalCanvas.drawBitmap(bitmap2,matrix2,paint2);
					finalCanvas.drawBitmap(bitmap3,matrix3,paint3);
					var bitmap=Bitmap.createBitmap(52*density,52*density,Bitmap.Config.ARGB_8888);
					var paint=new Paint();
					var canvas=new Canvas(bitmap);
					var rect_1=new Rect(0,0,104,116);
					var rect_2=new Rect(0,0,26*density,29*density);
					canvas.translate(14*density,12*density);
					canvas.drawBitmap(finalBitmap,rect_1,rect_2,paint);
					
					itemImages[id+":"+loop]=new BitmapDrawable(bitmap);
					tempBitmap2.recycle();
					tempBitmap3.recycle();
					bitmap1.recycle();
					bitmap2.recycle();
					bitmap3.recycle();
					finalBitmap.recycle();
					tempBitmap2=null;
					tempBitmap3=null;
					bitmap1=null;
					bitmap2=null;
					bitmap3=null;
					finalBitmap=null;
				}
			break;
			default:
				var bitmap1=CreateBitmap.trimmingBitmap(imageBuffer["noItemImageBitmap"],0,0,16,16,2);
				var bitmap2=CreateBitmap.changeAlpha(bitmap1,0xaa);
				var bitmap3=CreateBitmap.changeAlpha(bitmap1,0x66);
				var finalBitmap=Bitmap.createBitmap(104,116,Bitmap.Config.ARGB_8888);
				var paint1=new Paint();
				var matrix1=new Matrix();
				matrix1.postRotate(-45,16,16);
				matrix1.postTranslate(6,34);
				matrix1.postScale(1.2,0.6);
				var paint2=new Paint();
				var matrix2=new Matrix();
				matrix2.postSkew(0,0.44);
				matrix2.postTranslate(0,32);
				matrix2.postScale(0.84,0.95);
				var paint3=new Paint();
				var matrix3=new Matrix();
				matrix3.postSkew(0,-0.44);
				matrix3.postTranslate(64,60);
				matrix3.postScale(0.84,0.95);
				var finalCanvas=new Canvas(finalBitmap);
				// finalCanvas.drawColor(Color.parseColor("#ffffff"));
				finalCanvas.drawBitmap(bitmap1,matrix1,paint1);
				finalCanvas.drawBitmap(bitmap2,matrix2,paint2);
				finalCanvas.drawBitmap(bitmap3,matrix3,paint3);
				var bitmap=Bitmap.createBitmap(52*density,52*density,Bitmap.Config.ARGB_8888);
				var paint=new Paint();
				var canvas=new Canvas(bitmap);
				var rect_1=new Rect(0,0,104,116);
				var rect_2=new Rect(0,0,26*density,29*density);
				canvas.translate(14*density,12*density);
				canvas.drawBitmap(finalBitmap,rect_1,rect_2,paint);
				for(var loop=0;loop<16;loop++){
					itemImages[id+":"+loop]=new BitmapDrawable(bitmap);
				}
				bitmap1.recycle();
				bitmap2.recycle();
				bitmap3.recycle();
				finalBitmap.recycle();
				bitmap1=null;
				bitmap2=null;
				bitmap3=null;
				finalBitmap=null;
			break;
		}
	},
};