import { Album } from 'src/albums/entities/album';
import { AlbumDTO } from "./album-dto";
import { AlbumBuilder } from 'src/albums/use-cases/album-builder';


export class AlbumMapper {
    public static MapToAlbum(albumDto: AlbumDTO): Album {
        return new AlbumBuilder()
            .withId(albumDto.id)
            .withName(albumDto.name)
            .withDescription(albumDto.description)
            .withDuration(albumDto.duration)
            .withHeight(albumDto.height)
            .withWidth(albumDto.width)
            .withUrl(albumDto.imageUrl)
            .build();
    }
}
