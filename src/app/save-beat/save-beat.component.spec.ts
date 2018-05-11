import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveBeatComponent } from './save-beat.component';

describe('SaveBeatComponent', () => {
  let component: SaveBeatComponent;
  let fixture: ComponentFixture<SaveBeatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaveBeatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveBeatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
