
class TaskService {
    private static instance;
    private static count = 0;
    private taskList: { [index: string]: Task } = {};
    private observerList: observer[] = [];

    constructor() {
        TaskService.count++;
        if (TaskService.count > 1)
            throw "OverUse";
    }

    public static getInstance() {
        if (TaskService.instance == null)
            TaskService.instance = new TaskService();
        return TaskService.instance;
    }

    public get TaskList() {
        return this.taskList;
    }

    public addTask(value: Task) {
        if (value == null)
            throw value + "isNull";
        if (value == this.taskList[value.Id])
            throw value.Id + "isExist";
        this.taskList[value.Id] = value;
    }

    public addObserver(value: observer) {
        for (var i = 0; i < this.observerList.length; i++) {
            if (value == this.observerList[i])
                return;
        }
        this.observerList.push(value);
    }

    //应该传一个任务列表Task[] 而不是 Task
    public getTaskByCustomRole(rule: Function): Task[] {
        return rule(this.taskList);//rule(this.taskList);
    }

    public accept(id: string): void {
        //JudgeValue
        var temp: Task = this.taskList[id];
        if (temp.status == TaskStatus.ACCEPTABLE)
            temp.status = TaskStatus.DURING;
        this.notify(temp);
    }

    public finish(id: string): void {
        if (id == null) {
            throw "Id is null";
        }
        var temp: Task = this.taskList[id];
        if (temp.status == TaskStatus.CAN_SUBMIT) {
            temp.status = TaskStatus.SUBMITTED;
            this.notify(temp);
            return;
        }
        throw id + "CantFinish";
    }

    private notify(value: Task): void {
        this.observerList.forEach(element => {
            element.onChange(value);
        });
    }
}