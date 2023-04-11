
const mongoose = require("mongoose");

// connection url
const url = "mongodb://localhost:27017/fruitDB";
// const url = `mongodb+srv://java:gogomaster@database.qrvyh.mongodb.net/${dbName}?retryWrites=true&w=majority`;


mongoose.connect(url);

const fruitSchema = new mongoose.Schema ({
    name: {
        type: String,
        required: [true, "please check the data"]
    },
    rating: {
        type: Number,
        min: 1,
        max: 10
    },
    review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit ({
    rating: 1,
    review: "peaches are red"
});

// fruit.save();
 
const peopleSchema = new mongoose.Schema ({
    name: String,
    age: Number,
    fevorateFruit: fruitSchema
});

const People = mongoose.model("People", peopleSchema);

const pineapple = new Fruit ({
    name: "pineapple",
    rating: 8,
    review: "beat fruit"
})

pineapple.save();


const people = new People ({
    name: "Amy",
    age: 23,
    favorateFruit: pineapple
});

people.save()

// const kivi = new Fruit({
//     name: "kivi",
//     rating: 10,
//     review: "the best fruit"
// });
// const orange = new Fruit({
//     name: "Orange",
//     rating: 6,
//     review: "watery fruit"
// });
// const banana = new Fruit({
//     name: "Banana",
//     rating: 8,
//     review: "this fruit is good for health"
// });

// Fruit.insertMany([kivi, orange, banana], function(err){
//     if(err) {
//         console.log("err");
//     }else{
//         console.log("successfully saved to fruitDb.")
//     }
// });


// Fruit.insertMany([kivi , orange , banana])
//       .then(function () {
//         console.log("Successfully saved defult items to DB");
//       })
//       .catch(function (err) {
//         console.log(err);
//       });

// Fruit.find(function(err , fruit) {
//     if(err) {
//         console.log(err);
//     }else {
//         console.log(fruit);
//     }
// });
async function myfruits() {
    const fruits= await Fruit.find({});
    fruits.forEach(function(fruit){
        console.log(fruit.name);

    });
}
myfruits();


// Fruit.updateOne({_id:"6432c70cfd51293e6f295ac5"},{name: "Peach"})
//     .then(function(){
//         console.log("updated");
//     });

// Fruit.deleteOne({_id: "6432c70cfd51293e6f295ac5"})
//      .then(function() {
//         console.log("successfully deleted");
//          });
// People.deleteMany({name:"Jhone weak"})
// .then(function() {
//     console.log("successfully deleted")
// });






    