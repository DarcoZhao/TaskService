enum TaskStatus {
    UNACCEPTABLE = 0,
    ACCEPTABLE = 1,
    DURING = 2,
    CAN_SUBMIT = 3,
    SUBMITTED = 4
}

class Task {
    private id: string;
    private name: string;
    private desc: string;
    public status: TaskStatus;

    private fromNpcId: string;
    public toNpcId: string;

    constructor(id: string, name: string, fromNpcId: string, toNpcId: string) {
        this.id = id;
        this.name = name;
        this.desc = "";
        this.status = TaskStatus.UNACCEPTABLE;
        this.fromNpcId = fromNpcId;
        this.toNpcId = toNpcId;
    }

    public get Id() {
        return this.id;
    }
    
    public get Name() {
        return this.name;
    }

    public get Desc() {
        return this.desc;
    }

    public get FromNpcId() {
        return this.fromNpcId;
    }

}



/*
class Task {
    private id: string;
    private name: string;
    private desc: string;
    private status: TaskStatus;

    constructor(id: string, name: string) {
        this.id = id;
        this.name = name;
        this.desc = "";
        this.status = TaskStatus.UNACCEPTABLE;
    }

    public get Id() {
        return this.id;
    }

    public get State() {
        return this.status;
    }

    public get Desc() {
        return this.desc;
    }

    public get Status() {
        return this.status;
    }
}

class Task_FindNpc extends Task {

    private fromNpcId: string;
    public toNpcId: string;

    constructor(id: string, name: string, fromNpcId: string, toNpcId: string) {
        super(id, name);
        this.fromNpcId = fromNpcId;
        this.toNpcId = toNpcId;
    }

}
*/