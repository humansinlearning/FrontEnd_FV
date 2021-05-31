import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisteredUserDetailsComponent } from './registered-user-details.component';

describe('RegisteredUserDetailsComponent', () => {
  let component: RegisteredUserDetailsComponent;
  let fixture: ComponentFixture<RegisteredUserDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisteredUserDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisteredUserDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
