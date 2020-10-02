import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
  movieTitle = ''
  results = false

  dynamicSearch() {
    let temp = this.movieTitle
    if (temp.length > 5) {console.log('111');
    }
    console.log(temp);
    
  }

  fetchMovie() {
    let url = 'http://www.omdbapi.com/?s=matrix&apikey=9e7b9562'
    fetch(url)
      .then(data => data.json())
      .then(data => console.log(data)
    )
    if (this.movieTitle) {
      this.results = true
    }
  }

  ngAfterContentInit() {
    console.log('after');
    
  }
}
