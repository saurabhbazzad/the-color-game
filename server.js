const express=require(`express`)
const path=require(`path`)
const http=require(`http`)

const app=express()

app.set('view engine', 'hbs')

app.use('/',express.static('public'))

app.get('/',(req,res)=>{
    res.end()
})

app.listen(5001,()=>{
    console.log('server running on http://localhost:5001')
})