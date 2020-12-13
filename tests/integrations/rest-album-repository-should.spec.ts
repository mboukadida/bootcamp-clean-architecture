import { AlbumBuilder } from 'src/albums/use-cases/album-builder'
import { GetAllAlbums } from "src/albums/use-cases/get-all-albums"
import { RESTAlbumRepository } from '../../src/albums/adapters/secondaries/rest/rest-album-repository'
import { GetAlbumDetails } from 'src/albums/use-cases/geta-album-details'
import { AlbumDTO } from '../../src/albums/adapters/secondaries/rest/album-dto'

import { HttpClient } from '@angular/common/http'
import { of } from 'rxjs'
import { Album } from 'src/albums/entities/album'

describe('rest album repository should', () => {
    let albumDto : AlbumDTO
    let expectedAlbum : Album
    let httpClient : HttpClient
    let restAlbumRepository: RESTAlbumRepository

    beforeEach(() => {
        albumDto = {
            id          : 1,
            description : 'Lorem Ipsum',
            name        : "test",
            width       : 5,
            height      : 15,
            imageUrl   : 'http://localhost',
            duration    : 10
        }

        expectedAlbum = new AlbumBuilder()
            .withId(1)
            .withName('test')
            .withDescription('Lorem Ipsum')
            .withDuration(10)
            .withHeight(15)
            .withWidth(5)
            .withUrl('http://localhost')
            .build()

        httpClient = {get : null} as HttpClient
        restAlbumRepository = new RESTAlbumRepository(httpClient)
    })


    it('fetch a list of albums', done => {
        // Given
        const getAllAlbums = new GetAllAlbums(restAlbumRepository)

        // When
        // Then
        spyOn(httpClient, 'get').and.returnValue(of([albumDto]))
        getAllAlbums.handle().subscribe(albums => {
            expect(albums).toEqual([expectedAlbum])
            expect(httpClient.get).toHaveBeenCalledTimes(1)
            expect(httpClient.get).toHaveBeenCalledWith('http://localhost:44300/albums')
            done()
        })
    })

    it('fetch a details of one albums', done => {
        // Given
        const getAlbumDetails = new GetAlbumDetails(restAlbumRepository)

        // When
        // Then
        spyOn(httpClient, 'get').and.returnValue(of(albumDto));
        getAlbumDetails.handle(expectedAlbum.id).subscribe(album => {
            expect(album).toEqual(expectedAlbum)
            expect(httpClient.get).toHaveBeenCalledTimes(1)
            expect(httpClient.get).toHaveBeenCalledWith('http://localhost:44300/albums/' + expectedAlbum.id)
            done()
        })
    })
})


