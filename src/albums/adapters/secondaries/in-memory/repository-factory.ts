import { IAlbumRepository } from 'src/albums/ports/album-repository';
import { AlbumBuilder } from 'src/albums/use-cases/album-builder';
import { InMemoryAlbumRepository } from './in-memory-album-repository';

export class AlbumRepositoryFactory {
    static albumRepository(): IAlbumRepository {

        const albumUnforgeavable = new AlbumBuilder()
            .withId("1")
            .withName("fallen")
            .withDescription("just about description")
            .withUrl("http://via.placeholder.com/800px800")
            .withHeight(200)
            .withWidth(300)
            .withDuration(6)
            .build();

        const unReleased = new AlbumBuilder()
            .withId("2")
            .withName("Unreleased")
            .withDescription("This album was released on 2005 by Evanescence")
            .withUrl("http://via.placeholder.com/800px800")
            .withHeight(150)
            .withWidth(250)
            .withDuration(3)
            .build();

        const dontTouch = new AlbumBuilder()
            .withId("3")
            .withName("don't touch")
            .withDescription("This album was released on 2006 by Evanescence")
            .withUrl("http://via.placeholder.com/800px800")
            .withHeight(150)
            .withWidth(250)
            .withDuration(3)
            .build();

        return new InMemoryAlbumRepository([albumUnforgeavable, unReleased, dontTouch])
    }
}