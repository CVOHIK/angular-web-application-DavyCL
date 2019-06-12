import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule, MatSortModule, MatTableModule } from '@angular/material';

import { ZitmeubilairComponent } from './zitmeubilair.component';

describe('ZitmeubilairComponent', () => {
  let component: ZitmeubilairComponent;
  let fixture: ComponentFixture<ZitmeubilairComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZitmeubilairComponent ],
      imports: [
        NoopAnimationsModule,
        MatPaginatorModule,
        MatSortModule,
        MatTableModule,
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZitmeubilairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
