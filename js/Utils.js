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