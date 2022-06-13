import { Component, OnInit } from '@angular/core';
import { MyGalleryService } from '../my-gallery.service';

@Component({
  selector: 'app-my-gallery-list',
  templateUrl: './my-gallery-list.component.html',
  styleUrls: ['./my-gallery-list.component.css'],
})
export class MyGalleryListComponent implements OnInit {
  constructor(private mygalleryService: MyGalleryService) {
    // this.mygalleryService.
  }

  ngOnInit(): void {}

  // this.myGalleryArtList.

  removeArtFromGallery(id) {
    // this.mygalleryService.(id);
  }
}
