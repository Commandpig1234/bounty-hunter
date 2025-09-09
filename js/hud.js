// HUD控制器
class HudController {
  constructor(elementId) {
    this.hudElement = document.getElementById(elementId);
    this.ignoreTips = {}; // 用于存储需要忽略的提示类型
    this.currentTipType = null;

    // 清空HUD的现有内容
    this.hudElement.innerHTML = '';

    // 创建用于显示消息的span元素
    this.messageElement = document.createElement('span');
    this.hudElement.appendChild(this.messageElement);

    // 创建“不再显示此提示”按钮
    this.ignoreButton = document.createElement('button');
    this.ignoreButton.textContent = '不再显示此提示';
    this.ignoreButton.className = 'ignore-tip-button'; // 添加类名以便样式化
    this.hudElement.appendChild(this.ignoreButton);

    // 为按钮添加点击事件监听器
    this.ignoreButton.addEventListener('click', () => {
      if (this.currentTipType) {
        this.ignoreTips[this.currentTipType] = true;
        this.hudElement.classList.remove('show');
        this.ignoreButton.style.display = 'none';
      }
    });
  }

  // 更新HUD内容
  updateHud(message, type = 'default') {
    this.currentTipType = type; // 记录当前提示的类型
    if (this.ignoreTips[type]) {
      // 如果此类型的提示已被忽略，则不显示
      return;
    }

    if (message) {
      this.messageElement.textContent = message;
    }
    this.show(); // 更新内容后自动显示
    this.ignoreButton.style.display = 'block'; // 显示按钮
  }

  // 显示HUD
  show() {
    this.hudElement.classList.add('show');
  }

  // 隐藏HUD
  hide() {
    // 确保动画完成后再移除类，可以根据CSS中transition的时间调整
    setTimeout(() => {
      this.hudElement.classList.remove('show');
      this.ignoreButton.style.display = 'none'; // 隐藏按钮
    }, 800); // 与CSS中的transition时间保持一致
  }
}

class SmallHintController {
  constructor(elementId) {
    this.hintElement = document.getElementById(elementId);
  }

  show(message) {
    this.hintElement.textContent = message;
    this.hintElement.style.display = 'block';
  }

  hide() {
    this.hintElement.style.display = 'none';
  }
}

// HUD控制器实例（延迟初始化）
let hudController = null;
let smallHintController = null;

// 初始化HUD控制器
function initializeHUD() {
  // 检查DOM是否准备完成
  if (document.getElementById('hud') && document.getElementById('small-hint')) {
    if (!hudController) {
      hudController = new HudController('hud');
      hudController.hide();
    }
    if (!smallHintController) {
      smallHintController = new SmallHintController('small-hint');
    }
    return true;
  }
  return false;
}

// 重置HUD状态
function resetHUD() {
  if (hudController) {
    hudController.ignoreTips = {};
    hudController.currentTipType = null;
    hudController.hide();
  }
}

// 确保HUD已初始化的安全调用函数
function safeHUDCall(callback) {
  if (initializeHUD()) {
    callback();
  } else {
    // 如果DOM还未准备好，延迟执行
    setTimeout(() => safeHUDCall(callback), 100);
  }
}

// DOM准备完成后初始化
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeHUD);
} else {
  initializeHUD();
}