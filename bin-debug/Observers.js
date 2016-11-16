var Npc = (function (_super) {
    __extends(Npc, _super);
    function Npc(npcId, x, y, openPanel) {
        _super.call(this);
        this.taskList = {};
        this.npcId = npcId;
        this.initNpcApperance(x, y);
        var onClick = function () {
            this.onNpcClick(openPanel);
        };
        this.touchEnabled = true;
        this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, onClick, this);
    }
    var d = __define,c=Npc,p=c.prototype;
    p.initNpcApperance = function (x, y) {
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
    };
    d(p, "NpcId"
        ,function () {
            return this.npcId;
        }
    );
    d(p, "NpcApperance"
        ,function () {
            return this.NpcApperance;
        }
    );
    p.onNpcClick = function (openPanel) {
        if (this.npcId == this.taskList["01"].FromNpcId) {
            openPanel.updateTask(this.taskList["01"]);
        }
        else
            this.taskList["01"].status = TaskStatus.CAN_SUBMIT;
        openPanel.showPanel();
    };
    p.getTask = function () {
        //应该传一个任务列表
        var getTaskFunction = function () {
            //var taskList: { [index: string]: Task } = {};
            for (var k in TaskService.getInstance().taskList) {
                var taskList = {};
                taskList = TaskService.getInstance().TaskList;
                if (taskList[k].FromNpcId == this.npcId && taskList[k].status == TaskStatus.ACCEPTABLE) {
                    var temp = taskList[k];
                    return taskList[k];
                }
            }
        };
        var newTask = TaskService.getInstance().getTaskByCustomRole(getTaskFunction);
        this.taskList[newTask.Id] = newTask;
        this.checkEmoji();
    };
    p.checkEmoji = function () {
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
            }
            else {
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
    };
    //如何复用
    p.onChange = function (task) {
        this.checkEmoji();
    };
    return Npc;
}(egret.DisplayObjectContainer));
egret.registerClass(Npc,'Npc',["observer"]);
var TaskPanel = (function (_super) {
    __extends(TaskPanel, _super);
    function TaskPanel(x, y) {
        _super.call(this);
        this.taskList = {};
        this.isOpen = false;
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
    var d = __define,c=TaskPanel,p=c.prototype;
    p.updateTask = function (task) {
        this.taskList[task.Id] = task;
        this.textField.text = this.taskList[task.Id].Name + task.status.toString();
    };
    p.showPanel = function () {
        this.isOpen = !this.isOpen;
        egret.Tween.get(this.panelContainer).to({ x: this.isOpen ? this.panelContainer.x - 640 : this.panelContainer.x + 640 }, 500);
    };
    p.onButtonClick = function () {
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
    };
    //如何复用
    p.onChange = function (task) {
        this.updateTask(task);
    };
    return TaskPanel;
}(egret.DisplayObjectContainer));
egret.registerClass(TaskPanel,'TaskPanel',["observer"]);
//# sourceMappingURL=Observers.js.map