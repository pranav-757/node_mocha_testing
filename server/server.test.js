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
              .expect((res) =>{
                expect(res.body).toInclude({
                  name: "Pranav"
                });
             })
              .end(done);
});
