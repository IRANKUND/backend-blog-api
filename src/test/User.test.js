import chai, {assert} from 'chai';
import chaiHttp from 'chai-http';
import server from '../index';
import { response } from 'express';


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






