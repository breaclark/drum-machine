import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManipulateBeatComponent } from './manipulate-beat.component';

describe('PlayBeatComponent', () => {
  let component: ManipulateBeatComponent;
  let fixture: ComponentFixture<ManipulateBeatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManipulateBeatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManipulateBeatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
