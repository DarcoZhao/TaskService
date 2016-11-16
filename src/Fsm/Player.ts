class Player extends egret.DisplayObjectContainer {
    stateMachine: StateMachine;
    state_Idle: State;
    state_Run: State;
    appearance: egret.Bitmap;
    doAnimation: doAnimation;
    curAnimation: animationList;
    velocity: number = 2;

    constructor() {
        super();

        this.appearance = createBitmapByName("idle_front_001_png");
        this.addChild(this.appearance);

        this.doAnimation = new doAnimation();
        this.curAnimation = new animationList();

        this.state_Idle = new State_Idle(this);
        this.state_Run = new State_Run(this);
        this.stateMachine = new StateMachine(this.state_Idle);

        egret.startTick(this.stateMachine.runMachine, this.stateMachine);
    }

    public onMove(targetGrid: Vector2, inputGrid: Vector2) {
        this.stateMachine.changeState(this.state_Run);
        this.state_Run.onRun(targetGrid, inputGrid);
    }
    public onIdle() {
        this.stateMachine.changeState(this.state_Idle)
    }

}