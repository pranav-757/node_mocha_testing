const utils = require('./utils');
const expect = require('expect');

it('should add two numbers', () =>{
  var res = utils.add(33,12);
  if(res !== 45){
    throw new Error(`getting ans as ${res}`);
  }
});

it('should add two numbers asynchronusly', (done) =>{
  utils.asyncAdd(4,3, (sum)=>{
    expect(sum).toBe(7).toBeA('number');
    done();
  })
});

it('should add two numbers asynchronusly', (done) =>{
  utils.asyncSquare(5, (square)=>{
    expect(square).toBe(25).toBeA('number');  //assertions are being done inside
    done();                                   //callbacks of async functions
  })
});

it('should give square of num', () => {
  var res  = utils.square(23);
  console.log(`ans is ${res}`);
  if(res != 529) {
    throw new Error(`getting ans as ${res}`);
  }
  else {
    console.log('getting correct result');
  }
});

//output
/*  => console.log gets printed
✓ should add two numbers
ans is 529
getting correct result
✓ should give square of num
*/
