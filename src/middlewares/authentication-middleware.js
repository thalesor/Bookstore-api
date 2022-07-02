/* eslint-disable no-console */
import httpStatus from 'http-status';
import * as jwt from 'jsonwebtoken';

import { unauthorizedError } from '../errors/unauthorized-error';
import { database } from '../config/database';


export async function authenticateToken(req, res, next) {
  const authHeader = req.header('Authorization');
  if (!authHeader) return generateUnauthorizedResponse(res);

  const token = authHeader.split(' ')[1];
  if (!token) return generateUnauthorizedResponse(res);

  try {
    const { userId } = jwt.verify(token, process.env.JWT_SECRET);

    const session = await database.find("sessions", {token: token})
    if (!session) return generateUnauthorizedResponse(res);

    req.userId = userId;

    return next();
  } catch (err) {
    return generateUnauthorizedResponse(res);
  }
}

function generateUnauthorizedResponse(res) {
  res.status(httpStatus.UNAUTHORIZED).send(unauthorizedError());
}

