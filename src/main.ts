import { config } from 'dotenv';
import { App } from "./app";

config();
const app = new App();

const port = process.env.PORT || '3033';

app.listen(port);