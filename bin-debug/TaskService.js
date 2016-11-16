var TaskService = (function () {
    function TaskService() {
        this.taskList = {};
        this.observerList = [];
        TaskService.count++;
        if (TaskService.count > 1)
            throw "OverUse";
    }
    var d = __define,c=TaskService,p=c.prototype;
    TaskService.getInstance = function () {
        if (TaskService.instance == null)
            TaskService.instance = new TaskService();
        return TaskService.instance;
    };
    d(p, "TaskList"
        ,function () {
            return this.taskList;
        }
    );
    p.addTask = function (value) {
        if (value == null)
            throw value + "isNull";
        if (value == this.taskList[value.Id])
            throw value.Id + "isExist";
        this.taskList[value.Id] = value;
    };
    p.addObserver = function (value) {
        for (var i = 0; i < this.observerList.length; i++) {
            if (value == this.observerList[i])
                return;
        }
        this.observerList.push(value);
    };
    //应该传一个任务列表Task[] 而不是 Task
    p.getTaskByCustomRole = function (rule) {
        var temp = rule();
        return this.taskList["01"];
    };
    p.accept = function (id) {
        //JudgeValue
        var temp = this.taskList[id];
        if (temp.status == TaskStatus.ACCEPTABLE)
            temp.status = TaskStatus.DURING;
        this.notify(temp);
        console.log("yea");
    };
    p.finish = function (id) {
        if (id == null) {
            throw "Id is null";
        }
        var temp = this.taskList[id];
        if (temp.status == TaskStatus.CAN_SUBMIT) {
            temp.status = TaskStatus.SUBMITTED;
            console.log(temp.Id + " finish");
            this.notify(temp);
            return;
        }
        throw id + "CantFinish";
    };
    p.notify = function (value) {
        this.observerList.forEach(function (element) {
            element.onChange(value);
        });
    };
    TaskService.count = 0;
    return TaskService;
}());
egret.registerClass(TaskService,'TaskService');
//# sourceMappingURL=TaskService.js.map