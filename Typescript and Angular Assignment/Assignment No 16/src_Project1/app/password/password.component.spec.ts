import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordComponent } from './password.component';

describe('PasswordComponent', () => {
  let component: PasswordComponent;
  let fixture: ComponentFixture<PasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PasswordComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain minimum 2 capital characters',()=>{
    let obj = new PasswordComponent();
    let Count = 0;
    let iCnt = 0;
    let Flag = false;

    for(iCnt = 0; iCnt < obj.Password.length; iCnt++)
    {
      if((obj.Password[iCnt] >= "A") && (obj.Password[iCnt] <= "Z"))
      {
        Count++;
      }
    }

    if(Count >= 2)
    {
      Flag = true;
    }

    expect(Flag).toBe(true);
    
  });

  it('should contain minimum 3 small characters',()=>{
    let obj = new PasswordComponent();
    let Count = 0;
    let iCnt = 0;
    let Flag = false;

    for(iCnt = 0; iCnt < obj.Password.length; iCnt++)
    {
      if((obj.Password[iCnt] >= "a") && (obj.Password[iCnt] <= "z"))
      {
        Count++;
      }
    }

    if(Count >= 3)
    {
      Flag = true;
    }

    expect(Flag).toBe(true);
    
  });

  it('should contain minimum 2 digits',()=>{
    let obj = new PasswordComponent();
    let Count = 0;
    let iCnt = 0;
    let Flag = false;

    for(iCnt = 0; iCnt < obj.Password.length; iCnt++)
    {
      if((obj.Password[iCnt] >= "0") && (obj.Password[iCnt] <= "9"))
      {
        Count++;
      }
    }

    if(Count >= 2)
    {
      Flag = true;
    }

    expect(Flag).toBe(true);
    
  });

  it('should contain minimum 1 special symbol',()=>{
    const obj = new PasswordComponent();
    
    const hasSpecialSymbol = /\W/.test(obj.Password);

    expect(hasSpecialSymbol).toBe(true);
    
  });
});
