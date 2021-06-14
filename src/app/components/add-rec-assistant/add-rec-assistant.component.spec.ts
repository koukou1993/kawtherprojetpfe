import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRecAssistantComponent } from './add-rec-assistant.component';

describe('AddRecAssistantComponent', () => {
  let component: AddRecAssistantComponent;
  let fixture: ComponentFixture<AddRecAssistantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRecAssistantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRecAssistantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
