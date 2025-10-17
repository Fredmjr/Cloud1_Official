import sequelize from "../config/db.js";
import { DataTypes } from "sequelize";

const userModel = sequelize.define("user", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },

  username: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING, //used string instead of INTEGER coz the number will have  (+ - spaces ()) characters.
    allowNull: false,
    validate: {
      is: /^[+]?[\d\s\-().]{7,20}$/i, // This accepts international formats, spaces, dashes, parentheses
    },
  },
  email: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  password: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

export default userModel;
