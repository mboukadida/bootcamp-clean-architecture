import { Album } from "../entities/album";

import { Observable } from 'rxjs';

export interface IAlbumRepository {
    getAll(): Observable<Album[]>;
    get(id: string): Observable<Album>;
}