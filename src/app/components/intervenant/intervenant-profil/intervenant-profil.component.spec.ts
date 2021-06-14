import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntervenantProfilComponent } from './intervenant-profil.component';

describe('IntervenantProfilComponent', () => {
  let component: IntervenantProfilComponent;
  let fixture: ComponentFixture<IntervenantProfilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntervenantProfilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntervenantProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
