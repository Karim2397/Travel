import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelpageComponent } from './travelpage.component';

describe('TravelpageComponent', () => {
  let component: TravelpageComponent;
  let fixture: ComponentFixture<TravelpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TravelpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TravelpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
