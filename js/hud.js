// HUD控制器
class HudController {
  constructor(elementId) {
    this.hudElement = document.getElementById(elementId);
    this.guide = 'WASD移动 E键交互';
    this.scene = '';
    this.target = '';
  }

  // 更新HUD内容
  updateHud() {
    this.hudElement.textContent = `${this.guide} | 当前场景: ${this.scene} |  ${this.target}`;
  }

  // 设置可变文本1
  setScene(text) {
    this.scene = text;
    this.updateHud();
  }

  // 设置可变文本2
  setTarget(text) {
    this.target = text;
    this.updateHud();
  }
}

// 创建HUD控制器实例
const hudController = new HudController('hud');

// 初始化HUD
hudController.updateHud();