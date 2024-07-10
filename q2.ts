// const axios = require("axios");
import axios from "axios";

/* assign interface/type to the function definition properly */
const getTodo = async (todoId: number) => {
  try{
    let c = await axios.get (`https://jsonplaceholder.typicode.com/todos/${todoId}`)
     let w = c.data.userId;
     let m = await axios.get (`https://jsonplaceholder.typicode.com/users/${w}`)
     return {owner :m.data.name,title:c.data.title,completed:c.data.completed};
      
  } catch(e){
    return "INVALID TODO ID"
  };
};

//test case
const input1 = 15;
const input2 = 60;
const input3 = 250;

//run
getTodo(input1).then((result) => console.log(result));
getTodo(input2).then((result) => console.log(result));
getTodo(input3).then((result) => console.log(result));

export default getTodo;
