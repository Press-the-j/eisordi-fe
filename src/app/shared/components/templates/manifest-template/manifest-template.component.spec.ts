import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManifestTemplateComponent } from './manifest-template.component';

describe('ManifestTemplateComponent', () => {
  let component: ManifestTemplateComponent;
  let fixture: ComponentFixture<ManifestTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManifestTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManifestTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
