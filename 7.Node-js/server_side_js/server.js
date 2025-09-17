import express from "express"

let app = express()

let port = 4000 

app.get("/",(request,response)=>{
    response.send(` <h1 style="color:blue"> Welcome to my first node js server</h1>
         <h2>Contact Form</h2>
  <form action="/submit" method="POST">
    <label for="name">Name:</label><br>
    <input type="text" id="name" name="name" required><br><br>

    <label for="email">Email:</label><br>
    <input type="email" id="email" name="email" required><br><br>

    <label for="message">Message:</label><br>
    <textarea id="message" name="message" rows="4" cols="30" required></textarea><br><br>

    <button type="submit">Submit The Form</button>
  </form>`)
})

app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})
// http://localhost:4000/
