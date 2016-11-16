var Player = (function (_super) {
    __extends(Player, _super);
    function Player() {
        _super.call(this);
        this.velocity = 2;
        this.appearance = createBitmapByName("idle_front_001_png");
        this.addChild(this.appearance);
        this.doAnimation = new doAnimation();
        this.curAnimation = new animationList();
        this.state_Idle = new State_Idle(this);
        this.state_Run = new State_Run(this);
        this.stateMachine = new StateMachine(this.state_Idle);
        egret.startTick(this.stateMachine.runMachine, this.stateMachine);
    }
    var d = __define,c=Player,p=c.prototype;
    p.onMove = function (targetGrid, inputGrid) {
        this.stateMachine.changeState(this.state_Run);
        this.state_Run.onRun(targetGrid, inputGrid);
    };
    p.onIdle = function () {
        this.stateMachine.changeState(this.state_Idle);
    };
    return Player;
}(egret.DisplayObjectContainer));
egret.registerClass(Player,'Player');
//# sourceMappingURL=Player.js.map