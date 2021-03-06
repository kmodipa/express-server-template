import  express from 'express';
require('dotenv').config();
import config from 'config'
import logger from "./utils/logger";
import connect from "./utils/connect";
import routes from "./routes";


const port = config.get<number>('port');

const app = express();

app.use(express.json());

app.listen(port, async () => {
    logger.info(`App is running at http://localhos:${port}`);

    await connect();

    routes(app);
});