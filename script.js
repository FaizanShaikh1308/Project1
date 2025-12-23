const shopNowBtn=document.getElementById("shopNowBtn");
if(shopNowBtn){
    shopNowBtn.addEventListener("click",() =>{
        window.location.href="shop.html";
    });
}

const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close= document.getElementById('close');

if(bar){
    bar.addEventListener('click',()=>{
        nav.classList.add('active');
    })
}
if(close){
    close.addEventListener('click',()=>{
        nav.classList.remove('active')
    })
}  

document.addEventListener("DOMContentLoaded", () => {

    const cartButtons = document.querySelectorAll(".cart-bnt");

    cartButtons.forEach(bnt => {
        bnt.addEventListener("click", (e) => {
            e.preventDefault();
            e.stopPropagation(); // prevents redirect

            const product = {
                id: bnt.dataset.id,
                name: bnt.dataset.name,
                price: bnt.dataset.price,
                img: bnt.dataset.img,
                quantity: 1
            };

            addToCart(product);
            alert("Added to cart 🛒");
        });
    });
});

function addToCart(product) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const existing = cart.find(item => item.id === product.id);

    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push(product);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
}

