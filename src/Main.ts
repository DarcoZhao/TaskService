//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-2015, Egret Technology Inc.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////、


var playerAni =[ 
    {tag:0,name: "Idle1_png"},
    {tag:0,name: "Idle2_png"},
    {tag:0,name: "Idle3_png"},
    {tag:0,name: "Idle4_png"},


    {tag:1,name: "Walk1_png"},
    {tag:1,name: "Walk2_png"},
    {tag:1,name: "Walk3_png"},
    {tag:1,name: "Walk4_png"},



    /*
    {tag:0,name: "IdleAni1_png"},
    {tag:0,name: "IdleAni2_png"},
    {tag:0,name: "IdleAni3_png"},
    {tag:0,name: "IdleAni4_png"},
    {tag:0,name: "IdleAni5_png"},
    {tag:0,name: "IdleAni6_png"},
    {tag:0,name: "IdleAni7_png"},
    {tag:0,name: "IdleAni8_png"},

    {tag:1,name: "Walk (1)_png"},
    {tag:1,name: "Walk (2)_png"},
    {tag:1,name: "Walk (3)_png"},
    {tag:1,name: "Walk (4)_png"},
    {tag:1,name: "Walk (5)_png"},
    {tag:1,name: "Walk (6)_png"},
    {tag:1,name: "Walk (7)_png"},
    {tag:1,name: "Walk (8)_png"},
    {tag:1,name: "Walk (9)_png"},
    {tag:1,name: "Walk (10)_png"},
    {tag:1,name: "Walk (11)_png"},
    {tag:1,name: "Walk (12)_png"},
    {tag:1,name: "Walk (13)_png"},
    {tag:1,name: "Walk (14)_png"},
    {tag:1,name: "Walk (15)_png"},
    {tag:1,name: "Walk (16)_png"},
    {tag:1,name: "Walk (17)_png"},
    {tag:1,name: "Walk (18)_png"},
    {tag:1,name: "Walk (19)_png"},
    {tag:1,name: "Walk (20)_png"},
    {tag:1,name: "Walk (21)_png"},
    {tag:1,name: "Walk (22)_png"},
    {tag:1,name: "Walk (23)_png"},
    {tag:1,name: "Walk (24)_png"},
    {tag:1,name: "Walk (25)_png"},
    {tag:1,name: "Walk (26)_png"},
    {tag:1,name: "Walk (27)_png"},
    {tag:1,name: "Walk (28)_png"},
    {tag:1,name: "Walk (29)_png"},
    {tag:1,name: "Walk (30)_png"},
    {tag:1,name: "Walk (31)_png"},
    {tag:1,name: "Walk (32)_png"},
    {tag:1,name: "Walk (33)_png"},
    {tag:1,name: "Walk (34)_png"},
    {tag:1,name: "Walk (35)_png"},
    {tag:1,name: "Walk (36)_png"},
    {tag:1,name: "Walk (37)_png"},
    {tag:1,name: "Walk (38)_png"},
    */



]



class MyPlayer extends egret.DisplayObjectContainer {
    
    public nowState=0;
    public MyPhoto:egret.Bitmap;
    private MySta:StaMac=new StaMac;
    public MoveSpeed:number=20;
    public Modle:number=0;
    public IdleAni:Array<egret.Texture>=new Array<egret.Texture>();
    public MoveAni:Array<egret.Texture>=new Array<egret.Texture>();
    public constructor(){
       super();
       this.MyPhoto=this.createBitmapByName("1_png");
       this.addChild(this.MyPhoto);
       this.LoadAni();
       this.anchorOffsetX=this.MyPhoto.width/2;
       this.anchorOffsetY=this.MyPhoto.height/2;
   }

    private LoadAni() {
        var texture:egret.Texture ;
        for(var i=0; i<playerAni.length; i++) {
             texture= RES.getRes(playerAni[i].name);
             if(playerAni[i].tag==0){this.IdleAni.push(texture); }
             if(playerAni[i].tag==1){this.MoveAni.push(texture); }
        }
    }
    
//不太懂？？
    public PlayAni(Ani:Array<egret.Texture>){

        var count =0;
        var Bit=this.MyPhoto;
        var M=this.Modle;
        //console.log("M:"+M);
        var timer:egret.Timer=new egret.Timer(125, 0);
        timer.addEventListener(egret.TimerEvent.TIMER,Play,this);
        timer.start();

        function Play(){      
            Bit.texture=Ani[count];
            if(count<Ani.length-1) {count++;}
            else{count=0;}    
            if(this.Modle!=M){
                //console.log("tM:"+M+" nowM:"+this.Modle); 
                timer.stop();
            }    
        }   
  
    }

