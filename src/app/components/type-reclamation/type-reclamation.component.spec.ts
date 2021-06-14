import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeReclamationComponent } from './type-reclamation.component';

describe('TypeReclamationComponent', () => {
  let component: TypeReclamationComponent;
  let fixture: ComponentFixture<TypeReclamationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeReclamationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeReclamationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
