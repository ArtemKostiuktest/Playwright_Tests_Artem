import axios from "axios";

let getComment = async () => {
        let result = await axios.get(`https://jsonplaceholder.typicode.com/comments/1`)
        console.log(result.data);
};

let getCommentByFerch = async () => {
        let result = await fetch(`https://jsonplaceholder.typicode.com/comments/1`)
        let data = await result.json()
        console.log(data);
};

let getPost = async () => {
        let result = await axios.get(`https://jsonplaceholder.typicode.com/posts/2`)
        console.log(result.data)
};

let getPostByFetch = async () => {
        let result = await fetch(`https://jsonplaceholder.typicode.com/posts/2`)
        let data = await result.json()
        console.log(data)
};

getComment()
getCommentByFerch()
getPost();
getPostByFetch();


function startEngine() {
        console.log("Start engine")
}

function Cars(mark, model, year, type, fuel, __proto__) {
        this.mark = mark;
        this.model = model;
        this.year = year;
        this.type = type;
        this.fuel = fuel;
        this.__proto__ = __proto__;
}

let person = {
        name: "Artem",
        age: 25,
        height: 189,
        weight: 75,
        salary: 0,
        departament: "QA",
        city: "Lutsk"
};

let audi = new Cars("Audi", "A4", 2012, "Universal", "Petrol", person)

console.log(person)
console.log(audi)