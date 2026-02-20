import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/constants";
import ErrorHandler from "../utils/ErrorHandler";
import { Response } from "express";

interface Payload {
  id: string;
  name: string;
}

const generateToken = (res: Response, payload: Payload) => {
  if (!JWT_SECRET) {
    ErrorHandler.send(res, 500, "JWT Secret is not defined.");
  }

  const token = jwt.sign(
    {
      userId: payload.id,
      name: payload.name,
    },
    JWT_SECRET as string,
    {
      expiresIn: "7d",
    }
  );

  return token;
};

export default generateToken;
