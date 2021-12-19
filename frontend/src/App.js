import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadAllCategories } from './redux/actions/category';
import { loadAllPosts } from './redux/actions/posts';
import { LoadingBar } from 'react-redux-loading';

const App = () => {
    const dispatch = useDispatch();

    const { categories } = useSelector(({ categories }) => categories);
    const posts = useSelector(({ posts }) => posts);
    const loading = useSelector(({ loading }) => loading);
    const sortBy = useSelector(({ sorted }) => sorted);

    useEffect(() => {
        dispatch(loadAllCategories());
        dispatch(loadAllPosts());
    }, [dispatch]);

    if (loading.default === undefined || loading.default === 1) {
        return (
            <div>
                <p>App is Loading</p>
            </div>
        );
    }

    const handlePosts = () => {
        let allPosts = [];

        if (categories && categories.length > 0 && posts) {
            categories.forEach((category) => {
                console.log(category.name);
            });
        }
    };

    console.log('testMe', categories);

    console.log('POSTS', handlePosts());

    return (
        <div className='App'>
            <LoadingBar />
            <div>
                <h1>Hello, world!</h1>
                <p>Make Shift</p>
                <p>{JSON.stringify(categories)}</p>
                <p>{JSON.stringify(posts)}</p>

                {/* <p>{JSON.stringify(allPosts)}</p> */}
            </div>
        </div>
    );
};

export default App;
