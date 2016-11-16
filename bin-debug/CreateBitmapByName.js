function createBitmapByName(name) {
    var result = new egret.Bitmap();
    var texture = RES.getRes(name);
    result.texture = texture;
    return result;
}
var Vector2 = (function () {
    function Vector2(x, y) {
        this.x = x;
        this.y = y;
    }
    var d = __define,c=Vector2,p=c.prototype;
    return Vector2;
}());
egret.registerClass(Vector2,'Vector2');
//# sourceMappingURL=CreateBitmapByName.js.map