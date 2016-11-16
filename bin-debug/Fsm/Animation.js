var doAnimation = (function () {
    function doAnimation() {
    }
    var d = __define,c=doAnimation,p=c.prototype;
    p.Animate = function (bit, curAnimation) {
        this.curAnimation = curAnimation;
        var frame = 0;
        var animateFrame = 0;
        if (this.onTick != null) {
            egret.Ticker.getInstance().unregister(this.onTick, this);
        }
        this.onTick = function () {
            if (frame % 4 == 0) {
                bit.texture = RES.getRes(curAnimation[animateFrame]);
                animateFrame++;
                if (animateFrame >= curAnimation.length) {
                    animateFrame = 0;
                }
            }
            // bit.texture = RES.getRes(curAnimation[frame]);
            frame++;
            if (frame >= curAnimation.length) {
                frame = 0;
            }
        };
        egret.Ticker.getInstance().register(this.onTick, this);
    };
    return doAnimation;
}());
egret.registerClass(doAnimation,'doAnimation');
var animationList = (function () {
    function animationList() {
        this.animate_Idle_Front_string = ["idle_front_001_png", "idle_front_002_png", "idle_front_003_png",
            "idle_front_004_png", "idle_front_005_png", "idle_front_006_png",
            "idle_front_007_png", "idle_front_008_png", "idle_front_009_png",
            "idle_front_010_png", "idle_front_011_png", "idle_front_012_png",
            "idle_front_013_png", "idle_front_014_png", "idle_front_015_png"
        ];
        this.animate_Idle_Right = ["idle_right_001_png", "idle_right_002_png", "idle_right_003_png",
            "idle_right_004_png", "idle_right_005_png", "idle_right_006_png",
            "idle_right_007_png", "idle_right_008_png", "idle_right_009_png",
            "idle_right_010_png", "idle_right_011_png", "idle_right_012_png",
            "idle_right_013_png", "idle_right_014_png", "idle_right_015_png"
        ];
        this.animate_Run_Right = ["run_right_001_png", "run_right_002_png", "run_right_003_png",
            "run_right_004_png", "run_right_005_png", "run_right_006_png",
            "run_right_007_png", "run_right_008_png", "run_right_009_png",
            "run_right_010_png", "run_right_011_png", "run_right_012_png",
            "run_right_013_png", "run_right_014_png", "run_right_015_png",
            "run_right_016_png", "run_right_017_png", "run_right_018_png"
        ];
        this.animate_Run_Left = ["run_left_001_png", "run_left_002_png", "run_left_003_png",
            "run_left_004_png", "run_left_005_png", "run_left_006_png",
            "run_left_007_png", "run_left_008_png", "run_left_009_png",
            "run_left_010_png", "run_left_011_png", "run_left_012_png",
            "run_left_013_png", "run_left_014_png", "run_left_015_png",
            "run_left_016_png", "run_left_017_png", "run_left_018_png"
        ];
        this.animate_Run_Front = ["run_front_001_png", "run_front_002_png", "run_front_003_png",
            "run_front_004_png", "run_front_005_png", "run_front_006_png",
            "run_front_007_png", "run_front_008_png", "run_front_009_png",
            "run_front_010_png", "run_front_011_png", "run_front_012_png",
            "run_front_013_png", "run_front_014_png", "run_front_015_png",
            "run_front_016_png", "run_front_017_png", "run_front_018_png"
        ];
        this.animate_Run_Back = ["run_back_001_png", "run_back_002_png", "run_back_003_png",
            "run_back_004_png", "run_back_005_png", "run_back_006_png",
            "run_back_007_png", "run_back_008_png", "run_back_009_png",
            "run_back_010_png", "run_back_011_png", "run_back_012_png",
            "run_back_013_png", "run_back_014_png", "run_back_015_png",
            "run_back_016_png", "run_back_017_png", "run_back_018_png"
        ];
        this.animate_Npc_Beauty_Idle = ["Npc_Beauty_00001_png", "Npc_Beauty_00002_png", "Npc_Beauty_00003_png",
            "Npc_Beauty_00004_png", "Npc_Beauty_00005_png", "Npc_Beauty_00006_png",
            "Npc_Beauty_00007_png", "Npc_Beauty_00008_png", "Npc_Beauty_00009_png",
            "Npc_Beauty_00010_png", "Npc_Beauty_00011_png", "Npc_Beauty_00012_png",
            "Npc_Beauty_00013_png", "Npc_Beauty_00014_png", "Npc_Beauty_00015_png",
            "Npc_Beauty_00016_png", "Npc_Beauty_00017_png", "Npc_Beauty_00018_png",
            "Npc_Beauty_00019_png", "Npc_Beauty_00020_png"
        ];
    }
    var d = __define,c=animationList,p=c.prototype;
    return animationList;
}());
egret.registerClass(animationList,'animationList');
//# sourceMappingURL=Animation.js.map