var StateType;
(function (StateType) {
    StateType[StateType["IDLE"] = 0] = "IDLE";
    StateType[StateType["RUN"] = 1] = "RUN";
})(StateType || (StateType = {}));
var StateMachine = (function () {
    function StateMachine(firstState) {
        this.curState = firstState;
        this.curState.onEnter();
    }
    var d = __define,c=StateMachine,p=c.prototype;
    p.runMachine = function () {
        //this.curState.onCheck();
        var newState = this.curState.onCheck();
        this.changeState(newState);
        //console.log(this.curState);
        return false;
    };
    p.changeState = function (newState) {
        if (newState.stateType != this.curState.stateType) {
            //console.log("change");
            this.curState.onExit();
            this.curState = newState;
            this.curState.onEnter();
        }
    };
    return StateMachine;
}());
egret.registerClass(StateMachine,'StateMachine');
//# sourceMappingURL=StateMachine.js.map