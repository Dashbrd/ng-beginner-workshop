import { Component, OnInit } from '@angular/core';

import { StarWarsCharacter } from '../models/star-wars-character.model';
import { SwapiService } from '../services/swapi.service';

@Component({
  selector: 'app-sw-people-list',
  templateUrl: './sw-people-list.component.html',
  styleUrls: ['./sw-people-list.component.scss']
})
export class SwPeopleListComponent implements OnInit {

  swCharacters: Array<StarWarsCharacter>;

  constructor(private api: SwapiService) {
  }

  ngOnInit() {
    this.api.getPeople().subscribe(response => {
      this.swCharacters = response.results;
    }, (error) => {
      console.log(error);
      this.swCharacters = [];
    });
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
