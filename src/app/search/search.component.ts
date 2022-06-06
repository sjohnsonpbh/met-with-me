import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  onFetchArt(searchInput: string) {
    const formattedQuery = searchInput.split('').join('+').toLowerCase();

    this.http
      .get(`https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&q=${formattedQuery}`)
      .subscribe((searchResponse:any) => {
        console.log('searchResponse', searchResponse);

        let searchResponseArray = [];
        for (let i=1; i<10; i++) {
          searchResponseArray.push(searchResponse.objectIDs[i])
          };

        let searchItemsDetails = [];
        for (let i=1; i<6; i++) {
          let itemID = searchResponseArray[i];
          this.http
            .get(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${itemID}`)
            .subscribe((itemResponse:any) => {
              searchItemsDetails.push(itemResponse)
            });
        }
          console.log(searchItemsDetails);

      this.saveArt(searchResponseArray);
    });
  }

  saveArt(searchResponseArray) {

  }
}
