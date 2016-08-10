var FileEdit={
	directory:DefaultDirectory+"/games/com.mojang/",
	check:function(fileDirectory){
		var file=new File(fileDirectory);
		return file.exists();
	},
	write:function(fileName,data){
		var worldDirectory=Level.getWorldDir();
		if(worldDirectory==null){
			var fullDirectory=this.directory+"minecraftpe/Gui Bases/"+fileName;
			if(!(this.check(fullDirectory))){
				this.create(this.directory+"minecraftpe/Gui Bases",fileName);
			}
			var file=new File(fullDirectory);
			var bufferedWriter=new BufferedWriter(new FileWriter(file,false));
			bufferedWriter.write(data);
			bufferedWriter.close();
		}else{
			var fullDirectory=this.directory+"minecraftWorlds/"+worldDirectory+"/Gui Bases/"+fileName;
			if(!(this.check(fullDirectory))){
				this.create(this.directory+"minecraftWorlds/"+worldDirectory+"/Gui Bases",fileName);
			}
			var file=new File(fullDirectory);
			var bufferedWriter=new BufferedWriter(new FileWriter(file,false));
			bufferedWriter.write(data);
			bufferedWriter.close();
		}
	},
	create:function(folder,fileName){
		try{
			var file=new File(folder+"/"+fileName);
			file.createNewFile();
		}catch(error){
			var directory=new File(folder);
			directory.mkdirs();
			var file=new File(folder+"/"+fileName);
			file.createNewFile();
		}
	},
	read:function(fileName){
		worldDirectory=Level.getWorldDir();
		if(worldDirectory==null){
			var fullDirectory=this.directory+"minecraftpe/Gui Bases/"+fileName;
		}else{
			var fullDirectory=this.directory+"minecraftWorlds/"+worldDirectory+"/Gui Bases/"+fileName;
		}
		if(!(this.check(fullDirectory))){
			return null;
		}
		var file=new File(fullDirectory);
		var bufferedReader=new BufferedReader(new FileReader(file));
		var readData=bufferedReader.readLine();
		bufferedReader.close();
		return readData;
	},
	delete:function(fileName){
		worldDirectory=Level.getWorldDir();
		if(worldDirectory==null){
			var fullDirectory=this.directory+"minecraftpe/Gui Bases/"+fileName;
		}else{
			var fullDirectory=this.directory+"minecraftWorlds/"+worldDirectory+"/Gui Bases/"+fileName;
		}
		if(File.check(fullDirectory)){
			var file=new File(fullDirectory);
			file.delete();
			file.close();
		}
	},
};