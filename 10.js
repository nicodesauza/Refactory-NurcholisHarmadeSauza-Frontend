const fetch = require("node-fetch");

async function getData(api) {
  return await fetch(api)
    .then((response) => response.json())
    .then((response) => response);
}
async function takeData() {
  const apiTwo = "https://jsonplaceholder.typicode.com/posts";
  const apiOne = "https://jsonplaceholder.typicode.com/users";
  const users = await getData(apiOne);
  const posts = await getData(apiTwo);

  for (let i = 0; i < posts.length; i++) {
    for (let j = 0; j < users.length; j++) {
      if (posts[i].userId === users[j].id) {
        posts[i].users = users[j];
      }
    }
  }
  console.log(posts);
}
takeData();
