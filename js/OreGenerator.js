var OreGenerator={
	addOre:function(id,data,maxSize,probability,minY,maxY,type){
		var oreGen="AddOre:";
		if(type==undefined){
			type=0;
		}else if(type>=2){
			type=0;
		}
		oreGen+=type+","+id+","+data+","+maxSize+","+probability+","+minY+","+maxY;
		ModPE.showTipMessage(oreGen);
	}
}