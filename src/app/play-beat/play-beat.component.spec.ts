import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayBeatComponent } from './play-beat.component';

describe('PlayBeatComponent', () => {
  let component: PlayBeatComponent;
  let fixture: ComponentFixture<PlayBeatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayBeatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayBeatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
