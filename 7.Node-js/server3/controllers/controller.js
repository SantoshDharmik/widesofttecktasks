let data = [
    { name: "person 1", city: "nagpur" },
    { name: "person 2", city: "pune" },
    { name: "person 3", city: "mumbai" },
    { name: "person 4", city: "nashik" },
    { name: "person 5", city: "latur" },
    { name: "person 6", city: "amravti" },
    { name: "person 7", city: "bhandara" },
    { name: "person 8", city: "beed" },
    { name: "person 9", city: "delhi" },
    { name: "person 10", city: "ujjain" },
]

let GetHome = (req, res) => {
    // res.status(200).send("hello user !")
    // res.status(200).sendFile("index.html") // have to server static file
    res.status(200).json({ message: "hello user", context: "this is a response object send to a json response with a status code of 200", data })
    // res.status(200).render("ejs") // have to define view engine 
};

let GetAnotherRoute = (req, res) => {
    res.status(200).send("hello user again !")
}

export { GetHome, GetAnotherRoute }