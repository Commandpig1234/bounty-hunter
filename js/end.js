function end(id){ 
	if(id==1){
		$('.background_board').css('display','none');
		$('.caption').css('display','none');
		$('.curtain').css('display','block');

		setTimeout(function(){
			$('.background_board').css({
				'background-size': 'cover', // 使背景图片铺满窗口
				'background-position': 'center', // 使背景图片居中
				'background-repeat': 'no-repeat' // 防止背景图片重复
			});
			$('.background_board').fadeIn(1000);
			$('.caption').html('达成结局：无人问津');
			$('.caption').fadeIn(1000);
		},2000);
		setTimeout("$('.caption').fadeOut(500),$('.background_board').fadeOut(1000)",5000);
		
		setTimeout(function(){
			window.location.href = './home/home.html';
		},7000);
	}
	else if(id==2){
		$('.background_board').css('display','none');
		$('.caption').css('display','none');
		$('.curtain').css('display','block');

		setTimeout(function(){
			$('.background_board').css({
				'background-size': 'cover', // 使背景图片铺满窗口
				'background-position': 'center', // 使背景图片居中
				'background-repeat': 'no-repeat' // 防止背景图片重复
			});
			$('.background_board').fadeIn(1000);
			$('.caption').html('达成结局：中道崩殂');
			$('.caption').fadeIn(1000);
		},2000);
		setTimeout("$('.caption').fadeOut(500),$('.background_board').fadeOut(1000)",5000);
		
		setTimeout(function(){
			window.location.href = './home/home.html';
		},7000);
	}
	else if(id==3){
		$('.background_board').css('display','none');
		$('.caption').css('display','none');
		$('.curtain').css('display','block');

		setTimeout(function(){
			$('.background_board').css({
				'background-size': 'cover', // 使背景图片铺满窗口
				'background-position': 'center', // 使背景图片居中
				'background-repeat': 'no-repeat' // 防止背景图片重复
			});
			$('.background_board').fadeIn(1000);
			$('.caption').html('达成结局：幻想乌托邦');
			$('.caption').fadeIn(1000);
		},2000);
		setTimeout("$('.caption').fadeOut(500),$('.background_board').fadeOut(1000)",5000);
		
		setTimeout(function(){
			window.location.href = './home/home.html';
		},7000);
	}
	else if(id==4){
		$('.background_board').css('display','none');
		$('.caption').css('display','none');
		$('.curtain').css('display','block');

		setTimeout(function(){
			$('.background_board').css({
				'background-size': 'cover', // 使背景图片铺满窗口
				'background-position': 'center', // 使背景图片居中
				'background-repeat': 'no-repeat' // 防止背景图片重复
			});
			$('.background_board').fadeIn(1000);
			$('.caption').html('达成结局：迷失旅人');
			$('.caption').fadeIn(1000);
		},2000);
		setTimeout("$('.caption').fadeOut(500),$('.background_board').fadeOut(1000)",5000);
		
		setTimeout(function(){
			window.location.href = './home/home.html';
		},7000);
	}
	else if(id==5){
		$('.background_board').css('display','none');
		$('.caption').css('display','none');
		$('.curtain').css('display','block');

		setTimeout(function(){
			$('.background_board').css({
				'background-size': 'cover', // 使背景图片铺满窗口
				'background-position': 'center', // 使背景图片居中
				'background-repeat': 'no-repeat' // 防止背景图片重复
			});
			$('.background_board').fadeIn(1000);
			$('.caption').html('达成结局：沽名钓誉');
			$('.caption').fadeIn(1000);
		},2000);
		setTimeout("$('.caption').fadeOut(500),$('.background_board').fadeOut(1000)",5000);
		
		setTimeout(function(){
			window.location.href = './home/home.html';
		},7000);
	}
	else if(id==6){
		$('.background_board').css('display','none');
		$('.caption').css('display','none');
		$('.curtain').css('display','block');

		setTimeout(function(){
			$('.background_board').css({
				'background-size': 'cover', // 使背景图片铺满窗口
				'background-position': 'center', // 使背景图片居中
				'background-repeat': 'no-repeat' // 防止背景图片重复
			});
			$('.background_board').fadeIn(1000);
			$('.caption').html('达成结局：兜兜转转');
			$('.caption').fadeIn(1000);
		},2000);
		setTimeout("$('.caption').fadeOut(500),$('.background_board').fadeOut(1000)",5000);
		
		setTimeout(function(){
			window.location.href = './home/home.html';
		},7000);
	}
	else if(id==7){
		$('.background_board').css('display','none');
		$('.caption').css('display','none');
		$('.curtain').css('display','block');

		setTimeout(function(){
			$('.background_board').css({
				'background-size': 'cover', // 使背景图片铺满窗口
				'background-position': 'center', // 使背景图片居中
				'background-repeat': 'no-repeat' // 防止背景图片重复
			});
			$('.background_board').fadeIn(1000);
			$('.caption').html('达成结局：新的开始');
			$('.caption').fadeIn(1000);
		},2000);
		setTimeout("$('.caption').fadeOut(500),$('.background_board').fadeOut(1000)",5000);
		
		setTimeout(function(){
			window.location.href = './home/home.html';
		},7000);
	}




	// 为音乐播放器发送消息
	setTimeout(function(){
		window.parent.postMessage('showMusicPlayer', '*')
	}, 6900);
}