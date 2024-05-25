let search = document.getElementById('blog-search').addEventListener('keyup', (e) => {
    console.log(e.target.value.toLowerCase())
});

console.log(search)

function getSelectValue() {
    var selectedValue = document.getElementById("title").value;
    console.log(selectedValue);
}

