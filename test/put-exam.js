// //During the test the env variable is set to test
// process.env.NODE_ENV = 'test';

// let mongoose = require("mongoose");
// let Exam = require('../app/models/exam');



// //Require the dev-dependencies
// let chai = require('chai');
// let chaiHttp = require('chai-http');
// let server = require('../server');
// let should = chai.should();
//  /*
//   * Test the /PUT/:id route
//   */
//   describe('/PUT/:id exam', () => {
// 	  it('it should UPDATE a exam given the id', (done) => {
// 	  	let exam = new Exam({
//             title:"Question Title 1",
//             question:"the question goes here",
//             options: [
//                 {
//                     text:"option a element"
//                 },
//                 {
//                     text:"option b element"
//                 },
//                 {
//                     text:"option c element"
//                 },
//                 {
//                     text:"option d element "
//                 }
//             ],
//             answer: "options.optionB",
//             level: 2,
//             subject: "the question subject goes here",
//             duration:60,
//             icon: "image2.png",
//             instruction: [
//                 "the instruction for the question goes here",
//                 "the instruction for the question goes here"
//             ],
//             explanation:"the explanation 2 goes here",
//             trial: 2
//         })
// 	  	exam.save((err, exam) => {
// 				chai.request(server)
// 			    .put('/exam/' + exam.id)
// 			    .send({
//             title:"Question Title 1",
//             question:"the question goes here",
//             options: [
//                 {
//                     text:"option a element"
//                 },
//                 {
//                     text:"option b element"
//                 },
//                 {
//                     text:"option c element"
//                 },
//                 {
//                     text:"option d element "
//                 }
//             ],
//             answer: "options.optionB",
//             level: 2,
//             subject: "the question subject goes here",
//             duration:60,
//             icon: "image2.png",
//             instruction: [
//                 "the instruction for the question goes here",
//                 "the instruction for the question goes here"
//             ],
//             explanation:"the explanation 2 goes here",
//             trial: 0
//         })
// 			    .end((err, res) => {
// 				  	res.should.have.status(200);
// 				  	res.body.should.be.a('object');
// 				  	res.body.should.have.property('message').eql('Exam updated!');
// 				  	res.body.Exam.should.have.property('trial').eql(0);
// 			      done();
// 			    });
// 		  });
// 	  });
//   });
