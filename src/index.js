const express = require('express');


const { ServerConfig, Logger } = require('./config');
const apiRoutes = require('./routes');

const app = express();
PORT = 4000;

app.use('/api', apiRoutes);

app.listen(PORT, async () => {
    console.log("Server is up and running on PORT: 4000");
    Logger.info("Successfully started the Server!", "root");
});