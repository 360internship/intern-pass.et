//During the test the env variable is set to test
process.env.NODE_ENV = 'test';

// let mongoose = require("mongoose");
let Exam = require('../app/models/exam');



//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();


chai.use(chaiHttp);

//Our parent block
describe('Exams', () => {
	beforeEach((done) => { //Before each test we empty the database
		Exam.remove({}, (err) => {
		   done();
		});
	});

});
