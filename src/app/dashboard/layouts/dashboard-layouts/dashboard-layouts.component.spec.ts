import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardLayoutsComponent } from './dashboard-layouts.component';

describe('DashboardLayoutsComponent', () => {
  let component: DashboardLayoutsComponent;
  let fixture: ComponentFixture<DashboardLayoutsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardLayoutsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardLayoutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
