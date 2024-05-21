import express from "express"
import cors from "cors"



const app = express()
const PORT = 8080
app.use(cors())

app.get("/api/home", (req, res)=>{
    res.json({message:"Like this video", people:["Harry", "Jack", "Ritaa"]})
})

app.listen(PORT, ()=>{
    console.log(`Server started at port ${PORT}`)
})