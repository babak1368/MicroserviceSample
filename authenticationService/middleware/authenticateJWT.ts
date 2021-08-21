import jwt from 'jsonwebtoken';
import { Request, Response } from 'express';
import config from '../config';

const authenticateJWT = (req: Request, res: Response, next: any) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(' ')[1];

    jwt.verify(token, config.jwtSecret, (err: any, user: any) => {
      if (err) return res.sendStatus(403);
      next();
    });
  } else res.sendStatus(401);
};

export default authenticateJWT;
