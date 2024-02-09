require('dotenv').config();
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const myURI = `mongodb+srv://mitchel1wen:${process.env.MONGOD_PASS}@cluster0.o5q5dgk.mongodb.net/?retryWrites=true&w=majority`;
mongoose.connect(myURI);
mongoose.connection.once('open', () => {
  console.log('MongoDB Connected');
});

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  certificates: [{ type: Schema.Types.ObjectId, ref: 'Certificate' }],
});

const certificateSchema = new Schema({
  title: { type: String, required: true },
  active: { type: Boolean, default: true },
  userid: { type: Schema.Types.ObjectId, ref: 'Users', required: true },
});

const sessionSchema = new Schema({
  cookieId: { type: String, required: true, unique: true },
  createdAt: { type: Date, expires: 50000, default: Date.now },
});

const User = mongoose.model('User', userSchema);
const Certificate = mongoose.model('Certificate', certificateSchema);
const Session = mongoose.model('Session', sessionSchema);

module.exports = { User, Certificate, Session };
