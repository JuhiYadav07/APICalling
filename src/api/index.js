export const getPosts = async () =>{
 const response= await fetch(
  "https://jsonplaceholder.typicode.com/posts", 
  {
    method: "GET"
  }
);
return await response.json();
};

export const getRandomUser = async ()=> {
  const response = await fetch (
    "https://jsonplaceholder.typicode.com/users", 
    {
      method :"Get",
    }
);

return await response.json();
};
