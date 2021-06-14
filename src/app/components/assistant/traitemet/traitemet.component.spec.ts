import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TraitemetComponent } from './traitemet.component';

describe('TraitemetComponent', () => {
  let component: TraitemetComponent;
  let fixture: ComponentFixture<TraitemetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TraitemetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TraitemetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
