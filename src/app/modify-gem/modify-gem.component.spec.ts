import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyGemComponent } from './modify-gem.component';

describe('ModifyGemComponent', () => {
  let component: ModifyGemComponent;
  let fixture: ComponentFixture<ModifyGemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModifyGemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifyGemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
