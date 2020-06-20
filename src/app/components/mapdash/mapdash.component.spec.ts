import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapdashComponent } from './mapdash.component';

describe('MapdashComponent', () => {
  let component: MapdashComponent;
  let fixture: ComponentFixture<MapdashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapdashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapdashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
