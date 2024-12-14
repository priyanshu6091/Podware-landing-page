import mongoose from 'mongoose';

const earlyAccessSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true
  },
  type: {
    type: String,
    required: true,
    enum: ['user', 'podcaster']
  },
  status: {
    type: String,
    default: 'pending',
    enum: ['pending', 'approved', 'rejected']
  }
}, {
  timestamps: true
});

const EarlyAccess = mongoose.model('EarlyAccess', earlyAccessSchema);

export default EarlyAccess;