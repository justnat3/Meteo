import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatFormeComponent } from './mat-forme.component';

describe('MatFormeComponent', () => {
  let component: MatFormeComponent;
  let fixture: ComponentFixture<MatFormeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatFormeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatFormeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
