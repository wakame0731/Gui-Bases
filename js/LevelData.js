//jStringはjavaのStringクラス
var LevelData=function(){
	this.datas=new Array();//byteデータ格納
	this.counter=12;//合計byte数カウンター
	this.levelName=new jString("null");
	this.seed=0;
	this.gameType=1;
	this.generator=1;
	this.spawnX=0;
	this.spawnY=128;
	this.spawnZ=0;
	this.time=0;
	this.isCreative=true;
	this.lightningLevel=0.0;
	this.lightningTime=100000;
	this.rainLevel=0.0;
	this.rainTime=50000;

	//バージョン(?)
	this.datas.push(4);
	this.datas.push(0);
	this.datas.push(0);
	this.datas.push(0);
	this.datas.push(8);
	this.datas.push(2);
	this.datas.push(0);
	this.datas.push(0);
	this.datas.push(0xa);
	this.datas.push(0);
	this.datas.push(0);
}

LevelData.prototype.setName=function(name){
	this.levelName=new jString(name);
}

LevelData.prototype.setSeed=function(seed){
	this.seed=seed;
}

LevelData.prototype.addData=function(dataName,dataType,data){
	this.datas.push(dataType);
	this.datas.push(dataName.length);
	this.datas.push(0);
	var jStringName=new jString(dataName);
	this.datas.push(jStringName.getBytes());
	switch(dataType){
		case 1:
			if(data==true){
				this.datas.push(1);
			}else{
				this.datas.push(0);
			}
			this.counter+=4+dataName.length;
		break;
		case 3:
			var byteBuffer=ByteBuffer.allocate(4).order(ByteOrder.LITTLE_ENDIAN);
			byteBuffer.putInt(data);
			this.datas.push(byteBuffer.array());
			this.counter+=7+dataName.length;
		break;
		case 4:
			var byteBuffer=ByteBuffer.allocate(8).order(ByteOrder.LITTLE_ENDIAN);
			byteBuffer.putLong(data);
			this.datas.push(byteBuffer.array());
			this.counter+=11+dataName.length;
		break;
		case 5:
			var byteBuffer=ByteBuffer.allocate(4).order(ByteOrder.LITTLE_ENDIAN);
			byteBuffer.putFloat(data);
			this.datas.push(byteBuffer.array());
			this.counter+=7+dataName.length;
		break;
		case 8:
			var dataByte=data.getBytes();
			this.datas.push(dataByte.length);
			this.datas.push(0);
			this.datas.push(dataByte);
			this.counter+=5+dataName.length+dataByte.length;
		break;
	}
}

LevelData.prototype.create=function(){
	var fileDirectory=DefaultDirectory+"/games/com.mojang/minecraftWorlds/"+getRandomString(12);
	new File(fileDirectory).mkdirs();
	this.addData("DayCycleStopTime",3,-1);
	this.addData("ForceGameType",1,false);
	this.addData("GameType",3,this.gameType);
	this.addData("Generator",3,this.generator);
	this.addData("LastPlayed",4,1468761252);
	this.addData("LevelName",8,this.levelName);
	this.addData("LimitedWorldOriginX",3,this.spawnX);
	this.addData("LimitedWorldOriginY",3,this.spawnY);
	this.addData("LimitedWorldOriginZ",3,this.spawnZ);
	this.addData("NetworkVersion",3,81);
	this.addData("Platform",3,2);
	this.addData("RandomSeed",4,this.seed);
	this.addData("SpawnX",3,this.spawnX);
	this.addData("SpawnY",3,this.spawnY);
	this.addData("SpawnZ",3,this.spawnZ);
	this.addData("StorageVersion",3,4);
	this.addData("Time",4,this.time);
	this.addData("currentTick",4,this.time);
	this.addData("eduLevel",1,false);
	this.addData("globalPermissions",3,2);
	this.addData("hasBeenLoadedInCreative",1,this.isCreative);
	this.addData("lightningLevel",5,this.lightningLevel);
	this.addData("lightningTime",3,this.lightningTime);
	this.addData("rainLevel",5,this.rainLevel);
	this.addData("rainTime",3,this.rainTime);
	this.addData("spawnMobs",1,true);
	this.addData("worldStartCount",4,4294967292);
	var byteBuffer=ByteBuffer.allocate(this.counter);
	var loopMax=this.datas.length;
	for(var i=0;i<loopMax;i++){
		byteBuffer.put(this.datas[i]);
	}
	byteBuffer.put(0);
	var byteArray=byteBuffer.array();
	var fileOutputStream_levelDat=new  FileOutputStream(fileDirectory+"/level.dat");
	fileOutputStream_levelDat.write(byteArray,0,byteArray.length);
	fileOutputStream_levelDat.close();

	//必要になるかも？
	/*var fileOutputStream_levelDatOld=new  FileOutputStream(fileDirectory+"/level.dat_old");
	fileOutputStream_levelDatOld.write(byteArray,0,byteArray.length);
	fileOutputStream_levelDatOld.close();*/
	
	var byteData=this.levelName.getBytes();
	var fileOutputStream_levelName=new  FileOutputStream(fileDirectory+"/levelname.txt");
	fileOutputStream_levelName.write(byteData,0,byteData.length);
	fileOutputStream_levelName.close();
}