    public Move(Ps:Point[],xx:number,yy:number) {
        var MS:MoveSta=new MoveSta(Ps,this);
        this.MySta.Reload(MS);      
    }
    

    public Idle() {
       var IS:IdleSta=new IdleSta(this);
       this.MySta.Reload(IS);
   }

/**
     * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
     * Create a Bitmap object according to name keyword.As for the property of name please refer to the configuration file of resources/resource.json.
     */
    private createBitmapByName(name:string):egret.Bitmap {
        var result = new egret.Bitmap();
        var texture:egret.Texture = RES.getRes(name);
        result.texture = texture;
        return result;
    }
}

interface  Sta {
    Load();
    exit();
     
}

class MoveSta implements Sta{
    private Tx:number;
    private Ty:number;
    private Player:MyPlayer;
    private timer: egret.Timer;
    private LeastTime:number;
    public Path:Point[];
    public nowNode:number;

    public ArriveListener:egret.Sprite=new egret.Sprite();  //Sprite是一个显示列表节点
   

    constructor(Ps:Point[],Player:MyPlayer){
        this.Path=Ps;
        this.Player=Player;
    }


     Move() {
          
        this.nowNode++;
        if(this.nowNode<this.Path.length){
            var M=this.Player.Modle;     
            this.Tx=this.Path[this.nowNode].x;
            this.Ty=this.Path[this.nowNode].y;
            var xx=this.Tx- this.Player.x;
            var yy=this.Ty- this.Player.y;
            if(xx>0){this.Player.scaleX=1;}else{this.Player.scaleX=-1;}
            var zz=Math.pow(xx*xx+yy*yy,0.5);
            var time:number=zz/this.Player.MoveSpeed;
            this.timer = new egret.Timer(50, time);
            this.LeastTime=time;
            this.timer.start();
        
            this.timer.addEventListener(egret.TimerEvent.TIMER,()=>{
                this.Player.x+=xx/time;
                this.Player.y+=yy/time;
                this.LeastTime--;
                if( this.LeastTime<1) {
                    this.timer.stop();
                    if(this.LeastTime>-10) { 
                    this.Move();
                    //  var IFW:FinishWalkEvent=new FinishWalkEvent(FinishWalkEvent.FW);
                    //   this.ArriveListener.dispatchEvent(IFW);
                    }//意味着是走停不是逼停
                }
            }, this);
        }else {
            this.Player.Idle();
            return;
        }
    }

    Load() {
        if(this.Path.length>1)
        this.nowNode=1;
        else this.nowNode=0;
        this.Player.Modle++;
        this.Player.PlayAni(this.Player.MoveAni);
        this.Move();
    }

    exit() {
        this.LeastTime=-10;
    }
}

class IdleSta implements Sta{
      private Player:MyPlayer;
      constructor(Player:MyPlayer){  
        this.Player=Player;
    }  
    Load() {
        this.Player.Modle++;
        this.Player.nowState=0;
        this.Player.PlayAni(this.Player.IdleAni);
    }
    exit() {
        console.log("exitIdle");
    }

}
 class StaMac {
     private nowSta:Sta;
     
     public Reload(S:Sta):void{
         if(this.nowSta){this.nowSta.exit();}  
        this.nowSta=S;
        this.nowSta.Load();
     }
}




class Main extends egret.DisplayObjectContainer {

    /**
     * 加载进度界面
     * Process interface loading
     */
    private loadingView:LoadingUI;
    private Player:MyPlayer;
    private BgMap:Grid=new Grid();

