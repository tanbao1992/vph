function LocationTabView(){
	
	TabView.call(this)
}

LocationTabView.prototype = Object.create(TabView.prototype)

LocationTabView.prototype.constructor = LocationTabView


LocationTabView.prototype.load = function(index){
	
	TabView.prototype.load.call(this,index)
	
	if(this.$tab){
		
		this.$tab.show()
		
		return
	}
	
	var left = document.querySelector('.container1').getBoundingClientRect().left
	console.log(left)
	
	this.$tab = $("<div class='tabBox'>").css({
				
				position:'absolute',
				left:left,
				top:'30px',
				backgroundColor:'white',
				border:'1px solid silver'
			}).appendTo($('body')).append($("<ul class='tabItems'>").css('list-style-type','none')).hover(function(){
			
			$(this).show()
			
		},function(){
			
			$(this).hide()
		})
		
		
	if(index == 0){
		
		for(var keys in this.datas){
			
			var $li = $('<li>').css({height:'30px',fontSize:'14px'}).appendTo($(".tabItems")) 
			
			var $indexSpan = $('<span>').css({
				
				display:'inline-block',
				width:'50px'
			}).text(keys).appendTo($li)
			
			var cities = this.datas[keys]
			
			var lastSpan = 0
			for(var index in cities){
				
				var $span = $('<span>',{
					on:{
						mouseover:function(){
							
							$(this).css('color','#F10180')
						},
						mouseout:function(){
							
							$(this).css('color','#666666')
								
						},
						click:function(){
							
							$('.header-location a').text($(this).text())
							$(this).css({'background-color':skinColor,'color':'white'})
							
							$(lastSpan).css({'background-color':'','color':normalTextColor})
							
							lastSpan = $(this)
							
								
						}
					}
				}).css({
				
				display:'inline-block',
				padding:'0 5px',
				color:'#666666',
				fontSize:'0.8rem'
				
			}).text(cities[index]).appendTo($li)
			
			}
		}
	}
}




