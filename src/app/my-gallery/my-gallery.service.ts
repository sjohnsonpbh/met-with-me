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

  // READ (many)
  getArtList() {
    return this.myGalleryArtList.slice();
  }

  // READ (one)
  getArt(idx: number) {
    return this.myGalleryArtList.slice()[idx];
  }

  // DELETE (one)
  removeArtFromGallery(idx: number) {
    if (idx === -1) return;

    this.myGalleryArtList.splice(idx, 1);
    this.myGalleryArtChanged.next(this.myGalleryArtList.slice());
  }
}
