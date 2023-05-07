// dependencies
const mongoose = require('mongoose')
const { Schema } = mongoose

// schema
const bakerSchema = new Schema({
    name: { type: String, required: true },
    hasGluten: Boolean,
    image: { type: String, default: 'http://placehold.it/500x500.png' },
    baker: {
      type: Schema.Types.ObjectID,
      ref: 'Baker'
    }
})




// model and export
const Baker = mongoose.model('Baker', bakerSchema)
module.exports = Baker
