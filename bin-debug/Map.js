// TypeScript file
var grid = [
    { x: 0, y: 0, walkable: true, img: "Bg_01_png" },
    { x: 1, y: 0, walkable: true, img: "Bg_02_png" },
    { x: 2, y: 0, walkable: true, img: "Bg_03_png" },
    { x: 3, y: 0, walkable: true, img: "Bg_04_png" },
    { x: 4, y: 0, walkable: true, img: "Bg_05_png" },
    { x: 5, y: 0, walkable: true, img: "Bg_06_png" },
    { x: 6, y: 0, walkable: true, img: "Bg_07_png" },
    { x: 7, y: 0, walkable: true, img: "Bg_08_png" },
    { x: 8, y: 0, walkable: true, img: "Bg_09_png" },
    { x: 9, y: 0, walkable: true, img: "Bg_10_png" },
    { x: 0, y: 1, walkable: true, img: "Bg_11_png" },
    { x: 1, y: 1, walkable: true, img: "Bg_12_png" },
    { x: 2, y: 1, walkable: true, img: "Bg_13_png" },
    { x: 3, y: 1, walkable: true, img: "Bg_14_png" },
    { x: 4, y: 1, walkable: true, img: "Bg_15_png" },
    { x: 5, y: 1, walkable: true, img: "Bg_16_png" },
    { x: 6, y: 1, walkable: true, img: "Bg_17_png" },
    { x: 7, y: 1, walkable: true, img: "Bg_18_png" },
    { x: 8, y: 1, walkable: true, img: "Bg_19_png" },
    { x: 9, y: 1, walkable: true, img: "Bg_20_png" },
    { x: 0, y: 2, walkable: true, img: "Bg_21_png" },
    { x: 1, y: 2, walkable: true, img: "Bg_22_png" },
    { x: 2, y: 2, walkable: false, img: "Bg_23_png" },
    { x: 3, y: 2, walkable: true, img: "Bg_24_png" },
    { x: 4, y: 2, walkable: true, img: "Bg_25_png" },
    { x: 5, y: 2, walkable: true, img: "Bg_26_png" },
    { x: 6, y: 2, walkable: true, img: "Bg_27_png" },
    { x: 7, y: 2, walkable: true, img: "Bg_28_png" },
    { x: 8, y: 2, walkable: true, img: "Bg_29_png" },
    { x: 9, y: 2, walkable: true, img: "Bg_30_png" },
    { x: 0, y: 3, walkable: true, img: "Bg_31_png" },
    { x: 1, y: 3, walkable: true, img: "Bg_32_png" },
    { x: 2, y: 3, walkable: false, img: "Bg_33_png" },
    { x: 3, y: 3, walkable: false, img: "Bg_34_png" },
    { x: 4, y: 3, walkable: false, img: "Bg_35_png" },
    { x: 5, y: 3, walkable: false, img: "Bg_36_png" },
    { x: 6, y: 3, walkable: false, img: "Bg_37_png" },
    { x: 7, y: 3, walkable: false, img: "Bg_38_png" },
    { x: 8, y: 3, walkable: false, img: "Bg_39_png" },
    { x: 9, y: 3, walkable: true, img: "Bg_40_png" },
    { x: 0, y: 4, walkable: true, img: "Bg_41_png" },
    { x: 1, y: 4, walkable: true, img: "Bg_42_png" },
    { x: 2, y: 4, walkable: true, img: "Bg_43_png" },
    { x: 3, y: 4, walkable: true, img: "Bg_44_png" },
    { x: 4, y: 4, walkable: true, img: "Bg_45_png" },
    { x: 5, y: 4, walkable: true, img: "Bg_46_png" },
    { x: 6, y: 4, walkable: true, img: "Bg_47_png" },
    { x: 7, y: 4, walkable: true, img: "Bg_48_png" },
    { x: 8, y: 4, walkable: true, img: "Bg_49_png" },
    { x: 9, y: 4, walkable: true, img: "Bg_50_png" },
    { x: 0, y: 5, walkable: true, img: "Bg_51_png" },
    { x: 1, y: 5, walkable: true, img: "Bg_52_png" },
    { x: 2, y: 5, walkable: true, img: "Bg_53_png" },
    { x: 3, y: 5, walkable: true, img: "Bg_54_png" },
    { x: 4, y: 5, walkable: true, img: "Bg_55_png" },
    { x: 5, y: 5, walkable: true, img: "Bg_56_png" },
    { x: 6, y: 5, walkable: true, img: "Bg_57_png" },
    { x: 7, y: 5, walkable: true, img: "Bg_58_png" },
    { x: 8, y: 5, walkable: true, img: "Bg_59_png" },
    { x: 9, y: 5, walkable: true, img: "Bg_60_png" },
    { x: 0, y: 6, walkable: false, img: "Bg_61_png" },
    { x: 1, y: 6, walkable: true, img: "Bg_62_png" },
    { x: 2, y: 6, walkable: true, img: "Bg_63_png" },
    { x: 3, y: 6, walkable: true, img: "Bg_64_png" },
    { x: 4, y: 6, walkable: true, img: "Bg_65_png" },
    { x: 5, y: 6, walkable: true, img: "Bg_66_png" },
    { x: 6, y: 6, walkable: true, img: "Bg_67_png" },
    { x: 7, y: 6, walkable: true, img: "Bg_68_png" },
    { x: 8, y: 6, walkable: true, img: "Bg_69_png" },
    { x: 9, y: 6, walkable: true, img: "Bg_70_png" },
    { x: 0, y: 7, walkable: false, img: "Bg_71_png" },
    { x: 1, y: 7, walkable: false, img: "Bg_72_png" },
    { x: 2, y: 7, walkable: false, img: "Bg_73_png" },
    { x: 3, y: 7, walkable: false, img: "Bg_74_png" },
    { x: 4, y: 7, walkable: false, img: "Bg_75_png" },
    { x: 5, y: 7, walkable: true, img: "Bg_76_png" },
    { x: 6, y: 7, walkable: true, img: "Bg_77_png" },
    { x: 7, y: 7, walkable: true, img: "Bg_78_png" },
    { x: 8, y: 7, walkable: true, img: "Bg_79_png" },
    { x: 9, y: 7, walkable: true, img: "Bg_80_png" },
    { x: 0, y: 8, walkable: true, img: "Bg_81_png" },
    { x: 1, y: 8, walkable: true, img: "Bg_82_png" },
    { x: 2, y: 8, walkable: true, img: "Bg_83_png" },
    { x: 3, y: 8, walkable: true, img: "Bg_84_png" },
    { x: 4, y: 8, walkable: false, img: "Bg_85_png" },
    { x: 5, y: 8, walkable: false, img: "Bg_86_png" },
    { x: 6, y: 8, walkable: true, img: "Bg_87_png" },
    { x: 7, y: 8, walkable: true, img: "Bg_88_png" },
    { x: 8, y: 8, walkable: true, img: "Bg_89_png" },
    { x: 9, y: 8, walkable: true, img: "Bg_90_png" },
    { x: 0, y: 9, walkable: true, img: "Bg_91_png" },
    { x: 1, y: 9, walkable: true, img: "Bg_92_png" },
    { x: 2, y: 9, walkable: true, img: "Bg_93_png" },
    { x: 3, y: 9, walkable: false, img: "Bg_94_png" },
    { x: 4, y: 9, walkable: true, img: "Bg_95_png" },
    { x: 5, y: 9, walkable: true, img: "Bg_96_png" },
    { x: 6, y: 9, walkable: true, img: "Bg_97_png" },
    { x: 7, y: 9, walkable: true, img: "Bg_98_png" },
    { x: 8, y: 9, walkable: true, img: "Bg_99_png" },
    { x: 9, y: 9, walkable: true, img: "Bg_100_png" },
    { x: 0, y: 10, walkable: true, img: "Bg_101_png" },
    { x: 1, y: 10, walkable: true, img: "Bg_102_png" },
    { x: 2, y: 10, walkable: true, img: "Bg_103_png" },
    { x: 3, y: 10, walkable: true, img: "Bg_104_png" },
    { x: 4, y: 10, walkable: true, img: "Bg_105_png" },
    { x: 5, y: 10, walkable: true, img: "Bg_106_png" },
    { x: 6, y: 10, walkable: true, img: "Bg_107_png" },
    { x: 7, y: 10, walkable: true, img: "Bg_108_png" },
    { x: 8, y: 10, walkable: true, img: "Bg_109_png" },
    { x: 9, y: 10, walkable: true, img: "Bg_110_png" },
    { x: 0, y: 11, walkable: true, img: "Bg_111_png" },
    { x: 1, y: 11, walkable: true, img: "Bg_112_png" },
    { x: 2, y: 11, walkable: true, img: "Bg_113_png" },
    { x: 3, y: 11, walkable: true, img: "Bg_114_png" },
    { x: 4, y: 11, walkable: false, img: "Bg_115_png" },
    { x: 5, y: 11, walkable: false, img: "Bg_116_png" },
    { x: 6, y: 11, walkable: false, img: "Bg_117_png" },
    { x: 7, y: 11, walkable: false, img: "Bg_118_png" },
    { x: 8, y: 11, walkable: true, img: "Bg_119_png" },
    { x: 9, y: 11, walkable: true, img: "Bg_120_png" },
    { x: 0, y: 12, walkable: true, img: "Bg_121_png" },
    { x: 1, y: 12, walkable: true, img: "Bg_122_png" },
    { x: 2, y: 12, walkable: true, img: "Bg_123_png" },
    { x: 3, y: 12, walkable: true, img: "Bg_124_png" },
    { x: 4, y: 12, walkable: false, img: "Bg_125_png" },
    { x: 5, y: 12, walkable: false, img: "Bg_126_png" },
    { x: 6, y: 12, walkable: false, img: "Bg_127_png" },
    { x: 7, y: 12, walkable: false, img: "Bg_128_png" },
    { x: 8, y: 12, walkable: true, img: "Bg_129_png" },
    { x: 9, y: 12, walkable: true, img: "Bg_130_png" },
    { x: 0, y: 13, walkable: true, img: "Bg_131_png" },
    { x: 1, y: 13, walkable: true, img: "Bg_132_png" },
    { x: 2, y: 13, walkable: true, img: "Bg_133_png" },
    { x: 3, y: 13, walkable: true, img: "Bg_134_png" },
    { x: 4, y: 13, walkable: false, img: "Bg_135_png" },
    { x: 5, y: 13, walkable: false, img: "Bg_136_png" },
    { x: 6, y: 13, walkable: false, img: "Bg_137_png" },
    { x: 7, y: 13, walkable: true, img: "Bg_138_png" },
    { x: 8, y: 13, walkable: true, img: "Bg_139_png" },
    { x: 9, y: 13, walkable: true, img: "Bg_140_png" },
    { x: 0, y: 14, walkable: true, img: "Bg_141_png" },
    { x: 1, y: 14, walkable: false, img: "Bg_142_png" },
    { x: 2, y: 14, walkable: false, img: "Bg_143_png" },
    { x: 3, y: 14, walkable: true, img: "Bg_144_png" },
    { x: 4, y: 14, walkable: true, img: "Bg_145_png" },
    { x: 5, y: 14, walkable: true, img: "Bg_146_png" },
    { x: 6, y: 14, walkable: true, img: "Bg_147_png" },
    { x: 7, y: 14, walkable: true, img: "Bg_148_png" },
    { x: 8, y: 14, walkable: true, img: "Bg_149_png" },
    { x: 9, y: 14, walkable: true, img: "Bg_150_png" },
    { x: 0, y: 15, walkable: true, img: "Bg_151_png" },
    { x: 1, y: 15, walkable: false, img: "Bg_152_png" },
    { x: 2, y: 15, walkable: false, img: "Bg_153_png" },
    { x: 3, y: 15, walkable: true, img: "Bg_154_png" },
    { x: 4, y: 15, walkable: true, img: "Bg_155_png" },
    { x: 5, y: 15, walkable: true, img: "Bg_156_png" },
    { x: 6, y: 15, walkable: true, img: "Bg_157_png" },
    { x: 7, y: 15, walkable: true, img: "Bg_158_png" },
    { x: 8, y: 15, walkable: true, img: "Bg_159_png" },
    { x: 9, y: 15, walkable: true, img: "Bg_160_png" },
    { x: 0, y: 16, walkable: true, img: "Bg_161_png" },
    { x: 1, y: 16, walkable: true, img: "Bg_162_png" },
    { x: 2, y: 16, walkable: true, img: "Bg_163_png" },
    { x: 3, y: 16, walkable: true, img: "Bg_164_png" },
    { x: 4, y: 16, walkable: true, img: "Bg_165_png" },
    { x: 5, y: 16, walkable: true, img: "Bg_166_png" },
    { x: 6, y: 16, walkable: true, img: "Bg_167_png" },
    { x: 7, y: 16, walkable: true, img: "Bg_168_png" },
    { x: 8, y: 16, walkable: true, img: "Bg_169_png" },
    { x: 9, y: 16, walkable: true, img: "Bg_170_png" },
    { x: 0, y: 17, walkable: true, img: "Bg_171_png" },
    { x: 1, y: 17, walkable: true, img: "Bg_172_png" },
    { x: 2, y: 17, walkable: true, img: "Bg_173_png" },
    { x: 3, y: 17, walkable: true, img: "Bg_174_png" },
    { x: 4, y: 17, walkable: true, img: "Bg_175_png" },
    { x: 5, y: 17, walkable: true, img: "Bg_176_png" },
    { x: 6, y: 17, walkable: true, img: "Bg_177_png" },
    { x: 7, y: 17, walkable: true, img: "Bg_178_png" },
    { x: 8, y: 17, walkable: true, img: "Bg_179_png" },
    { x: 9, y: 17, walkable: true, img: "Bg_180_png" },
];
var Grid = (function (_super) {
    __extends(Grid, _super);
    function Grid() {
        _super.call(this);
        this.onePSize = 64;
        this.ArrayGrid = [];
        this.W = 10;
        this.H = 17;
        this.Load();
    }
    var d = __define,c=Grid,p=c.prototype;
    p.createBitmapByName = function (name) {
        var result = new egret.Bitmap();
        var texture = RES.getRes(name);
        result.texture = texture;
        return result;
    };
    p.Load = function () {
        for (var i = 0; i < grid.length; i++) {
            var OneP = new One();
            OneP.x = grid[i].x;
            OneP.y = grid[i].y;
            OneP.x = grid[i].x * 64;
            OneP.y = grid[i].y * 64;
            OneP.walkable = grid[i].walkable;
            var map = this.createBitmapByName(grid[i].img);
            this.ArrayGrid.push(OneP);
            OneP.addChild(map);
            this.addChild(OneP);
        }
    };
    return Grid;
}(egret.DisplayObjectContainer));
egret.registerClass(Grid,'Grid');
var Point = (function () {
    function Point() {
    }
    var d = __define,c=Point,p=c.prototype;
    return Point;
}());
egret.registerClass(Point,'Point');
function printMap(gg) {
    var x = "";
    var i = 0, j = 0, k = 0;
    for (; j < gg.H; j++) {
        x = "";
        for (i = 0; i < gg.W; i++) {
            if (gg.ArrayGrid[k].walkable == true)
                x = x + "口";
            else {
                x = x + "国";
            }
            k++;
        }
        console.log(x);
    }
}
var One = (function (_super) {
    __extends(One, _super);
    function One() {
        _super.apply(this, arguments);
    }
    var d = __define,c=One,p=c.prototype;
    return One;
}(egret.DisplayObjectContainer));
egret.registerClass(One,'One');
var AStarP = (function () {
    function AStarP() {
        this.point = new Point();
    }
    var d = __define,c=AStarP,p=c.prototype;
    return AStarP;
}());
egret.registerClass(AStarP,'AStarP');
var Astar = (function () {
    function Astar(sp, np) {
        this.EndP = new AStarP();
        this.nowP = new AStarP();
        this.Ps = [];
        this.O = [];
        this.C = [];
        this.EndNcanW = true;
        this.IsOk = false;
        this.u = 0;
        this.Ps = [];
        this.O = [];
        this.C = [];
        this.EndP.point.x = Math.floor(np.x / 64); //取整
        this.EndP.point.y = Math.floor(np.y / 64);
        this.nowP.point.x = Math.floor(sp.x / 64);
        this.nowP.point.y = Math.floor(sp.y / 64);
        this.nowP.g = 0;
        this.nowP.frontG = this.nowP;
        this.sh(this.nowP); //计算h和f
        this.sf(this.nowP);
        this.O.push(this.nowP); //O表，开放列表
        if (this.isF(this.EndP)) {
            this.EndNcanW = false;
        }
        if (this.nowP.point.x == this.EndP.point.x && this.nowP.point.y == this.EndP.point.y) {
            this.IsOk = true;
            this.EndP.frontG = this.nowP;
        }
        var t = 0;
        do {
            this.nowP = this.getP();
            this.searchSur(this.nowP);
            this.C.push(this.nowP);
            t++;
            if (this.O.length <= 0 || this.IsOk) {
                break;
            }
        } while (this.EndNcanW);
        var reversePath = [];
        if (this.EndNcanW) {
            reversePath.push(this.EndP);
        }
        do {
            reversePath.push(this.nowP);
            //翻转完，break，跳出do的循环
            if (this.nowP.frontG.point.x == this.nowP.point.x && this.nowP.frontG.point.y == this.nowP.point.y) {
                break;
            }
            this.nowP = this.nowP.frontG;
        } while (this.EndNcanW);
        var j = 0;
        for (var i = reversePath.length; i > 0; i--) {
            var op = new Point();
            op.x = reversePath[i - 1].point.x;
            op.y = reversePath[i - 1].point.y;
            this.Ps.push(op);
            this.Ps[j].x = this.Ps[j].x * 64;
            this.Ps[j].y = this.Ps[j].y * 64;
            j++;
        }
    }
    var d = __define,c=Astar,p=c.prototype;
    p.searchSur = function (n) {
        this.AddNtoO(n, n.point.x - 1, n.point.y - 1);
        this.AddNtoO(n, n.point.x, n.point.y - 1);
        this.AddNtoO(n, n.point.x + 1, n.point.y - 1);
        this.AddNtoO(n, n.point.x - 1, n.point.y);
        this.AddNtoO(n, n.point.x + 1, n.point.y);
        this.AddNtoO(n, n.point.x - 1, n.point.y + 1);
        this.AddNtoO(n, n.point.x, n.point.y + 1);
        this.AddNtoO(n, n.point.x + 1, n.point.y + 1);
    };
    p.AddNtoO = function (fn, x, y) {
        if (x < 0 || y < 0 || x >= 10 || y >= 18) {
            return;
        }
        var n = new AStarP();
        n.point.x = x;
        n.point.y = y;
        if (this.IsinC(n) || this.isF(n) || this.IsinO(n)) {
            return;
        }
        else {
            n.frontG = fn;
            this.sg(n);
            this.sh(n);
            this.sf(n);
            this.O.push(n);
            this.u++;
            if (this.EndP.point.x == n.point.x && this.EndP.point.y == n.point.y) {
                this.IsOk = true;
            }
        }
    };
    p.IsinO = function (n) {
        for (var i = 0; i < this.O.length; i++) {
            if (n.point.x == this.O[i].point.x && n.point.y == this.O[i].point.y)
                return true;
        }
        return false;
    };
    p.IsinC = function (n) {
        for (var i = 0; i < this.C.length; i++) {
            if (n.point.x == this.C[i].point.x && n.point.y == this.C[i].point.y)
                return true;
        }
        return false;
    };
    p.isF = function (n) {
        for (var i = 0; i < grid.length; i++) {
            if (n.point.x == grid[i].x && n.point.y == grid[i].y && grid[i].walkable == false) {
                return true;
            }
        }
        return false;
    };
    p.sh = function (n) {
        var xx = Math.max(n.point.x, this.EndP.point.x) - Math.min(n.point.x, this.EndP.point.x);
        var yy = Math.max(n.point.y, this.EndP.point.y) - Math.min(n.point.y, this.EndP.point.y);
        n.h = xx + yy;
    };
    p.sg = function (n) {
        if (n.point.x != n.frontG.point.x && n.point.y != n.frontG.point.y) {
            n.g = n.frontG.g + 1.4;
        }
        else {
            n.g = n.frontG.g + 1;
        }
    };
    p.sf = function (n) {
        n.f = n.g + n.h;
    };
    p.getP = function () {
        var gn;
        var gf = 999;
        var k;
        for (var i = 0; i < this.O.length; i++) {
            if (this.O[i].f < gf) {
                gf = this.O[i].f;
                k = i;
            }
        }
        gn = this.O[k];
        this.O[k] = this.O[0];
        this.O[0] = gn;
        return this.O.shift();
    };
    return Astar;
}());
egret.registerClass(Astar,'Astar');
//# sourceMappingURL=Map.js.map