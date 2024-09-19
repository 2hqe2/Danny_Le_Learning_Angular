import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GemListItemComponent } from './gem-list-item.component';

describe('GemListItemComponent', () => {
  let component: GemListItemComponent;
  let fixture: ComponentFixture<GemListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GemListItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GemListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
