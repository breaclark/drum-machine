import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeKitComponent } from './change-kit.component';

describe('ChangeKitComponent', () => {
  let component: ChangeKitComponent;
  let fixture: ComponentFixture<ChangeKitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeKitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeKitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
