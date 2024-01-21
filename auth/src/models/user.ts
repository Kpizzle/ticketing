import mongoose from 'mongoose';
import { Password } from '../services/password';

// An interface the describes the properties to create a user model

interface userAttrs {
  email: string;
  password: String;
}

//Interface that describes the properties that the user model has
interface UserModel extends mongoose.Model<UserDoc> {
  build(attrs: userAttrs): UserDoc;
}

//Interface that a describes what the properties that a user document has
interface UserDoc extends mongoose.Document {
  email: String;
  password: String;
}

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

userSchema.pre('save', async function (done) {
  if (this.isModified('password')) {
    const hashed = await Password.toHash(this.get('password'));
    this.set('password', hashed);
  }
  done();
});

userSchema.statics.build = (attrs: userAttrs) => {
  return new User(attrs);
};

const User = mongoose.model<UserDoc, UserModel>('User', userSchema);

export { User };
