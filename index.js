const express = require('express');
const app = express();
//bu sekilde artik elimizde bir uygulamamiz var.
app.set("view engine","ejs");
app.use(express.static('public'))
app.use(express.static('node_modules')) //bu sekilde dosyayi disari acmis olduk.



const data =[
    {id:1, name:"iphone 14", price: 30000, isActive: true, imageUrl: "1.png"},
    {id:2, name:"iphone 15", price: 40000, isActive: false, imageUrl: "1.png"},
    {id:3, name:"iphone 16", price: 50000, isActive: true, imageUrl: "2.png"},
];

//btn id lerden ornegin 5 id sine sahip urunu bana getir
app.use("/products/:id",function(req,res){
    const urun = data.find(u => u.id == req.params.id)
    res.render("product-details",urun);

});// bu kisim detay sayfasi hazirlayacagimizda kullanacagimiz olan rootes yapisi

app.use("/products",function(req,res){
    res.render("products", {
        urunler : data
    });// datayi 2.parametre olarak olusturdugunuz bir obje icine gondermeniz gerek
});

app.use("/",function(req,res){
    res.render("index");
});

app.listen(3000, () =>{
    console.log("listening on port 3000")
})

//dikkat eslesen ilk kisma bakar o yuzden / bunu alta aldik.