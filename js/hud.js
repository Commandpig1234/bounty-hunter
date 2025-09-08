// HUD控制器
class HudController {
  constructor(elementId) {
    this.hudElement = document.getElementById(elementId);
    this.guide = 'WASD移动 E键交互';
    this.variableText1 = '';
    this.variableText2 = '';
  }

  // 更新HUD内容
  updateHud() {
    this.hudElement.textContent = `${this.fixedText} | 当前场景: ${this.variableText1} | 当前目标: ${this.variableText2}`;
  }

  // 设置可变文本1
  setVariableText1(text) {
    this.variableText1 = text;
    this.updateHud();
  }

  // 设置可变文本2
  setVariableText2(text) {
    this.variableText2 = text;
    this.updateHud();
  }
}

// 创建HUD控制器实例
const hudController = new HudController('coordHud');

// 初始化HUD
hudController.updateHud();