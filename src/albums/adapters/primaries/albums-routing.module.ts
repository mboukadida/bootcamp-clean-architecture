import { AlbumsListComponent } from './albums-list/albums-list.component';
import { AlbumDetailsComponent } from './album-details/album-details.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes =  [
    {path: 'albums', component: AlbumsListComponent},
    {path: 'albums/:id', component: AlbumDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AlbumsRoutingModule { }
