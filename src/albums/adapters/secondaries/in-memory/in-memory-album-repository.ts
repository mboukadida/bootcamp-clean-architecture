import { Album } from "../../../entities/album";
import { IAlbumRepository } from '../../../ports/album-repository';

import { BehaviorSubject, Observable, of, Subject } from 'rxjs';


export class InMemoryAlbumRepository implements IAlbumRepository {
    albums$: Subject<Album[]> = new BehaviorSubject(this.albums);

    constructor(private albums: Album[]) {
    }

    getAll(): Observable<Album[]> {
        return of(this.albums);
    }

    get(id: number): Observable<Album> {
        return of(this.albums.filter(album => album.id === id)[0])
    }
}