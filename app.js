
     const products = [
            {
                id:1,
                title:"шаурма куриный",
                price:236,
                img:"https://girosking.ru/wp-content/uploads/2023/01/%D1%88%D0%B0%D1%83%D1%80%D0%BC%D0%B0%D1%81%D1%82%D0%BD%D0%B4.jpg"
            },
            {
                id:2,
                title:"Бургер",
                price:245,
                img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP7wwhAu8xvWtctM6fpdQo6OcKGTcneZSQY3ZYtoU5yjZybOoGyhEw-KsI&s=10"
            },
            {
                id:3,
                title:"суши",
                price:2453,
                img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFZTxbUQuIDjeryF9msDtIcCijGmrITlPk9Q8g2PAE88HSInG-I9hdMbY&s=10"
            },
            {
                id:4,
                title:"пица пипирони",
                price:655,
                img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJQ54XUEU29TGgQTlACRjjPBIKHYaNra-Q5vQxicNuVCI-QOLbT_ML6TA&s=10"
            },
            {
                id:5,
                title:"картошка с картошкай мини с соусам",
                price:456,
                img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSemZOxk9LQ9E19DACv26nXstem2ZXbEOgl-GWiHBpELaL-m82FqU61hmY&s=10"
            },
            {
                id:6,
                title:"картошка с картошкай мини с соусам",
                price:456,
                img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSemZOxk9LQ9E19DACv26nXstem2ZXbEOgl-GWiHBpELaL-m82FqU61hmY&s=10"
            },
            {
                id:7,
                title:"Фусти очень холодный",
                price:190,
                img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1C5jOx0oPX6xDWU1w2avJ6LsdCg1Habyre3Kcra43QQ&s=10"
            },
            {
                id:8,
                title:"баблти со кусом винаграда",
                price:2500,
                img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0rqni7qLgFaE6lTz5fdoq0vbYaerrzWD3JPRMr0nfPQ&s=10"
            },
            {
                id:9,
                title:"торт макаронц",
                price:1200,
                img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzWkzJnS1Qc95k-BG8fP-4ZNM_B6osD85gzY0ngBPgSV6n0_LTf5N5SgPZ&s=10"
            },
            {
                id:10,
                title:"комбо пицы",
                price:999,
                img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrNowKfN68oJ_kDrAGZrsRmOe_ECnRQQjv_jV4efI3VK_xWLxAsy9WoUo&s=10"
            },
            
        ]  
            const container =document.getElementById('container');
        
            products.forEach((el)=>{
                container.innerHTML+=`
                <div class='card'>
                <img src="${el.img}">
                <h2> ${el.title}</h2>
                <h3>${el.price}$</h3>
                </div>
                `
            })