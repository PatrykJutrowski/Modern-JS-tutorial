
const items = [
    {name : "bike", price: 100},
    {name : "tv", price: 200},
    {name : "album", price: 10},
    {name : "book", price: 5},
    {name : "phone", price: 500},
    {name : "laptop", price: 1000},
    {name : "keyboard", price: 25}
]

const filteredItems = items.filter((item)=>{
    return item.price <= 100
})

console.log(filteredItems)