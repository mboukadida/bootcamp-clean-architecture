import { Album } from '../src/albums/entities/album';
import { GetAllAlbums } from '../src/albums/use-cases/get-all-albums';
import { InMemoryAlbumRepository } from "../src/albums/adapters/secondaries/in-memory/in-memory-album-repository";
import { AlbumBuilderStub } from './stubs/album-builder-stub';

describe('get all albums should', ()=> {

    let backToBlack: Album
    
    beforeEach(() => {
        backToBlack = new AlbumBuilderStub()
            .withId('1')
            .withName('Back to black')
            .build()
    })

    it('return a list of empty album when source have no albums', () => {
        // Given
        var getAllAlbums: GetAllAlbums = createGetAllAlbums([]);

        // When
        // Then
        getAllAlbums.handle().subscribe(expectedAlbums => {
            expect(expectedAlbums).toEqual([])
        })
    })

    it('return a list of one album when source have one album', () => {
        // Given
        var getAllAlbums: GetAllAlbums = createGetAllAlbums([backToBlack]);

        // When
        // Then
        getAllAlbums.handle().subscribe(expectedAlbums => {
            expect(expectedAlbums).toEqual([backToBlack])
        })
    })

    it('return a list of two album when source have two album', () => {
        // Given
        var renaissance = new AlbumBuilderStub()
            .withId('2')
            .withName('renaissance')
            .build()
        var GetAllAlbums: GetAllAlbums = createGetAllAlbums([backToBlack, renaissance]);

        // When
        // Then
        GetAllAlbums.handle().subscribe(expectedAlbums => {
            expect(expectedAlbums).toEqual([backToBlack, renaissance])
        })
    })
})


function createGetAllAlbums(albums : Album[]) {
    var albumsRepository = new InMemoryAlbumRepository(albums);
    return new GetAllAlbums(albumsRepository);
}

