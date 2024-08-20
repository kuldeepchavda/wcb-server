import mongoose  from "mongoose";
import bcrypt from "bcrypt";

const adminSchema =   mongoose.Schema({
  email: {
    type: String,
    required: [true, "Email is required"],
    trim: true,
    lowercase: true,
    validate: {
      validator: function (v) {
        return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(v);
      },
      message: (props) => `${props.value} is not a valid email address!`,
    },
  },
  password: {
    type: String,
  },
  isAdmin: {
    type:Boolean,
    default: true,
  },
  created: {
    type: Date,
    default: Date.now,
  },
});

adminSchema.pre("save", async function (next) {
  if (this.password) {
    if (this.isModified("password") || this.isNew) {
      const salt = await bcrypt.genSalt(10);
      this.password = await bcrypt.hash(this.password, salt);
    }
    next();
  }
});

adminSchema.methods.comparePassword = async (password) => {
  return bcrypt.compare(password, this.password);
};
const Admins = mongoose.model("Admins-testing1",adminSchema);

export default Admins