import { AlbumsListComponent } from './albums-list/albums-list.component';
import { AlbumItemComponent } from './albums-list/album-item/album-item.component';
import { AlbumsRoutingModule } from './albums-routing.module';
import { AlbumDetailsComponent } from './album-details/album-details.component';
import { GetAllAlbums } from 'src/albums/use-cases/get-all-albums';
import { AlbumRepositoryFactory } from '../secondaries/configurations/repository-factory';
import { GetAlbumDetails } from 'src/albums/use-cases/geta-album-details';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AlbumsListComponent, AlbumItemComponent, AlbumDetailsComponent],
  imports: [
    CommonModule,
    AlbumsRoutingModule,
    HttpClientModule
  ],
  providers : [
    { 
      provide: "GetAllAlbums" , 
      useFactory: (httpClient: HttpClient) => {
        return new GetAllAlbums(AlbumRepositoryFactory.albumRepository(httpClient))
      },
      deps: [HttpClient]
    },
    { 
      provide: "GetAlbumDetails" , 
      useFactory: (httpClient: HttpClient) => {
        return new GetAlbumDetails(AlbumRepositoryFactory.albumRepository(httpClient))
      },
      deps: [HttpClient]
    } 
  ]
})
export class AlbumsModule { }