    public constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }

    private onAddToStage(event:egret.Event) {
        //设置加载进度界面
        //Config to load process interface
        this.loadingView = new LoadingUI();
        this.stage.addChild(this.loadingView);

        //初始化Resource资源加载库
        //initiate Resource loading library
        RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.loadConfig("resource/default.res.json", "resource/");
    }

    /**
     * 配置文件加载完成,开始预加载preload资源组。
     * configuration file loading is completed, start to pre-load the preload resource group
     */
    private onConfigComplete(event:RES.ResourceEvent):void {
        RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
        RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onItemLoadError, this);
        RES.loadGroup("preload");
    }

    /**
     * preload资源组加载完成
     * Preload resource group is loaded
     */
    private onResourceLoadComplete(event:RES.ResourceEvent):void {
        if (event.groupName == "preload") {
            this.stage.removeChild(this.loadingView);
            RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
            RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onItemLoadError, this);
            this.createGameScene();
        }
    }

    /**
     * 资源组加载出错
     *  The resource group loading failed
     */
    private onItemLoadError(event:RES.ResourceEvent):void {
        console.warn("Url:" + event.resItem.url + " has failed to load");
    }

    /**
     * 资源组加载出错
     *  The resource group loading failed
     */
    private onResourceLoadError(event:RES.ResourceEvent):void {
        //TODO
        console.warn("Group:" + event.groupName + " has failed to load");
        //忽略加载失败的项目
        //Ignore the loading failed projects
        this.onResourceLoadComplete(event);
    }

    /**
     * preload资源组加载进度
     * Loading process of preload resource group
     */
    private onResourceProgress(event:RES.ResourceEvent):void {
        if (event.groupName == "preload") {
            this.loadingView.setProgress(event.itemsLoaded, event.itemsTotal);
        }
    }

    private textfield:egret.TextField;

    /**
     * 创建游戏场景
     * Create a game scene
     */
    private createGameScene():void {
        var bg:egret.Bitmap = this.createBitmapByName("Sky_jpeg");
        this.addChild(bg);
        var stageW:number = this.stage.stageWidth;
        var stageH:number = this.stage.stageHeight;
        bg.width = stageW;
        bg.height = stageH;

        this.BgMap = new Grid();
        this.Player = new MyPlayer();
        printMap(this.BgMap);
        this.addChild(this.BgMap);

        this.addChild(this.Player);
        this.Player.x= this.Player.y=20;
        this.Player.Idle();
        this.touchEnabled=true;
        this.addEventListener(egret.TouchEvent.TOUCH_TAP,this.Click,this);
    }

    private Click(evt:egret.TouchEvent):void {   
        var sp:Point=new Point();
        var ep:Point=new Point();
        sp.x=this.Player.x;
        sp.y=this.Player.y;
        ep.x=evt.stageX;
        ep.y=evt.stageY;
        var As=new Astar(sp,ep);
        this.Player.Move(As.Ps,10,10);  //?????
        //this.Player.Move(As.Ps);  
    }






    /**
     * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
     * Create a Bitmap object according to name keyword.As for the property of name please refer to the configuration file of resources/resource.json.
     */
    private createBitmapByName(name:string):egret.Bitmap {
        var result = new egret.Bitmap();
        var texture:egret.Texture = RES.getRes(name);
        result.texture = texture;
        return result;
    }

    /**
     * 描述文件加载成功，开始播放动画
     * Description file loading is successful, start to play the animation
     */
    //////////////////////////////////////////////////////////////////////////
    /*
    private startAnimation(result:Array<any>):void {
        var self:any = this;

        var parser = new egret.HtmlTextParser();
        var textflowArr:Array<Array<egret.ITextElement>> = [];
        for (var i:number = 0; i < result.length; i++) {
            textflowArr.push(parser.parser(result[i]));
        }

        var textfield = self.textfield;
        var count = -1;
        var change:Function = function () {
            count++;
            if (count >= textflowArr.length) {
                count = 0;
            }
            var lineArr = textflowArr[count];

            self.changeDescription(textfield, lineArr);

            var tw = egret.Tween.get(textfield);
            tw.to({"alpha": 1}, 200);
            tw.wait(2000);
            tw.to({"alpha": 0}, 200);
            tw.call(change, self);
        };

        change();
    }

    */
    //////////////////////////////////////////////////////////////////////


    /**
     * 切换描述内容
     * Switch to described content
     */
    private changeDescription(textfield:egret.TextField, textFlow:Array<egret.ITextElement>):void {
        textfield.textFlow = textFlow;
    }
}


class FinishWalkEvent extends egret.Event
{
    public static FW:string = "Finished";
    public constructor(type:string, bubbles:boolean=false, cancelable:boolean=false)
    {
        super(type,bubbles,cancelable);
    }
}
