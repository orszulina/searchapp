let search = document.querySelector('.search');
let listItems = document.querySelectorAll('li');

const searchEngine = e => {
    const text = e.target.value.toLowerCase();
    listItems.forEach(el => {
        if (el.textContent.toLowerCase().indexOf(text) !== -1) {
            el.style.display = 'block'
        } else {
            el.style.display = 'none'            
        }
    })
};

search.addEventListener('keyup', searchEngine);