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
    d(p, "FromNpcId"
        ,function () {
            return this.fromNpcId;
        }
    );
    return Task;
}());
egret.registerClass(Task,'Task');
//# sourceMappingURL=Task.js.map