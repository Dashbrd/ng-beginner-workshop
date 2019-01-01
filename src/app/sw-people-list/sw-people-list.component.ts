import { Component, OnInit } from '@angular/core';

import { StarWarsCharacter } from '../models/star-wars-character.model';

@Component({
  selector: 'app-sw-people-list',
  templateUrl: './sw-people-list.component.html',
  styleUrls: ['./sw-people-list.component.scss']
})
export class SwPeopleListComponent implements OnInit {

  swCharacters: Array<StarWarsCharacter>;

  constructor() { }

  ngOnInit() {

    this.swCharacters = [
      {
        'name': 'Luke Skywalker',
        'height': '172',
        'mass': '77',
        'hair_color': 'blond',
        'skin_color': 'fair',
        'eye_color': 'blue',
        'birth_year': '19BBY',
        'gender': 'male',
        'homeworld': 'https://swapi.co/api/planets/1/',
        'films': [
          'https://swapi.co/api/films/2/',
          'https://swapi.co/api/films/6/',
          'https://swapi.co/api/films/3/',
          'https://swapi.co/api/films/1/',
          'https://swapi.co/api/films/7/'
        ],
        'species': [
          'https://swapi.co/api/species/1/'
        ],
        'vehicles': [
          'https://swapi.co/api/vehicles/14/',
          'https://swapi.co/api/vehicles/30/'
        ],
        'starships': [
          'https://swapi.co/api/starships/12/',
          'https://swapi.co/api/starships/22/'
        ],
        'url': 'https://swapi.co/api/people/1/'
      },
      {
        'name': 'C-3PO',
        'height': '167',
        'mass': '75',
        'hair_color': 'n/a',
        'skin_color': 'gold',
        'eye_color': 'yellow',
        'birth_year': '112BBY',
        'gender': 'n/a',
        'homeworld': 'https://swapi.co/api/planets/1/',
        'films': [
          'https://swapi.co/api/films/2/',
          'https://swapi.co/api/films/5/',
          'https://swapi.co/api/films/4/',
          'https://swapi.co/api/films/6/',
          'https://swapi.co/api/films/3/',
          'https://swapi.co/api/films/1/'
        ],
        'species': [
          'https://swapi.co/api/species/2/'
        ],
        'vehicles': [],
        'starships': [],
        'url': 'https://swapi.co/api/people/2/'
      },
      {
        'name': 'R2-D2',
        'height': '96',
        'mass': '32',
        'hair_color': 'n/a',
        'skin_color': 'white, blue',
        'eye_color': 'red',
        'birth_year': '33BBY',
        'gender': 'n/a',
        'homeworld': 'https://swapi.co/api/planets/8/',
        'films': [
          'https://swapi.co/api/films/2/',
          'https://swapi.co/api/films/5/',
          'https://swapi.co/api/films/4/',
          'https://swapi.co/api/films/6/',
          'https://swapi.co/api/films/3/',
          'https://swapi.co/api/films/1/',
          'https://swapi.co/api/films/7/'
        ],
        'species': [
          'https://swapi.co/api/species/2/'
        ],
        'vehicles': [],
        'starships': [],
        'url': 'https://swapi.co/api/people/3/'
      },
      {
        'name': 'Darth Vader',
        'height': '202',
        'mass': '136',
        'hair_color': 'none',
        'skin_color': 'white',
        'eye_color': 'yellow',
        'birth_year': '41.9BBY',
        'gender': 'male',
        'homeworld': 'https://swapi.co/api/planets/1/',
        'films': [
          'https://swapi.co/api/films/2/',
          'https://swapi.co/api/films/6/',
          'https://swapi.co/api/films/3/',
          'https://swapi.co/api/films/1/'
        ],
        'species': [
          'https://swapi.co/api/species/1/'
        ],
        'vehicles': [],
        'starships': [
          'https://swapi.co/api/starships/13/'
        ],
        'url': 'https://swapi.co/api/people/4/'
      },
      {
        'name': 'Leia Organa',
        'height': '150',
        'mass': '49',
        'hair_color': 'brown',
        'skin_color': 'light',
        'eye_color': 'brown',
        'birth_year': '19BBY',
        'gender': 'female',
        'homeworld': 'https://swapi.co/api/planets/2/',
        'films': [
          'https://swapi.co/api/films/2/',
          'https://swapi.co/api/films/6/',
          'https://swapi.co/api/films/3/',
          'https://swapi.co/api/films/1/',
          'https://swapi.co/api/films/7/'
        ],
        'species': [
          'https://swapi.co/api/species/1/'
        ],
        'vehicles': [
          'https://swapi.co/api/vehicles/30/'
        ],
        'starships': [],
        'url': 'https://swapi.co/api/people/5/'
      },
      {
        'name': 'Owen Lars',
        'height': '178',
        'mass': '120',
        'hair_color': 'brown, grey',
        'skin_color': 'light',
        'eye_color': 'blue',
        'birth_year': '52BBY',
        'gender': 'male',
        'homeworld': 'https://swapi.co/api/planets/1/',
        'films': [
          'https://swapi.co/api/films/5/',
          'https://swapi.co/api/films/6/',
          'https://swapi.co/api/films/1/'
        ],
        'species': [
          'https://swapi.co/api/species/1/'
        ],
        'vehicles': [],
        'starships': [],
        'url': 'https://swapi.co/api/people/6/'
      },
      {
        'name': 'Beru Whitesun lars',
        'height': '165',
        'mass': '75',
        'hair_color': 'brown',
        'skin_color': 'light',
        'eye_color': 'blue',
        'birth_year': '47BBY',
        'gender': 'female',
        'homeworld': 'https://swapi.co/api/planets/1/',
        'films': [
          'https://swapi.co/api/films/5/',
          'https://swapi.co/api/films/6/',
          'https://swapi.co/api/films/1/'
        ],
        'species': [
          'https://swapi.co/api/species/1/'
        ],
        'vehicles': [],
        'starships': [],
        'url': 'https://swapi.co/api/people/7/'
      },
      {
        'name': 'R5-D4',
        'height': '97',
        'mass': '32',
        'hair_color': 'n/a',
        'skin_color': 'white, red',
        'eye_color': 'red',
        'birth_year': 'unknown',
        'gender': 'n/a',
        'homeworld': 'https://swapi.co/api/planets/1/',
        'films': [
          'https://swapi.co/api/films/1/'
        ],
        'species': [
          'https://swapi.co/api/species/2/'
        ],
        'vehicles': [],
        'starships': [],
        'url': 'https://swapi.co/api/people/8/'
      },
      {
        'name': 'Biggs Darklighter',
        'height': '183',
        'mass': '84',
        'hair_color': 'black',
        'skin_color': 'light',
        'eye_color': 'brown',
        'birth_year': '24BBY',
        'gender': 'male',
        'homeworld': 'https://swapi.co/api/planets/1/',
        'films': [
          'https://swapi.co/api/films/1/'
        ],
        'species': [
          'https://swapi.co/api/species/1/'
        ],
        'vehicles': [],
        'starships': [
          'https://swapi.co/api/starships/12/'
        ],
        'url': 'https://swapi.co/api/people/9/'
      },
      {
        'name': 'Obi-Wan Kenobi',
        'height': '182',
        'mass': '77',
        'hair_color': 'auburn, white',
        'skin_color': 'fair',
        'eye_color': 'blue-gray',
        'birth_year': '57BBY',
        'gender': 'male',
        'homeworld': 'https://swapi.co/api/planets/20/',
        'films': [
          'https://swapi.co/api/films/2/',
          'https://swapi.co/api/films/5/',
          'https://swapi.co/api/films/4/',
          'https://swapi.co/api/films/6/',
          'https://swapi.co/api/films/3/',
          'https://swapi.co/api/films/1/'
        ],
        'species': [
          'https://swapi.co/api/species/1/'
        ],
        'vehicles': [
          'https://swapi.co/api/vehicles/38/'
        ],
        'starships': [
          'https://swapi.co/api/starships/48/',
          'https://swapi.co/api/starships/59/',
          'https://swapi.co/api/starships/64/',
          'https://swapi.co/api/starships/65/',
          'https://swapi.co/api/starships/74/'
        ],
        'url': 'https://swapi.co/api/people/10/'
      }
    ];

  }

  /**
   * filterData
   */
  public filterData(event: string) {
    this.swCharacters = this.swCharacters.filter((character: StarWarsCharacter) => {
      if (character.name.includes(event)) {
        return true;
      }
      return false;
    });
  }

}
