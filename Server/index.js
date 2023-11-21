import {} from 'dotenv/config'
import express from 'express';
import sequelize from './DB.js';
import models from './models/models.js';
import cors from 'cors';
import fileUpload from 'express-fileupload';
import router from './routes/index.js'
import errorHandler from './middleware/errorHandlinfMiddleware.js';
import path from 'path'

const PORT = process.env.PORT;

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(path.resolve(), 'static')))
app.use(fileUpload({}));
app.use('/api', router);

app.use(errorHandler);


const start = async () =>{  
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        app.listen(PORT, () => console.log('server started on ' + PORT));
    } catch (error) {
        console.log(error);
    }
}

start();
