module.exports.add = (a,b) => a+b;

module.exports.square = (x) => x*x;

module.exports.asyncAdd = (a,b, callback) => {
  setTimeout(()=>{
    callback(a+b);  //callback will be excuted once setTimeout is up
  }, 400 );
};

module.exports.asyncSquare = (x, callback) =>{
  setTimeout( ()=>{
    callback(x*x);
  },600);
};

module.exports.setName = (user,fullName) => {
  var name = fullName.split(' ');
  user.fname = name[0];
  user.lname = name[1];
};
