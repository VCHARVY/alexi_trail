const express =require('express');
require('dotenv').config();
const signuproute=require('./routes/Signup_route');
const mongoDB=require('./config/DB');
// const { default: Signup } = require('../Frontend/src/Routes/Signup');
// const app = express();
// mongoDB();
// app.use(express.json());
// app.use(express.urlencoded({extended:true}));/
// const port=process.env.PORT;
// const server=app.listen(port,()=>{
//     console.log(`Server is running on port ${port}`);
// });


// app.get('/',(req,res)=>{  //the first arguement specifies which extension or subroutine do u want to entereg:'/hi' sends your request to localhost:1337/hi
//     res.send('hei')
// })

// app.use('/api/user/Signup',signuproute);////
// // app.listen(1337,()=>{
// //     console.log('started server')
// // })


const app = express();

mongoDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT;
const server = app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

app.get('/', (req, res) => {
    res.send('hei');
});
//
app.use('/api/user/Signup', signuproute);