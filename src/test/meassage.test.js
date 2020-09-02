

import chai, { assert, should, expect} from 'chai';
import chaihttp from "chai-http";
import app from '../index';
import mongo from 'mongoose';
import bodyParser from "body-parser";
app.use(bodyParser.json());

chai.use(chaihttp);

describe("create  message", ()=>{

    beforeEach(function () {
        mongo.connect("mongodb+srv://patrick:123blog@blog-api.jg7ki.mongodb.net/blog-api?retryWrites=true&w=majority",
 { useNewUrlParser: true, useUnifiedTopology: true })
    });

    afterEach(function () {
        mongo.disconnect();
    })

     it("create messages", (done) =>{
         const message={
            names:"irankunda",
            email:"irankunda@gmail.com",
            phone:"0788362377",
            message:"we meet at 11:00"
         }
         chai.request(app)
         .post('/contacts')
         .send(message)
         .end((err, res)=>{
             assert.equal(err, null);
             expect(res).to.have.status(200);
             done();
         })
         });
    it("get all messages", (done)=>{
        chai.request(app)
        .get('/contacts')
        .end((err,res)=>{
            assert.equal(err, null);
            expect(res).to.have.status(200);
            done();
        })
    } );

    it("get  messages by id", (done)=>{
        chai.request(app)
        .get('/contacts/5f46a8b44bfc8b220847784c')
        .end((err,res)=>{
            assert.equal(err, null);
            expect(res).to.have.status(200);
            done();
        })
    } );

    it("update  messages by id", (done)=>{
        const message={
            propName: "name",
            value: "Gasongo"
        }
        chai.request(app)
        .patch('/contacts/5f46a8b44bfc8b220847784c')
        .send(message)
        .end((err,res)=>{
            assert.equal(err, null);
            expect(res).to.have.status(200);
            done();
        })
    } );
    
    it(" Delete  messages by id", (done)=>{
        chai.request(app)
        .delete('/contacts/5f46a8b44bfc8b220847784c')
        .end((err,res)=>{
            assert.equal(err, null);
            expect(res).to.have.status(500);
            done();
        })
    } );
     });






