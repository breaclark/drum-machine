import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadSavedBeatComponent } from './load-saved-beat.component';

describe('LoadSavedBeatComponent', () => {
  let component: LoadSavedBeatComponent;
  let fixture: ComponentFixture<LoadSavedBeatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadSavedBeatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadSavedBeatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
