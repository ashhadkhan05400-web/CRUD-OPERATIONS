import express from 'express'

const server = express()

server.use(express.json())

let database = [
      {
        username : "hasanCoder66",
        email : "codermhasan@gmail.com"
    },
    {
        username : "sufiyan",
        email : "sufiyan@gmail.com"
    },
]


server.post("/user" , (req , res) => {

const data = req.body;
if(data){
    database.push(data)
}

if(!data){
    return res.status(400).json({
        status : false,
        message : "code phat gya"
    })
}

res.status(200).json({
    status : 200,
    message : "User Added"
})

})


server.get("/user" , (req , res) => {
    res.status(200).json({
        status : "true",
        data : database,
    })
})


server.put("/user/:username", (req, res) => {

    const body = req.body;
    const {username} = req.params;

   database = database.map((user) => {
    if(user.username == body.username){
        return user = body
    }

    return user
})

    res.status(200).json({
        status : "true",
        message:"updated successfully!"
    })
})


server.delete("/user/:username", (req, res) => {

    const {username} = req.params;

   database = database.filter((user) => user.username != username)

    res.status(200).json({
        status : "true",
        message:"deleted successfully!"
    })
})



server.listen(5500 , () => {
    console.log("SERVER IS LISTENING ON PORT 5500");
    
})