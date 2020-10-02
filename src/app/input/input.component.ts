import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
  movieTitle = ''

  fetchMovie() {
    let url = 'http://www.omdbapi.com/?s=matrix&apikey=9e7b9562'
    fetch(url)
      .then(data => data.json())
      .then(data => console.log(data)
    )
  }
}
