var initTaskStuff = (function (_super) {
    __extends(initTaskStuff, _super);
    function initTaskStuff(stageWidth, stageHeight) {
        _super.call(this);
        var taskService = TaskService.getInstance();
        //Task父类 不同类型Task继承 但是无法找到继承者属性
        //var task_FindNpc_01 = new Task_FindNpc("01", "FindThatGuy", "npc_01", "npc_02");
        var task_FindNpc_01 = new Task("01", "FindThatGuy", "npc_01", "npc_02");
        task_FindNpc_01.status = TaskStatus.ACCEPTABLE;
        task_FindNpc_01.desc = "Go to find him.";
        taskService.addTask(task_FindNpc_01);
        var panel_Task = new TaskPanel(stageWidth, stageHeight); //(this.stage.width, this.stage.height);
        taskService.addObserver(panel_Task);
        this.addChild(panel_Task);
        var panel_Npc = new NpcPanel(stageWidth, stageHeight); //(this.stage.width, this.stage.height);
        this.addChild(panel_Npc);
        var npc_FriendNpc01 = new Npc("npc_01", "你大爷还是你大爷", 30, 30, panel_Npc);
        this.addChild(npc_FriendNpc01);
        taskService.addObserver(npc_FriendNpc01);
        npc_FriendNpc01.getTask();
        var npc_FriendNpc02 = new Npc("npc_02", "美少女战士001", 360, 240, panel_Npc);
        this.addChild(npc_FriendNpc02);
        taskService.addObserver(npc_FriendNpc02);
        npc_FriendNpc02.getTask();
        var panelOpener = new egret.TextField();
        this.addChild(panelOpener);
        panelOpener.text = "ClickToOpenTaskPanel";
        panelOpener.x = panelOpener.y = 10;
        panelOpener.touchEnabled = true;
        panelOpener.addEventListener(egret.TouchEvent.TOUCH_BEGIN, panel_Task.showPanel, panel_Task);
        this.setChildIndex(panel_Npc, 10);
        //this.addChild(npc_FriendNpc01.NpcApperance); 为何不能这么写？
    }
    var d = __define,c=initTaskStuff,p=c.prototype;
    return initTaskStuff;
}(egret.DisplayObjectContainer));
egret.registerClass(initTaskStuff,'initTaskStuff');
//# sourceMappingURL=InitTaskStuff.js.map