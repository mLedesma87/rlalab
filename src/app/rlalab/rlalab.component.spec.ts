import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RlalabComponent } from './rlalab.component';

describe('RlalabComponent', () => {
  let component: RlalabComponent;
  let fixture: ComponentFixture<RlalabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RlalabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RlalabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
