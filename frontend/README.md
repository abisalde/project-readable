# Frontend

## TL;DR

To get started developing right away:

- install all project dependencies with `npm install` or `yarn install`
- start the development server with `npm start` or `yarn start`

## What You're Getting

```bash
├── README.md - This file.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── yarn.lock # yarn lock file. It's unlikely that you'll need to modify this.
├── .gitiginore # This file is ignored by git.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── assets # CSS, Fonts, Images, etc.
    │   ├── css
    │   │   ├── index.css # This is the main CSS file.
    │   ├── fonts
    │   │   ├── Pushster-Regular.tff # Font file
        └── img
            └── readable-blog.png # Front Image
    ├── components # Components are reusable UI components.
        ├── AddPostForm # AddPostForm component.
            ├── index.jsx #JSX file.
            ├── styles.jsx #Styled Components file.
        ├── CategoryTab # CategoryTab component.
            ├── index.jsx #JSX file.
            ├── styles.jsx #Styled Components file.
        ├── CommentsBoxForm # CommentsBoxForm component.
            ├── index.jsx #JSX file.
        ├── CommentsCard # CommentsCard component.
            ├── index.jsx #JSX file.
            ├── styles.jsx #Styled Components file.
        ├── CommentsList # CommentsList component.
            ├── index.jsx #JSX file.
        ├── EditPostForm # EditPostForm component.
            ├── index.jsx #JSX file.
        ├── Layout # Layout component.
            ├── index.jsx #JSX file.
            ├── styles.css #CSS Components file.
        ├── PostCard # PostCard component.
            ├── index.jsx #JSX file.
            ├── styles.jsx #Styled Components file.
        ├── PostCarList # PostCardList component.
            ├── index.jsx #JSX file.
            ├── styles.jsx #Styled Components file.
        ├── PostContents # Post Contents component.
            ├── index.jsx #JSX file.
            ├── styles.jsx #Styled Components file.
        ├── PostDashboard # PostDashboard component.
            ├── index.jsx #JSX file.
            ├── styles.jsx #Styled Components file.
        ├── Shared # Shared components.
            ├── CommentsDisplay.jsx #JSX file.
            ├── EditCommentDisplay.jsx #JSX file.
            ├── styles.jsx #Global styled components file.
            ├── UpDownVote.jsx #JSX file.
        ├── SortPost #SortPost component.
            ├── index.jsx #JSX file.
            ├── styles.jsx #Styled Components file.
        └── TopNav # TopNav component.
            ├── index.jsx #JSX file.
            ├── styles.jsx #Styled Components file.
    ├── redux # Redux folder.
        ├── actions
            ├── category.js # category actions file.
            ├── comments.js # comments actions file.
            ├── post.js # single post actions file.
            ├── posts.js # all posts actions file.
            ├──sort.js # sort post action file
            └── types.js # dispatch types file.
        └── middleware # middleware folder.
            └── index.js # Middleware for the App store
        └── reducers # Reducers for the App store.
            ├── category.js # category reducer file.
            ├── comments.js # comments reducer file.
            ├── post.js # single post reducer file.
            ├── posts.js # all posts reducer file.
            ├──sort.js # sort post reducer file
            └── index.js # Combined Root Reducer
        └── store # Store folder.
            └── index.js # Middleware for the App store
    ├── routes # Routes file.
        └── index.js # All navigation is handled here.
    ├── services # Utility functions for this Book App
        └── API.js # A service API call for all API.
    ├── utils # Utility functions readable blog
        └── index.js # Utility functions for the blog app
    ├── views
        ├── 404.js # 404 page.
        ├── App.js # Main Home Page for the App
        ├── EditPost.js # Edit Post Page
        ├── NewPost.js # New Post Page
        ├── PostCategory.js # Post Category Page
        └── PostContents.js # Post Contents Page
└── index.js # You should not need to modify this file. It is used for DOM rendering only.
```
