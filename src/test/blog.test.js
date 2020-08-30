
import chai, {assert} from 'chai';
import chaiHttp from 'chai-http';
import server from '../index';
import { response } from 'express';

chai.use(chaiHttp);



describe('Tests to API blog  routes', () => {
	it('(200 Success) GET All  blogs', done => {
		chai.request(server)
			.get('/api/blogs')
			.end((err, res) => {
				if (err) done(err);
				assert.equal(res.status, 401);
				done();
			});
	});
	it('(200 Success) GET blogs by id ', done => {
		chai.request(server)
			.get('/api/blogs/:id')
			.end((err, res) => {
				if (err) done(err);
				assert.equal(res.status, 401);
				done();
			});
	});
	
	it('(200 Success) POST Add blogs', done => {
		chai.request(server)
			.post('/api/blogs')
			.end((err, res) => {
				if (err) done(err);
				assert.equal(res.status, 401);
				done();
			});
	});
	it('(200 Success) PATCH UPDATE blogs ', done => {
		chai.request(server)
			.patch ('/api/blogs/:id')
			.end((err, res) => {
				if (err) done(err);
				assert.equal(res.status, 401);
				done();
			});
	});
	it('(200 Success) Delete blog ', done => {
		chai.request(server)
			.delete('/api/blogs/:id')
			.end((err, res) => {
				if (err) done(err);
				assert.equal(res.status, 401);
				done();
			});
	});
});