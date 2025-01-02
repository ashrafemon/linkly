import { DataTypes } from "sequelize";
import database from "../config/database";

const Shortener = database.define("Shortener", {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    url: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    code: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    clickCount: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },
    status: {
        type: DataTypes.STRING,
        defaultValue: "active",
    },
});

export default Shortener;
