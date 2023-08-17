import express, { Application } from 'express';

export class App {
    public app: Application;

    constructor() {
        this.app = express();
    }

    listen(port: string) {
        this.app.listen(port, () => console.log(`server is running on port http://localhost:${port}`));
    }
}