const AllCategoryData = async () => {
    const response = await fetch(`https://openapi.programming-hero.com/api/videos/categories`);
    const data = await response.json();
    const catData = data.data;
    loadCatData(catData);
};

const loadCatData = (catItem) => {
    const tabContainer = document.getElementById('tab-container');
    const div = document.createElement('div');
    catItem.forEach((item) => {
        const a = document.createElement('a');
        // a.className = 'btn';
        // a.textContent = item.category;
        a.innerHTML = `
        <a onclick="handleSingleCategory('${item.category_id}')" class="btn">${item.category}</a>`
        div.appendChild(a);
    });
    tabContainer.appendChild(div);
};

const handleSingleCategory = async (categoryId) => {
    const response = await fetch(`https://openapi.programming-hero.com/api/videos/category/${categoryId}`)
    const data = await response.json()
    console.log(data.data);
    
    // console.log(categoryId);
}

AllCategoryData();






