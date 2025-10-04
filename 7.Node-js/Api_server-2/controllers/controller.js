// import { languages } from "../data/languages.js"  
// //these code for api conncetion which is present in the folder that is data.

import { techModel } from "../models/techSchema.js"

let languages = []

async function fetchInitialLanguages() {
    try {
        languages = await techModel.find({})

    } catch (err) {
        console.log(err)
        languages = []
    }
}

fetchInitialLanguages()

let getDetails = (req, res) => {
    res.status(200).json({
        message: "Welcome to Languages API, you can search/query for a language based on scope, duration & difficulties and also search for a perticular language base on id(1 to 50)",
        routes: [
            {
                method: "GET",
                address: "localhost/languages/api/random/language",
                expectedResult: "Array"
            },
            {
                method: "GET",
                address: "localhost/languages/api/all",
                expectedResult: "Array"
            },
            {
                method: "GET",
                address: "localhost/languages/api/get-language/{:id}",
                expectedResult: "object/error"
            },
            {
                method: "GET",
                address: "localhost/languages/api/filter?scope=value",
                expectedResult: "Array/Null",
                queryOptions: [
                    "scope", "duration[in weeks]", "diffuculties"
                ],
                possibleScopes: [
                    "Web development", "Full-stack", "Mobile apps", "AI", "ML", "Data science", "Scripting", "Enterprise apps", "Android", "Backend systems", "System programming", "Embedded systems", "OS", "Game dev", "High-performance apps",
                    "System software", "Desktop apps", "CMS (WordPress, Drupal)", "Cloud", "Distributed systems", "Web assembly", "Blockchain", "Modern JVM apps", "iOS",
                    "macOS apps", "Scalable web apps", "Angular", "React apps", "Databases", "Queries", "Data analysis", "Statistics", "Visualization", "Big data", "Functional programming", "Text processing", "Legacy iOS apps", "Engineering", "Simulation", "Scientific computing", "Research", "Compilers", "Automation", "Linux administration", "Windows automation", "DevOps", "Real-time systems", "Telecom", "Simulations", "Banking", "Finance", "JVM ecosystem", ".NET ecosystem", "Low-level programming", "Smart contracts (Ethereum)", "Hardware design", "FPGA programming", "Digital circuits", "Logic programming", "Military", "Avionics", "OOP", "Cross-platform development", "Fast scripting", "Facebook’s HHVM ecosystem", "SAP systems", "Quantum computing", "Math-heavy programming", "Legacy systems", "Educational programming", "Basics", "Beginner education", "Kids programming"
                ]
            }
        ]
    })
}
//  it is for filtering the data 
let getFilterData = (req, res) => {
    try {
        let { scope, duration, difficulties } = req.query

        let userscope = scope

        let resultArray = languages  //starts as the full languages array

        let queryType = ""  //empty

        if (!scope && !duration && !difficulties) throw ("filter is invalid !")
        //if both are missing,it stop & goes to the catch block

        //if scope exists in the query 
        if (scope) {
            resultArray = resultArray.filter((language) => {
                return language.scope.some(element => element.toLowerCase() === userscope.toLowerCase().trim())
            })
            queryType += "/scope"  //queryTyep = queryType + "/scope"
        }

        //if duration exists in the query 
        if (duration) {
            resultArray = resultArray.filter((language) => {
                return Number(language.duration) <= Number(duration)
            })
            queryType += "/duration"  //queryTyep = queryType + "/duration"
        }

        //if dificulties exists in the query 
        if (difficulties) {
            resultArray = resultArray.filter((language) => {
                return language.difficulties.toLowerCase() == difficulties.toLowerCase().trim()

            })
            queryType += "/difficulties"  //queryTyep = queryType + "/duration"
        }

        // If nothing matched, throw an error → goes to catch
        if (resultArray.length == 0) throw (`unable to find languages based on ${queryType}`)

        // Send success response
        res.status(200).json({
            message: `got result based on ${queryType}`,
            resultCount: resultArray.length,
            results: resultArray
        })


    } catch (err) {
        console.log(err)
        res.status(400).json({
            message: "unable to get data based on filter !",
            err,
            possibleFilters: ["?scope", "?duration", "?difficulties"]
        })
    }
}

// (get method)
// these is for random language dada 
const getRandomLanguage = (req, res) => {
    let randomNumber = Math.floor((Math.random() * 50) + 1)
    let result = languages.filter((language) => {
        return language.id === randomNumber
    })
    res.status(200).json({ message: "random language you were requesting is ", result })
}

// (get method)
// these is for all languages dada 
const getAllLanguages = async (req, res) => {
    try {

        // fetch all languages

        let dataBaselanguages = await techModel.find({})

        if (dataBaselanguages.length == 0) throw ("unable to fetch all languages at this moment !")

        res.status(200).json({ message: 'all the languages within the dataset are.', dataBaselanguages })

    } catch (err) {
        console.log("error while fetching languages : ", err)
        res.status(500).json({ message: "unable to find languages", err })
    }
}

// (get method)
// these is for filtering by id number  and it is used path para
const getLanguageBasedOnId = (req, res) => {
    try {
        let { id } = req.params
        console.log(id)

        if (!id) throw ("invalid id !")

        let result = languages.filter((languages) => {
            return languages.id == id
        })

        if (result.length == 0) throw (`unable to find language.id ${id}`)

        res.status(200).json({ message: `we have on id ${id} !`, result: result[0] })

    } catch (err) {
        console.log(err)
        res.status(400).json({ message: `unable to get data based on id !`, err })

    }
}

// (post method)
// these is for filtering by id number  and it is used path para
const postAddLanguages =  async (req, res) => {
    try {
        let { title, scope, duration, difficulties } = req.body

        //scope has to be in array
        if (!title || !scope || !duration || !difficulties) throw ("invalid?incompte data !")

        // check the scope is an array or not   
        if (!Array.isArray(scope)) throw ("invalid data scope has to be an array !")

       let newTech = new techModel({ title, scope, duration, difficulties })

        await newTech.save()

        res.status(202).json({ message: `new language ${title} addedd successfully !` })

        fetchInitialLanguages()

    } catch (err) {

        console.log('err while adding a new language !', err)
        res.status(400).json({ message: `unable to new language !`, err })

    }
}

// (Delete method)something new it is for delete id from data set
const deleteLanguage = (req, res) => {
    try {
        let { id } = req.params;

        let index = languages.findIndex(language => language.id == id);

        if (index === -1) throw (`Language with id ${id} not found!`)

        let deleted = languages.splice(index, 1);

        res.status(200).json({
            message: `Language with id ${id} deleted successfully!`,
            deleted: deleted[0]
        })

    } catch (err) {
        res.status(400).json({ message: "Unable to delete language", error: err });
    }
}

// (patch method) Update only the provided fields like ex (scope=OS so patch is perfom the role for updating the scope just like scope=Ai)




// export for get
export { getDetails, getFilterData, getRandomLanguage, getAllLanguages, getLanguageBasedOnId }

// export for post 
export { postAddLanguages }

// export for delete
export { deleteLanguage }

// export for patch

// export for put

