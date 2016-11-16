class Grid {
    private _startNode: NodeInfor;
    private _endNode: NodeInfor;
    private _nodes;
    private _numCols: number;
    private _numRows: number;
    /**
    * Constructor.
    */
    constructor(numCols: number, numRows: number) {
        this._numCols = numCols;
        this._numRows = numRows;
        this._nodes = new Array();
        for (var i: number = 0; i < this._numCols; i++) {
            this._nodes[i] = new Array();
            for (var j: number = 0; j < this._numRows; j++) {
                this._nodes[i][j] = new NodeInfor(i, j);
            }
        }
    }
    ////////////////////////////////////////
    // public methods
    ////////////////////////////////////////
    /**
    * Returns the node at the given coords.
    * @param x The x coord.
    * @param y The y coord.
    */
    public getNode(x: number, y: number): NodeInfor {
        return this._nodes[x][y] as NodeInfor;
    }
    /**
    129
    * Sets the node at the given coords as the end node.
    * @param x The x coord.
    * @param y The y coord.
    */
    public setEndNode(x: number, y: number): void {
        this._endNode = this._nodes[x][y] as NodeInfor;
    }
    /**
    * Sets the node at the given coords as the start node.
    * @param x The x coord.
    * @param y The y coord.
    */
    public setStartNode(x: number, y: number): void {
        this._startNode = this._nodes[x][y] as NodeInfor;
    }
    /**
    * Sets the node at the given coords as walkable or not.
    * @param x The x coord.
    * @param y The y coord.
    */
    public setWalkable(x: number, y: number, value: Boolean): void {
        this._nodes[x][y].walkable = value;
    }
    ////////////////////////////////////////
    // getters / setters
    ////////////////////////////////////////
    /**
    * Returns the end node.
    */
    public get endNode(): NodeInfor {
        return this._endNode;
    }
    /**
    * Returns the number of columns in the grid.
    */
    public get numCols(): number {
        return this._numCols;
    }
    /**
    * Returns the number of rows in the grid.
    130
    */
    public get numRows(): number {
        return this._numRows;
    }
    /**
    * Returns the start node.
    */
    public get startNode(): NodeInfor {
        return this._startNode;
    }

}