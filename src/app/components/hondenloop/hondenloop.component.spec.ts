import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule, MatSortModule, MatTableModule } from '@angular/material';

import { HondenloopComponent } from './hondenloop.component';

describe('HondenloopComponent', () => {
  let component: HondenloopComponent;
  let fixture: ComponentFixture<HondenloopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HondenloopComponent ],
      imports: [
        NoopAnimationsModule,
        MatPaginatorModule,
        MatSortModule,
        MatTableModule,
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HondenloopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
