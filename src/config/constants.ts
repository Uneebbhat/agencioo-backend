import { config } from "dotenv";

config();

const PORT = process.env.PORT;
const DATABASE_URL = process.env.DATABASE_URL as string;
const JWT_SECRET = process.env.JWT_SECRET as string;
const NODE_PORT = process.env.NODEMAILER_PORT;
const NODE_HOST = process.env.NODEMAILER_HOST;
const NODE_SERVICE = process.env.NODEMAILER_SERVICE;
const NODE_USER = process.env.NODEMAILER_USER;
const NODE_PASS = process.env.NODEMAILER_PASS;

export {
  PORT,
  DATABASE_URL,
  JWT_SECRET,
  NODE_PORT,
  NODE_HOST,
  NODE_SERVICE,
  NODE_USER,
  NODE_PASS,
};
