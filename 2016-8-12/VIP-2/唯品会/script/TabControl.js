
var skinColor = '#F10180';
var baseFont = '15px';
var space = '10vw';
var normalTextColor = '#666666';
var baseWidth = '1000';

function TabControl(){
	
	this.loctabView = new LocationTabView()
	
	this.moreTabView = new MoreTabView()
	
	this.control()
}

TabControl.prototype.control = function(){
	
	$('.header-location').first().hover(function() {

		this.loctabView.load(0)
		
	}.bind(this))
	
	
	$('li.more-show').hover(function() {

		this.moreTabView.load(0)
		
	}.bind(this),function(){
		
		this.moreTabView.unload()
		
	}.bind(this))
	

}


