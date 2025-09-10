var man_now='none';
var drji_choice_1=0;
var drji_choice_2=0;
var drji_choice_3=0;


function dialog(man){
	$('.container').css('margin-top','15px');
	$('.container').css('margin-left','0');
	let text=document.querySelector('.text');
	let picture=document.querySelector('.picture');
	let title=document.querySelector('.title');
	let texture=document.querySelector('.texture');
	let choice1=document.querySelector('#choice1');
	let choice2=document.querySelector('#choice2');
	let choice_zone=document.querySelector('.choice_zone');
	man_now=man;

	// 添加示例NPC对话逻辑
	if(man == 'example'){

		text.style.display='block'; // 在switch case前面开启显示，播完之后在interact自动关，不用在这里关
		// man_now='example';
		picture.innerHTML='<img src="./img/avatar/jane.png">';
		title.innerHTML='示例NPC';
		switch(example){
			case 0:{
				texture.innerHTML='你好，这是你家吗？';
				example++;
				break;
			}
			case 1:{
				texture.innerHTML='你问我为什么出现在你的家里？因为程序员在测试npc对话啊';
				example++;
				break;
			}
			case 2:{
				texture.innerHTML='为什么我要说这么多话？因为在测试多轮对话啊，而且你再对话发现从第一句开始了，这也是测试的一部分';
				example=0;
				person='end'; // 结束标记
				break;
			}
		}
	}
	if(man == 'init_dialog_at_home'){
		text.style.display='block'; // 在switch case前面开启显示，播完之后在interact自动关，不用在这里关
		// man_now='init_dialog_at_home';
		title.innerHTML='';
		picture.innerHTML='';
		switch(init_dialog_at_home){
			case -1:{
				//不应该触发对话
				break;
			}
			case 0:{
				texture.innerHTML='1783年7月17日.';
				init_dialog_at_home++;
				break;
			}
			case 1:{
				texture.innerHTML='上一个任务结束后，杰恩一直在这个小镇待着，借酒打发时间，今天已经是第三天了.';
				init_dialog_at_home++;
				break;
			}
			case 2:{
				texture.innerHTML='但在今天，杰恩接到了一份神秘的委托……';
				init_dialog_at_home=-1;
				person='end';
				break;
			}
		}
	}
	if(man == 'villager_01'){
		text.style.display='block'; // 在switch case前面开启显示，播完之后在interact自动关，不用在这里关
		// man_now='villager_01';
		switch(villager_01){
			case 0:{
				picture.innerHTML='<img src="./img/avatar/jane.png">'; //for me _9_
				title.innerHTML='杰恩';
				texture.innerHTML='你好，请问莱茵城是这个方向吗？';
				villager_01++;
				break;
			}
			case 1:{
				picture.innerHTML='<img src="./img/avatar/villager_01.png">';
				title.innerHTML='居民';
				texture.innerHTML='是的先生，你一直往前走，看到的第一座城就是莱茵城。';
				villager_01++;
				person='end';
				break;
			}
			default:{ //_6_ 游戏的小设计
				picture.innerHTML='<img src="./img/avatar/villager_01.png">';
				title.innerHTML='居民';
				texture.innerHTML='其他我也不清楚了，酒馆里的那些家伙或许会知道';
				person='end'; 
				break;
			}
		}
	}
	else if (man == 'student_01'){
		text.style.display='block'; // 在switch case前面开启显示，播完之后在interact自动关，不用在这里关
		// man_now='student_01';
		switch(student_01){
			case 0:{
				picture.innerHTML='<img src="./img/avatar/jane.png">';
				title.innerHTML='杰恩';
				texture.innerHTML='（把信件和地图展示给眼前的学徒）你见过这个东西吗？'; //_10_还是具体程度，或者说什么样子的内容是直接可用的
				student_01++;
				break;
			}
			case 1:{
				picture.innerHTML='<img src="./img/avatar/student_01.png">';
				title.innerHTML='学徒';
				texture.innerHTML='抱歉先生，我没有见过，但您可以去问问调酒师，他认识的东西多嘞。';
				student_01++;
				person='end';
				break;
			}
			default:{ //_12_ 按理来讲如果直接去问后面了，应该跳进default，一点游戏设计
				picture.innerHTML='<img src="./img/avatar/student_01.png">';
				title.innerHTML='学徒';
				texture.innerHTML='莱茵城和纳安城是什么地方呢……' // _11_ 做成这种程度，1个人不够
				person='end';
				break;
			}
		}
	}
	else if (man == 'barman') {
		text.style.display='block'; 
		// man_now='barman';
		student_01 = 2;
		switch(barman){
			case 0:{
				picture.innerHTML='<img src="./img/avatar/barman.png">';
				title.innerHTML='调酒师';
				texture.innerHTML='我是这小镇里花样最多的调酒师，想来杯什么样的酒？';
				barman++;
				break;
			}
			case 1:{
				picture.innerHTML='<img src="./img/avatar/jane.png">';
				title.innerHTML='杰恩';
				texture.innerHTML='我不是来买酒的。（把手头的信件和地图递了过去）';
				barman++;
				break;
			}
			case 2:{
				picture.innerHTML='<img src="./img/avatar/barman.png">';
				title.innerHTML='调酒师';
				// texture.innerHTML='我也不知道这个，不过我可以带你去找老骑士韦斯，他知道的东西多，但他性格不太好。'; //_13_ 可行性，不要想当然
				texture.innerHTML='我也不知道这个，去二楼问问老骑士韦斯吧，他知道的东西多，但他性格不太好。';
				barman++;
				person='end';
				break;
			}
			default:{
				picture.innerHTML='<img src="./img/avatar/barman.png">';
				title.innerHTML='调酒师';
				texture.innerHTML='去问问韦斯吧，他可是我的老顾客。';
				person='end';
				break;
			}
		}
	}


	else if (man=='old_knight_gem'){
		text.style.display='block'; // 在switch case前面开启显示，播完之后在interact自动关，不用在这里关
		//man_now='old_knight_gem';
		switch(old_knight_gem){
			case 0:{
				picture.innerHTML='<img src="./img/avatar/old_knight.png">';
				title.innerHTML='韦斯';
				texture.innerHTML='嘿杰恩，看到那里的宝石了吗？那就是你要找的钥匙，去拿吧。';
				old_knight_gem++;
				person='end';
				break;
			}
			case 1:{
				picture.innerHTML='<img src="./img/avatar/old_knight.png">';
				title.innerHTML='韦斯';
				texture.innerHTML='你去拿宝石吧，我在这儿替你守着';
				old_knight_gem++;
				person='end';
				break;
			}
			default:{ 
				picture.innerHTML='<img src="./img/avatar/old_knight.png">';
				title.innerHTML='韦斯';
				texture.innerHTML='哦杰恩，需要思考的事我没法帮你，但我会替你守好门的';
				person='end';
				break;
			}
		}
	}

	else if (man == 'old_knight'){
		text.style.display='block'; 
		// man_now='old_knight';
		switch(old_knight){
			case 0:{
				picture.innerHTML='<img src="./img/avatar/jane.png">';
				title.innerHTML='杰恩';
				texture.innerHTML='（把地图展示给韦斯）你见过这个东西吗？';
				old_knight++;
				break;
			}
			case 1:{
				picture.innerHTML='<img src="./img/avatar/old_knight.png">';
				title.innerHTML='韦斯';
				texture.innerHTML='（看了信件）哦！年轻人，你要找去纳安城的钥匙！';
				old_knight++;
				break;
			}
			case 2:{
				picture.innerHTML='<img src="./img/avatar/old_knight.png">';
				title.innerHTML='韦斯';
				texture.innerHTML='传说纳安城是最美好的乌托邦！';
				old_knight++;
			}
			case 3:{
				picture.innerHTML='<img src="./img/avatar/old_knight.png">';
				title.innerHTML='韦斯';
				texture.innerHTML='如果你答应让我与你同行的话，我将帮你拿到宝石钥匙！';
				old_knight++;
				break;
			}
			case 4:{ 
				// 开始分岔  
				// 这里应该不用做处理，即使再E，也会来到case4，只是重复设置这些元素而已，不会跳出（因为没++）
				picture.innerHTML='';
				title.innerHTML='';
				texture.innerHTML='要与韦斯同行吗？（你的选择会影响到你的未来）';
				choice_zone.style.display='block';
				choice1.innerHTML='同意';
				choice2.innerHTML='拒绝';
				// 这里不应该++，否则不点按钮，e一下就过去了
				break;
			}
			//这里不是从4++继续的，而是一个跳变
			case 5:{
				picture.innerHTML='<img src="./img/avatar/old_knight.png">';
				title.innerHTML='韦斯';
				texture.innerHTML='那可真不幸，我喜欢广交朋友，现在地图是我的了（即将进入与韦斯的战斗）';
				loadSong('game1.mp3');
				playSong();
				old_knight++;
				break;
			}
			case 6:{
				picture.innerHTML='';
				title.innerHTML='';
				texture.innerHTML='(战斗结束了)';
				$('.game1').css('display','block');
				old_knight++; // HACK 很变态的写法，为了退出能直接赢，而如果你玩了游戏，结束后会设置值，这个++就无所谓了
				break;
			}
			case 7:{
				picture.innerHTML='';
				title.innerHTML='';
				texture.innerHTML='(我得赶快离开这里)';
				pauseSong();
				addachievement(2);
				old_knight=14;
				person='end';
				break;
			}


			case 8:{
				picture.innerHTML='';
				title.innerHTML='';
				texture.innerHTML='你不敌韦斯，被他抢走地图.';
				pauseSong();
				old_knight++;
				break;
			}
			case 9:{
				picture.innerHTML='';
				title.innerHTML='';
				texture.innerHTML='酒馆里的人都与韦斯是老朋友了，他们帮忙将你除去，没对这个地方产生任何影响.';
				old_knight++;
				break;
			}
			case 10:{
				picture.innerHTML='';
				title.innerHTML='';
				texture.innerHTML='';
				end(1);
				break;
			}


			case 14:{
				picture.innerHTML='<img src="./img/avatar/barman.png">';
				title.innerHTML='调酒师';
				texture.innerHTML='问到你想要的消息了吗先生？要喝一杯吗？';
				old_knight++;
				break;
			}
			case 15:{
				picture.innerHTML='<img src="./img/avatar/jane.png">';
				title.innerHTML='杰恩';
				texture.innerHTML='不用了，我......';
				old_knight++;
				break;
			}
			case 16:{
				picture.innerHTML='<img src="./img/avatar/student_01.png">';
				title.innerHTML='学徒';
				texture.innerHTML='不好了，韦斯先生死了！';
				old_knight++;
				break;
			}
			case 17:{
				picture.innerHTML='<img src="./img/avatar/barman.png">';
				title.innerHTML='调酒师';
				texture.innerHTML='哦 先生，看来您不能离开了';
				old_knight++;
				break;
			}
			case 18:{
				picture.innerHTML='<img src="./img/avatar/student_01.png">';
				title.innerHTML='学徒';
				texture.innerHTML='我把护卫队叫来了';
				old_knight++;
				break;
			}
			case 19:{
				picture.innerHTML='';
				title.innerHTML='';
				texture.innerHTML='(你被护卫队带走了)';
				old_knight++;
				break;
			}
			case 20:{
				picture.innerHTML='';
				title.innerHTML='';
				texture.innerHTML='';
				end(2);
				break;
			}

			case 24:{
				picture.innerHTML='';
				title.innerHTML='';
				texture.innerHTML='密室的入口是一段迷宫（即将进入迷宫）';
				old_knight++;
				break;
			}
			case 25:{
				picture.innerHTML='';
				title.innerHTML='';
				texture.innerHTML='（从迷宫出来之后，你们到达了密室的深处）';
				$('.game2').css('display','block');
				old_knight++;
			}
			case 26:{
				text.style.display='none'; // 对话结束后关闭对话框
				choice_zone.style.display='none';
				person = 'none';
				transform('gem_room');
				break;
			}
		}
	}
	else if (man=='old_knight_gem'){
		text.style.display='block'; // 在switch case前面开启显示，播完之后在interact自动关，不用在这里关
		//man_now='old_knight_gem';
		switch(old_knight_gem){
			case 0:{
				picture.innerHTML='<img src="./img/avatar/old_knight.png">';
				title.innerHTML='韦斯';
				texture.innerHTML='嘿杰恩，看到那里的宝石了吗？那就是你要找的钥匙，去拿吧。';
				old_knight_gem++;
				person='end';
				break;
			}
			case 1:{
				picture.innerHTML='<img src="./img/avatar/old_knight.png">';
				title.innerHTML='韦斯';
				texture.innerHTML='你去拿宝石吧，我在这儿替你守着';
				old_knight_gem++;
				person='end';
				break;
			}
			default:{ 
				picture.innerHTML='<img src="./img/avatar/old_knight.png">';
				title.innerHTML='韦斯';
				texture.innerHTML='哦杰恩，需要思考的事我没法帮你，但我会替你守好门的';
				person='end';

				text.style.display='none'
				transform('gem_room');
				break;
			}
		}
	}

	else if (man=='old_knight_na_street'){
		text.style.display='block';
		switch(old_knight_na_street){
			case 0:{
				picture.innerHTML='<img src="./img/avatar/old_knight.png">';
				title.innerHTML='韦斯';
				texture.innerHTML='哦杰恩，这个地方看上去真的美好极了！我要在这个地方定居了。';
				old_knight_na_street++;
				break;
			}
			case 1:{
				picture.innerHTML='<img src="./img/avatar/old_knight.png">';
				title.innerHTML='韦斯';
				texture.innerHTML='你呢杰恩？还要去做你的委托吗？你都有那么多酬金了，为什么不和我留在这里享受生活的乐趣？';
				old_knight_na_street++;
				break;
			}
			case 2:{ 
				// 开始分岔  
				// 这里应该不用做处理，即使再E，也会来到case4，只是重复设置这些元素而已，不会跳出（因为没++）
				picture.innerHTML='';
				title.innerHTML='';
				texture.innerHTML='要放弃委托，和韦斯一起留在纳安城吗？（你的选择会影响到你的未来）';
				choice_zone.style.display='block';
				choice1.innerHTML='同意';
				choice2.innerHTML='拒绝';
				// 这里不应该++，否则不点按钮，e一下就过去了
				break;
			}
			case 3:{
				picture.innerHTML='<img src="./img/avatar/old_knight.png">';
				title.innerHTML='韦斯';
				texture.innerHTML='很聪明的决定，走吧，我看到了一家看起来很不错的酒馆，为我们的新生活喝一杯';
				old_knight_na_street++;
				break;
			}
			case 4:{
				picture.innerHTML='';
				title.innerHTML='';
				texture.innerHTML='在纳安城的生活美好而虚无，这里的人们过着固定规律节奏的生活，时间长了，你与韦斯逐渐被这里同化，渐渐遗忘了你们的过去.......';
				pauseSong();
				addachievement(4);
				old_knight_na_street++;
				break;
			}
			case 5:{
				picture.innerHTML='';
				title.innerHTML='';
				texture.innerHTML='';
				end(3);
				break;
			}
			case 10:{
				picture.innerHTML='<img src="./img/avatar/old_knight.png">';
				title.innerHTML='韦斯';
				texture.innerHTML='好吧朋友，你可真是一个守信的赏金猎人';
				old_knight_na_street++;
				break;
			}
			case 11:{
				picture.innerHTML='<img src="./img/avatar/old_knight.png">';
				title.innerHTML='韦斯';
				texture.innerHTML='那我把我的骑士勋章给你吧，让它代替我与你同行';
				old_knight_na_street++;
				break;
			}
			case 12:{
				picture.innerHTML='';
				title.innerHTML='';
				texture.innerHTML='（获得道具：骑士勋章）';
				old_knight_na_street++;
				break;
			}
			case 13:{
				picture.innerHTML='<img src="./img/avatar/jane.png">';
				title.innerHTML='杰恩（收下骑士勋章）';
				texture.innerHTML='我会的，等我完成这份委托我就回来找你';
				old_knight_na_street++;
				addachievement(5);
				break;
			}
			default:{
				old_knight_na_street++;
				person='none';
				text.style.display='none';
				transform('na_street_01')
				break;
			}
		}
	}
	else if (man=='resident_man'){
		text.style.display='block';
		switch(resident_man){
			case 0:{
				picture.innerHTML='<img src="./img/avatar/jane.png">';
				title.innerHTML='杰恩（把信件和地图展示给男居民）';
				texture.innerHTML='打扰一下，你见过这个人吗？';
				resident_man++;
				break;
			}
			case 1:{
				picture.innerHTML='<img src="./img/avatar/resident_man.png">';
				title.innerHTML='男居民';
				texture.innerHTML='没见过，他是纳安城的人吗';
				resident_man++;
				person='end';
				break;
			}
			case 2:{
				picture.innerHTML='<img src="./img/avatar/resident_man.png">';
				title.innerHTML='男居民';
				texture.innerHTML='我从没听说过这个人，或许你应该去其他地方找';
				resident_man++;
				person='end';
				break;
			}
			default:{
				picture.innerHTML='<img src="./img/avatar/resident_man.png">';
				title.innerHTML='男居民';
				texture.innerHTML='你问我去哪儿找？我也不知道，我只知道这片街区';
				if(resident_woman === 0 || resident_man === 3){
					resident_man++;
					person='end';
					break;
				}
				else{
					text.style.display='none'; // 对话结束后关闭对话框
					person = 'none';
					cg(2);
				}
			}
			
		}
	}
	else if (man=='resident_woman'){
		text.style.display='block';
		switch(resident_woman){
			case 0:{
				picture.innerHTML='<img src="./img/avatar/jane.png">';
				title.innerHTML='杰恩（把信件和地图展示给女居民）';
				texture.innerHTML='请问你见过这个人吗';
				resident_woman++;
				break;
			}
			case 1:{
				picture.innerHTML='<img src="./img/avatar/resident_woman.png">';
				title.innerHTML='女居民';
				texture.innerHTML='或许见过吧，不过我不记得了';
				resident_woman++;
				person='end';
				break;
			}
			default:{
				picture.innerHTML='<img src="./img/avatar/resident_woman.png">';
				title.innerHTML='女居民';
				texture.innerHTML='到底见过没有？我不知道，我并不记得太多的事情';
				if(resident_man === 0 || resident_woman === 2){
					resident_woman++;
					person='end';
					break;
				}
				else{
					text.style.display='none'; // 对话结束后关闭对话框
					person = 'none';
					cg(2);
				}	
			}
		}
	}
	else if (man=='newspaper_boy'){
		text.style.display='block';
		switch(newspaper_boy){

			case 0:{
				picture.innerHTML='<img src="./img/avatar/newspaper_boy.png">';
				title.innerHTML='报童';
				texture.innerHTML='买一份报纸吗先生';
				newspaper_boy++;
				break;
			}
			case 1:{
				picture.innerHTML='<img src="./img/avatar/jane.png">';
				title.innerHTML='杰恩（看到报纸）';
				texture.innerHTML='1773年......哦，我居然回到了十年前的纳安城！真是神奇！';
				newspaper_boy++;
				break;
			}
			case 2:{
				picture.innerHTML='<img src="./img/avatar/jane.png">';
				title.innerHTML='杰恩';
				texture.innerHTML='难道我要找的人是来自过去的人？那可真是有趣';
				newspaper_boy++;
				person='end';
				break;
			}
			default:{
				picture.innerHTML='<img src="./img/avatar/newspaper_boy.png">';
				title.innerHTML='报童';
				texture.innerHTML='先生，报纸有什么问题吗？';
				person='end';
				break;
			}
		}
	}
	else if (man=='vina'){
		text.style.display='block';
		switch(vina){
			case 0:{
				picture.innerHTML='<img src="./img/avatar/jane.png">';
				title.innerHTML='杰恩';
				texture.innerHTML='你好美丽的小姐，请问我是否在哪儿见过你？';
				vina++;
				break;
			}
			case 1:{
				picture.innerHTML='<img src="./img/avatar/vina.png">';
				title.innerHTML='维娜';
				texture.innerHTML='哦这位先生，我觉得我可能见过你，你很眼熟，不过抱歉我不记得你是谁了。';
				vina++;
				break;
			}
			case 2:{
				picture.innerHTML='<img src="./img/avatar/jane.png">';
				title.innerHTML='杰恩';
				texture.innerHTML='我叫杰恩，这位美丽的小姐。';
				vina++;
				break;
			}
			case 3:{
				picture.innerHTML='<img src="./img/avatar/vina.png">';
				title.innerHTML='维娜';
				texture.innerHTML='我叫维娜，杰恩先生，你这是要去做什么吗？';
				vina++;
				break;
			}case 4:{
				picture.innerHTML='<img src="./img/avatar/jane.png">';
				title.innerHTML='杰恩（将信件和地图展示给维娜）';
				texture.innerHTML='我接了一份委托，要找一个人';
				vina++;
				break;
			}case 5:{
				picture.innerHTML='<img src="./img/avatar/vina.png">';
				title.innerHTML='维娜';
				texture.innerHTML='人在纳安城？很不幸的是我不认识这个人，但我想我可以和你一起找';
				vina++;
				break;
			}case 6:{
				picture.innerHTML='<img src="./img/avatar/jane.png">';
				title.innerHTML='杰恩';
				texture.innerHTML='哦那真是再好不过了。';
				vina++;
				break;
			}
			case 7:{
				text.style.display='none';
				person='none';
				transform('na_street_03');
			}
		}
	}
	else if (man=='our_three'){
		text.style.display='block'; 
		man_now='our_three';
		switch(our_three){
			case 0:{
				picture.innerHTML='<img src="./img/avatar/jane.png">';
				title.innerHTML='杰恩';
				texture.innerHTML='（展示信件和地图）你好,老婆婆，您见过这个人吗？';
				our_three++;
				break;
			}
			case 1:{
				picture.innerHTML='<img src="./img/avatar/old_woman.png">';
				title.innerHTML='老人家';
				texture.innerHTML='年纪大了，记不清了';
				our_three++;
				break;
			}
			case 2:{
				picture.innerHTML='<img src="./img/avatar/vina.png">';
				title.innerHTML='维娜';
				texture.innerHTML='哦婆婆，这对我们来说很重要，您可以想一想吗？';
				our_three++;
				break;
			}
			case 3:{
				picture.innerHTML='<img src="./img/avatar/young_man.png">';
				title.innerHTML='年轻人';
				texture.innerHTML='嘿奶奶，这个人很像实验室那位博士！我想你们可以去实验室找找。';
				our_three++;
				break;
			}
			case 4:{
				picture.innerHTML='<img src="./img/avatar/old_woman.png">';
				title.innerHTML='老人家';
				texture.innerHTML='坏孩子，实验室是一个会吃人的地方。';
				our_three++;
				break;
			}
			case 5:{
				picture.innerHTML='<img src="./img/avatar/jane.png">';
				title.innerHTML='杰恩';
				texture.innerHTML='维娜，我想我们该去实验室看看';
				our_three++;
				break;
			}
			case 6:{
				picture.innerHTML='<img src="./img/avatar/vina.png">';
				title.innerHTML='维娜';
				texture.innerHTML='我也赞同。';
				our_three++;
				person='end';
				break;
			}
			case 7:{
				picture.innerHTML='<img src="./img/avatar/old_woman.png">';
				title.innerHTML='老婆婆';
				texture.innerHTML='孩子们，去实验室可不是一个明智的选择。';
				our_three++;
				break;
			}
			case 8:{
				picture.innerHTML='<img src="./img/avatar/vina.png">';
				title.innerHTML='维娜';
				texture.innerHTML='谢谢婆婆的提醒，不过我们确实有很重要的事要找他。';
				our_three++;
				break;
			}
			case 9:{
				picture.innerHTML='<img src="./img/avatar/young_man.png">';
				title.innerHTML='年轻人';
				texture.innerHTML='但是我也不确定那个人是不是博士，我只是随口一提。';
				our_three++;
				break;
			}
			case 10:{
				picture.innerHTML='<img src="./img/avatar/jane.png">';
				title.innerHTML='杰恩';
				texture.innerHTML='没关系，我们去看看就好了。';
				our_three++;
				person='end';
				break;
			}
			case 11:{
				picture.innerHTML='<img src="./img/avatar/old_woman.png">';
				title.innerHTML='老婆婆';
				texture.innerHTML='在到实验室之前，你们还有后悔的机会，现在的实验室可不是一个好地方。';
				our_three++;
				break;
			}
			case 12:{
				picture.innerHTML='<img src="./img/avatar/young_man.png">';
				title.innerHTML='年轻人';
				texture.innerHTML='奶奶说的没错，你们真的要去实验室吗？';
				our_three++;
				break;
			}
			case 13:{
				picture.innerHTML='<img src="./img/avatar/vina.png">';
				title.innerHTML='维娜';
				texture.innerHTML='没错，我们要去看看。';
				our_three++;
				break;
			}
			default:{ 
				text.style.display='none';
				person = 'none';
				transform('lab');
				break;
			}
		}
	}
	else if (man=='vina_log'){
		text.style.display='block';
		switch(vina_log){
			case 0:{
				picture.innerHTML='<img src="./img/avatar/jane.png">';
				title.innerHTML='杰恩';
				texture.innerHTML='嘿维娜，这有一本实验日志';
				vina_log++;
				break;
			}
			case 1:{
				picture.innerHTML='<img src="./img/avatar/vina.png">';
				title.innerHTML='维娜';
				texture.innerHTML='哦杰恩，你看，这上面有我们的名字！';
				vina_log++;
				break;
			}
			case 2:{
				picture.innerHTML='<img src="./img/avatar/vina.png">';
				title.innerHTML='维娜';
				texture.innerHTML='这是一项关于时光机的研究。';
				vina_log++;
				break;
			}
			case 3:{
				picture.innerHTML='<img src="./img/avatar/jane.png">';
				title.innerHTML='杰恩';
				texture.innerHTML='快让我看看，我真的很好奇自己的过去！';
				vina_log++;
				break;
			}case 4:{
				picture.innerHTML='<img src="./img/avatar/vina.png">';
				title.innerHTML='维娜';
				texture.innerHTML='杰恩你看！我们以前都是实验室的研究员！';
				vina_log++;
				break;
			}case 5:{
				picture.innerHTML='<img src="./img/avatar/vina.png">';
				title.innerHTML='维娜';
				texture.innerHTML='但是我对这件事真的一点印象都没有';
				vina_log++;
				break;
			}case 6:{
				picture.innerHTML='<img src="./img/avatar/vina.png">';
				title.innerHTML='维娜';
				texture.innerHTML='而且在你来这里之前，我从没听说过实验室';
				vina_log++;
				break;
			}
			case 7:{
				picture.innerHTML='<img src="./img/avatar/jane.png">';
				title.innerHTML='杰恩';
				texture.innerHTML='这真是一件奇怪的事';
				vina_log++;
				break;
			}case 8:{
				picture.innerHTML='<img src="./img/avatar/jane.png">';
				title.innerHTML='杰恩';
				texture.innerHTML='维娜小姐，你看这儿，时光机的实验成功了，但是我们失败了，他们来到了这个世界……';
				vina_log++;
				break;
			}
			case 9:{
				picture.innerHTML='<img src="./img/avatar/vina.png">';
				title.innerHTML='维娜';
				texture.innerHTML='这是什么意思？';
				vina_log++;
				break;
			}
			case 10:{
				picture.innerHTML='<img src="./img/avatar/vina.png">';
				title.innerHTML='维娜';
				texture.innerHTML='实验成功了，为什么又说我们失败了？';
				vina_log++;
				break;
			}case 11:{
				picture.innerHTML='<img src="./img/avatar/vina.png">';
				title.innerHTML='维娜';
				texture.innerHTML='他们又是谁？';
				vina_log++;
				break;
			}
			case 12:{
				picture.innerHTML='<img src="./img/avatar/jane.png">';
				title.innerHTML='杰恩';
				texture.innerHTML='不知道，日志到这里就结束了，我想我们可以找找其他线索。';
				vina_log++;
				person='end';
				break;
			}
			default:{
				picture.innerHTML='<img src="./img/avatar/vina.png">';
				title.innerHTML='维娜';
				texture.innerHTML='杰恩你找到线索了吗？我这里什么都没有';
				person='end';
				break;
			}
		}
	} else if (man=='self'){
		text.style.display='block';
		switch(self){
			case 0:{
				picture.innerHTML='<img src="./img/avatar/jane.png">';
				title.innerHTML='杰恩';
				texture.innerHTML='这个方向人比较少，还是去那边的酒馆问问吧';
				person='end';
				break;
			}
			case 1:{
				picture.innerHTML='<img src="./img/avatar/jane.png">';
				title.innerHTML='杰恩';
				texture.innerHTML='优秀的赏金猎人要对目的地了如指掌，还是去酒馆里问问吧';
				person='end';
				break;
			}
			case 2:{
				picture.innerHTML='<img src="./img/avatar/jane.png">';
				title.innerHTML='杰恩';
				texture.innerHTML='还不到离开的时候。再打理一下家里吧。';
				person='end';
				break;
			}
			case 3:{
				picture.innerHTML='<img src="./img/avatar/jane.png">';
				title.innerHTML='杰恩';
				texture.innerHTML='既然这么早就出门了，就多问问委托里提到的事吧。';
				person='end';
				break;
			}
			case 4:{
				picture.innerHTML='<img src="./img/avatar/jane.png">';
				title.innerHTML='杰恩';
				texture.innerHTML='家里的委托书写着什么来着，回去看看吧。';
				self++;
				break;
			}
			case 5:{
				picture.innerHTML='';
				title.innerHTML='';
				texture.innerHTML='';
				self = 4;
				transform('home');
				person='none';
				text.style.display='none'; // 对话结束后关闭对话框
				$('.choice_zone').css('display','none'); 
				break;
			}

		}
	}
}

