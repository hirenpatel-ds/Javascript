const express= require('express');
const app = express();
const port = 3000;
function notID(req,res,next){
    // const id = parseInt(req.query.id)
    if(!req.query.id){
        res.json({
            "MSG": "ID is not available"
        })
    }else{
        next();
    }
}
function getHeartHealth(req,res,next){
    const id = parseInt(req.query.id);
    if(id !== 1 && id !== 2){
        res.json({
            "Msg": "Id isn't valid"
        })
    }
    else{
        next();
    }
}
app.get('/',notID,getHeartHealth,function(req,res){
    res.json({
        'Msg':"Heart is healthy"
    })
})
app.listen(port);