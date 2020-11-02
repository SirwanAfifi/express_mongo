import { Express, Request, Response } from "express";
import User from "../models/User";

export default (app: Express) => {
  app.get("/", async (request: Request, response: Response) => {
    const user = await User.find({});
    response.json(user);
  });
};
