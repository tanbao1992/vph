function TabView(){
	
	this.tabDatas = TabView.tabDatas.datas
	
}

TabView.prototype.load = function(index){
	
	this.datas = this.checkDatas(index)
	
}
	
TabView.prototype.checkDatas = function(index){
	
	if(index == 0){
		
		var locationDatas = this.tabDatas[0].userLocation
		
		return locationDatas
	}
	
}

TabView.prototype.unload = function(){
	
	this.$tab.hide()
}
