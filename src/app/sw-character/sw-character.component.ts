import { Component, Input, OnInit } from '@angular/core';

import { StarWarsCharacter } from '../models/star-wars-character.model';

// tslint:disable:component-selector
@Component({
  selector: '[app-sw-character]',
  templateUrl: './sw-character.component.html',
  styleUrls: ['./sw-character.component.scss']
})
export class SwCharacterComponent implements OnInit {

  @Input()
  public character: StarWarsCharacter;
  constructor() { }

  ngOnInit() {
  }

}
