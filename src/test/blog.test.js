
import chai, {assert} from 'chai';
import chaiHttp from 'chai-http';
import server from '../index';
import { response } from 'express';

chai.should();
chai.use(chaiHttp);



describe('Tests to API contact  routes', () => {
	it('(200 Success) GET All  blogs', done => {
		chai.request(server)
			.get('/blog')
			.end((err, res) => {
				if (err) done(err);
				assert.equal(res.status, 200);
				done();
			});
	});
	it('(200 Success) GET blogs by id ', done => {
		chai.request(server)
			.get('/blog/:id')
			.end((err, res) => {
				if (err) done(err);
				assert.equal(res.status, 200);
				done();
			});
	});
	it('(200 Success) POST Add blogs', done => {
		chai.request(server)
			.post('/blog')
			.end((err, res) => {
				if (err) done(err);
				assert.equal(res.status, 200);
				done();
			});
	});
	it('(200 Success) PUT UPDATE blogs ', done => {
		chai.request(server)
			.put('/blog/:id')
			.end((err, res) => {
				if (err) done(err);
				assert.equal(res.status, 200);
				done();
			});
	});
	it('(200 Success) Delete blog ', done => {
		chai.request(server)
			.delete('/blog/:id')
			.end((err, res) => {
				if (err) done(err);
				assert.equal(res.status, 200);
				done();
			});
	});
});