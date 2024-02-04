import { MyAddPipe } from './my-add.pipe';

describe('MyAddPipe', () => {
  it('create an instance', () => {
    const pipe = new MyAddPipe();
    expect(pipe).toBeTruthy();
  });

  it('should return addition of two numbers', () => {
    const pipe_obj = new MyAddPipe();
    let Ans = 0;

    Ans = pipe_obj.transform(10,20);

    expect(Ans).toBe(30);
  });
});
