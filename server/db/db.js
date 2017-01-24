var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoURI = 'mongodb://beth:beth@ds127429.mlab.com:27429/heroku_xcgmwn6h'
mongoose.connect(MONGODB_URI || mongoURI);

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

var questionSchema = mongoose.Schema({
  question: { type: String, required: true, index: { unique: true } },
  answer1: { type: String, required: true },
  answer2: { type: String, required: true },
  answer3: { type: String, required: true },
  answer4: { type: String, required: true }
});

var Question = mongoose.model('Question', questionSchema);

var dbQueryPromise = Question.find({}).exec();

var getData = function(request, response) {
  dbQueryPromise.then(function(responses) {
    response.status(200).send(responses);
  })
};

//var getDataAsync = Promise.promisify(getData);



// var newQuestion = new Question({
//   question: 'which Putin are you?',
//   answer1: 'AnswerA',
//   answer2: 'AnswerB',
//   answer3: 'AnswerC',
//   answer4: 'AnswerD'
// })

// newQuestion.save(function(err) {
//   if (err) throw err;
//   console.log('SUCCESS!!!!!')
// })



module.exports = {
  Question: Question,
  getData: getData,
  db: db
}

