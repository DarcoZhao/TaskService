
interface observer {
    onChange(task: Task)
}

class Npc extends egret.DisplayObjectContainer implements observer {

    private npcId: string;
    private npcName: string;
    private emoji: egret.Bitmap;
    private npcApperance: egret.Bitmap;

    //private curAnimation: animationList;
    //private doingAnimation: doAnimation;

    private taskList: Task[];// { [index: string]: Task } = {};

    constructor(npcId: string, npcName: string, x: number, y: number, openPanel: NpcPanel) {
        super();
        this.npcId = npcId;
        this.npcName = npcName;
        this.initNpcApperance(x, y);

        //this.curAnimation = new animationList();
        //this.doingAnimation = new doAnimation();
        //this.doingAnimation.Animate(this.npcApperance, this.curAnimation.animate_Npc_Beauty_Idle);


        var onClick: Function = function () {
            this.onNpcClick(openPanel);
        }
        this.touchEnabled = true;
        this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, onClick, this);
    }

    private initNpcApperance(x: number, y: number) {
        this.npcApperance = createBitmapByName("Npc_Beauty_00001_png");

        this.npcApperance.x = x;
        this.npcApperance.y = y;
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

    public onNpcClick(openPanel: NpcPanel) {
        //for (var k in this.taskList) {
        if (this.taskList[0] == null) {
            openPanel.updatePanel(this.npcName, "Hello.", null, null);
        } else if (this.taskList[0].status == TaskStatus.SUBMITTED)
            openPanel.updatePanel(this.npcName, "Hello.", null, null);
        else {
            this.judgeTask();
            openPanel.updatePanel(this.npcName, this.taskList[0].Name.toString(), this.taskList[0].desc.toString(), this.taskList[0]);
        }

        openPanel.showPanel();
    }

    private judgeTask() {
        if (this.npcId == this.taskList[0].toNpcId) {
            this.taskList[0].status = TaskStatus.CAN_SUBMIT;
            this.taskList[0].desc = "Oh, you find me.";
        }
    }

    public getTask() {

        var rule: Function = (taskList) => {
            var temp: Task[] = [];
            for (var k in taskList) {
                var task: Task = taskList[k];
                // if (task instanceof Task_FindNpc){
                //     (task as Task_FindNpc).toNpcId                    
                // }
                if (task.FromNpcId == this.npcId && task.status == TaskStatus.ACCEPTABLE) {
                    temp.push(task);
                }

                if (task.toNpcId == this.npcId && task.status == TaskStatus.DURING)
                    temp.push(task);

            }
            return temp;
            //taskList = this.taskList
        };
        this.taskList = TaskService.getInstance().getTaskByCustomRole(rule);

        this.checkEmoji();
    }

    private checkEmoji() {
        //    var textureName = "";
        if (this.taskList[0] == null) {
            this.emoji.alpha = 0;
            return;
        }

        if (this.taskList[0].FromNpcId == this.npcId) {
            switch (this.taskList[0].status) {
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
            switch (this.taskList[0].status) {
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
        //this.emoji.texture = RES.getRes(textureName)
    }

    onChange(task: Task) {
        this.getTask();
        this.checkEmoji();
    }
}