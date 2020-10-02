import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
  movieTitle = ''
  results = false
  movies = []

  dynamicSearch() {
    if (this.movieTitle.trim().length > 5) {
      this.fetchMovie()
    }
  }

  fetchMovie() {
    if (!this.movieTitle.trim()) {
      this.results = false
      return
    }
    let url = `http://www.omdbapi.com/?s=${this.movieTitle}&apikey=9e7b9562`
    fetch(url)
      .then(data => data.json())
      .then(data => this.movies = data.Search)
    if (this.movieTitle.trim()) {
      this.results = true
    }
  }
}
