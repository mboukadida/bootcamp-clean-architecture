
import { Album } from 'src/albums/entities/album';

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-album-item',
  templateUrl: './album-item.component.html',
  styleUrls: ['./album-item.component.css']
})
export class AlbumItemComponent implements OnInit {
  @Input() album: Album
  
  constructor() { }

  ngOnInit() {
  }
}