const mongoose = requires('mongoose');

const animalsSchema = new mongoose.Schema(
    {
        species: {
            type: String,
            required: [true],
            unique: true
        },
        extinct: {
            type: Boolean,
            required: true
        },
        location: {
            type: String,
            required: true
        },
        lifeExpectancy: {
            type: Number,
            required: true
        }
    }

)