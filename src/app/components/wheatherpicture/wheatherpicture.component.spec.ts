import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WheatherpictureComponent } from './wheatherpicture.component';

describe('WheatherpictureComponent', () => {
  let component: WheatherpictureComponent;
  let fixture: ComponentFixture<WheatherpictureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WheatherpictureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WheatherpictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
