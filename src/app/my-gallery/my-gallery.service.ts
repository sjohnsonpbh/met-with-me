import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { ArtObject } from '../shared/artobject.model';
import { Router } from '@angular/router';
import { EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MyGalleryService {
  myGalleryArtChanged = new Subject<ArtObject[]>();

  private myGalleryArtList: ArtObject[] = [];

  // notify that an artobject was clicked
  // artSelected = new EventEmitter<ArtObject>();

  addArtToGallery(artobject: ArtObject) {
    this.myGalleryArtList.push(artobject);
    this.myGalleryArtChanged.next(this.myGalleryArtList.slice());
    // navigate to my-gallery ??
  }
}
