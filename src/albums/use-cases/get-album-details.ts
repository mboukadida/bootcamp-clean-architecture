import { Album } from "src/albums/entities/album";
import { Observable } from 'rxjs';
import { IAlbumRepository } from 'src/albums/ports/album-repository';


export class GetAlbumDetails {

    constructor(private albumsRepository: IAlbumRepository) {
    }

    handle(id: number): Observable<Album> {
        return this.albumsRepository.get(id);
    }
}
