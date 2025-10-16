import express from "express";

export const homeUrl = async (req, res) => {
  res.render("components/home");
};

export const loginUrl = async (req, res) => {
  res.render("components/login");
};

export const notificationsUrl = async (req, res) => {
  res.render("components/notifications");
};

export const libraryUrl = async (req, res) => {
  res.render("components/library");
};
export const cloud1AImodelUrl = async (req, res) => {
  res.render("components/cloud1AImodel");
};

export const searchUrl = async (req, res) => {
  res.render("components/search");
};

export const sgnpgUrl = async (req, res) => {
  res.render("components/signup");
};
export const frgtpssUrl = async (req, res) => {
  res.render("components/forgot_password");
};
export const profileUrl = async (req, res) => {
  const { prflr_tkn } = req.body;
  try {
    if (prflr_tkn === "") {
      res.json({
        lognd: false,
      });
      console.log(prflr_tkn);
    } else if (prflr_tkn) {
      res.render("components/profile");
    }
  } catch (error) {
    console.log(error);
  }
};
