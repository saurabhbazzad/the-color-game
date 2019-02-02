const express=require(`express`)
const path=require(`path`)
const http=require(`http`)

const app=express()

app.get('/',(req,res)=>{
    res.redirect('/login')
})
app.get('/login',(req,res)=>{
    
})

app.listen(5001,()=>{
    console.log('server running on http://localhost:5001')
})