var NinePatchChunk={
	createSimpleNinePatchChunk:function(topLeft,topRight,leftTop,leftBottom){
		var byteBuffer=ByteBuffer.allocate(84).order(ByteOrder.nativeOrder());
		byteBuffer.put(0x01);
		byteBuffer.put(0x02);
		byteBuffer.put(0x02);
		byteBuffer.put(0x09);
		byteBuffer.putInt(0);
		byteBuffer.putInt(0);
		byteBuffer.putInt(0);
		byteBuffer.putInt(0);
		byteBuffer.putInt(0);
		byteBuffer.putInt(0);
		byteBuffer.putInt(0);
		byteBuffer.putInt(topLeft);
		byteBuffer.putInt(topRight+1);
		byteBuffer.putInt(leftTop*density);
		byteBuffer.putInt(leftBottom+1);
		byteBuffer.putInt(1);
		byteBuffer.putInt(1);
		byteBuffer.putInt(1);
		byteBuffer.putInt(1);
		byteBuffer.putInt(1);
		byteBuffer.putInt(1);
		byteBuffer.putInt(1);
		byteBuffer.putInt(1);
		byteBuffer.putInt(1);
		return byteBuffer.array();
	},
	createNinePatchChunk:function(topLeft,topRight,leftTop,leftBottom,bottomLeft,bottomRight,rightTop,rightBottom){
		var byteBuffer=ByteBuffer.allocate(84).order(ByteOrder.nativeOrder());
		byteBuffer.put(0x01);
		byteBuffer.put(0x02);
		byteBuffer.put(0x02);
		byteBuffer.put(0x09);
		byteBuffer.putInt(0);
		byteBuffer.putInt(0);
		byteBuffer.putInt(bottomLeft);
		byteBuffer.putInt(bottomRight);
		byteBuffer.putInt(rightTop);
		byteBuffer.putInt(rightBottom);
		byteBuffer.putInt(0);
		byteBuffer.putInt(topLeft);
		byteBuffer.putInt(topRight+1);
		byteBuffer.putInt(leftTop);
		byteBuffer.putInt(leftBottom+1);
		byteBuffer.putInt(1);
		byteBuffer.putInt(1);
		byteBuffer.putInt(1);
		byteBuffer.putInt(1);
		byteBuffer.putInt(1);
		byteBuffer.putInt(1);
		byteBuffer.putInt(1);
		byteBuffer.putInt(1);
		byteBuffer.putInt(1);
		return byteBuffer.array();
	}
}