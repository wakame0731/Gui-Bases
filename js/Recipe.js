var Recipe={
	changeRecipe:function(deleteId,deleteData,createItems,recipeTable,recipeData){
		var changeRecipe="ChangeRecipe:";
		changeRecipe+=deleteId+","+deleteData+":";
		for(var i=2;i<createItems.length;i+=3,changeRecipe+=","){
			changeRecipe+=createItems[i-2]+","+createItems[i-1]+","+createItems[i];
		}
		changeRecipe+=":";
		for(var i=0;i<recipeTable.length;i++,changeRecipe+=","){
			changeRecipe+=recipeTable[i];
		}
		changeRecipe+=":";
		for(var i=2;i<recipeData.length;i+=3,changeRecipe+=","){
			changeRecipe+=recipeData[i-2]+","+recipeData[i-1]+","+recipeData[i];
		}
		ModPE.showTipMessage(changeRecipe);
	},
	addRecipe:function(createItems,recipeTable,recipeData){
		var addRecipe="AddRecipe:";
		for(var i=2;i<createItems.length;i+=3,addRecipe+=","){
			addRecipe+=createItems[i-2]+","+createItems[i-1]+","+createItems[i];
		}
		addRecipe+=":";
		for(var i=0;i<recipeTable.length;i++,addRecipe+=","){
			addRecipe+=recipeTable[i];
		}
		addRecipe+=":";
		for(var i=2;i<recipeData.length;i+=3,addRecipe+=","){
			addRecipe+=recipeData[i-2]+","+recipeData[i-1]+","+recipeData[i];
		}
		ModPE.showTipMessage(addRecipe);
	},
}