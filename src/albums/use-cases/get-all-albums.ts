
import { IAlbumRepository } from '../ports/album-repository';

import { Observable } from 'rxjs';

export class GetAllAlbums {
    
    constructor(private albumsRepository: IAlbumRepository) {
    }

    handle(): Observable<any[]> {
        return this.albumsRepository.getAll();
    }
}