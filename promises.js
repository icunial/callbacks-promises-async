const posts = [
  { title: "Post One", body: "This is post one" },
  { title: "Post Two", body: "This is post two" },
];

function getPosts() {
  setTimeout(() => {
    const postsJSON = JSON.stringify(posts);
    console.log(postsJSON);
  }, 1000);
}

// Promises

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);

      const error = false;

      if (!error) {
        resolve();
      } else {
        reject("Error: Something went wrong!");
      }
    }, 2000);
  });
}

/* createPost({ title: "Post Three", body: "This is post three" })
  .then(getPosts)
  .catch((error) => {
    console.log(error);
  }); */

// Async / Await

async function init() {
  await createPost({ title: "Post Three", body: "This is post three" });

  getPosts();
}

init();

// Async / Await / Fetch

async function fetchUsers() {
  const res = await fetch("");
  const data = await res.json();
  console.log(data);
}

fetchUsers();

/* // Promise.all
const promise1 = Promise.resolve("Hello World");
const promise2 = 10;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 2000, "Goodbye");
});
// const promise4 = fetch("");

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values);
});
 */
