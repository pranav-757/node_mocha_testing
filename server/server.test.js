const request = require('supertest');
var expect = require('expect');
var app = require('./server').app;

it('should test response',(done)=>{
  /*request(app).get('/')
              .expect(404)
              .expect({                  // this matches the response exactly
                message: 'page not found' //that it should be JSON obj with
              })                        //message property and specified value
              .end(done);*/

  request(app).get('/')
              .expect(404)
              .expect((res) =>{   //instead of dirct argumnet expect is taking
                expect(res.body).toInclude({ // a function that will do assertions
                  name: "Pranav"
                });
             })
              .end(done);
});
