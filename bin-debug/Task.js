var TaskStatus;
(function (TaskStatus) {
    TaskStatus[TaskStatus["UNACCEPTABLE"] = 0] = "UNACCEPTABLE";
    TaskStatus[TaskStatus["ACCEPTABLE"] = 1] = "ACCEPTABLE";
    TaskStatus[TaskStatus["DURING"] = 2] = "DURING";
    TaskStatus[TaskStatus["CAN_SUBMIT"] = 3] = "CAN_SUBMIT";
    TaskStatus[TaskStatus["SUBMITTED"] = 4] = "SUBMITTED";
})(TaskStatus || (TaskStatus = {}));
var Task = (function () {
    function Task(id, name, fromNpcId, toNpcId) {
        this.id = id;
        this.name = name;
        this.desc = "";
        this.status = TaskStatus.UNACCEPTABLE;
        this.fromNpcId = fromNpcId;
        this.toNpcId = toNpcId;
    }
    var d = __define,c=Task,p=c.prototype;
    d(p, "Id"
        ,function () {
            return this.id;
        }
    );
    d(p, "Name"
        ,function () {
            return this.name;
        }
    );
    d(p, "Desc"
        ,function () {
            return this.desc;
        }
    );
    d(p, "FromNpcId"
        ,function () {
            return this.fromNpcId;
        }
    );
    return Task;
}());
egret.registerClass(Task,'Task');
/*
class Task {
    private id: string;
    private name: string;
    private desc: string;
    private status: TaskStatus;

    constructor(id: string, name: string) {
        this.id = id;
        this.name = name;
        this.desc = "";
        this.status = TaskStatus.UNACCEPTABLE;
    }

    public get Id() {
        return this.id;
    }

    public get State() {
        return this.status;
    }

    public get Desc() {
        return this.desc;
    }

    public get Status() {
        return this.status;
    }
}

class Task_FindNpc extends Task {

    private fromNpcId: string;
    public toNpcId: string;

    constructor(id: string, name: string, fromNpcId: string, toNpcId: string) {
        super(id, name);
        this.fromNpcId = fromNpcId;
        this.toNpcId = toNpcId;
    }

}
*/ 
//# sourceMappingURL=Task.js.map