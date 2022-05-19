import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntregaDeleteComponent } from './entrega-delete.component';

describe('EntregaDeleteComponent', () => {
  let component: EntregaDeleteComponent;
  let fixture: ComponentFixture<EntregaDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntregaDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntregaDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
