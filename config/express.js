import express from "express";

const app = express();

app.use(
    express.json()
);

app.use(
    express.urlencomended({extended: false})
);
export default app;