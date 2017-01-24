var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoURI = 'mongodb://beth:beth@ds127429.mlab.com:27429/heroku_xcgmwn6h'
mongoose.connect(process.env.MONGODB_URI || mongoURI);

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

var questionSchema = mongoose.Schema({
  question: { type: String, required: true, index: { unique: true } },
  resultA: { type: String, required: true },
  explanationA: { type: String, required: true },
  resultB: { type: String, required: true },
  explanationB: { type: String, required: true },
  resultC: { type: String, required: true },
  explanationC: { type: String, required: true },
  resultD: { type: String, required: true },
  explanationD: { type: String, required: true }
});

var Question = mongoose.model('Question', questionSchema);

var dbQueryPromise = Question.find({}).exec();

var getData = function(request, response) {
  dbQueryPromise.then(function(responses) {
    response.status(200).send(responses);
  })
};


// var newQuestion = new Question({
//   question: 'Which Putin are You?',
//   resultA: 'You\'re Angry KGP Assassin Putin!',
//   explanationA: 'Yes, the Soviet Union disintegrated, and yes, the KGB has officially disbanded, but who are we kidding? You could still end a life with nothing but a teacup and a nesting doll.',
//   resultB: 'You\'re Soft & Snuggly Koala Putin!',
//   explanationB: 'Everyone has a gooey side, and Putin\'s no exception. As Soft & Snuggly Koala Putin, your heart is full and your arms are wide open. All small and defenseless states welcome!',
//   resultC: 'You\'re Angsty Emoting Motherland Putin!',
//   explanationC: 'You\'ve seen (and done) some bad stuff, no doubt, but it was all for love of flag and country. Those aren\'t tears in your eyes: they\'re cathartic raindrops cleansing the Motherland of her sins.',
//   resultD: 'You\'re Sexy Shirtless Horseback Putin!',
//   explanationD: 'Hey, if you got it, flaunt it. Whether you\'re practicing Judo, tranquilizing tigers, piloting a helicopter over a forest fire, or just riding a horse shirtless in the wilderness, neither men nor women can get enough of you.'
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

