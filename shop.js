const product = [
    {
        name: 'Classic leather shoe',
        price: 'R$ 40.00 - R$ 90.00 ',
        image: 'assets/product-1.jpg'
    },
    {
        name: 'Ladies Shoe tenis',
        price: 'R$ 20.00 - R$ 70.00',
        image: 'assets/product-2.jpg'
    },
    {
        name: 'men`s formal shoe',
        price: 'R$ 20.00 - R$ 70.00',
        image: 'assets/product-3.jpg'
    },
    {
        name: 'men`s summer shoe',
        price: 'R$ 40.00 - R$ 100.00',
        image: 'assets/product-4.jpg'
    },
    {
        name: 'men`s summer shoe',
        price: 'R$ 40.00 - R$ 100.00',
        image: 'assets/product-5.jpg'
    },
    {
        name: 'men`s summer shoe',
        price: 'R$ 40.00 - R$ 100.00',
        image: 'assets/product-6.jpg'
    },
    {
        name: 'men`s summer shoe',
        price: 'R$ 40.00 - R$ 100.00',
        image: 'assets/product-7.jpg'
    },
    {
        name: 'men`s summer shoe',
        price: 'R$ 40.00 - R$ 100.00',
        image: 'assets/product-8.jpg'
    }
]

const viewMore = [
    {
        name: 'Formal boots',
        title: 'Collections',
        image: 'assets/info-img.png'
    },
    {
        name: 'Women`s shoes',
        title: 'Collections',
        image: 'assets/info-img2.png'
    },
    {
        name: 'Casual shoes',
        title: 'Collections',
        image: 'assets/info-img3.png'
    }
]

var produtos = document.querySelector('.produtos');
var princProduct = document.querySelector('.princ-product');

viewMore.map((el)=>{
    princProduct.innerHTML += `
        <div class='princ-single'>
        <h2>`+el.name+`</h2>
        <p>`+el.title+`</p>
        <a href='#' >Shop Now</a>
            <div class='princ-img'>
                <img src=`+el.image+` />
            </div>
        </div>
    `
})

product.map((val)=>{
    produtos.innerHTML += `
    <div class='produtos-single' >
        <img src=`+val.image+` />
        <p>`+val.name+`</p>
        <strong>`+val.price+`</strong>
    </div>`
})

console.log(viewMore)


// -----------menu-toogle------------

let menu = document.querySelector('.menu-toggle');
menu.addEventListener('click', () => {
    let nav = document.querySelectorAll('.d-col-3');

    for(var i = 0; i < nav.length; i++){
        if (nav[i].style.display == 'flex') {
            nav[i].style.display = 'none';
        } else {
            nav[i].style.display = 'flex';
        }
    }
})