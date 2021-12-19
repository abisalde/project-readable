const sorted = (key) => {
    return (a, b) => (a[key] > b[key] ? -1 : b[key] > a[key] ? 1 : 0);
};

export const handleSortedPosts = (posts, order) => {
    if (order === 'date') {
        return posts.sort(sorted('timestamp'));
    } else if (order === 'score') {
        return posts.sort(sorted('voteScore'));
    }
};
