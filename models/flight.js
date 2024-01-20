import mongoose from "mongoose"

const Schema = mongoose.Schema

const ticketSchema = new Schema({
    seat: String,
    price: Number
  },{
    timestamps:true
  })

const flightSchema = new Schema({
    airline: {
        type: String,
        enum: ['American', 'Southwest', 'United', 'N/A'],
    },
    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
    },
    flightNo: {
        type: Number,
    },
    departs: {
        type: Date,
        default: Date.now
    },
    tickets: [ticketSchema],
    food: [{type: Schema.Types.ObjectId, ref: 'Meal'}]

}, {
    timestamps: true
})

const Flight = mongoose.model('Flight', flightSchema)

export {
    Flight
}