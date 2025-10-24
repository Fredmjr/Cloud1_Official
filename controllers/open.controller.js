import {
  genJWT,
  intmdtJWT,
} from "../middleware/app.routes.token/app.routes.token.js";

export const lgnpgUrl = async (req, res) => {
  res.render("components/login");
};

export const sgnpgUrl = async (req, res) => {
  res.render("components/signup");
};
export const gentknUrl = async (req, res) => {
  res.json({
    gentkn: genJWT,
  });
};

export const intmdttknUrl = async (req, res) => {
  res.json({
    intmdttkn: intmdtJWT,
  });
};
