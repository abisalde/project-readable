# Frontend

## TL;DR

To get started developing right away:

-   install all project dependencies with `npm install` or `yarn install`
-   start the development server with `npm start` or `yarn start`

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
    ├── components # Components used for this Book App
        ├── addBook.js # Add Book to My Reads
        ├── bookShelfChange.js # Change Book Shelf
        ├── bookShelf.js # Current Book Shelf
        ├── loader.js # Loader for the Home page while fetching data
        ├── searchBookResults.js # Search for a Book
        └── singleBookContainer.js # Book Container
    ├── pages # Pages view for this Book App
        ├── Search # Search Page
            └── index.js # Index point for Search Page
        └── Home # Home Page
            └── index.js # Index point for Home Page
    ├── utils # Utility functions for this Book App
        └── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── services # Utility functions for this Book App
        └── APIService.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.

    ├── App.css # Styles for your app. Feel free to customize this as you desire.
    ├── App.js # This is the root of your app. Contains static HTML right now.

    ├── icons # Helpful images for your app. Use at your discretion.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   ├── arrow-drop-down.svg
        └── loader.gif
    ├── index.css # Global styles. You probably won't need to change anything here.
    └── index.js # You should not need to modify this file. It is used for DOM rendering only.
```
