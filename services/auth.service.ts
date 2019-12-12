import jwt from "jsonwebtoken";
import User from "../models/users.model";

export function authenticated(req, res, next) {
  const token = req.headers.access_token;
  if (!token) {
    return res.status(403).send("Aqui no entras sin token");
  } else {
    jwt.verify(token, "secret", (error, data) => {
      if (error) {
        return res.status(403).send("Token no válido");
      } else {
        const email = data.email;
        User.findOne({ email }).then((user: any) => {
          if (user == null) {
            return res.status(403).send("No hay usuario");
          }
          req.reboot_user = user;

          next();
        });
      }
    });
  }
}

export function me(req, res, next) {
  const elQueQuieresBorrar = req.params.id;
  const tu = req.reboot_user.uid.toString();

  if (tu === elQueQuieresBorrar) {
    return next();
  } else {
    return res
      .status(403)
      .send("Estas loco? como vas a borrar a " + elQueQuieresBorrar);
  }
}
