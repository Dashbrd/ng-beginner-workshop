import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwCharacterComponent } from './sw-character.component';

describe('SwCharacterComponent', () => {
  let component: SwCharacterComponent;
  let fixture: ComponentFixture<SwCharacterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwCharacterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
