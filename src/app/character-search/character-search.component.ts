import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-character-search',
  templateUrl: './character-search.component.html',
  styleUrls: ['./character-search.component.scss']
})
export class CharacterSearchComponent implements OnInit {

  @Output() search = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }


  public handleInput(event: any) {
    this.search.emit(event.target.value);
  }

}
