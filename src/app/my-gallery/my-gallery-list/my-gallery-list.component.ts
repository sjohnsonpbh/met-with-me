import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ArtObject } from 'src/app/shared/artobject.model';
import { MyGalleryService } from '../my-gallery.service';

@Component({
  selector: 'app-my-gallery-list',
  templateUrl: './my-gallery-list.component.html',
  styleUrls: ['./my-gallery-list.component.css'],
})
export class MyGalleryListComponent implements OnInit {
  private artListSub: Subscription;

  constructor(private mygalleryService: MyGalleryService) {}

  public myArt: ArtObject[] = [];

  ngOnInit(): void {
    this.myArt = this.mygalleryService.getArtList();
    this.artListSub = this.mygalleryService.myGalleryArtChanged.subscribe(
      (updatedArtGalleryList) => {
        this.myArt = updatedArtGalleryList;
      }
    );
  }

  onRemoveArtFromGallery(id) {
    this.mygalleryService.removeArtFromGallery(id);
  }
}
