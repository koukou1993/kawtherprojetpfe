import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GererRecClientComponent } from './gerer-rec-client.component';

describe('GererRecClientComponent', () => {
  let component: GererRecClientComponent;
  let fixture: ComponentFixture<GererRecClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GererRecClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GererRecClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
