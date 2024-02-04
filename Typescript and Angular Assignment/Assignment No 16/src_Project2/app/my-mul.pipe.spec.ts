import { MyMulPipe } from './my-mul.pipe';

describe('MyMulPipe', () => {
  it('create an instance', () => {
    const pipe = new MyMulPipe();
    expect(pipe).toBeTruthy();
  });

  it('should return multiplication of two numbers', () => {
    const pipe_obj= new MyMulPipe();

    let Ans = pipe_obj.transform(10,20);

    expect(Ans).toBe(200);
  });  
});
