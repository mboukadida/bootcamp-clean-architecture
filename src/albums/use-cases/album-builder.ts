import { Album } from '../entities/album';

export class AlbumBuilder {
    protected id : string;
    protected name: string;
    protected width: number;
    protected height: number;
    protected url: string;
    protected description: string;
    protected duration: number;

    public withDuration(value: number) : AlbumBuilder {
        this.duration = value;
        return this;
    }

    public withDescription(value: string) : AlbumBuilder {
        this.description = value;
        return this;
    }

    public withUrl(value: string) : AlbumBuilder {
        this.url = value;
        return this;
    }

    public withHeight(value: number) : AlbumBuilder {
        this.height = value;
        return this;
    }

    public withWidth(value: number) : AlbumBuilder {
        this.width = value;
        return this;
    }

    public withName(value: string) : AlbumBuilder {
        this.name = value;
        return this;
    }

    
    public withId(value: string) : AlbumBuilder {
        this.id = value;
        return this;
    }

    public build() : Album {
        return new Album(this.id,
            this.name,
            this.width,
            this.height,
            this.url,
            this.description,
            this.duration)
    }
}