var NinePatchChunk={
	createSimpleNinePatchChunk:function(topLeft,topRight,rightTop,rightBottom){
		var density=mcpe.density*2;
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
		byteBuffer.putInt(topLeft*density);
		byteBuffer.putInt((topRight+1)*density);
		byteBuffer.putInt(rightTop*density);
		byteBuffer.putInt((rightBottom+1)*density);
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
	createNinePatchChunk:function(topLeft,topRight,rightTop,rightBottom,bottomLeft,bottomRight,leftTop,leftBottom){
		var density=mcpe.density*2;
		var byteBuffer=ByteBuffer.allocate(84).order(ByteOrder.nativeOrder());
		byteBuffer.put(0x01);
		byteBuffer.put(0x02);
		byteBuffer.put(0x02);
		byteBuffer.put(0x09);
		byteBuffer.putInt(0);
		byteBuffer.putInt(0);
		byteBuffer.putInt(bottomLeft*density);
		byteBuffer.putInt(bottomRight*density);
		byteBuffer.putInt(leftTop*density);
		byteBuffer.putInt(leftBottom*density);
		byteBuffer.putInt(0);
		byteBuffer.putInt(topLeft*density);
		byteBuffer.putInt((topRight+1)*density);
		byteBuffer.putInt(rightTop*density);
		byteBuffer.putInt((rightBottom+1)*density);
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