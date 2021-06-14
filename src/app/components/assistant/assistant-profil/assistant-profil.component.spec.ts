import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssistantProfilComponent } from './assistant-profil.component';

describe('AssistantProfilComponent', () => {
  let component: AssistantProfilComponent;
  let fixture: ComponentFixture<AssistantProfilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssistantProfilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssistantProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
