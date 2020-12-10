import { Component, Inject, OnInit } from '@angular/core';
import { GetAlbumDetails } from 'src/albums/use-cases/geta-album-details';

import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Album } from 'src/albums/entities/album';

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.css']
})
export class AlbumDetailsComponent implements OnInit {
  album$ : Observable<Album>

  constructor(@Inject("GetAlbumDetails")private getAlbumDetails: GetAlbumDetails,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.album$ = this.getAlbumDetails.handle(this.route.snapshot.paramMap.get('id'));
  }
}
