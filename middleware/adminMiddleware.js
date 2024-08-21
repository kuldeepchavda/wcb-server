import Admins from "../models/Admin.js";
import JWTOperation from "../utils/jwtToken.js";
const adminMiddleware = async (req, res, next) => {
  // const jwtToken = req.header("jwt");
  // const adminData = JWTOperation.getJWTData(jwtToken);
  // const email = adminData.email;
  // const adminExists = await Admins.findOne({ email });
  // console.log("admin data", adminExists);
  // if (adminExists) {
    next();
  // } else {
  //   res.status(400).json({ state: "authenticate yourself!!" });
  // }
};

export default adminMiddleware;
