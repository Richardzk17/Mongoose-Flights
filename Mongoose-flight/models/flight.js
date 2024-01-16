import mongoose from "mongoose"

const Schema = mongoose.Schema

const flightSchema = new Schema({
    airline: {
        type: string,
        enum: ['American', 'Southwest', 'United']
    },
    airpot: {
        
    }
})

const Flight = mongoose.model('Flight', flightSchema)

export {
    Flight
}