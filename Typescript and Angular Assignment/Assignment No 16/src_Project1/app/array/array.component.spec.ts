import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrayComponent } from './array.component';

describe('ArrayComponent', () => {
  let component: ArrayComponent;
  let fixture: ComponentFixture<ArrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArrayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should accept array of integers and return addition of all elements', () => {
    const obj = new ArrayComponent();
    let Flag = false;
    let iCnt = 0;
    let Sum = 0;

    if(obj.Arr.length > 0)
    {
      Flag = true;
    }
    expect(Flag).toBe(true);
    Flag = false;

    for(iCnt = 0; iCnt < obj.Arr.length; iCnt++)
    {
      Sum+=obj.Arr[iCnt];
    }

    if(Sum != 0)
    {
      Flag = true;
    }

    expect(Flag).toBe(true);
  });
});
