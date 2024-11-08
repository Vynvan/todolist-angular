import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeispielComponent } from './beispiel.component';

describe('BeispielComponent', () => {
  let component: BeispielComponent;
  let fixture: ComponentFixture<BeispielComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BeispielComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BeispielComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
