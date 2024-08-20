import dotenv from "dotenv";
dotenv.config();

import jwt from "jsonwebtoken";

const getJWT = (email) => {
  return jwt.sign({ email }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
};

const getJWTData = (token) => {
  const data = jwt.verify(token, process.env.JWT_SECRET); 
  return data;
};
export default { getJWT, getJWTData };
