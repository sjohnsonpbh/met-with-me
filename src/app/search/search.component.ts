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
    .get(`https://collectionapi.metmuseum.org/public/collection/v1/search?q=${formattedQuery}`)
    .subscribe((searchResponse) => {
      console.log('searchResponse', searchResponse);
    });
  }

}
