const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req,res)=>{
    res.json({message:'Hello from CI/CD Pipeline - Test Successful! 🎉'});
})  ;

app.get('/health', (req,res)=>{
    res.json({status: 'healthy'});
});

app.listen(PORT, ()=>{
    console.log('Server is running on http://localhost:${PORT}');
});

module.exports = app; //important for testing