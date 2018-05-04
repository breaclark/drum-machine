import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBeatIntervalsComponent } from './list-beat-intervals.component';

describe('ListBeatIntervalsComponent', () => {
  let component: ListBeatIntervalsComponent;
  let fixture: ComponentFixture<ListBeatIntervalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListBeatIntervalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListBeatIntervalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
