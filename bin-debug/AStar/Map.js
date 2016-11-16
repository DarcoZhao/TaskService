var TileMap = (function (_super) {
    __extends(TileMap, _super);
    function TileMap(player) {
        _super.call(this);
        this.size = 2;
        this.TextruesSize = 64;
        this.tileArray = new Array();
        this.numCols = 10;
        this.numRows = 15;
        this.grid = new Grid(this.numCols, this.numRows);
        this.init();
        this._player = player;
    }
    var d = __define,c=TileMap,p=c.prototype;
    p.init = function () {
        var config = [
            //1
            { x: 0, y: 0, walkable: true, pictureName: "Grid_Road_jpg", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 1, y: 0, walkable: true, pictureName: "Grid_Road_jpg", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 2, y: 0, walkable: true, pictureName: "Grid_Road_jpg", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 3, y: 0, walkable: true, pictureName: "Grid_Road_jpg", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 4, y: 0, walkable: true, pictureName: "Grid_Road_jpg", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 5, y: 0, walkable: true, pictureName: "Grid_Road_jpg", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 6, y: 0, walkable: true, pictureName: "Grid_Road_jpg", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 7, y: 0, walkable: true, pictureName: "Grid_Road_jpg", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 8, y: 0, walkable: true, pictureName: "Grid_Road_jpg", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 9, y: 0, walkable: true, pictureName: "Grid_Road_jpg", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            // { x: 10, y: 0, walkable: true, pictureName: "Grid_Road_jpg", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            //2
            { x: 0, y: 1, walkable: false, pictureName: "Grid_Grass_jpg", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 1, y: 1, walkable: false, pictureName: "Grid_Grass_jpg", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 2, y: 1, walkable: true, pictureName: "Grid_Road_jpg", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 3, y: 1, walkable: true, pictureName: "Grid_Road_jpg", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 4, y: 1, walkable: false, pictureName: "Grid_Grass_jpg", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 5, y: 1, walkable: false, pictureName: "Grid_Grass_jpg", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 6, y: 1, walkable: true, pictureName: "Grid_Road_jpg", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 7, y: 1, walkable: true, pictureName: "Grid_Road_jpg", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 8, y: 1, walkable: false, pictureName: "Grid_Grass_jpg", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 9, y: 1, walkable: false, pictureName: "Grid_Grass_jpg", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            // { x: 10, y: 1, walkable: false, pictureName: "Grid_Grass_jpg", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            //3
            { x: 0, y: 2, walkable: false, pictureName: "Grid_Grass_jpg", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 1, y: 2, walkable: false, pictureName: "Grid_Grass_jpg", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 2, y: 2, walkable: false, pictureName: "Grid_Grass_jpg", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 3, y: 2, walkable: true, pictureName: "Grid_Road_jpg", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 4, y: 2, walkable: true, pictureName: "Grid_Road_jpg", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 5, y: 2, walkable: true, pictureName: "Grid_Road_jpg", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 6, y: 2, walkable: true, pictureName: "Grid_Road_jpg", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 7, y: 2, walkable: false, pictureName: "Grid_Grass_jpg", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 8, y: 2, walkable: false, pictureName: "Grid_Grass_jpg", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 9, y: 2, walkable: false, pictureName: "Grid_Grass_jpg", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            // { x: 10, y: 2, walkable: false, pictureName: "Grid_Grass_jpg", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            //4
            { x: 0, y: 3, walkable: false, pictureName: "Grid_Grass_jpg", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 1, y: 3, walkable: false, pictureName: "Grid_Grass_jpg", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 2, y: 3, walkable: false, pictureName: "Grid_Grass_jpg", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 3, y: 3, walkable: true, pictureName: "Grid_Road_jpg", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 4, y: 3, walkable: true, pictureName: "Grid_Road_jpg", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 5, y: 3, walkable: true, pictureName: "Grid_Road_jpg", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 6, y: 3, walkable: true, pictureName: "Grid_Road_jpg", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 7, y: 3, walkable: false, pictureName: "Grid_Grass_jpg", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 8, y: 3, walkable: false, pictureName: "Grid_Grass_jpg", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 9, y: 3, walkable: false, pictureName: "Grid_Grass_jpg", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            // { x: 10, y: 3, walkable: false, pictureName: "Grid_Grass_jpg", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            //5
            { x: 0, y: 4, walkable: true, pictureName: "Grid_Road_jpg", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 1, y: 4, walkable: true, pictureName: "Grid_Road_jpg", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 2, y: 4, walkable: true, pictureName: "Grid_Road_jpg", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 3, y: 4, walkable: true, pictureName: "Grid_Road_jpg", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 4, y: 4, walkable: true, pictureName: "Grid_Road_jpg", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 5, y: 4, walkable: true, pictureName: "Grid_Road_jpg", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 6, y: 4, walkable: true, pictureName: "Grid_Road_jpg", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 7, y: 4, walkable: true, pictureName: "Grid_Road_jpg", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 8, y: 4, walkable: true, pictureName: "Grid_Road_jpg", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 9, y: 4, walkable: true, pictureName: "Grid_Road_jpg", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            // { x: 10, y: 4, walkable: true, pictureName: "Grid_Road_jpg", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            //6
            { x: 0, y: 5, walkable: false, pictureName: "Grid_Grass_jpg", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 1, y: 5, walkable: false, pictureName: "Grid_Grass_jpg", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 2, y: 5, walkable: true, pictureName: "Grid_Road_jpg", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 3, y: 5, walkable: true, pictureName: "Grid_Road_jpg", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 4, y: 5, walkable: false, pictureName: "Grid_Grass_jpg", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 5, y: 5, walkable: false, pictureName: "Grid_Grass_jpg", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 6, y: 5, walkable: true, pictureName: "Grid_Road_jpg", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 7, y: 5, walkable: true, pictureName: "Grid_Road_jpg", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 8, y: 5, walkable: false, pictureName: "Grid_Grass_jpg", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 9, y: 5, walkable: false, pictureName: "Grid_Grass_jpg", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            // { x: 10, y: 5, walkable: false, pictureName: "Grid_Grass_jpg", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            //7
            { x: 0, y: 6, walkable: true, pictureName: "Grid_Road_jpg", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 1, y: 6, walkable: true, pictureName: "Grid_Road_jpg", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 2, y: 6, walkable: true, pictureName: "Grid_Road_jpg", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 3, y: 6, walkable: true, pictureName: "Grid_Road_jpg", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 4, y: 6, walkable: true, pictureName: "Grid_Road_jpg", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 5, y: 6, walkable: true, pictureName: "Grid_Road_jpg", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 6, y: 6, walkable: true, pictureName: "Grid_Road_jpg", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 7, y: 6, walkable: true, pictureName: "Grid_Road_jpg", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 8, y: 6, walkable: true, pictureName: "Grid_Road_jpg", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 9, y: 6, walkable: true, pictureName: "Grid_Road_jpg", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            // { x: 10, y: 6, walkable: true, pictureName: "Grid_Road_jpg", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            //8
            { x: 0, y: 7, walkable: false, pictureName: "Grid_Grass_jpg", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 1, y: 7, walkable: false, pictureName: "Grid_Grass_jpg", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 2, y: 7, walkable: false, pictureName: "Grid_Grass_jpg", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 3, y: 7, walkable: true, pictureName: "Grid_Road_jpg", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 4, y: 7, walkable: true, pictureName: "Grid_Road_jpg", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 5, y: 7, walkable: true, pictureName: "Grid_Road_jpg", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 6, y: 7, walkable: true, pictureName: "Grid_Road_jpg", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 7, y: 7, walkable: false, pictureName: "Grid_Grass_jpg", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 8, y: 7, walkable: false, pictureName: "Grid_Grass_jpg", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 9, y: 7, walkable: false, pictureName: "Grid_Grass_jpg", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            // { x: 10, y: 7, walkable: false, pictureName: "Grid_Grass_jpg", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            //9
            { x: 0, y: 8, walkable: true, pictureName: "Grid_Road_jpg", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 1, y: 8, walkable: true, pictureName: "Grid_Road_jpg", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 2, y: 8, walkable: true, pictureName: "Grid_Road_jpg", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 3, y: 8, walkable: true, pictureName: "Grid_Road_jpg", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 4, y: 8, walkable: true, pictureName: "Grid_Road_jpg", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 5, y: 8, walkable: true, pictureName: "Grid_Road_jpg", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 6, y: 8, walkable: true, pictureName: "Grid_Road_jpg", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 7, y: 8, walkable: true, pictureName: "Grid_Road_jpg", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 8, y: 8, walkable: true, pictureName: "Grid_Road_jpg", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 9, y: 8, walkable: true, pictureName: "Grid_Road_jpg", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            // { x: 10, y: 8, walkable: true, pictureName: "Grid_Road_jpg", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            //10
            { x: 0, y: 9, walkable: false, pictureName: "Grid_Grass_jpg", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 1, y: 9, walkable: false, pictureName: "Grid_Grass_jpg", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 2, y: 9, walkable: false, pictureName: "Grid_Grass_jpg", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 3, y: 9, walkable: true, pictureName: "Grid_Road_jpg", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 4, y: 9, walkable: true, pictureName: "Grid_Road_jpg", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 5, y: 9, walkable: true, pictureName: "Grid_Road_jpg", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 6, y: 9, walkable: true, pictureName: "Grid_Road_jpg", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 7, y: 9, walkable: false, pictureName: "Grid_Grass_jpg", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 8, y: 9, walkable: false, pictureName: "Grid_Grass_jpg", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 9, y: 9, walkable: false, pictureName: "Grid_Grass_jpg", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            //11
            { x: 0, y: 10, walkable: false, pictureName: "Grid_Grass_jpg", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 1, y: 10, walkable: false, pictureName: "Grid_Grass_jpg", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 2, y: 10, walkable: false, pictureName: "Grid_Grass_jpg", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 3, y: 10, walkable: true, pictureName: "Grid_Road_jpg", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 4, y: 10, walkable: true, pictureName: "Grid_Road_jpg", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 5, y: 10, walkable: true, pictureName: "Grid_Road_jpg", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 6, y: 10, walkable: true, pictureName: "Grid_Road_jpg", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 7, y: 10, walkable: false, pictureName: "Grid_Grass_jpg", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 8, y: 10, walkable: false, pictureName: "Grid_Grass_jpg", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 9, y: 10, walkable: false, pictureName: "Grid_Grass_jpg", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            //12
            { x: 0, y: 11, walkable: false, pictureName: "Grid_Grass_jpg", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 1, y: 11, walkable: false, pictureName: "Grid_Grass_jpg", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 2, y: 11, walkable: false, pictureName: "Grid_Grass_jpg", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 3, y: 11, walkable: true, pictureName: "Grid_Road_jpg", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 4, y: 11, walkable: true, pictureName: "Grid_Road_jpg", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 5, y: 11, walkable: true, pictureName: "Grid_Road_jpg", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 6, y: 11, walkable: true, pictureName: "Grid_Road_jpg", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 7, y: 11, walkable: false, pictureName: "Grid_Grass_jpg", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 8, y: 11, walkable: false, pictureName: "Grid_Grass_jpg", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 9, y: 11, walkable: false, pictureName: "Grid_Grass_jpg", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            //13
            { x: 0, y: 12, walkable: false, pictureName: "Grid_Grass_jpg", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 1, y: 12, walkable: false, pictureName: "Grid_Grass_jpg", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 2, y: 12, walkable: false, pictureName: "Grid_Grass_jpg", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 3, y: 12, walkable: true, pictureName: "Grid_Road_jpg", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 4, y: 12, walkable: true, pictureName: "Grid_Road_jpg", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 5, y: 12, walkable: true, pictureName: "Grid_Road_jpg", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 6, y: 12, walkable: true, pictureName: "Grid_Road_jpg", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 7, y: 12, walkable: false, pictureName: "Grid_Grass_jpg", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 8, y: 12, walkable: false, pictureName: "Grid_Grass_jpg", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 9, y: 12, walkable: false, pictureName: "Grid_Grass_jpg", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            //14
            { x: 0, y: 13, walkable: false, pictureName: "Grid_Grass_jpg", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 1, y: 13, walkable: false, pictureName: "Grid_Grass_jpg", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 2, y: 13, walkable: false, pictureName: "Grid_Grass_jpg", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 3, y: 13, walkable: true, pictureName: "Grid_Road_jpg", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 4, y: 13, walkable: true, pictureName: "Grid_Road_jpg", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 5, y: 13, walkable: true, pictureName: "Grid_Road_jpg", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 6, y: 13, walkable: true, pictureName: "Grid_Road_jpg", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 7, y: 13, walkable: false, pictureName: "Grid_Grass_jpg", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 8, y: 13, walkable: false, pictureName: "Grid_Grass_jpg", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 9, y: 13, walkable: false, pictureName: "Grid_Grass_jpg", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            //15
            { x: 0, y: 14, walkable: false, pictureName: "Grid_Grass_jpg", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 1, y: 14, walkable: false, pictureName: "Grid_Grass_jpg", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 2, y: 14, walkable: false, pictureName: "Grid_Grass_jpg", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 3, y: 14, walkable: true, pictureName: "Grid_Road_jpg", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 4, y: 14, walkable: true, pictureName: "Grid_Road_jpg", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 5, y: 14, walkable: true, pictureName: "Grid_Road_jpg", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 6, y: 14, walkable: true, pictureName: "Grid_Road_jpg", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 7, y: 14, walkable: false, pictureName: "Grid_Grass_jpg", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 8, y: 14, walkable: false, pictureName: "Grid_Grass_jpg", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
            { x: 9, y: 14, walkable: false, pictureName: "Grid_Grass_jpg", f: 0, g: 0, h: 0, costMultiplier: 1.0 },
        ];
        for (var i = 0; i < config.length; i++) {
            var tiledata = config[i];
            var tile = new Tile(tiledata);
            this.addChild(tile);
            tile.x = tiledata.x * 64;
            tile.y = tiledata.y * 64;
            this.grid.setWalkable(tiledata.x, tiledata.y, tiledata.walkable);
        }
    };
    p.getCurGrid = function (playerPos, input) {
        this.inputPos = input;
        this.grid.setStartNode(Math.floor(playerPos.x / this.TextruesSize), Math.floor(playerPos.y / this.TextruesSize));
        this.grid.setEndNode(Math.floor(input.x / this.TextruesSize), Math.floor(input.y / this.TextruesSize));
        this.findPath();
    };
    p.findPath = function () {
        var astar = new AStar();
        if (astar.findPath(this.grid)) {
            this._path = astar.path;
            this._index = 0;
            //console.log(this._path[this._index].x);
            this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
            this.onEnterFrame;
        }
    };
    p.onEnterFrame = function (event) {
        var targetX = this._path[this._index].x * this.TextruesSize + this.TextruesSize / 2;
        var targetY = this._path[this._index].y * this.TextruesSize + this.TextruesSize / 2;
        var dx = targetX - this._player.x;
        var dy = targetY - this._player.y;
        var dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 1) {
            this._index++;
            if (this._index >= this._path.length) {
                this.removeEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
                this._player.onIdle();
            }
        }
        else {
            this._player.onMove(new Vector2(targetX, targetY), this.inputPos);
        }
    };
    return TileMap;
}(egret.DisplayObjectContainer));
egret.registerClass(TileMap,'TileMap');
var Tile = (function (_super) {
    __extends(Tile, _super);
    function Tile(tiledata) {
        _super.call(this);
        this.bitmapSize = 64;
        this.bitmaps = new egret.Bitmap();
        this.addChild(this.bitmaps);
        this.bitmaps.texture = RES.getRes(tiledata.pictureName);
        this.bitmaps.width = this.bitmapSize;
        this.bitmaps.height = this.bitmapSize;
    }
    var d = __define,c=Tile,p=c.prototype;
    return Tile;
}(egret.DisplayObjectContainer));
egret.registerClass(Tile,'Tile');
var TileData = (function () {
    function TileData() {
        this.costMultiplier = 1.0;
    }
    var d = __define,c=TileData,p=c.prototype;
    return TileData;
}());
egret.registerClass(TileData,'TileData');
/*
class TileArray {
    tileArray;
    constructor(TileArray: any) {
        this.tileArray = TileArray;
    }
    public getTileArray(): any {
        return this.tileArray;
    }
}
*/ 
//# sourceMappingURL=Map.js.map