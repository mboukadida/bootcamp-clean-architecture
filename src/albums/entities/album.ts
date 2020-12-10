

export class Album {
    
   
    constructor(private _id: string,
        private _name: string,
        private _width: number,
        private _height: number,
        private _url: string,
        private _description: string,
        private _duration: number) {
    }

    public get id(): string {
        return this._id;
    }

    public get name(): string {
        return this._name;
    }

    public get duration(): number {
        return this._duration;
    }

    public get description(): string {
        return this._description;
    }

    public get url(): string {
        return this._url;
    }

    public get height(): number {
        return this._height;
    }

    public get width(): number {
        return this._width;
    }
}
