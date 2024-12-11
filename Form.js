const mongoose = require('mongoose');
const QuestionSchema = new mongoose.Schema({
    type: {type: String, required: type},
    questionsText: { type: String, required: true},
    imageUrl: {type: String },
    options: [{type: String}]

});
const FormSchema = new mongoose.Schema({
    title: { type: String, Required: type },
    headerImage: {type: String},
    Questions: [QuestionSchema],
    responses: [{ type: Object }]
});
module.exports = mongoose.model('Form', FormSchema);
