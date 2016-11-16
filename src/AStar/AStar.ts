class AStar {
    private _open;
    private _closed;
    private _grid: Grid;
    private _endNode: NodeInfor;
    private _startNode: NodeInfor;
    private _path;
    //		private _heuristic:Function = manhattan;
    //		private _heuristic:Function = euclidian;
    private _heuristic: Function = this.diagonal;
    private _straightCost: number = 1.0;
    private _diagCost: number = Math.SQRT2;

    public findPath(grid: Grid): Boolean {
        this._grid = grid;
        this._open = new Array();
        this._closed = new Array();

        this._startNode = this._grid.startNode;
        this._endNode = this._grid.endNode;

        this._startNode.g = 0;
        this._startNode.h = this._heuristic(this._startNode);
        this._startNode.f = this._startNode.g + this._startNode.h;

        return this.search();
    }

    public search(): Boolean {
        var node: NodeInfor = this._startNode;
        while (node != this._endNode) {
            var startX: number = Math.max(0, node.x - 1);
            var endX: number = Math.min(this._grid.numCols - 1, node.x + 1);
            var startY: number = Math.max(0, node.y - 1);
            var endY: number = Math.min(this._grid.numRows - 1, node.y + 1);

            for (var i: number = startX; i <= endX; i++) {
                for (var j: number = startY; j <= endY; j++) {
                    var test: NodeInfor = this._grid.getNode(i, j);
                    if (test == node ||
                        !test.walkable ||
                        !this._grid.getNode(node.x, test.y).walkable ||
                        !this._grid.getNode(test.x, node.y).walkable) {
                        continue;
                    }

                    var cost: number = this._straightCost;
                    if (!((node.x == test.x) || (node.y == test.y))) {
                        cost = this._diagCost;
                    }
                    var g: number = node.g + cost * test.costMultiplier;
                    var h: number = this._heuristic(test);
                    var f: number = g + h;
                    if (this.isOpen(test) || this.isClosed(test)) {
                        if (test.f > f) {
                            test.f = f;
                            test.g = g;
                            test.h = h;
                            test.parent = node;
                        }
                    }
                    else {
                        test.f = f;
                        test.g = g;
                        test.h = h;
                        test.parent = node;
                        this._open.push(test);
                    }
                }
            }
            for (var o: number = 0; o < this._open.length; o++) {
            }
            this._closed.push(node);
            if (this._open.length == 0) {
                console.log("no path found");
                return false
            }
            // this._open.sortOn("f", Array.NUMERIC);
            node = this._open.shift() as NodeInfor;
        }
        this.buildPath();
        return true;
    }

    private buildPath(): void {
        this._path = new Array();
        var node: NodeInfor = this._endNode;
        this._path.push(node);
        while (node != this._startNode) {
            node = node.parent;
            this._path.unshift(node);
        }
    }

    public get path() {
        return this._path;
    }

    private isOpen(node: NodeInfor): Boolean {
        for (var i: number = 0; i < this._open.length; i++) {
            if (this._open[i] == node) {
                return true;
            }
        }
        return false;
    }

    private isClosed(node: NodeInfor): Boolean {
        for (var i: number = 0; i < this._closed.length; i++) {
            if (this._closed[i] == node) {
                return true;
            }
        }
        return false;
    }

    private manhattan(node: NodeInfor): number {
        return Math.abs(node.x - this._endNode.x) * this._straightCost + Math.abs(node.y + this._endNode.y) * this._straightCost;
    }

    private euclidian(node: NodeInfor): number {
        var dx: number = node.x - this._endNode.x;
        var dy: number = node.y - this._endNode.y;
        return Math.sqrt(dx * dx + dy * dy) * this._straightCost;
    }

    private diagonal(node: NodeInfor): number {
        var dx: number = Math.abs(node.x - this._endNode.x);
        var dy: number = Math.abs(node.y - this._endNode.y);
        var diag: number = Math.min(dx, dy);
        var straight: number = dx + dy;
        return this._diagCost * diag + this._straightCost * (straight - 2 * diag);
    }

    public get visited() {
        return this._closed.concat(this._open);
    }
}
