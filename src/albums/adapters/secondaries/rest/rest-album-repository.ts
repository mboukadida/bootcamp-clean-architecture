import { IAlbumRepository } from 'src/albums/ports/album-repository';
import { Album } from 'src/albums/entities/album';
import { AlbumDTO } from "./album-dto";

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AlbumMapper } from './album-mapper';


export class RESTAlbumRepository implements IAlbumRepository {
    constructor(private httpClient: HttpClient) { }

    getAll(): Observable<Album[]> {
        return this.httpClient
            .get('http://localhost:44300/albums')
            .pipe(
                map<AlbumDTO[], Album[]>(albumsDto => albumsDto.map(AlbumMapper.MapToAlbum))
            );
    }

    get(id: number): Observable<Album> {
        return this.httpClient
            .get('http://localhost:44300/albums' + '/' + id)
            .pipe(
                map<AlbumDTO, Album>(AlbumMapper.MapToAlbum)
            );
    }
}

