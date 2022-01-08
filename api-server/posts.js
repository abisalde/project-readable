const clone = require('clone');

let db = {};

const defaultData = {
  '8xf0y6ziyjabvozdd253nd': {
    id: '8xf0y6ziyjabvozdd253nd',
    timestamp: 1467166872634,
    title: 'Udacity is the best place to learn React',
    body: 'Everyone says so after all.',
    author: 'thingtwo',
    category: 'udacity',
    postImage:
      'https://via.placeholder.com/295x195/F0D956/000000?text=udacity.com',
    voteScore: 6,
    deleted: false,
    commentCount: 2,
  },
  '6ni6ok3ym7mf1p33lnez': {
    id: '6ni6ok3ym7mf1p33lnez',
    timestamp: 1468479767190,
    title: 'Learn Redux in 10 minutes!',
    body: 'Just kidding. It takes more than 10 minutes to learn technology.',
    author: 'thingone',
    category: 'redux',
    postImage:
      'https://via.placeholder.com/295x195/64DBF0/000000?text=redux.org',
    voteScore: -5,
    deleted: false,
    commentCount: 0,
  },
  '2uh3h024ouu6ylx3lmmezu': {
    id: '2uh3h024ouu6ylx3lmmezu',
    timestamp: 1468239767190,
    title: 'Learn React in 10 minutes!',
    body: 'Just kidding. It takes more than 10 minutes to learn technology.',
    author: 'sammy',
    category: 'react',
    postImage:
      'https://via.placeholder.com/295x195/F08856/000000?text=reactjs.org',
    voteScore: 1,
    deleted: false,
    commentCount: 0,
  },
};

function getData(token) {
  let data = db[token];
  if (data == null) {
    data = db[token] = clone(defaultData);
  }
  return data;
}

function getByCategory(token, category) {
  return new Promise((res) => {
    let posts = getData(token);
    let keys = Object.keys(posts);
    let filtered_keys = keys.filter(
      (key) => posts[key].category === category && !posts[key].deleted
    );
    res(filtered_keys.map((key) => posts[key]));
  });
}

function get(token, id) {
  return new Promise((res) => {
    const posts = getData(token);
    res(posts[id].deleted ? {} : posts[id]);
  });
}

function getAll(token) {
  return new Promise((res) => {
    const posts = getData(token);
    let keys = Object.keys(posts);
    let filtered_keys = keys.filter((key) => !posts[key].deleted);
    res(filtered_keys.map((key) => posts[key]));
  });
}

function add(token, post) {
  return new Promise((res) => {
    let posts = getData(token);

    posts[post.id] = {
      id: post.id,
      timestamp: post.timestamp,
      title: post.title,
      body: post.body,
      author: post.author,
      category: post.category,
      postImage: 'https://picsum.photos/200/300',
      voteScore: 1,
      deleted: false,
      commentCount: 0,
    };

    res(posts[post.id]);
  });
}

function vote(token, id, option) {
  return new Promise((res) => {
    let posts = getData(token);
    post = posts[id];
    switch (option) {
      case 'upVote':
        post.voteScore = post.voteScore + 1;
        break;
      case 'downVote':
        post.voteScore = post.voteScore - 1;
        break;
      default:
        console.log(`posts.vote received incorrect parameter: ${option}`);
    }
    res(post);
  });
}

function disable(token, id) {
  return new Promise((res) => {
    let posts = getData(token);
    posts[id].deleted = true;
    res(posts[id]);
  });
}

function edit(token, id, post) {
  return new Promise((res) => {
    let posts = getData(token);
    for (prop in post) {
      posts[id][prop] = post[prop];
    }
    res(posts[id]);
  });
}

function incrementCommentCounter(token, id, count) {
  const data = getData(token);
  if (data[id]) {
    data[id].commentCount += count;
  }
}

module.exports = {
  get,
  getAll,
  getByCategory,
  add,
  vote,
  disable,
  edit,
  getAll,
  incrementCommentCounter,
};
