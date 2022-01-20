import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import bodyParser from 'body-parser';
import routes from './config/routes.js'



const app = express();
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.json());
app.use(cors())
app.use(routes)



app.listen(5000, ()=>{
    console.log(`Express started at http://localhost:5000`)
})