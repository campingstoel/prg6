import mongoose from 'mongoose';

// Connect to MongoDB
mongoose.connect('mongodb://localhost/todolist', { useNewUrlParser: true });
mongoose.connection.on('connected', () => {
    console.log('MongoDB connection established');
});
// Set up body parser middleware

// Define a schema for the documents in the collection
const itemSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    deadline: {
        type: String,
        required: true,
    },
    completed: {
        type: Boolean,
        default: false,
    },
    versionKey: false
});

// Create a model from the schema
const Item = mongoose.model('Item', itemSchema);

export { Item };