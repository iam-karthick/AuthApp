import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvantsComponent } from './evants.component';

describe('EvantsComponent', () => {
  let component: EvantsComponent;
  let fixture: ComponentFixture<EvantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
