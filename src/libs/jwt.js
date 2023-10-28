import { TOKEN_SECRET } from "../config.js";
import jwt from 'jsonwebtoken'

export function createAccessToken(payload) {
  // creamos un token que va a expirar en un dia
  return new Promise((resolve, reject) => {
    jwt.sign(
      payload,
      TOKEN_SECRET,
      {
        expiresIn: "1d",
      },
      (err, token) => {
        if (err) reject(err);
        resolve(token);
      }
    );
  });
}
