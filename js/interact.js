// hero, zone, text: 通过选择器获取页面中的元素。
// timing: 用于存储定时器的ID。
// pos, front, back, left, right: 用于控制角色移动的方向。
hero=document.querySelector('.hero');
let zone=document.querySelector('.window');
let text=document.querySelector('.text');
let timing=null;
let pos=0,front=0,back=0,left=0,right=0;
var page_now=0,skip;

let idleTimer = 0;
const idleThreshold = 100; // 500 * 50ms = 25秒
let interactionIdleTimer = 0;
const interactionIdleThreshold = 15; // 15 * 50ms = 0.75秒


var dialog_button=document.querySelector('.dialog_button');
dialog_button.addEventListener('click', function(){
	check_all_interact();
});

document.addEventListener('keydown', function(event) {
    if (document.querySelector('.text').style.display !== 'none' && (event.key === ' ' || event.key === 'Enter')) {
        check_all_interact();
        event.preventDefault(); // 阻止默认行为，例如空格键滚动页面
    }
});

// 创建键盘状态跟踪对象
const keyState = {
  w: false,  // 87
  s: false,  // 83
  a: false,  // 65
  d: false,  // 68
  e: false   // 69
};

// 重置所有键盘状态的函数
function resetAllKeyStates() {
  keyState.w = false;
  keyState.s = false;
  keyState.a = false;
  keyState.d = false;
  keyState.e = false;
  
  // 重置移动标志
  front = back = left = right = 0;
  
  // 重置角色动画
  if(hero) {
    hero.style.backgroundPositionY = pos;
    hero.style.animationName = "";
    hero.style.backgroundPositionX = "-48px";
  }
  
  // 清除定时器
  if(timing !== null) {
    clearInterval(timing);
    timing = null;
  }
}

// 添加窗口失焦事件处理
window.addEventListener('blur', resetAllKeyStates);

// 暴露重置函数给外部调用
window.resetMovement = resetAllKeyStates;

// 定期检查键盘状态并更新移动标志
setInterval(function(){
  // 只有在没有对话或交互时才更新移动状态
  if (!option_now && !stop()) {
    // 根据keyState更新移动标志
    front = keyState.w ? 1 : 0;
    back = keyState.s ? 1 : 0;
    left = keyState.a ? 1 : 0;
    right = keyState.d ? 1 : 0;
    
    // 如果有任何方向键被按下，则重置空闲计时器
    if (front || back || left || right) {
      idleTimer = 0;
      interactionIdleTimer = 0;
	  hudController.hide();
      if (timing === null) {
        // 这里的逻辑会在下面的10ms定时器中处理，这里只需要确保标志被正确设置
        // 避免在这里重复启动定时器，让10ms定时器根据这些标志来决定是否启动
      }
    } else {
      // 如果没有移动，增加空闲计时器
      idleTimer++;

      let promptShown = false;

      // 检查交互提示
      let inNpcZone = false;
      let inObjectZone = false;
      let inDoorZone = false;
      let hotZoneEntity = null;
      let entityType = '';

      // 检查NPC
      for (let i = 0; i < npc.length; i++) {
        if (hotzone(hero.offsetLeft, hero.offsetTop, npc[i])) {
          inNpcZone = true;
          hotZoneEntity = npc[i];
          entityType = 'npc';
          break;
        }
      }
      // 检查物品
      if (!inNpcZone) {
        for (let i = 0; i < object.length; i++) {
          if (hotzone(hero.offsetLeft, hero.offsetTop, object[i])) {
            inObjectZone = true;
            hotZoneEntity = object[i];
            entityType = 'object';
            break;
          }
        }
      }
      // 检查门
      if (!inNpcZone && !inObjectZone) {
        for (let i = 0; i < door.length; i++) {
          if (hotzone(hero.offsetLeft, hero.offsetTop, door[i])) {
            inDoorZone = true;
            hotZoneEntity = door[i];
            entityType = 'door';
            break;
          }
        }
      }

      const inAnyHotZone = inNpcZone || inObjectZone || inDoorZone;

      if (inAnyHotZone && !keyState.e) {
        interactionIdleTimer++;
        if (interactionIdleTimer >= interactionIdleThreshold) {
          let message = '';
          let tipType = 'interaction';
          const entityName = hotZoneEntity[3];
          switch (entityType) {
            case 'npc':
              message = `按 E 进行对话`;
              tipType = 'interaction_npc';
              break;
            case 'object':
              message = `按 E 与物品交互`;
              tipType = 'interaction_object';
              break;
            case 'door':
              message = '按 E 切换场景';
              tipType = 'interaction_door';
              break;
          }
          hudController.updateHud(message, tipType);
          promptShown = true;
        }
      } else {
        interactionIdleTimer = 0;
        if (hudController.currentTipType && hudController.currentTipType.startsWith('interaction')) {
          hudController.hide();
        }
      }

      // 如果没有显示交互提示，则检查移动提示
      if (!promptShown && idleTimer >= idleThreshold) {
        hudController.updateHud('尝试使用WASD键或方向键移动', 'movement');
      }

      if (timing !== null) {
        // 如果所有方向键都释放了，确保重置角色动画和定时器
        if(hero) {
          hero.style.backgroundPositionY = pos;
          hero.style.animationName = "";
          hero.style.backgroundPositionX = "-48px";
        }
        clearInterval(timing);
        timing = null;
      }
    }
  } else {
    // 如果处于停止状态，重置空闲计时器并隐藏HUD
    idleTimer = 0;
    interactionIdleTimer = 0;
    hudController.hide();
  }
}, 50);
// 该函数用于判断是否需要停止角色的移动，当有交互对象、人物对话、转换场景或处于推理模式时返回 true。
function stop(){
	return (person!='none' || obj!='none' || trans!='none' || document.querySelector('.curtain').style.display!='none');
}// person是end的时候不能移动，再按一下变成none才能移动

