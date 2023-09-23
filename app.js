let imagesItems = [...document.querySelectorAll(".img-wrap")];
let title=[...document.querySelectorAll("h2")]
let titlMessage = document.querySelector(".title");


// console.log(imagesItems);
// console.log(title);
// console.log(titlMessage);


//監視対象になった瞬間activeを付与する
let setItemActive = entries => {
    // console.log(entries);
    entries.forEach(entry => {
        // console.log(entry);
        if(entry.isIntersecting){
            entry.target.classList.add("active");
        } else{
            entry.target.classList.remove("active")
        }
    });

};
let options = {};
let observer = new IntersectionObserver(setItemActive,options);
observer.observe(titlMessage);



//画像
imagesItems.map((item,index) =>{
    console.log(item,index,"aaaaaaaaaaaa");
    item.children[0].style.backgroundImage = `url(./images/${index+1}.jpg)`;
    index % 2 == 0 ? item.style.left = "55%" : item.style.left = "5%";
    console.log(item.style.left);
    observer.observe(item);
})


// h2
title.map((title,index)=>{
    index % 2 == 0 ? (title.style.left = "45%") : (title.style.left = "35%");
    observer.observe(title);
})











// let imagesItems = [...document.querySelectorAll(".img-wrap")]; //nodelistではなく、配列で取得できる
// let title=[...document.querySelectorAll("h2")]
// let titlMessage = document.querySelector(".title");

// console.log(imagesItems)
// console.log(title)


// let setItemActive = (entries) => {
//     console.log(entries);
//     entries.forEach((entry) => {
//         if(entry.isIntersecting){
//             entry.target.classList.add("active");
//         }else{
//             entry.target.classList.remove("active");
//         }
//     });
// };

// let options={};

// let observer = new IntersectionObserver(setItemActive,options);

// observer.observe(titlMessage);


// // imag-wrapは偶数と奇数で出現する場所が違う

// imagesItems.map((item,index)=>{
//     console.log(item,index);
//     item.children.style.backgroundImage = `url(./img/${index+1}.jpg)`;
//     index % 2 ==0 ? (item.style.left =="55%") : item.style.left =="5%";
//     observer.observe(item);
// })