const express = require('express');
const path =require('path');
const app = express();
app.use(express.static(_dirname+'/dist/task'));
app.get('/*',function (req,res) {
        res.sendFile(path.join(_dirname+'/dist/task/index.html'));});
app.listen(process.env.PORT || 8080);        
