import chai from 'chai';
import chaihttp from 'chai-http';
import server from '../index';


// Assertion style 
chai.should();

chai.use(chaihttp);


describe('Users API ', () => {


    describe("GET /users", () => {
        it("it should get all users ", (done)=>{
            chai.request(server).get("/users")
            .end((err, response)=>{
                response.should.have.status(200);
                response.body.should.be.a('array');
                response.body.length.should.be.eq(3);
                done();
            })
        });

    } )



});