const express = require('express');
const app = express();
const PORT = 2000;

app.get('/',(req,res)=>{
    res.status(200).json({
        sucess:true,
        messsage:'Hello From App'
    })
});

const Server = () =>{
    app.listen(PORT,()=>{
        console.log(`App Is running On ${PORT}`);
    });
};

Server();