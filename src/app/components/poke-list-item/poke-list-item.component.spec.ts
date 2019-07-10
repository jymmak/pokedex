import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeListItemComponent } from './poke-list-item.component';

describe('PokeListItemComponent', () => {
  let component: PokeListItemComponent;
  let fixture: ComponentFixture<PokeListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokeListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokeListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
