const express= require('express');
const app = express();
const port = 3000;
let count = 0
function requestCount(req,res,next){
    const id = req.query.id;
    count = count + 1
    console.log(id)
    next();
}
app.get("/am",requestCount,function(req,res){
    res.json({"Total req": count });
})
app.listen(port)