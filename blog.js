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

const filter = document.getElementById("blog-search")
const select = document.getElementById("blog-search")
const listBlog = []

filter.addEventListener("input",(e) => {
    const search = e.target.value.toUpperCase()
    console.log(search)
    listBlog.forEach((blog) => {
        if(blog.innerText.toUpperCase().includes(search)){
            //show
          blog.classList.remove("hide")  
        }else{
            // hide
            blog.classList.add("hide")  
        }
    })
})

const allBlogContainer = document.getElementById('all-blog-content');

async function fetchBlog(){
    fetch('./data/blog.json')
    .then(res => res.json())
    .then(data => {
    console.log(data)
    data.blogs.forEach(blog => {
    const postEl = document.createElement('div');
    postEl.classList.add('search-card');
    listBlog.push(postEl)
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
        })
    });
    

}
fetchBlog()


let blogs = [];
const maxDisplayLimit = 5;



// filter for search















