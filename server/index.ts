import WebApp from "./WebApp";
import {startConnection} from "./database";

startConnection();
WebApp.listen(3000, function(){
    console.log("Server is on port: 3000");
});
