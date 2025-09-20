// let myData = [
//     { name: "person 1", age: "21", phone:"9356192274", city: "nagpur" },
//     { name: "person 2", age: "21", phone:"9356192274", city: "pune" },
//     { name: "person 3", age: "21", phone:"9356192274", city: "mumbai" },
//     { name: "person 4", age: "21", phone:"9356192274", city: "nashik" },
//     { name: "person 5", age: "21", phone:"9356192274", city: "latur" },
//     { name: "person 6", age: "21", phone:"9356192274", city: "amravti" },
//     { name: "person 7", age: "21", phone:"9356192274", city: "bhandara" },
//     { name: "person 8", age: "21", phone:"9356192274", city: "beed" },
//     { name: "person 9", age: "21", phone:"9356192274", city: "delhi" },
// ]

// 1) send the massage 
// let GetHome = (req, res) => {
// res.status(200).send("hello user !")
// res.status(200).json({message: "hello user", context: "this is a response object send to a json response with a status code of 200", myData})
// };

// let GetAnotherRoute = (req, res) => {
//     res.status(200).send("hello user again")
// }

// export {GetHome,GetAnotherRoute}

// 2) send the data with the help of json 
// let GetHome = (req, res) => {
// res.status(200).json({message: "hello user", context: "this is a response object send to a json response with a status code of 200", myData})
// };

// export {GetHome}

// 3) send the file with the help of .sendFile("index.html")// have to server static file

// let GetHome = (req, res) => {
// res.status(200).sendFile("index.html")
// }
// export {GetHome}
// app.use(express.static('public'))  server statement

// let GetAnotherHome =(req,res) => {
//    res.status(200).sendFile("index.html")
// }
// export {GetAnotherHome}

// // 4)send a render file which is ejs file and write only file name("index")

let GetHome = (req, res) => {
res.status(200).render("index");
};

export {GetHome};
// app.set("view engine", "ejs") server statement

let GetAbout = (req, res) => {
res.status(200).render("about");
};

export {GetAbout};


let postSubmitForm = (req,res) => {
    //  console.log(req)
    console.log(req.body)
    // if we are recieving form data it is always inside of req.body
    res.status(301).redirect("/")
}

export {postSubmitForm}