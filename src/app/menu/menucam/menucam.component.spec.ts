import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenucamComponent } from './menucam.component';

describe('MenucamComponent', () => {
  let component: MenucamComponent;
  let fixture: ComponentFixture<MenucamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MenucamComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MenucamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
