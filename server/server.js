import server from "./src/app.js";
import config from "./src/config/config.js";
import connectDB from "./src/config/db.js";

const startServer = () => {
    connectDB();
    const PORT = config.PORT;

    server.listen(PORT, () => {
        console.log(`🔥 Server is running on http://localhost:${PORT}`);
    });
};

startServer();