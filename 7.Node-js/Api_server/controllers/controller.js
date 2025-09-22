let getHome = (req, res) => {
    try {
        let {name, phone} = req.query
        if (!name || !phone) throw ("requested data was not found please send name and phone number !")

        // query parameters
        console.log(name)
        console.log(phone)
        res.status(200).json({ message: `hello ${name} !` })
    } catch (err) {
        console.log("an error occured ", err)
        res.status(400).json({ message: err })
    }
    }

let getSomewhere = (req, res) => {
    console.log(req.params)
    let { name } = req.params
    res.status(200).json({ message: "this is somewhere !" })
}

export { getHome, getSomewhere }

https://api.openweathermap.org/data/2.5/weather?name phone