// 点击按钮会触发对应的choice(0)或choice(1),在dialog要做的是：
// 1.把问题写出来
// 2.把按钮写上文本
function choice(num){ 
	console.log(man_now);
	$('.choice_zone').css('display','none');
	let text=document.querySelector('.text');
	let picture=document.querySelector('.picture');
	let title=document.querySelector('.title');
	let texture=document.querySelector('.texture');
	if (man_now=='old_knight'){
		switch(num){
			case 0:{
				picture.innerHTML=''; // 旁白
				title.innerHTML='';
				texture.innerHTML='你与韦斯一拍即合结伴同行，在韦斯的带领下来到德莱伯爵的密室.';
				old_knight=24;
				addachievement(1);
				break;
			}
			case 1:{
				picture.innerHTML='<img src="./img/avatar/jane.png">';
				title.innerHTML='杰恩';
				texture.innerHTML='很抱歉，我喜欢独自完成委托';
				// 这里也不应调用dialog，而是让玩家E一下，自然就进入新对话了
				// 因为old_knight变化了，person没变，所以会回到骑士的case5
				old_knight=5; 
				break;
			}
		}
	}
	else if(man_now=='old_knight_na_street'){
		switch(num){
			case 0:{
				picture.innerHTML='<img src="./img/avatar/jane.png">';
				title.innerHTML='杰恩';
				texture.innerHTML='你说的很有道理韦斯，我已经有那么多报酬了，何必纠结这份委托';
				old_knight_na_street++;//3
				break;
			}
			case 1:{
				picture.innerHTML='<img src="./img/avatar/jane.png">';
				title.innerHTML='杰恩';
				texture.innerHTML='哦韦斯，谢谢你的好意，不过我已经接了这份委托，还是打算将它做完';
				old_knight_na_street = 10;
				break;
			}
		}
	}
}


