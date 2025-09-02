let students = [
  { name: "Aarav Sharma", age: 15, city: "Mumbai", dob: "2010-03-12" },
  { name: "Priya Verma", age: 16, city: "Delhi", dob: "2009-07-25" },
  { name: "Rohan Mehta", age: 15, city: "Pune", dob: "2010-11-03" },
  { name: "Sneha Kulkarni", age: 14, city: "Nagpur", dob: "2011-05-18" },
  { name: "Aditya Singh", age: 16, city: "Lucknow", dob: "2009-09-09" },
  { name: "Kavya Joshi", age: 15, city: "Jaipur", dob: "2010-02-27" },
  { name: "Arjun Yadav", age: 14, city: "Patna", dob: "2011-08-04" },
  { name: "Nisha Pandey", age: 15, city: "Bhopal", dob: "2010-12-15" },
  { name: "Rahul Gupta", age: 16, city: "Kanpur", dob: "2009-06-30" },
  { name: "Meera Iyer", age: 15, city: "Chennai", dob: "2010-04-10" },
  { name: "Karan Malhotra", age: 14, city: "Ahmedabad", dob: "2011-10-22" },
  { name: "Ananya Reddy", age: 15, city: "Hyderabad", dob: "2010-01-07" },
  { name: "Saurabh Patil", age: 16, city: "Nashik", dob: "2009-07-14" },
  { name: "Pooja Nair", age: 15, city: "Kochi", dob: "2010-03-28" },
  { name: "Devansh Kapoor", age: 14, city: "Chandigarh", dob: "2011-09-19" }
];

// Sorting in ascending order by DOB
students.sort((a, b) => new Date(a.dob) - new Date(b.dob));

console.log("Students sorted by DOB (oldest to youngest):");
students.forEach(s => console.log(`${s.name} - DOB: ${s.dob}`));
