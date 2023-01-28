import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAhorroComponent } from './add-ahorro.component';

describe('AddAhorroComponent', () => {
  let component: AddAhorroComponent;
  let fixture: ComponentFixture<AddAhorroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAhorroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddAhorroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
