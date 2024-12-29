import mongoose from 'mongoose';

const gameSessionSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  questions: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Question',
  }],
  startTime: {
    type: Date,
    required: true,
  },
  endTime: Date,
  status: {
    type: String,
    enum: ['pending', 'active', 'completed'],
    default: 'pending',
  },
  players: [{
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    score: {
      type: Number,
      default: 0,
    },
    answers: [{
      question: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Question',
      },
      answer: String,
      timeSpent: Number,
      isCorrect: Boolean,
      points: Number,
    }],
  }],
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
}, {
  timestamps: true,
});

const GameSession = mongoose.model('GameSession', gameSessionSchema);
export default GameSession;