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

createPost({ title: "Post Three", body: "This is post three" })
  .then(getPosts)
  .catch((value) => {
    console.log(value);
  });
