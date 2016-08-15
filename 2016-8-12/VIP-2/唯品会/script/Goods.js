function Goods(){
	
	
}

Goods.prototype.show = function(){
	
	$.getJSON('http://127.0.0.1:8020/备课/VIP-2/唯品会/json/goods.json',function(data){
		
		var jingxuan = data.jingxuan
		console.log(jingxuan)
		
		jingxuan.forEach(function(ele,index){
			
			console.log(ele)
			
			$("<div class='aGood'>").css({
				
				width:baseWidth/2  + 'px',
				height:'350px',
				backgroundImage:'url(' + ele.large_img +')',
				backgroundSize:'100%',
				backgroundOrigin:'padding-box',
				backgroundRepeat:'no-repeat',
				float:'left',
				borderBottom:'10px solid white',
				borderTop:'10px solid white',
				position:'reletive'
					
			}).appendTo($('.container4')).append($('<p>').css({
				width:'90%',
				height:'80%',
				margin:'20px auto',
				backgroundColor:'rgba(255,255,255,1)',
				borderRadius:'5px',
				display:'none'
				
				
			}).append())
			
			
			$('.aGood:even').css({borderRight:'10px solid white'})
			
			$('.aGood:odd').css({borderLeft:'10px solid white'})
			
		})
		
		$('.aGood').hover(function(){
			
			$(this).find('p').stop().fadeIn(500,function(){
				
				$(this).css({
					filter:'blur(0.5px)'
				})
			}.bind(this))
			
		},function(){
			
			$(this).find('p').stop().fadeOut(500,function(){
				
				$('.aGood').css({
					
					filter:'blur(0)'
				})
			})
		})
	})
	
}
