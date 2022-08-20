const mongoose =require('mongoose')



const orderSchema = new mongoose.Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'user',
      },
      adress: {
        type: String,
        required: true,
      },
      items: [
        {
          type: Schema.Types.ObjectId,
          ref: 'product',
        },
      ],
      createdAt: {
        type: Date,
        default: Date.now,
      },

})

const Ordner = mongoose.model('Ordner',orderSchema)

module.exports =Ordner