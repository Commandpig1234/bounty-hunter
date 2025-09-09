setInterval(function(){
	var hero=document.querySelector('.hero');
	for(var i=0;i<npc.length;i++){
		if(dis(hero.offsetLeft,hero.offsetTop,npc[i][0],npc[i][1])<96){
			if(hero.offsetTop<npc[i][1]) $('.hero').css('z-index','8');
			else $('.hero').css('z-index','10');
		}
	}
},50);

// 以下用于播放cg， 

let cgTimeouts = []; // 存储所有CG相关的定时器ID

function clearCgTimeouts() {
    cgTimeouts.forEach(timerId => clearTimeout(timerId));
    cgTimeouts = []; // 清空数组
}

function skipCurrentCg(cgId) {
    clearCgTimeouts();

    // 隐藏所有CG相关的元素
    $('.background_board').css('display','none');
    $('.caption').css('display','none');
    $('.curtain').css('display','none');
    $('#skipCgButton').css('display','none'); // 隐藏跳过按钮

    // 根据当前CG的ID，直接执行其结束时的逻辑
    if (cgId === 0) {
        transform('home');
    }
	else if(cgId === 1){
		transform('na_street');
	}
	else if(cgId === 2){
		transform('na_street_02');
	}
}

function cg(id){
    // 显示跳过按钮
    $('#skipCgButton').css('display','block');

    // 为跳过按钮绑定点击事件
    $('#skipCgButton').off('click').on('click', function() {
        skipCurrentCg(id);
    });
	if(id==0) {//开场cg
		// 第一阶段：初始化显示状态
		loadSong('gate of steiner.mp3');
		playSong();
		$('.background_board').css('display','none'); // 背景板隐藏
		$('.caption').css('display','none'); // 字幕隐藏
		$('.curtain').css('display','block'); // 幕布显示

		// setTimeout是异步的，不阻塞其他代码执行
		// 如果想在在显示后4秒消失，应该在setTimeout写上开始时间+4000，而不是4000

		cgTimeouts.push(setTimeout(function(){
			$('.caption').html('杰恩是一个没有过去的人'); // 设置文字内容为"杰恩是一个没有过去的人" //_2_断句
			$('.caption').fadeIn(1000); // 文字用1秒时间淡入显示
		},1000));
		cgTimeouts.push(setTimeout("$('.caption').fadeOut(500)",5000)); // 4秒后文字用0.5秒淡出

		cgTimeouts.push(setTimeout(function(){
			$('.caption').html('在这个世界上，他没有家人，没有朋友，没有记忆'); // 设置文字内容为"在这个世界上，他没有家人，没有朋友，没有记忆"
			$('.caption').fadeIn(1000); // 文字用1秒时间淡入显示
		},7000));
		cgTimeouts.push(setTimeout("$('.caption').fadeOut(500)",12000)); // 4秒后文字用0.5秒淡出

		cgTimeouts.push(setTimeout(function(){
			$('.caption').html('直到某次机缘巧合成为赏金猎人，他漂泊无依的生活才有了一点方向……'); // 设置文字内容为"直到某次机缘巧合成为赏金猎人，他漂泊无依的生活才有了一点方向……"
			$('.caption').fadeIn(1000); // 文字用1秒时间淡入显示
		},14000));
		cgTimeouts.push(setTimeout("$('.caption').fadeOut(500)",19000)); // 4秒后文字用0.5秒淡出
		
		cgTimeouts.push(setTimeout(function(){
			transform('home');
            $('#skipCgButton').hide(); // CG结束后隐藏按钮
            clearCgTimeouts(); // 清除所有定时器
		},21000));
	}
	else if(id==1) {//逃离密室CG
		// 第一阶段：初始化显示状态
		
		$('.background_board').css('display','none'); // 背景板隐藏
		$('.caption').css('display','none'); // 字幕隐藏
		$('.curtain').css('display','block'); // 幕布显示

		// setTimeout是异步的，不阻塞其他代码执行
		// 如果想在在显示后4秒消失，应该在setTimeout写上开始时间+4000，而不是4000

		cgTimeouts.push(setTimeout(function(){
			$('.caption').html('从密室离开后没多久，德莱伯爵就发现宝石不见了，派出卫兵搜捕你们，但是好在韦斯对莱茵城很熟悉，你们成功躲避了追兵，从码头乘船离开莱茵城。'); 
			$('.caption').fadeIn(1000); // 文字用1秒时间淡入显示
		},1000));
		cgTimeouts.push(setTimeout("$('.caption').fadeOut(500)",5000)); // 4秒后文字用0.5秒淡出

		cgTimeouts.push(setTimeout(function(){
			$('.caption').html('你与韦斯在海上漂了几天，终于找到了那个神秘的纳安城'); // 设置文字内容为"在这个世界上，他没有家人，没有朋友，没有记忆"
			loadSong('sea you and me.mp3');
			playSong();
			$('.caption').fadeIn(1000); // 文字用1秒时间淡入显示
		},7000));
		
		cgTimeouts.push(setTimeout("$('.caption').fadeOut(500)",11000)); // 4秒后文字用0.5秒淡出

		cgTimeouts.push(setTimeout(function(){
			$('.caption').html('这是一座在海岛上的城池，人群熙熙攘攘，街道两侧的商品琳琅满目。只是奇怪的是，这座临海城市居然没有来自海里的物产，而且这里的每个人身上似乎都带着一种迷茫'); // 设置文字内容为"直到某次机缘巧合成为赏金猎人，他漂泊无依的生活才有了一点方向……"
			$('.caption').fadeIn(1000); // 文字用1秒时间淡入显示
		},13000));
		cgTimeouts.push(setTimeout("$('.caption').fadeOut(500)",21000)); // 8秒后文字用0.5秒淡出
		
		cgTimeouts.push(setTimeout(function(){
            transform('na_street');
			$('#skipCgButton').hide(); // CG结束后隐藏按钮
            clearCgTimeouts(); // 清除所有定时器
		},19000));
	}
	else if(id==2) {//前往高塔CG
		// 第一阶段：初始化显示状态
		loadSong('gate of steiner.mp3');
		playSong();
		$('.background_board').css('display','none'); // 背景板隐藏
		$('.caption').css('display','none'); // 字幕隐藏
		$('.curtain').css('display','block'); // 幕布显示

		// setTimeout是异步的，不阻塞其他代码执行
		// 如果想在在显示后4秒消失，应该在setTimeout写上开始时间+4000，而不是4000

		cgTimeouts.push(setTimeout(function(){
			$('.caption').html('你在纳安城打听了很久，但是这里的人都是这样一问三不知，委托似乎就这样卡在这里了，一筹莫展之际，你意外发现纳安城中心的高塔似乎有些奇特'); 
			$('.caption').fadeIn(1000); // 文字用1秒时间淡入显示
		},1000));
		cgTimeouts.push(setTimeout("$('.caption').fadeOut(500)",9000)); // 8秒后文字用0.5秒淡出

		cgTimeouts.push(setTimeout(function(){
			$('.caption').html('出于某种直觉，你立刻去了高塔，在这里找到了能够使用宝石钥匙的门'); // 
			$('.caption').fadeIn(1000); // 文字用1秒时间淡入显示
		},11000));
		cgTimeouts.push(setTimeout("$('.caption').fadeOut(500)",15000)); // 4秒后文字用0.5秒淡出

		cgTimeouts.push(setTimeout(function(){
			$('.caption').html('当宝石钥匙嵌入门上的孔洞时，门缓缓打开'); // 
			$('.caption').fadeIn(1000); // 文字用1秒时间淡入显示
		},17000));
		cgTimeouts.push(setTimeout("$('.caption').fadeOut(500)",20000)); // 3秒后文字用0.5秒淡出
		
		cgTimeouts.push(setTimeout(function(){
			transform('na_street_02');
			$('#skipCgButton').hide(); // CG结束后隐藏按钮
            clearCgTimeouts(); // 清除所有定时器
		},23000));
	}
}