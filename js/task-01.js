let category_header = document.querySelectorAll("#categories h2");
console.log("Number of categories: ", category_header.length);

category_header.forEach(category => {
    console.log("Category: ", category.textContent);
    let children_list = category.nextElementSibling.children;
    console.log("Elements: ", children_list.length);
    
    // console.log("List of elements in category:")
    // for (let i = 0; i < children_list.length; i++){
    //     console.log(children_list[i].innerHTML);
    // }
})