import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAccoutComponent } from './user-accout.component';

describe('UserAccoutComponent', () => {
  let component: UserAccoutComponent;
  let fixture: ComponentFixture<UserAccoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserAccoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAccoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
