import express, { Application } from 'express';
import { errorMiddleware } from './middlewares/error.middleware';

export class App {
    public app: Application;

    constructor() {
        this.app = express();
        this.middlewaresInitializer();
        this.initRouter();
        this.interceptors();
    }

    middlewaresInitializer() {
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
    }

    interceptors() {
        this.app.use(errorMiddleware);
    }

    initRouter() {
        this.app.get('/', (req, res) => {
            res.send('Hello bookhub')
        })
    }

    listen(port: number) {
        this.app.listen(port, () => console.log(`server is running on port http://localhost:${port}`));
    }
}