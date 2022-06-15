import { connect } from "mongoose";

export const startConnection =async () => {
    try {
        const database = await connect("mongodb://localhost/mevn-db")
        console.log("DB Connected: ", database.connection.name);
    } catch (error) {
        console.log("Can't reach DB.");
    }
};