// 键盘按下事件处理函数。根据不同的按键代码，更新键盘状态对象
document.onkeydown=function(event){	
	// 更新键盘状态
	switch(event.keyCode) {
		case 87: // W
			keyState.w = true;
			break;
		case 38: // 向上方向键
			keyState.w = true;
			event.preventDefault();
			break;
		case 83: // S
			keyState.s = true;
			break;
		case 40: // 向下方向键
			keyState.s = true;
			event.preventDefault();
			break;
		case 65: // A
			keyState.a = true;
			break;
		case 37: // 向左方向键
			keyState.a = true;
			event.preventDefault();
			break;
		case 68: // D
			keyState.d = true;
			break;
		case 39: // 向右方向键
			keyState.d = true;
			event.preventDefault();
			break;
		case 69: // E
			keyState.e = true;
			break;
	}
	
	// E键交互逻辑
	const isMovingKeyDown = [87, 38, 83, 40, 65, 37, 68, 39].includes(event.keyCode);
    if (isMovingKeyDown && (person !== 'none' || obj !== 'none')) {
        smallHintController.show("请先完成当前对话");
        setTimeout(() => {
            smallHintController.hide();
        }, 2000);
    }
	if(event.keyCode==69&&!option_now){//对应E
		check_all_interact();	
	}
	
	else if(event.keyCode==27){//对应esc
		if(!option_now){
			$('.option').css('display','block');
			option_now=1;
		}
		else{
			$('.option').css('display','none');
			option_now=0;
		}
	}
	
}

