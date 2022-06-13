import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ArtObject } from '../shared/artobject.model';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchItemsDetails:ArtObject[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  // method for searching the API
  onFetchArt(searchInput: string) {

    // format the search query
    const formattedQuery = searchInput.split('').join('+').toLowerCase();

    // search the API which only retrieves object IDs
    this.http
      .get(`https://collectionapi.metmuseum.org/public/collection/v1/search?departmentId=11&q=${formattedQuery}`)
      .subscribe((searchResponse:any) => {


        // place the first few object IDs in an array
        let searchResponseArray = [];
        for (let i=1; i<10; i++) {
          searchResponseArray.push(searchResponse.objectIDs[i])
          };

        // loop through the array's first five and submit to object API for details
        for (let i=1; i<6; i++) {
          let itemID = searchResponseArray[i];
          this.http
            .get(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${itemID}`)
            .subscribe((itemResponse:any) => {
              console.log(itemResponse)
              const formattedArtObject = new ArtObject(
                itemResponse.title,
                itemResponse.artistDisplayName,
                itemResponse.objectDate,
                itemResponse.medium,
                itemResponse.primaryImageSmall,
                itemResponse.primaryImage,
                itemResponse.rightsAndReproduction,
                itemResponse.objectURL,

                );
                // push each object detail to the searchItemsDetails array for display
              this.searchItemsDetails.push(formattedArtObject);
            });
        }

      this.saveArt(searchResponseArray);
    });
  }

  saveArt(searchResponseArray) {
  }
}
