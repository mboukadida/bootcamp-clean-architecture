import { InMemoryAlbumRepository } from 'src/albums/adapters/secondaries/in-memory/in-memory-album-repository';

import { AlbumBuilderStub } from './stubs/album-builder-stub';
import { GetAlbumDetails } from '../src/albums/use-cases/get-album-details';

describe('Get album details should', () => {
    it('verify returned album details from source', () => {
        // Given
        let backToBlack = new AlbumBuilderStub()
            .withId(1)
            .withName('Back to black')
            .build()
        var albumsRepository = new InMemoryAlbumRepository([backToBlack]);
        let getAlbumDetails = new GetAlbumDetails(albumsRepository);

        // When
        // Then
        getAlbumDetails.handle(1).subscribe(expectedAlbum => {
            expect(expectedAlbum).toEqual(backToBlack)
            expect(expectedAlbum.id).toEqual(backToBlack.id)
            expect(expectedAlbum.name).toEqual(backToBlack.name)
            expect(expectedAlbum.width).toEqual(backToBlack.width)
            expect(expectedAlbum.height).toEqual(backToBlack.height)
            expect(expectedAlbum.url).toEqual(backToBlack.url)
            expect(expectedAlbum.description).toEqual(backToBlack.description)
            expect(expectedAlbum.duration).toEqual(backToBlack.duration)
        })
    })
})