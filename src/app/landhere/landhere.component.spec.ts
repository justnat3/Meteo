import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandhereComponent } from './landhere.component';

describe('LandhereComponent', () => {
  let component: LandhereComponent;
  let fixture: ComponentFixture<LandhereComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandhereComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandhereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
