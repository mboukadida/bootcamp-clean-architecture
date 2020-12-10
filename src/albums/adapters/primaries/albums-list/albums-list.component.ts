
import { Album } from 'src/albums/entities/album';

import { Component, Inject, Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GetAllAlbums } from 'src/albums/use-cases/get-all-albums';

@Component({
  selector: 'app-albums-list',
  templateUrl: './albums-list.component.html',
  styleUrls: ['./albums-list.component.css']
})
export class AlbumsListComponent implements OnInit {
  albums$ : Observable<Album[]>;

  constructor(@Inject("GetAllAlbums") private getAllAlbums:GetAllAlbums) { }

  ngOnInit() {
    this.albums$ = this.getAllAlbums.handle();
  }
}
