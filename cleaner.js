const express = require('express');
const app = express();
const port = 3000;
function notID(req,res,next){
    if(!req.query.id){
        res.json({'msg': "ID parameter is missing"})
    }
    else{
        next();
    }
}
function heartCheck(req, res, next) {
    const ID = parseInt(req.query.id);
    if (ID != 1 && ID != 2) {
        res.json({ 'msg': "Not valid ID" });
    } else {
        next();
    }
}

app.get('/heartcheck',notID, heartCheck, function (req, res) {
    // Handle the case where the ID is not provided.
    res.json({'msg':"Everything is Upto Mark"})
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});