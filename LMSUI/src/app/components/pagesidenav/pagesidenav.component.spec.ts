import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesidenavComponent } from './pagesidenav.component';

describe('PagesidenavComponent', () => {
  let component: PagesidenavComponent;
  let fixture: ComponentFixture<PagesidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagesidenavComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PagesidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
