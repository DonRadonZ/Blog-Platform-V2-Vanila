fetch("./data/statistics.json")
.then(res => res.json())
.then(data=> {
    const totalBlogsElements = document.getElementById('total-blogs');
    const totalViewsElements = document.getElementById('total-views');

    totalBlogsElements.textContent = data.statistics.totalBlogs;
    totalViewsElements.textContent = data.statistics.totalViews;
})

