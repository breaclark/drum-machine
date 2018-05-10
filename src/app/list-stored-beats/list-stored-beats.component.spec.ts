import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListStoredBeatsComponent } from './list-stored-beats.component';

describe('ListStoredBeatsComponent', () => {
  let component: ListStoredBeatsComponent;
  let fixture: ComponentFixture<ListStoredBeatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListStoredBeatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListStoredBeatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
