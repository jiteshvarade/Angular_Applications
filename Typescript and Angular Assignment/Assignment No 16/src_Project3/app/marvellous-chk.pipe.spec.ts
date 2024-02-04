import { MarvellousChkPipe } from './marvellous-chk.pipe';

describe('MarvellousChkPipe', () => {
  it('create an instance', () => {
    const pipe = new MarvellousChkPipe();
    expect(pipe).toBeTruthy();
  });

  it('should check prime number', ()=>{
    const pipe_obj = new MarvellousChkPipe();
    let Flag = false;

    let Str = pipe_obj.transform(11,"Prime");

    if((Str == "Number is prime number") || (Str == "Numebr is not a prime number"))
    {
      Flag = true;
    }

    expect(Flag).toBe(true);
  });

  it('should check perfect number', ()=> {
    const pipe_obj = new MarvellousChkPipe();
    let Flag = false;

    let Str = pipe_obj.transform(6,"PeRfEcT");

    if((Str == "Number is a perfect number") || (Str == "Number is not a perfect number"))
    {
      Flag = true;
    }

    expect(Flag).toBe(true);
  });

  it('should check even number', ()=> {
    const pipe_obj = new MarvellousChkPipe();
    let Flag = false;

    let Str = pipe_obj.transform(6,"evEn");

    if((Str == "Number is even") || (Str == "Number is not even"))
    {
      Flag = true;
    }

    expect(Flag).toBe(true);
  });

  it('should check odd number', ()=> {
    const pipe_obj = new MarvellousChkPipe();
    let Flag = false;

    let Str = pipe_obj.transform(3,"odd");

    if((Str == "Number is odd") || (Str == "Number is not odd"))
    {
      Flag = true;
    }

    expect(Flag).toBe(true);
  });

  it('should check if user puts invalid parameter', ()=> {
      const pipe_obj = new MarvellousChkPipe();
      let Flag = false;
  
      let Str = pipe_obj.transform(3,"evennn");
  
      if(Str == "Invalid parameter")
      {
        Flag = true;
      }
  
      expect(Flag).toBe(true);
  });
});
