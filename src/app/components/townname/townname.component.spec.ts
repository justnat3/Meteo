import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TownnameComponent } from './townname.component';

describe('TownnameComponent', () => {
  let component: TownnameComponent;
  let fixture: ComponentFixture<TownnameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TownnameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TownnameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
