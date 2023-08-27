import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatacardsComponent } from './datacards.component';

describe('DatacardsComponent', () => {
  let component: DatacardsComponent;
  let fixture: ComponentFixture<DatacardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DatacardsComponent]
    });
    fixture = TestBed.createComponent(DatacardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
