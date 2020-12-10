import { Album } from "../entities/album";

import { Observable } from 'rxjs';

export interface IAlbumRepository {
    getAll(): Observable<Album[]>;
    get(id: number): Observable<Album>;
}