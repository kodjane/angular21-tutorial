import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataBiding } from './data-biding';

describe('DataBiding', () => {
  let component: DataBiding;
  let fixture: ComponentFixture<DataBiding>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataBiding],
    }).compileComponents();

    fixture = TestBed.createComponent(DataBiding);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
