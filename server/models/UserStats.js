import mongoose from 'mongoose';

const categoryPerformanceSchema = new mongoose.Schema({
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  },
  correctAnswers: {
    type: Number,
    default: 0
  },
  totalQuestions: {
    type: Number,
    default: 0
  }
}, { _id: false });

const userStatsSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    unique: true
  },
  gamesPlayed: {
    type: Number,
    default: 0
  },
  totalScore: {
    type: Number,
    default: 0
  },
  averageScore: {
    type: Number,
    default: 0
  },
  correctAnswers: {
    type: Number,
    default: 0
  },
  wrongAnswers: {
    type: Number,
    default: 0
  },
  fastestResponse: {
    type: Number,
    default: null
  },
  categoryPerformance: [categoryPerformanceSchema],
  lastPlayed: {
    type: Date,
    default: null
  }
}, {
  timestamps: true
});

// Calculate average score before saving
userStatsSchema.pre('save', function(next) {
  if (this.gamesPlayed > 0) {
    this.averageScore = this.totalScore / this.gamesPlayed;
  }
  next();
});

const UserStats = mongoose.model('UserStats', userStatsSchema);
export default UserStats;