import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlesTopComponent } from './articles-top.component';

describe('ArticlesTopComponent', () => {
  let component: ArticlesTopComponent;
  let fixture: ComponentFixture<ArticlesTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticlesTopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlesTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
