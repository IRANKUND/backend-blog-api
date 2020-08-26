import chai, {assert} from 'chai';
import chaiHttp from 'chai-http';
import server from '../index';
import { response } from 'express';

chai.should();
chai.use(chaiHttp);

describe('Tests to API user routes', () => {
	it('(200 Success) GET All  /users', done => {
		chai.request(server)
			.get('/user')
			.end((err, res) => {
				if (err) done(err);
				assert.equal(res.status, 200);
				done();
			});
	});
	it('(200 Success) GET User by id /users/:id', done => {
		chai.request(server)
			.get('/user/:id')
			.end((err, res) => {
				if (err) done(err);
				assert.equal(res.status, 200);
				done();
			});
	});
	it('(200 Success) POST Add users', done => {
		chai.request(server)
			.post('/user')
			.end((err, res) => {
				if (err) done(err);
				assert.equal(res.status, 200);
				done();
			});
	});
	it('(200 Success) PUT UPDATE users route', done => {
		chai.request(server)
			.put('/user/:id')
			.end((err, res) => {
				if (err) done(err);
				assert.equal(res.status, 200);
				done();
			});
	});
	it('(200 Success) Delete users route', done => {
		chai.request(server)
			.delete('/user/:id')
			.end((err, res) => {
				if (err) done(err);
				assert.equal(res.status, 200);
				done();
			});
	});
});

// describe('Tests to API user routes', () =>{
// 	it('it should get all Users', (done) =>{
// 		chai.request(server).get('/users')
// 		.end((err, response)=>{
// 			response.should.have.status(200);
// 			response.body.should.be.a('array');
// 			response.body.length.should.be.eq(5);
// 			done();
// 		})
// 	});


//})






