var CreateBitmap={
	trimmingBitmap:function(baseBitmap,x,y,width,height,value,movingDiameter){
		if(value==undefined||value==null){
			value=1;
		}
		if(movingDiameter==undefined||movingDiameter==null){
			movingDiameter=1;
		}
		var paint=new Paint();
		var rect_1=new Rect(0,0,width*movingDiameter,height*movingDiameter);
		rect_1.offset(x*movingDiameter,y*movingDiameter);
		var rect_2=new Rect(0,0,width*value*2,height*value*2);
		var bitmap=Bitmap.createBitmap(width*value*2,height*value*2,Bitmap.Config.ARGB_8888);
		var canvas=new Canvas(bitmap);
		canvas.drawBitmap(baseBitmap,rect_1,rect_2,paint);
		return bitmap;
	},
	trimmingBitmapDrawable:function(baseBitmap,x,y,width,height,value,movingDiameter){
		return new BitmapDrawable(this.trimmingBitmap(baseBitmap,x,y,width,height,value));
	},
	trimmingClipDrawable:function(baseBitmap,x,y,width,height,value,movingDiameter){
		return new ClipDrawable(this.trimmingBitmapDrawable(baseBitmap,x,y,width,height,value,movingDiameter),Gravity.LEFT,ClipDrawable.HORIZONTAL);
	},
	mixColors:function(baseBitmap,r,g,b){
		r/=255;
		g/=255;
		b/=255;
		var colors=new Array(
			r,0,0,0,0,
			0,g,0,0,0,
			0,0,b,0,0,
			0,0,0,1,0
		);
		var colorMatrix=new ColorMatrix();
		colorMatrix.set(colors);
		var colorMatrixColorFiletr=new ColorMatrixColorFilter(colorMatrix);
		var bitmap=Bitmap.createBitmap(baseBitmap);
		var paint=new Paint();
		paint.setColorFilter(colorMatrixColorFiletr);
		var canvas=new Canvas(bitmap);
		canvas.drawBitmap(bitmap,0,0,paint);
		return bitmap;
	},
	changeAlpha:function(baseBitmap,alpha){
		alpha/=255;
		var colors=new Array(
			1*alpha,0,0,0,0,
			0,1*alpha,0,0,0,
			0,0,1*alpha,0,0,
			0,0,0,1,0
		);
		var colorMatrix=new ColorMatrix();
		colorMatrix.set(colors);
		var colorMatrixColorFiletr=new ColorMatrixColorFilter(colorMatrix);
		var bitmap=Bitmap.createBitmap(baseBitmap);
		var paint=new Paint();
		paint.setColorFilter(colorMatrixColorFiletr);
		var canvas=new Canvas(bitmap);
		canvas.drawBitmap(bitmap,0,0,paint);
		return bitmap;
	}
};