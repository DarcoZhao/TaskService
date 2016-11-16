var State_Idle = (function () {
    function State_Idle(player) {
        this.player = player;
        this.stateType = StateType.IDLE;
        this.doAnim = new doAnimation();
        this.curAnim = new animationList();
    }
    var d = __define,c=State_Idle,p=c.prototype;
    p.onEnter = function () {
        console.log("idle");
        this.player.doAnimation.Animate(this.player.appearance, this.player.curAnimation.animate_Idle_Front_string);
    };
    p.onRun = function () {
    };
    p.onCheck = function () {
        return this;
    };
    p.onExit = function () {
    };
    return State_Idle;
}());
egret.registerClass(State_Idle,'State_Idle',["State"]);
var State_Run = (function () {
    function State_Run(player) {
        this.player = player;
        this.stateType = StateType.RUN;
    }
    var d = __define,c=State_Run,p=c.prototype;
    p.updatePos = function (targetPos) {
        egret.Tween.removeTweens(this.player);
        if (targetPos.y < this.player.y) {
            if (this.curAnim != this.player.curAnimation.animate_Run_Back)
                this.player.doAnimation.Animate(this.player.appearance, this.player.curAnimation.animate_Run_Back);
        }
        else if (targetPos.y > this.player.y) {
            if (this.curAnim != this.player.curAnimation.animate_Run_Front)
                this.player.doAnimation.Animate(this.player.appearance, this.player.curAnimation.animate_Run_Front);
        }
        else {
            if (targetPos.x > this.player.x) {
                if (this.curAnim != this.player.curAnimation.animate_Run_Right)
                    this.player.doAnimation.Animate(this.player.appearance, this.player.curAnimation.animate_Run_Right);
            }
            else {
                if (this.curAnim != this.player.curAnimation.animate_Run_Left)
                    this.player.doAnimation.Animate(this.player.appearance, this.player.curAnimation.animate_Run_Left);
            }
        }
        this.curAnim = this.player.doAnimation.curAnimation;
        //this.player.doAnimation.Animate(this.player.appearance, this.player.curAnimation.animate_Run_Right);
        var costTime = Math.sqrt(Math.pow((targetPos.x - this.player.x), 2) +
            Math.pow((targetPos.y - this.player.y), 2)) / this.player.velocity * 10;
        var tween = egret.Tween.get(this.player);
        tween.to({ x: targetPos.x, y: targetPos.y }, costTime);
    };
    p.onEnter = function () {
        this.player.doAnimation.Animate(this.player.appearance, this.player.curAnimation.animate_Run_Right);
    };
    p.onRun = function (moveGrid, inputGrid) {
        this.updatePos(moveGrid);
        this.targetFinal = inputGrid;
    };
    p.onCheck = function () {
        //console.log("PlayerPos    " + this.player.x + "   inputPos  " + Math.floor(this.targetFinal.x / 64));
        if (Math.abs(this.player.x - Math.floor(this.targetFinal.x / 64)) * 64 + 50 < 4
            && Math.abs(this.player.y - Math.floor(this.targetFinal.y / 64)) * 64 + 50 < 4) {
            console.log("onCheckToIdle");
            return this.player.state_Idle;
        }
        else {
            return this;
        }
    };
    p.onExit = function () {
        egret.Tween.removeTweens(this.player);
    };
    return State_Run;
}());
egret.registerClass(State_Run,'State_Run',["State"]);
//# sourceMappingURL=States.js.map