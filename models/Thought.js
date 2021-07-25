const { Schema, model } = require('mongoose');

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minLength: 1,
            maxLength: 280
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
        userName: {
            type: String,
            required: true,
        },
        reactions: [reactionSchema],
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false
    }
);

//virtuals first then exporting process
// get total count of comments and replies on retrieval
thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});


// create the user model using the userSchema
const Thought = model('Thought', thoughtSchema);

// export the user model
module.exports = Thought;