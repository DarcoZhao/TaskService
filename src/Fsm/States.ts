class State_Idle implements State {
    player: Player;
    stateType: StateType;
    doAnim: doAnimation;
    curAnim: animationList;

    constructor(player: Player) {
        this.player = player;
        this.stateType = StateType.IDLE;
        this.doAnim = new doAnimation();
        this.curAnim = new animationList();
    }

    public onEnter() {
        console.log("idle")
        this.player.doAnimation.Animate(this.player.appearance, this.player.curAnimation.animate_Idle_Front_string);
    }

    public onRun() {

    }

    public onCheck() {
        return this;
    }

    public onExit() {

    }
}

class State_Run implements State {
    player: Player;
    stateType: StateType;

    curAnim: string[];

    constructor(player: Player) {
        this.player = player;
        this.stateType = StateType.RUN;
    }

    public updatePos(targetPos: Vector2) {
        egret.Tween.removeTweens(this.player);

        if (targetPos.y < this.player.y) {
            if (this.curAnim != this.player.curAnimation.animate_Run_Back)
                this.player.doAnimation.Animate(this.player.appearance, this.player.curAnimation.animate_Run_Back);
        } else if (targetPos.y > this.player.y) {
            if (this.curAnim != this.player.curAnimation.animate_Run_Front)
                this.player.doAnimation.Animate(this.player.appearance, this.player.curAnimation.animate_Run_Front);
        } else {
            if (targetPos.x > this.player.x) {
                if (this.curAnim != this.player.curAnimation.animate_Run_Right)
                    this.player.doAnimation.Animate(this.player.appearance, this.player.curAnimation.animate_Run_Right);
            } else {
                if (this.curAnim != this.player.curAnimation.animate_Run_Left)
                    this.player.doAnimation.Animate(this.player.appearance, this.player.curAnimation.animate_Run_Left);
            }
        }

        this.curAnim = this.player.doAnimation.curAnimation;
        //this.player.doAnimation.Animate(this.player.appearance, this.player.curAnimation.animate_Run_Right);

        var costTime: number =
            Math.sqrt(
                Math.pow((targetPos.x - this.player.x), 2) +
                Math.pow((targetPos.y - this.player.y), 2)
            ) / this.player.velocity * 10

        var tween = egret.Tween.get(this.player);
        tween.to({ x: targetPos.x, y: targetPos.y }, costTime);
    }

    public onEnter() {
        this.player.doAnimation.Animate(this.player.appearance, this.player.curAnimation.animate_Run_Right);
    }

    private targetFinal: Vector2;
    public onRun(moveGrid: Vector2, inputGrid: Vector2) {
        this.updatePos(moveGrid);
        this.targetFinal = inputGrid;
    }

    public onCheck() {
        //console.log("PlayerPos    " + this.player.x + "   inputPos  " + Math.floor(this.targetFinal.x / 64));
        if (Math.abs(this.player.x - Math.floor(this.targetFinal.x / 64)) * 64 + 50 < 4
            && Math.abs(this.player.y - Math.floor(this.targetFinal.y / 64)) * 64 + 50 < 4) {
            console.log("onCheckToIdle");
            return this.player.state_Idle;
        } else {
            return this;
        }
    }

    public onExit() {
        egret.Tween.removeTweens(this.player);
    }
}