const fetchAPI = async (api) => {
    const response = await fetch(api)
    const data = await response.json()
    return data;
}

fetchAPI("https://dummyjson.com/carts")
    .then(data => {
        const products = data.carts.map(item => {
            const arrProducts = item.products.map(element => {
                return `
                <div class="product">
                <img src="${element.thumbnail}"/>
                <h3>${element.title}</h3>
                <h4>
                    ${(element.price - element.discountPercentage*element.price/100).toFixed(2)}$
                    <span>${element.price}$</span>
                </h4>
                <h5>
                    <i class="fa-solid fa-tag"></i>
                    ${element.discountPercentage}%
                </h5>
                <div class="purchuse">
                    <a href="#" class="order"> <i class="fa-solid fa-cart-shopping"></i> </a>
                    <button type="button" class="btn btn-warning">Buy</button>
                </div>
                </div>
            `
            })
            return arrProducts.join("")
        })
        console.log(data)           
        return products.join("")
    })
    .then(listProducts => {
        const list = document.querySelector(".list-products")
        list.innerHTML = listProducts
    });