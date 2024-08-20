import Admins from "../models/Admin.js";
import JWTOperations from "../utils/jwtToken.js";
const signUpFunction = async (req, res) => {
  const { email, password } = req.body;
  const adminExists = await Admins.findOne({ email });
  if (adminExists) {
    res.status(400).json("The email id already exists");
  }

  const createdAdmin = await Admins.create(req.body);
  if (createdAdmin) {
    res.status(200).json({
      jwtToken: JWTOperations.getJWT(email),
      created: true,
      data: createdAdmin,
    });
  } else {
    res.status(400).json({
      create: false,
      message: "Backend Error!",
    });
  }
};

export default {
  signUpFunction,
};
