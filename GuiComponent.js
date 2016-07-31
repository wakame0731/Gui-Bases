var GuiComponent={
	createGui:function(text){//text,layout,headerType,runFunction
		var layout;
		var headerType;
		var runFunction;
		var texts=arguments;
		var argumentsLength=arguments.length-1;
		if(arguments[argumentsLength].hasOwnProperty("run")){
			layout=arguments[argumentsLength-2];
			headerType=arguments[argumentsLength-1];
			runFunction=arguments[argumentsLength];
			argumentsLength-=3;
		}else{
			layout=arguments[argumentsLength-1];
			headerType=arguments[argumentsLength];
			runFunction={run:function(){}};
			argumentsLength-=2;
		}
		if(imageBuffer==null){
			create();
		}
		activity.runOnUiThread(new Runnable({run:function(){
			try{
				var density=mcpe.density;
				var width=activity.getWindow().getDecorView().getWidth();
				var height=activity.getWindow().getDecorView().getHeight();
				var window=new PopupWindow();
				var headerLayout=new LinearLayout(activity);
				var loopMax=argumentsLength;
				for(var loop=0;loop<loopMax;loop++){
					headerLayout.addView(PrivateFunctions.setLayoutWeight(GuiComponent.createHeader(texts[loop],null,headerType),1));
				}
				headerLayout.addView(PrivateFunctions.setLayoutWeight(GuiComponent.createHeader(texts[loop],{window:window,run:function(){runFunction.run();remove(this.window);}},headerType),1));

				var backgroundLayout=GuiComponent.createBackground();
				backgroundLayout.addView(headerLayout);
				if(layout!=null){
					//var layoutParams=new ViewGroup.LayoutParams(ViewGroup.LayoutParams.FILL_PARENT,ViewGroup.LayoutParams.FILL_PARENT);
					//layout.setLayoutParams(layoutParams);
					partLayout=new RelativeLayout(activity);
					partLayout.addView(layout);
					var partLayoutParams=new ViewGroup.LayoutParams(ViewGroup.LayoutParams.WRAP_CONTENT,ViewGroup.LayoutParams.WRAP_CONTENT);
					partLayoutParams.width=width-12*density;
					partLayoutParams.height=height-height/headerType*density-5.5*density;
					partLayout.setX(6*density);
					partLayout.setLayoutParams(partLayoutParams);
					backgroundLayout.addView(partLayout);
				}

				window.setContentView(backgroundLayout);
				window.setWidth(width);
				window.setHeight(height);
				window.showAtLocation(activity.getWindow().getDecorView(),Gravity.LEFT|Gravity.TOP,0,0);
			}catch(err){
				print(err);
			}
		}}));
	},
	createHeader:function(text,runFunction,headerType){
		try{
			var density=mcpe.density;
			var width=activity.getWindow().getDecorView().getWidth();
			var height=activity.getWindow().getDecorView().getHeight();
			var headLayout=new RelativeLayout(activity);
			headLayout.setGravity(Gravity.RIGHT|Gravity.TOP);
			var headLayoutParams=new ViewGroup.LayoutParams(ViewGroup.LayoutParams.FILL_PARENT,ViewGroup.LayoutParams.WRAP_CONTENT);
			headLayoutParams.height=height/headerType*density;
			headLayout.setLayoutParams(headLayoutParams);
			if(runFunction!=null){
				var buttonParams1=new RelativeLayout.LayoutParams(ViewGroup.LayoutParams.WRAP_CONTENT,ViewGroup.LayoutParams.WRAP_CONTENT);
				buttonParams1.width=height/28.25*density;
				//buttonParams1.height=height/28.25*density;
				buttonParams1.height=buttonParams1.width;
				buttonParams1.addRule(RelativeLayout.ALIGN_PARENT_RIGHT,1);
				var button1=new Button(activity);
				button1.setBackground(imageBuffer["closeButton_Off_Drawable"]);
				button1.setLayoutParams(buttonParams1);
				button1.setOnTouchListener(new OnTouchListener({onTouch:function(view,event){
					var x=event.getX();
					var y=event.getY();
					if(x<0||y<0||x>view.getWidth()||y>view.getHeight()){
						button1.setBackground(imageBuffer["closeButton_Off_Drawable"]);
					}else{
						if(event.getAction()==MotionEvent.ACTION_UP){
							button1.setBackground(imageBuffer["closeButton_Off_Drawable"]);
							runFunction.run();
							return false;
						}
						button1.setBackground(imageBuffer["closeButton_On_Drawable"]);
					}
					return false;
				}}));
				button1.setY(2*density);
			}
	
			var textViewParams1=new ViewGroup.LayoutParams(ViewGroup.LayoutParams.WRAP_CONTENT,ViewGroup.LayoutParams.FILL_PARENT);
			textViewParams1.width=width-density;
	
			var textView1=new TextView(activity);
			textView1.setText(text);
			textView1.setLayoutParams(textViewParams1);
			textView1.setGravity(Gravity.CENTER);
			textView1.setBackground(imageBuffer["headDrawable"]);
			textView1.setShadowLayer(1,2,2,Color.parseColor("#222222"));
			textView1.setTextColor(Color.parseColor("#cccccc"));
	
			headLayout.addView(textView1);
			if(runFunction!=null){
				headLayout.addView(button1);
			}
			return headLayout;
		}catch(err){print(err);}
		return new RelativeLayout(activity);
	},
	createBackground:function(){
		try{
			var backgroundLayout=new LinearLayout(activity);
			backgroundLayout.setOrientation(LinearLayout.VERTICAL);
			backgroundLayout.setBackground(Drawables.background());
			return backgroundLayout;
		}catch(err){print(err);}
		return new LinearLayout(activity);
	},
	createMCPEButton:function(text,runFunction){
		try{
			var byte=NinePatchChunk.createSimpleNinePatchChunk(3,4,3,4);
			var button_On_Drawable=new NinePatchDrawable(imageBuffer["button_On_Bitmap"],byte,new Rect(),null);
			var button_Off_Drawable=new NinePatchDrawable(imageBuffer["button_Off_Bitmap"],byte,new Rect(),null);
			var button=new Button(activity);
			var buttonParams=new ViewGroup.LayoutParams(ViewGroup.LayoutParams.WRAP_CONTENT,ViewGroup.LayoutParams.WRAP_CONTENT);
			var buttonDrawable=new StateListDrawable();
			var buttonColor=new ColorStateList([[R.attr.state_pressed,R.attr.state_enabled],[R.attr.state_enabled]],[Color.parseColor("#cccc00"),Color.parseColor("#cccccc")]);
			buttonDrawable.addState([R.attr.state_pressed,R.attr.state_enabled],button_On_Drawable);
			buttonDrawable.addState([R.attr.state_enabled],button_Off_Drawable);
			button.setLayoutParams(buttonParams);
			button.setText(text);
			button.setBackground(buttonDrawable);
			button.setShadowLayer(1,2,2,Color.parseColor("#222222"));
			button.setTextColor(buttonColor);
			button.setOnTouchListener(new OnTouchListener({onTouch:function(view,event){
				var actionId=event.getAction();
				if(actionId==MotionEvent.ACTION_UP){
					var x=event.getX();
					var y=event.getY();
					if(!(x<0||y<0||x>view.getWidth()||y>view.getHeight())){
						runFunction.run();
					}
				}
				return false;
			}}));
			button.setAllCaps(false);
			return button;
		}catch(err){print(err);}
		return new Button(activity);
	},
	createMCPEImageButton:function(bitmap,runFunction){
		try{
			var byte=NinePatchChunk.createSimpleNinePatchChunk(3,4,3,4);
			var button_On_Drawable=new NinePatchDrawable(imageBuffer["button_On_Bitmap"],byte,new Rect(),null);
			var button_Off_Drawable=new NinePatchDrawable(imageBuffer["button_Off_Bitmap"],byte,new Rect(),null);
			var density=mcpe.density;
			var width=bitmap.getWidth();
			var height=bitmap.getHeight();
			var tapBitmap=Bitmap.createBitmap(width,height,Bitmap.Config.ARGB_8888);
			var canvas=new Canvas(tapBitmap);
			var paint=new Paint();
			paint.setColor(Color.argb(128,255,255,255));
			var rect=new Rect(0,0,width,height);
			canvas.drawBitmap(bitmap,rect,rect,paint);
			var imageButton=new ImageButton(activity);
			var imageButtonParams=new ViewGroup.LayoutParams(width+12*density,height+12*density);
			imageButton.setLayoutParams(imageButtonParams);
			imageButton.setImageBitmap(bitmap);
			imageButton.setBackground(button_Off_Drawable);
			imageButton.setOnTouchListener(new OnTouchListener({onTouch:function(view,event){
				var x=event.getX();
				var y=event.getY();
				if(x<0||y<0||x>view.getWidth()||y>view.getHeight()){
					imageButton.setBackground(button_Off_Drawable);
					imageButton.setImageBitmap(bitmap);
				}else{
					var actionId=event.getAction();
					if(actionId==MotionEvent.ACTION_UP){
						imageButton.setBackground(button_Off_Drawable);
						imageButton.setImageBitmap(bitmap);
						runFunction.run();
					}else if(actionId==MotionEvent.ACTION_CANCEL){
						imageButton.setBackground(button_Off_Drawable);
						imageButton.setImageBitmap(bitmap);
					}else if(actionId==MotionEvent.ACTION_DOWN){
						imageButton.setBackground(button_On_Drawable);
						imageButton.setImageBitmap(tapBitmap);
					}else{	
					}
				}
				return false;
			}}));
			return imageButton;
		}catch(err){print(err);}
		return new ImageButton(activity);
	},
	createMCButton:function(text,runFunction){
		try{
			return button;
		}catch(err){print(err);}
		return new Button(activity);
	},
	createOldToggleButton:function(runFunction){
		try{
			var density=mcpe.density;
			var toggleButton=new ToggleButton(activity);
			toggleButton.setTextOff("");
			toggleButton.setTextOn("");
			var toggleButtonParams=new ViewGroup.LayoutParams(78*density,40*density);
			toggleButton.setLayoutParams(toggleButtonParams);
			var toggleDrawable=new StateListDrawable();
			toggleDrawable.addState([R.attr.state_checked,R.attr.state_enabled],imageBuffer["toggleSwitch2_on"]);
			toggleDrawable.addState([R.attr.state_enabled],imageBuffer["toggleSwitch2_off"]);
			toggleButton.setBackground(toggleDrawable);
			toggleButton.setChecked(false);
			toggleButton.setOnTouchListener(new OnTouchListener({onTouch:function(view,event){
				var actionId=event.getAction();
				if(actionId==MotionEvent.ACTION_DOWN){
					toggleButton.setChecked(!toggleButton.isChecked());
					runFunction.run(toggleButton.isChecked());
				}
				return true;
			}}));
			return toggleButton;
		}catch(err){print(err);}
		return new ToggleButton(activity);
	},
	createNewToggleButton:function(runFunction){
		try{
			var density=mcpe.density;
			var toggleButton=new ToggleButton(activity);
			toggleButton.setTextOff("");
			toggleButton.setTextOn("");
			var toggleButtonParams=new ViewGroup.LayoutParams(76*density,38*density);
			toggleButton.setLayoutParams(toggleButtonParams);
			var toggleDrawable=new StateListDrawable();
			toggleDrawable.addState([R.attr.state_checked,R.attr.state_enabled],imageBuffer["toggleSwitch1_on"]);
			toggleDrawable.addState([R.attr.state_enabled],imageBuffer["toggleSwitch1_off"]);
			toggleButton.setBackground(toggleDrawable);
			toggleButton.setChecked(false);
			toggleButton.setOnTouchListener(new OnTouchListener({onTouch:function(view,event){
				var actionId=event.getAction();
				if(actionId==MotionEvent.ACTION_DOWN){
					toggleButton.setChecked(!toggleButton.isChecked());
					runFunction.run(toggleButton.isChecked());
				}
				return true;
			}}));
			return toggleButton;
		}catch(err){print(err);}
		return new ToggleButton(activity);
	},
	createNegativeMCPEText:function(text){
		try{
			var textView=new TextView(activity);
			var textViewParams=new ViewGroup.LayoutParams(ViewGroup.LayoutParams.WRAP_CONTENT,ViewGroup.LayoutParams.WRAP_CONTENT);
			textView.setLayoutParams(textViewParams);
			textView.setText(text);
			textView.setShadowLayer(1,2,2,Color.parseColor("#222222"));
			textView.setTextColor(Color.parseColor("#cccccc"));
			return textView;
		}catch(err){print(err);}
		return new TextView(activity);
	},
	createPositiveMCPEText:function(text){
		try{
			var textView=new TextView(activity);
			var textViewParams=new ViewGroup.LayoutParams(ViewGroup.LayoutParams.WRAP_CONTENT,ViewGroup.LayoutParams.WRAP_CONTENT);
			textView.setLayoutParams(textViewParams);
			textView.setText(text);
			textView.setShadowLayer(1,2,2,Color.parseColor("#222222"));
			textView.setTextColor(Color.parseColor("#cccc00"));
			return textView;
		}catch(err){print(err);}
		return new TextView(activity);
	},
	createSlotList:function(width,slot,slotData,runFunction){
		if(runFunction==undefined){
			runFunction={run:function(){}};
		}
		try{
			var density=mcpe.density;
			var widthSlot=Math.floor(width/(52*density));
			width=widthSlot*52*density;
			var scrollView=new ScrollView(activity);
			//scrollView.setBackground(imageBuffer["slotBackgroundDrawable"]);
			var linearLayout1=new LinearLayout(activity);
			var linearLayout2=new LinearLayout(activity);
			var linearLayout2Params=new ViewGroup.LayoutParams(width+4*density,ViewGroup.LayoutParams.FILL_PARENT);
			var bitmap=CreateBitmap.trimmingBitmap(imageBuffer["slotBackgroundBitmap"],0,0,5,5,density);
			var byte=NinePatchChunk.createSimpleNinePatchChunk(2,2,2,2);
			var slotBackgroundDrawable=new NinePatchDrawable(bitmap,byte,new Rect(),null);
			linearLayout2.setBackground(slotBackgroundDrawable);
			linearLayout2.setLayoutParams(linearLayout2Params);
			var scrollViewParams=new ViewGroup.LayoutParams(width,ViewGroup.LayoutParams.FILL_PARENT);
			// scrollView.setX(2*density);
			// scrollView.setY(2*density);
			var temp=2*density;
			scrollView.setPadding(temp,temp,temp,temp);
			var linearLayout1Params=new ViewGroup.LayoutParams(ViewGroup.LayoutParams.FILL_PARENT,ViewGroup.LayoutParams.FILL_PARENT);
			linearLayout1.setLayoutParams(linearLayout1Params);
			linearLayout1.setGravity(Gravity.LEFT);
			linearLayout1.setOrientation(LinearLayout.VERTICAL);
			var loop1Max=Math.ceil(slot/widthSlot);
			for(var loop1=0;loop1<loop1Max;loop1++){
				var loop2Max=slot-widthSlot>0?widthSlot:slot;
				slot-=widthSlot;
				var tempLinearLayout=this.createSlotListLine(loop2Max);
				for(var loop2=0;loop2<loop2Max;loop2++){
					var slotId=loop1*widthSlot+loop2;
					var button;
					if(slotData==null||slotData.slot[slotId]==undefined){
						button=this.createSlotListButton(slotId,new ItemInstance(),slotData,runFunction);
						if(slotData.slot[slotId]==undefined){
							slotData.setItemInstance(slotId,new ItemInstance());
						}
					}else{
						button=this.createSlotListButton(slotId,slotData.slot[slotId],slotData,runFunction);
					}
					tempLinearLayout.addView(button);
				}
				linearLayout1.addView(tempLinearLayout);
			}
			scrollView.addView(linearLayout1);
			linearLayout2.addView(scrollView);
			slotData.setScrollView(scrollView);
			// new Thread({run:function(){
			// 	var height=0;
			// 	while((height=linearLayout2.getHeight())==0);
			// 	// slotData.reLoadSlotLayout(height-4*density);
			// }}).start();
			slotData.reLoadAllSlots();
			return linearLayout2;
		}catch(err){print(err);}
		return new LinearLayout(activity);
	},
	createSlotListLine:function(widthSlot){
		try{
			var density=mcpe.density;
			var linearLayout=new LinearLayout(activity);
			var linearLayoutParams=new ViewGroup.LayoutParams(52*density*widthSlot,52*density);
			linearLayout.setLayoutParams(linearLayoutParams);
			var slotDrawable=new BitmapDrawable(imageBuffer["slotBitmap"]);
			slotDrawable.setTileModeX(Shader.TileMode.REPEAT);
			linearLayout.setBackground(slotDrawable);
			return linearLayout;
		}catch(err){print(err);}
		return new LinearLayout(activity);
	},
	createSlotListButton:function(id,itemInstance,slotData,runFunction){
		try{
			var density=mcpe.density;
			var relativeLayout=new RelativeLayout(activity);
			var relativeLayoutParams=new ViewGroup.LayoutParams(52*density,52*density);
			relativeLayout.setLayoutParams(relativeLayoutParams);
			var button=new Button(activity);
			var buttonParams=new ViewGroup.LayoutParams(52*density,52*density);
			button.setLayoutParams(buttonParams);
			var touchEvent={status:false,task:null,run:function(event){
				var actionId=event.getAction();
				if(actionId==MotionEvent.ACTION_UP){
					this.status=false;
					var progress=slotData.removeProgressBar(id);
					runFunction.id=id;
					runFunction.progress=progress;
					runFunction.run();
				}else if(actionId==MotionEvent.ACTION_CANCEL){
					this.status=false;
					slotData.removeProgressBar(id);
				}else if(actionId==MotionEvent.ACTION_DOWN){
					this.status=true;
					this.task=new Thread({run:function(){
						try{
							Thread.sleep(500);
						}catch(err){print(err);}
						if(touchEvent.status){
							slotData.setProgressBar(id);
						}
					}});
					this.task.start();
				}else{
				}
			}};
			button.setOnTouchListener(new OnTouchListener({onTouch:function(view,event){
				touchEvent.run(event);
				return false;
			}}));
			button.setGravity(Gravity.RIGHT|Gravity.BOTTOM);
			if(itemInstance.id!=0){
				if(itemInstance.count>=100){
					if(itemInstance.isEnchanted){
						button.setText("E 99+");
					}else{
						button.setText("99+");
					}
					// button.setText(String(itemInstance.count));
				}else if(itemInstance.count>1){
					if(itemInstance.isEnchanted){
						button.setText("E "+String(itemInstance.count));
					}else{
						button.setText(String(itemInstance.count));
					}
				}else{
					if(itemInstance.isEnchanted){
						button.setText("E");
					}else{
						button.setText(null);
					}
				}
			}
			button.setShadowLayer(1,2,2,Color.parseColor("#222222"));
			button.setTextColor(Color.parseColor("#cccccc"));
			button.setTextSize(6*density);
			var itemImage=itemImages[itemInstance.id+":"+itemInstance.data];
			if(itemImage!=undefined){
				relativeLayout.setBackground(itemImage);
			}else if(itemInstance.id!=0||itemInstance.count!=0){
				relativeLayout.setBackground(itemImages["noImage"]);
			}
			button.setBackgroundColor(Color.argb(0,0,0,0));
			relativeLayout.addView(button);
			slotData.setSlotButton(id,button);
			slotData.setSlotButtonLayout(id,relativeLayout);
			return relativeLayout;
		}catch(err){print(err);}
		return new RelativeLayout(activity);
	},
	createSlotProgressBar:function(max){
		try{
			var density=mcpe.density;
			var progressBar=new ProgressBar(activity,null,R.attr.progressBarStyleHorizontal);
			progressBar.setMax(max);
			progressBar.setProgress(0);
			var progressBarParams=new ViewGroup.LayoutParams(32*density,4*density);
			progressBar.setLayoutParams(progressBarParams);
			var drawables=new Array(2);
			drawables[0]=imageBuffer["slotProgressBar_backgroundDrawable"];
			drawables[1]=imageBuffer["slotProgressBar_progressDrawable"];
			var layerDrawable=new LayerDrawable(drawables);
			layerDrawable.setId(0,R.id.background);
			layerDrawable.setId(1,R.id.progress);
			progressBar.setProgressDrawable(layerDrawable);
			progressBar.setX(10*density);
			progressBar.setY(10*density);
			return progressBar;
		}catch(err){print(err);}
		return new ProgressBar(activity);
	},
	createExperienceBar:function(parsent){
		try{
			var density=mcpe.density;
			var progressBar=new ProgressBar(activity,null,R.attr.progressBarStyleHorizontal);
			progressBar.setMax(1000);
			progressBar.setProgress(parsent*10);
			var progressBarParams=new ViewGroup.LayoutParams(364*density,10*density);
			progressBar.setLayoutParams(progressBarParams);
			var drawables=new Array(2);
			drawables[0]=imageBuffer["experienceBar_backgroundDrawable"];
			drawables[1]=imageBuffer["experienceBar_progressDrawable"];
			var layerDrawable=new LayerDrawable(drawables);
			layerDrawable.setId(0,R.id.background);
			layerDrawable.setId(1,R.id.progress);
			progressBar.setProgressDrawable(layerDrawable);
			return progressBar;
		}catch(err){print(err);}
		return new ProgressBar(activity);
	},
	createHitPointBar:function(max){
		try{
			var density=mcpe.density;
			var progressBar=new ProgressBar(activity,null,R.attr.progressBarStyleHorizontal);
			progressBar.setMax(max);
			progressBar.setProgress(max);
			var progressBarParams=new ViewGroup.LayoutParams(364*density,10*density);
			progressBar.setLayoutParams(progressBarParams);
			var drawables=new Array(2);
			drawables[0]=imageBuffer["hitPointBar_backgroundDrawable"];
			drawables[1]=imageBuffer["hitPointBar_progressDrawable"];
			var layerDrawable=new LayerDrawable(drawables);
			layerDrawable.setId(0,R.id.background);
			layerDrawable.setId(1,R.id.progress);
			progressBar.setProgressDrawable(layerDrawable);
			return progressBar;
		}catch(err){print(err);}
		return new ProgressBar(activity);
	},
	createHorseJumpBar:function(max){
		try{
			var density=mcpe.density;
			var progressBar=new ProgressBar(activity,null,R.attr.progressBarStyleHorizontal);
			progressBar.setMax(max);
			progressBar.setProgress(0);
			var progressBarParams=new ViewGroup.LayoutParams(364*density,10*density);
			progressBar.setLayoutParams(progressBarParams);
			var drawables=new Array(2);
			drawables[0]=imageBuffer["horseJumpBar_backgroundDrawable"];
			drawables[1]=imageBuffer["horseJumpBar_progressDrawable"];
			var layerDrawable=new LayerDrawable(drawables);
			layerDrawable.setId(0,R.id.background);
			layerDrawable.setId(1,R.id.progress);
			progressBar.setProgressDrawable(layerDrawable);
			return progressBar;
		}catch(err){print(err);}
		return new ProgressBar(activity);
	},
	createProgressWave:function(){
		try{
			var density=mcpe.density;
			var progressBar=new ProgressBar(activity);
			var progressBarParams=new ViewGroup.LayoutParams(20*density,16*density);
			progressBar.setLayoutParams(progressBarParams);
			animationDrawable=new AnimationDrawable();
			animationDrawable.setOneShot(false);
			animationDrawable.addFrame(imageBuffer["progressWaveDrawable_1"],500);
			animationDrawable.addFrame(imageBuffer["progressWaveDrawable_2"],500);
			animationDrawable.addFrame(imageBuffer["progressWaveDrawable_3"],500);
			animationDrawable.addFrame(imageBuffer["progressWaveDrawable_4"],500);
			animationDrawable.addFrame(imageBuffer["progressWaveDrawable_5"],500);
			progressBar.setIndeterminateDrawable(animationDrawable);
			return progressBar;
		}catch(err){print(err);}
		return new ProgressBar(activity);
	},
	createWaveAnimation:function(){
		try{
			var density=mcpe.density;
			var progressBar=new ProgressBar(activity);
			var progressBarParams=new ViewGroup.LayoutParams(20*density,18*density);
			progressBar.setLayoutParams(progressBarParams);
			animationDrawable=new AnimationDrawable();
			animationDrawable.setOneShot(false);
			animationDrawable.addFrame(imageBuffer["waveAnimationDrawable_1"],150);
			animationDrawable.addFrame(imageBuffer["waveAnimationDrawable_2"],150);
			animationDrawable.addFrame(imageBuffer["waveAnimationDrawable_3"],150);
			progressBar.setIndeterminateDrawable(animationDrawable);
			return progressBar;
		}catch(err){print(err);}
		return new ProgressBar(activity);
	},
	createHitPointGage:function(health){
		try{
			var density=mcpe.density;
			var progressBar=new ProgressBar(activity,null,R.attr.progressBarStyleHorizontal);
			progressBar.setMax(20);
			progressBar.setProgress(health);
			var progressBarParams=new ViewGroup.LayoutParams(162*density,18*density);
			progressBar.setLayoutParams(progressBarParams);
			var drawables=new Array(2);
			drawables[0]=imageBuffer["hitPointGage_BackgroundDrawable"];
			drawables[1]=imageBuffer["hitPointGage_ProgressDrawable"];
			var layerDrawable=new LayerDrawable(drawables);
			layerDrawable.setId(0,R.id.background);
			layerDrawable.setId(1,R.id.progress);
			progressBar.setProgressDrawable(layerDrawable);
			return progressBar;
		}catch(err){print(err);}
		return new ProgressBar(activity);
	},
	createArmorPointGage:function(health){
		try{
			var density=mcpe.density;
			var progressBar=new ProgressBar(activity,null,R.attr.progressBarStyleHorizontal);
			progressBar.setMax(20);
			progressBar.setProgress(health);
			var progressBarParams=new ViewGroup.LayoutParams(162*density,18*density);
			progressBar.setLayoutParams(progressBarParams);
			var drawables=new Array(2);
			drawables[0]=imageBuffer["armorPointGage_BackgroundDrawable"];
			drawables[1]=imageBuffer["armorPointGage_ProgressDrawable"];
			var layerDrawable=new LayerDrawable(drawables);
			layerDrawable.setId(0,R.id.background);
			layerDrawable.setId(1,R.id.progress);
			progressBar.setProgressDrawable(layerDrawable);
			return progressBar;
		}catch(err){print(err);}
		return new ProgressBar(activity);
	},
	createHungerPointGage:function(hunger){
		try{
			var density=mcpe.density;
			var progressBar=new ProgressBar(activity,null,R.attr.progressBarStyleHorizontal);
			progressBar.setMax(20);
			progressBar.setProgress(0);
			var progressBarParams=new ViewGroup.LayoutParams(162*density,18*density);
			progressBar.setLayoutParams(progressBarParams);
			var drawables=new Array(2);
			drawables[0]=imageBuffer["hungerPointGage_BackgroundDrawable"];
			drawables[1]=imageBuffer["hungerPointGage_SecondaryProgressDrawable"];
			drawables[2]=imageBuffer["hungerPointGage_ProgressDrawable"];
			var layerDrawable=new LayerDrawable(drawables);
			layerDrawable.setId(0,R.id.background);
			layerDrawable.setId(1,R.id.secondaryProgress);
			layerDrawable.setId(2,R.id.progress);
			progressBar.setProgressDrawable(layerDrawable);
			var hungerGageClass=new HungerGage(hunger);
			hungerGageClass.setHungerGage(progressBar);
			hungerGageClass.setHunger(hunger);
			return hungerGageClass;
		}catch(err){print(err);}
		return new ProgressBar(activity);
	},
	createFireProgressBar:function(parsent){
		try{
			var density=mcpe.density;
			var progressBar=new ProgressBar(activity,null,R.attr.progressBarStyleHorizontal);
			progressBar.setMax(100);
			progressBar.setProgress(parsent);
			var progressBarParams=new ViewGroup.LayoutParams(26*density,26*density);
			progressBar.setLayoutParams(progressBarParams);
			var drawables=new Array(2);
			drawables[0]=imageBuffer["fire_backgroundDrawable"];
			drawables[1]=imageBuffer["fire_progressDrawable"];
			var layerDrawable=new LayerDrawable(drawables);
			layerDrawable.setId(0,R.id.background);
			layerDrawable.setId(1,R.id.progress);
			progressBar.setProgressDrawable(layerDrawable);
			progressBar.setRotation(-90);
			return progressBar;
		}catch(err){print(err);}
		return new ProgressBar(activity);
	},
	createArrowProgressBar:function(parsent){
		try{
			var density=mcpe.density;
			var progressBar=new ProgressBar(activity,null,R.attr.progressBarStyleHorizontal);
			progressBar.setMax(100);
			progressBar.setProgress(parsent);
			var progressBarParams=new ViewGroup.LayoutParams(44*density,32*density);
			progressBar.setLayoutParams(progressBarParams);
			var drawables=new Array(2);
			drawables[0]=imageBuffer["arrow_backgroundDrawable"];
			drawables[1]=imageBuffer["arrow_progressDrawable"];
			var layerDrawable=new LayerDrawable(drawables);
			layerDrawable.setId(0,R.id.background);
			layerDrawable.setId(1,R.id.progress);
			progressBar.setProgressDrawable(layerDrawable);
			return progressBar;
		}catch(err){print(err);}
		return new ProgressBar(activity);
	},
	createSeekBar:function(max){
		try{
			var density=mcpe.density;
			var seekBar=new SeekBar(activity);
			seekBar.setMax(max);
			seekBar.setProgress(0);
			var seekBarParams=new ViewGroup.LayoutParams(180*density,68*density);
			seekBar.setLayoutParams(seekBarParams);
			//seekBar.setProgressDrawable(layerDrawable);
			var stateListDrawable=new StateListDrawable();
			//stateListDrawable.addState(new Array(R.attr.state_enabled,R.attr.state_focused,R.attr.state_enabled,-R.attr.state_enabled),imageBuffer["seekBarToggleDrawable"]);
			seekBar.setThumb(imageBuffer["seekBarToggleDrawable"]);
			return seekBar;
		}catch(err){print(err);}
		return new SeekBar(activity);
	},
	createEffectWindow:function(layout){
		try{
			var density=mcpe.density;
			var relativeLayout=new RelativeLayout(activity);
			var relativeLayoutParams=new ViewGroup.LayoutParams(240*density,64*density);
			relativeLayout.setLayoutParams(relativeLayoutParams);
			relativeLayout.addView(this.createEffectWindowBackground());
			var layoutParams=new ViewGroup.LayoutParams(224*density,48*density);
			layout.setLayoutParams(layoutParams);
			relativeLayout.addView(layout);
			layout.setX(8*density);
			layout.setY(8*density);
			return relativeLayout;
		}catch(err){print(err);}
		return new RelativeLayout(activity);
	},
	createEffectWindowBackground:function(){
		try{
			var density=mcpe.density;
			var linearLayout=new LinearLayout(activity);
			var linearLayoutParams=new ViewGroup.LayoutParams(240*density,64*density);
			linearLayout.setLayoutParams(linearLayoutParams);
			linearLayout.setOrientation(LinearLayout.VERTICAL);
			linearLayout.setBackground(imageBuffer["effectWindowDrawable"]);
			return linearLayout;
		}catch(err){print(err);}
		return new LinearLayout(activity);
	},
	createCompassAnimation:function(){
		try{
			var density=mcpe.density;
			var progressBar=new ProgressBar(activity);
			var progressBarParams=new ViewGroup.LayoutParams(16*density*4,16*density*4);
			progressBar.setLayoutParams(progressBarParams);
			animationDrawable=new AnimationDrawable();
			animationDrawable.setOneShot(false);
			var imageValue=imageBuffer["compassBitmap"].getHeight()/512;
			for(var loop=0;loop<32;loop++){
				animationDrawable.addFrame(CreateBitmap.trimmingBitmapDrawable(imageBuffer["compassBitmap"],0,16*loop,16*imageValue,16*imageValue,density*4,imageValue),50);
			}
			progressBar.setIndeterminateDrawable(animationDrawable);
			return progressBar;
		}catch(err){print(err);}
		return new ProgressBar(activity);
	},
	createWatchAnimation:function(){
		try{
			var density=mcpe.density;
			var progressBar=new ProgressBar(activity);
			var progressBarParams=new ViewGroup.LayoutParams(16*density*4,16*density*4);
			progressBar.setLayoutParams(progressBarParams);
			animationDrawable=new AnimationDrawable();
			animationDrawable.setOneShot(false);
			var imageValue=imageBuffer["watch-atlasBitmap"].getHeight()/128;
			for(var loop1=0;loop1<8;loop1++){
				for(var loop2=0;loop2<8;loop2++){
					animationDrawable.addFrame(CreateBitmap.trimmingBitmapDrawable(imageBuffer["watch-atlasBitmap"],16*loop2,16*loop1,16*imageValue,16*imageValue,density*4,imageValue),50);
				}
			}
			progressBar.setIndeterminateDrawable(animationDrawable);
			return progressBar;
		}catch(err){print(err);}
		return new ProgressBar(activity);
	},
}