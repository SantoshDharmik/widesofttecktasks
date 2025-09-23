// Query parameter 

// Controller function for query parameter
const gethome = (req, res) => {
    let {name, phone, age, address, email} = req.query;

// Print in console
console.log("name:", name)
console.log("phone:", phone)

 // Send response
res.status(200).json({info: `Name: ${name}, Phone: ${phone}, age: ${age}, address: ${address}, email: ${email}`});
};
export {gethome}


// path parameter

// Controller function for query parameter
const postHome = (req,res) => {
    let {name, phone, age, address, email} = req.params;
// Print in console
console.log("name:", name)
console.log("phone:", phone)

// send response
res.json({info: `Name: ${name}, Phone: ${phone}, age: ${age}, address: ${address}, email: ${email}`});
};
export {postHome}
