
interface observer {
    onChange(task: Task)
}

class Npc extends egret.DisplayObjectContainer implements observer {

    private npcId: string;
    private emoji: egret.Bitmap;
    private npcApperance: egret.Shape;

    private taskList: { [index: string]: Task } = {};

    constructor(npcId: string, x: number, y: number, openPanel: TaskPanel) {
        super();
        this.npcId = npcId;
        this.initNpcApperance(x, y);

        var onClick: Function = function () {
            this.onNpcClick(openPanel);
        }
        this.touchEnabled = true;
        this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, onClick, this);
    }

    private initNpcApperance(x: number, y: number) {
        this.npcApperance = new egret.Shape();
        this.npcApperance.graphics.beginFill(0x000000, 0.5);
        this.npcApperance.graphics.drawRect(x, y, 60, 172);
        this.npcApperance.graphics.endFill();
        this.addChild(this.npcApperance);

        this.emoji = createBitmapByName("Task_Emoji_NewTask_png");
        this.emoji.x = x;
        this.emoji.y = y;
        this.emoji.scaleX = this.emoji.scaleY = 3;
        this.addChild(this.emoji);
        this.emoji.alpha = 0;
    }

    public get NpcId() {
        return this.npcId;
    }

    public get NpcApperance() {
        return this.NpcApperance;
    }

    public onNpcClick(openPanel: TaskPanel) {
        if (this.npcId == this.taskList["01"].FromNpcId) {
            openPanel.updateTask(this.taskList["01"]);
        } else
            this.taskList["01"].status = TaskStatus.CAN_SUBMIT;
        openPanel.showPanel();
    }

    public getTask() {
        //应该传一个任务列表
        var getTaskFunction: Function = function () {
            //var taskList: { [index: string]: Task } = {};
            for (var k in TaskService.getInstance().taskList) {
                var taskList: { [index: string]: Task } = {};
                taskList = TaskService.getInstance().TaskList;
                if (taskList[k].FromNpcId == this.npcId && taskList[k].status == TaskStatus.ACCEPTABLE) {
                    var temp: Task = taskList[k];
                    return taskList[k];
                }
            }
        }

        var newTask: Task = TaskService.getInstance().getTaskByCustomRole(getTaskFunction);
        this.taskList[newTask.Id] = newTask;

        this.checkEmoji();
    }

    private checkEmoji() {
        for (var k in this.taskList) {
            if (this.taskList[k].FromNpcId == this.npcId) {
                switch (this.taskList[k].status) {
                    case TaskStatus.UNACCEPTABLE:
                        this.emoji.alpha = 0;
                        break;
                    case TaskStatus.ACCEPTABLE:
                        this.emoji.texture = RES.getRes("Task_Emoji_NewTask_png");
                        this.emoji.alpha = 1;
                        break;
                    case TaskStatus.DURING:
                        this.emoji.texture = RES.getRes("Task_Emoji_DuringTask_png");
                        this.emoji.alpha = 1;
                        break;
                    case TaskStatus.CAN_SUBMIT:
                        this.emoji.texture = RES.getRes("Task_Emoji_CanSubmitTask_png");
                        this.emoji.alpha = 1;
                        break;
                    case TaskStatus.SUBMITTED:
                        this.emoji.alpha = 0;
                        break;
                }
            } else {
                switch (this.taskList[k].status) {
                    case TaskStatus.UNACCEPTABLE:
                        this.emoji.alpha = 0;
                        break;
                    case TaskStatus.ACCEPTABLE:
                        this.emoji.texture = RES.getRes("Task_Emoji_NewTask_png");
                        this.emoji.alpha = 0;
                        break;
                    case TaskStatus.DURING:
                        this.emoji.texture = RES.getRes("Task_Emoji_CanSubmitTask_png");
                        this.emoji.alpha = 1;
                        break;
                    case TaskStatus.CAN_SUBMIT:
                        this.emoji.texture = RES.getRes("Task_Emoji_CanSubmitTask_png");
                        this.emoji.alpha = 1;
                        break;
                    case TaskStatus.SUBMITTED:
                        this.emoji.alpha = 0;
                        break;
                }

            }

        }
    }

    //如何复用
    onChange(task: Task) {
        this.checkEmoji();
    }
}

class TaskPanel extends egret.DisplayObjectContainer implements observer {
    private panelContainer: egret.DisplayObjectContainer;
    private bg: egret.Shape;
    public textField: egret.TextField;
    private button: egret.Shape;

    public taskList: { [index: string]: Task } = {};

    constructor(x: number, y: number) {
        super();

        this.panelContainer = new egret.DisplayObjectContainer();
        this.panelContainer.x = 0;
        this.panelContainer.y = y * 3 / 4;
        this.panelContainer.width = x;
        this.panelContainer.height = 172;
        this.addChild(this.panelContainer);

        this.bg = new egret.Shape();
        this.bg.graphics.beginFill(0x000000, 0.5);
        this.bg.graphics.drawRect(0, 0, x, 100);
        this.bg.graphics.endFill();
        this.panelContainer.addChild(this.bg);

        this.textField = new egret.TextField();
        this.textField.x = 50;
        this.textField.y = 20;
        this.textField.text = "";
        this.panelContainer.addChild(this.textField);

        this.button = new egret.Shape();
        this.button.graphics.beginFill(0x000000, 0.5);
        this.button.graphics.drawRect(x - 200, 20, 150, 50);
        this.button.graphics.endFill();
        this.panelContainer.addChild(this.button);

        this.panelContainer.x = x;

        this.button.touchEnabled = true;
        this.button.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onButtonClick, this);
    }

    public updateTask(task: Task) {
        this.taskList[task.Id] = task;
        this.textField.text = this.taskList[task.Id].Name + task.status.toString();
    }

    private isOpen: boolean = false
    public showPanel() {
        this.isOpen = !this.isOpen;
        egret.Tween.get(this.panelContainer).to({ x: this.isOpen ? this.panelContainer.x - 640 : this.panelContainer.x + 640 }, 500);
    }

    public onButtonClick() {
        this.showPanel();

        switch (this.taskList["01"].status) {
            case TaskStatus.ACCEPTABLE:
                TaskService.getInstance().accept(this.taskList["01"].Id);
                break;
            case TaskStatus.CAN_SUBMIT:
                TaskService.getInstance().finish(this.taskList["01"].Id);
                break;
            default:
                // throw "doesnt acceptable or can_submit";
                break;
        }

    }

    //如何复用
    onChange(task: Task) {
        this.updateTask(task);
    }
}