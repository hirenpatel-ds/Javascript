const express = require('express');
const app = express();
const port = 3000;

app.get('/a',function(req,res){
  const id = req.query.id;
  const name = req.headers.name;
  const pass = parseInt(req.headers.password);
//   res.json({
//     'ID': id,
//     'Name': name,
//     'Pass': pass
//   })
  if(name === 'hiren' && pass === 1234){
    if(id == 1 || id == 2){
        res.status(400).json({
            'msg':"Health ID is available"
        })
    }
  }
  else{
    res.status(400).json({
        'msg':"something went wrong"
    })
}

})
app.listen(port);