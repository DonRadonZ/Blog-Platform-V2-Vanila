const blogContainer = document.querySelector('.popular-blog-content')

function popularBlogMethods(){
    fetch('./data/blog.json')
    .then(res => res.json())
    .then(data => {
        console.log(data)
    data.blogs.forEach(blog => {
    const postEl = document.createElement('div');
    postEl.classList.add('search-card');
    postEl.innerHTML = `
    
    <h3 class="blog-title">${blog.title}</h3>
    <span class="blog-time">${blog.date}</span>
    <span class="blog-view">(${blog.views})</span>
    <p class="description">${blog.content}</p>
    <div class="category">${blog.category}</div>
    <div class="options">
    <span>
        By ${blog.author}
    </span>
    <button class="btn">Read More</button>
    </div>`  
    blogContainer.appendChild(postEl) 
        })
    })
    
}

popularBlogMethods()


const allBlogContainer = document.querySelector('.all-blog-content');

function allBlogMethods(){

    fetch('./data/blog.json')
    .then(res => res.json())
    .then(data => {
    blogs = data.blogs.map(blog => {
    const postEl = document.createElement('div');
    postEl.classList.add('search-card');
    postEl.innerHTML = `
    
    <h3 class="blog-title">${blog.title}</h3>
    <span class="blog-time">${blog.date}</span>
    <span class="blog-view">(${blog.views})</span>
    <p class="description">${blog.content}</p>
    <div class="category">${blog.category}</div>
    <div class="options">
    <span>
        By ${blog.author}
    </span>
    <button class="btn">Read More</button>
    </div>`  
    allBlogContainer.appendChild(postEl) 
    return {title: blog.title,content: blog.content, category: blog.category, author: blog.author}
        })
    })
    
}

allBlogMethods()













