

const product = [
    {   
        id: 0,
        name: 'Classic leather shoe',
        price: 'R$ 40.00 - R$ 90.00 ',
        image: 'assets/product-1.jpg',
        quantidade: 0
    },
    {   
        id: 1,
        name: 'Ladies Shoe tenis',
        price: 'R$ 20.00 - R$ 70.00',
        image: 'assets/product-2.jpg',
        quantidade: 0
    },
    {   
        id: 2,
        name: 'men`s formal shoe',
        price: 'R$ 20.00 - R$ 70.00',
        image: 'assets/product-3.jpg',
        quantidade: 0
    },
    {   
        id: 3,
        name: 'men`s summer shoe',
        price: 'R$ 40.00 - R$ 100.00',
        image: 'assets/product-4.jpg',
        quantidade: 0
    },
    {   
        id: 4,
        name: 'men`s summer shoe',
        price: 'R$ 40.00 - R$ 100.00',
        image: 'assets/product-5.jpg',
        quantidade: 0
    },
    {
        id: 5,
        name: 'men`s summer shoe',
        price: 'R$ 40.00 - R$ 100.00',
        image: 'assets/product-6.jpg',
        quantidade: 0
    },
    {
        id: 6,
        name: 'men`s summer shoe',
        price: 'R$ 40.00 - R$ 100.00',
        image: 'assets/product-7.jpg',
        quantidade: 0
    },
    {
        id: 7,
        name: 'men`s summer shoe',
        price: 'R$ 40.00 - R$ 100.00',
        image: 'assets/product-8.jpg',
        quantidade: 0
    },
]

const viewMore = [
    {
        name: 'Formal boots',
        title: 'Collections',
        image: 'assets/info-img.png',
        quantidade: 0
    },
    {
        name: 'Women`s shoes',
        title: 'Collections',
        image: 'assets/info-img2.png',
        quantidade: 0
    },
    {
        name: 'Casual shoes',
        title: 'Collections',
        image: 'assets/info-img3.png',
        quantidade: 0
    },
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

function shop(){
    product.map((val)=>{
        const key = product.id;
        produtos.innerHTML += `
        <div class='produtos-single' >
            <img src=`+val.image+` />
            <div class='hover-select'>
                <p>`+val.name+`</p>
                <br>
                <strong>`+val.price+`</strong>
                <br>
                <br>
               <button key="`+val.id+`" class='btn'>select option</button>
            <br>
        </div>
        `
    })
}

shop()

var key = product.id; //lembrar deste codigo


// ----------- abrir na página de compra -------------


var carrinhoToggle = document.getElementById('carrinho-pagina');

carrinhoToggle.addEventListener('click', () => {
    let meuCarrinho = document.querySelectorAll('#meu-carrinho');
   
    for(var i = 0; i < meuCarrinho.length; i++){
        if (meuCarrinho[i].style.display == 'flex') {
            meuCarrinho[i].style.display = 'none';
        } else {
            meuCarrinho[i].style.display = 'flex';
        }
    }
    

})

// const url = './carrinho.html';
// function openUrl(url) {
//     const win = window.open(url, '_black');
//     win.focus();
// }

// carrinho.addEventListener('click', () => {
//     openUrl(url);
//  })





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


 function atualizarCarrinho(){
     var carrinho = document.querySelector('#meu-carrinho');
    carrinho.innerHTML = '';
     product.map((val)=>{
        if(val.quantidade > 0){
            carrinho.innerHTML += `
                <div class='store'>
                <br>
                <p>`+val.name+` | quantidade: `+val.quantidade+` &nbsp;&nbsp;&nbsp;<strong>X</strong></p>
                <hr>
                <br>
                </div>
                <br>
            `   
        }
    })
}


var btn = document.getElementsByClassName('btn');


for(var i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', function(){
        let key = this.getAttribute('key');
        product[key].quantidade++;
        atualizarCarrinho();
        return false;
        
    
    })
}




//  ------- add carrinho -------------

// var meuCarrinho = document.querySelector('#meu-carrinho')