// 定时器处理角色移动每10毫秒检查一次移动方向，并根据方向调整角色的位置。
setInterval(function(){

	// 如果需要停止移动，重置所有移动标志并清除定时器
	if(stop()) {
		front=back=left=right=0;
		if(timing !== null) {
			hero.style.backgroundPositionY=pos;
			hero.style.animationName="";
			hero.style.backgroundPositionX="-48px";
			clearInterval(timing);
			timing=null;
		}
	}
	// 检查是否有任何方向键被按下
	const isMoving = front || back || left || right;

	// 如果当前没有移动，并且有键被按下，则启动新的移动
	if (isMoving && timing === null) {
		if(front){
			pos="-144px";
			hero.style.animationName='forward';
		} else if(back){
			pos="0px";
			hero.style.animationName='backward';
		} else if(left){
			pos="-48px";
			hero.style.animationName='turnleft';
		} else if(right){
			pos="-96px";
			hero.style.animationName='turnright';
		}

		timing=setInterval(function(){
			if(stop()){
				hero.style.backgroundPositionY=pos;
				hero.style.backgroundPositionX="-48px";
				hero.style.animationName="";
				clearInterval(timing);
				timing = null; // 确保清除定时器后将timing设为null
				return; // 停止执行后续移动逻辑
			}

			var x=hero.offsetLeft,y=hero.offsetTop;
			var limit;

			// 根据当前按下的键来决定移动方向和限制
			if(keyState.w){
				limit=check('forward',wallx,x,y);
				if(y-5>limit) hero.style.top=y-5+"px";
				else{
					hero.style.top=limit;
					// 如果到达限制，并且没有其他键按下，则停止移动
					if(!keyState.s && !keyState.a && !keyState.d) {
						clearInterval(timing);
						timing=null;
					}
				}
			} else if(keyState.s){
				limit=check('backward',wallx,x,y);
				if(y+5<limit) hero.style.top=y+5+"px";
				else{
					hero.style.top=limit;
					if(!keyState.w && !keyState.a && !keyState.d) {
						clearInterval(timing);
						timing=null;
					}
				}
			} else if(keyState.a){
				limit=check('turnleft',wally,x,y);
				if(x-5>limit) hero.style.left=x-5+"px";
				else{
					hero.style.left=limit;
					if(!keyState.w && !keyState.s && !keyState.d) {
						clearInterval(timing);
						timing=null;
					}
				}
			} else if(keyState.d){
				limit=check('turnright',wally,x,y);
				if(x+5<limit) hero.style.left=x+5+"px";
				else{
					hero.style.left=limit;
					if(!keyState.w && !keyState.s && !keyState.a) {
						clearInterval(timing);
						timing=null;
					}
				}
			} else {
				// 如果所有方向键都松开了，清除定时器
				hero.style.backgroundPositionY=pos;
				hero.style.animationName="";
				hero.style.backgroundPositionX="-48px";
				clearInterval(timing);
				timing=null;
			}

			// 根据当前按下的键来决定动画方向，避免闪烁
			// 优先处理垂直方向，然后是水平方向
			if (keyState.w) {
				if (pos !== "-144px") { pos = "-144px"; hero.style.animationName = 'forward'; }
			} else if (keyState.s) {
				if (pos !== "0px") { pos = "0px"; hero.style.animationName = 'backward'; }
			} else if (keyState.a) {
				if (pos !== "-48px") { pos = "-48px"; hero.style.animationName = 'turnleft'; }
			} else if (keyState.d) {
				if (pos !== "-96px") { pos = "-96px"; hero.style.animationName = 'turnright'; }
			}

		},30);
	} else if (!isMoving && timing !== null) {
		// 如果没有键被按下，但定时器仍在运行，则停止移动
		hero.style.backgroundPositionY=pos;
		hero.style.animationName="";
		hero.style.backgroundPositionX="-48px";
		clearInterval(timing);
		timing=null;
	}
},10);
// 键盘松开事件处理,当按键松开时，更新键盘状态并停止角色的移动。
document.onkeyup=function(event){
	// 更新键盘状态
	switch(event.keyCode) {
		case 87: // W
			keyState.w = false;
			break;
		case 38: // 向上方向键
			keyState.w = false;
			break;
		case 83: // S
			keyState.s = false;
			break;
		case 40: // 向下方向键
			keyState.s = false;
			break;
		
		case 65: // A
			keyState.a = false;
			break;
		case 37: // 向左方向键
			keyState.a = false;
			break;
		case 68: // D
			keyState.d = false;
			break;
		case 39: // 向右方向键
			keyState.d = false;
			break;
		case 69: // E
			keyState.e = false;
			break;
	}
	
	// 立即更新移动标志
	front = keyState.w ? 1 : 0;
	back = keyState.s ? 1 : 0;
	left = keyState.a ? 1 : 0;
	right = keyState.d ? 1 : 0;
	
	// 如果所有方向键都释放了，立即重置角色动画
	if(!front && !back && !left && !right) {
		hero.style.backgroundPositionY=pos;
		hero.style.animationName="";
		hero.style.backgroundPositionX="-48px";
		clearInterval(timing);
		timing=null;
	}
}

function check_all_interact(){
	if(person!='none'){
			if(person!='end') dialog(person);
			else{
				person='none';
				text.style.display='none'; // 对话结束后关闭对话框
				$('.choice_zone').css('display','none'); 
			}//在这里检测到end，再移除掉对话框，所以person是end的时候不能移动，再按一下变成none才能走
		} else if (obj!='none'){ // 这里照搬npc对话的结束逻辑
			if(obj!='end') interact(obj);
			else{
				obj='none';
				text.style.display='none'; // 对话结束后关闭对话框
				$('.choice_zone').css('display','none'); 
			}
		}
		else{ //注意，person，trans，obj不为none时，会阻止移动，这一切必须在按下E之后触发，不然路过就被卡住了
			for(var i=0;i<object.length;i++){
				if(hotzone(hero.offsetLeft,hero.offsetTop,object[i])) obj=object[i][3];
			} // 检查是否靠近物品，如果靠近某个物品，就把这个物品的名字赋值给obj，这是原游戏没有的功能
			for(var i=0;i<npc.length;i++){
				if(hotzone(hero.offsetLeft,hero.offsetTop,npc[i])) person=npc[i][3]; 				
			} // 检查是否靠近NPC，如果靠近某个npc，就把这个npc的名字赋值给person，调用dialog进入对话
			for(var i=0;i<door.length;i++){
				if(hotzone(hero.offsetLeft,hero.offsetTop,door[i])) trans=door[i][3];
			} // 检查是否靠近门，如果靠近某个门，就把这个门的名字赋值给trans，调用transform换地图
			if(person!='none') dialog(person);
			else if(obj!='none') interact(obj);
			else if(trans!='none') transform(trans);
			else {
				smallHintController.show("附近没有可交互对象");
				setTimeout(() => {
					smallHintController.hide();
				}, 2000);
			}
		}
}