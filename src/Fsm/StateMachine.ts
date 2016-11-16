enum StateType {
    IDLE,
    RUN
}

interface State {
    player: any;
    stateType: StateType;
    onEnter();
    onRun(moveGrid: Vector2, inputGrid: Vector2);
    onCheck();
    onExit();
}

class StateMachine {
    curState: State;

    constructor(firstState: State) {
        this.curState = firstState;
        this.curState.onEnter();
    }

    public runMachine(): boolean {
        //this.curState.onCheck();

        var newState: State = this.curState.onCheck();
        this.changeState(newState);
        //console.log(this.curState);

        return false;
    }

    public changeState(newState: State) {
        if (newState.stateType != this.curState.stateType) {
            //console.log("change");
            this.curState.onExit();
            this.curState = newState;
            this.curState.onEnter();
        }
    }
}