var tim1=setInterval(function(){ // 老骑士的结局
	if(now_phase=='bar'&&dis(hero.offsetLeft,hero.offsetTop,404,616)<=200&&old_knight>=14&&old_knight<=20){
		person='old_knight';
		old_knight=14;
		dialog(person);
		clearInterval(tim1);
	}
},50);

let guideTriggered2 = false;
var tim2=setInterval(function(){ // 街道左边提示
	const inGuideZone = now_phase == 'street_from_home_to_bar' && dis(hero.offsetLeft, hero.offsetTop, 1, 594) <= 100;

	if (inGuideZone && !guideTriggered2 && person === 'none') {
		guideTriggered2 = true; // Lock
		person='self';
		self = 0;
		dialog(person);
	} else if (!inGuideZone) {
		guideTriggered2 = false; // Unlock when player leaves the zone
	}
},50);

let guideTriggered3 = false;
var tim3=setInterval(function(){ // 街道右边提示
	const inGuideZone = now_phase == 'street_from_home_to_bar' && dis(hero.offsetLeft, hero.offsetTop, 1000, 588) <= 150;

	if (inGuideZone && !guideTriggered3 && person === 'none') {
		guideTriggered3 = true; // Lock
		person='self';
		self = 1;
		dialog(person);
	} else if (!inGuideZone) {
		guideTriggered3 = false; // Unlock when player leaves the zone
	}
},50);

let guideTriggered4 = false;
var tim4=setInterval(function(){ // 家里提示
	const inGuideZone = now_phase == 'home' && dis(hero.offsetLeft, hero.offsetTop, 500, 628) <= 110 && (interact_at_home <= 1 || paper_at_home<=3);

	if (inGuideZone && !guideTriggered4 && person === 'none') {
		guideTriggered4 = true; // Lock
		person='self';
		self = 2;
		dialog(person);
	} else if (!inGuideZone) {
		guideTriggered4 = false; // Unlock when player leaves the zone
	}
},50);


