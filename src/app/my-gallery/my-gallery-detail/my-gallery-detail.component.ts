import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ArtObject } from 'src/app/shared/artobject.model';

import { MyGalleryService } from '../my-gallery.service';

@Component({
  selector: 'app-my-gallery-detail',
  templateUrl: './my-gallery-detail.component.html',
  styleUrls: ['./my-gallery-detail.component.css'],
})
export class MyGalleryDetailComponent implements OnInit {
  id: number;
  artObject: ArtObject = new ArtObject(
    'title',
    'artistDisplayName',
    'objectDate',
    'medium',
    'primaryImageSmall',
    'primaryImage',
    'rightsAndReproduction',
    'objectURL'
  );
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private myGalleryService: MyGalleryService
  ) {}

  ngOnInit(): void {
    // when the route changes, execute the logic
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.artObject = this.myGalleryService.getArt(this.id);

      console.log(params);
      console.log(this.artObject);
    });
  }
}
