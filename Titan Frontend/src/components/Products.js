const products = [
  {
    id: 1,
    name: "",
    price: 50000,
    image: "",
    category: "Electronics",
    discount: 10,
    rating: 4.5,
    peopleBought: 1000,
    description: "A high-performance laptop suitable for all your computing needs.",
  },
  {
    id: 2,
    name: "",
    price: 30000,
    image: "https://i.pinimg.com/736x/96/df/7f/96df7f5a560211a8a1db932f1ae4d7cd.jpg",
    category: "Electronics",
    discount: 5,
    rating: 4.2,
    peopleBought: 850,
    description: "A smartphone with the latest features and high-speed performance.",
  },
  {
    id: 3,
    name: "",
    price: 5000,
    image: "https://i.pinimg.com/564x/7d/f9/aa/7df9aa663b75290477ee665c05f203fd.jpg",
    category: "Accessories",
    discount: 15,
    rating: 4.0,
    peopleBought: 300,
    description: "Noise-cancelling headphones for an immersive sound experience.",
  },
  {
    id: 4,
    name: "",
    price: 10000,
    image: "https://m.media-amazon.com/images/I/61ZjlBOp+rL.AC_UF1000,1000_QL80.jpg",
    category: "Accessories",
    discount: 20,
    rating: 4.3,
    peopleBought: 500,
    description: "A smartwatch with multiple health tracking features and notifications.",
  },
  {
    id: 5,
    name: "",
    price: 25000,
    image: "https://m.media-amazon.com/images/I/4129iYx95yL.jpg",
    category: "Electronics",
    discount: 12,
    rating: 4.4,
    peopleBought: 700,
    description: "A versatile tablet perfect for entertainment and productivity.",
  },
  {
    id: 6,
    name: "",
    price: 35000,
    image: "https://i.pinimg.com/564x/9c/d7/e7/9cd7e7e85fb52f60428a942675174f12.jpg",
    category: "Gaming",
    discount: 8,
    rating: 4.5,
    peopleBought: 200,
    description: "Next-gen gaming console for an unparalleled gaming experience.",
  },
  {
    id: 7,
    name: "",
    price: 8000,
    image: "https://i.pinimg.com/564x/4a/ee/61/4aee61c5e49196b38b6c66c2bb3f4f42.jpg",
    category: "Accessories",
    discount: 5,
    rating: 4.1,
    peopleBought: 400,
    description: "Portable Bluetooth speaker with high-quality sound.",
  },
  {
    id: 8,
    name: "",
    price: 4000,
    image: "https://m.media-amazon.com/images/I/71gIC-cJAfL.jpg",
    category: "Storage",
    discount: 10,
    rating: 4.3,
    peopleBought: 150,
    description: "Reliable external hard drive with large storage capacity.",
  },
  {
    id: 9,
    name: "",
    price: 1500,
    image: "https://i.pinimg.com/564x/27/34/9d/27349d0ee27123849933aed0c9537e53.jpg",
    category: "Accessories",
    discount: 5,
    rating: 4.0,
    peopleBought: 250,
    description: "Ergonomic wireless mouse for smooth and efficient use.",
  },
  {
    id: 10,
    name: "",
    price: 2000,
    image: "https://i.pinimg.com/736x/e3/f3/95/e3f395f39c65985e39ec58687f01fa6d.jpg",
    category: "Accessories",
    discount: 15,
    rating: 4.2,
    peopleBought: 300,
    description: "Multi-port USB-C hub for enhanced connectivity.",
  },
  {
    id: 11,
    name: "",
    price: 500,
    image: "https://i.pinimg.com/564x/19/34/c9/1934c9b6b43c2aa99beb21141d8d8a83.jpg",
    category: "Men's Fashion",
    discount: 10,
    rating: 4.3,
    peopleBought: 500,
    description: "Comfortable and stylish men's t-shirt.",
  },
  {
    id: 12,
    name: "",
    price: 1500,
    image: "https://i.pinimg.com/736x/3f/75/9b/3f759b2311748bf08a8f725cb737e519.jpg",
    category: "Men's Fashion",
    discount: 15,
    rating: 4.2,
    peopleBought: 450,
    description: "Durable and fashionable men's jeans.",
  },
  {
    id: 13,
    name: "",
    price: 2000,
    image: "https://i.pinimg.com/564x/b8/39/b5/b839b50a049f489a768b93e85d749461.jpg",
    category: "Women's Collection",
    discount: 20,
    rating: 4.5,
    peopleBought: 600,
    description: "Elegant and stylish women's dress.",
  },
  {
    id: 14,
    name: "Women's Handbag",
    price: 2500,
    image: "https://i.pinimg.com/564x/7e/2a/1d/7e2a1d0d0b3313ea3817115c8bd9445c.jpg",
    category: "Women's Collection",
    discount: 25,
    rating: 4.7,
    peopleBought: 350,
    description: "Chic and spacious women's handbag.",
  },
  {
    id: 15,
    name: "Kids' T-Shirt",
    price: 400,
    image: "https://i.pinimg.com/564x/19/56/75/1956754cce33c05a0a220597597497cc.jpg",
    category: "Kids Wear",
    discount: 15,
    rating: 4.3,
    peopleBought: 300,
    description: "Soft and comfortable kids' t-shirt.",
  },
  {
    id: 16,
    name: "Kids' Shorts",
    price: 600,
    image: "https://i.pinimg.com/564x/ce/80/b6/ce80b69bc6d397d92939826537946976.jpg",
    category: "Kids Wear",
    discount: 10,
    rating: 4.2,
    peopleBought: 250,
    description: "Durable and stylish kids' shorts.",
  },
  {
    id: 17,
    name: "Sports Equipment",
    price: 8000,
    image: "https://i.pinimg.com/564x/d4/34/49/d43449f36a12bd4e4952c54fd7bf199e.jpg",
    category: "Sports",
    discount: 5,
    rating: 4.4,
    peopleBought: 150,
    description: "High-quality sports equipment for various activities.",
  },
  {
    id: 18,
    name: "Beauty Products",
    price: 1500,
    image: "https://i.pinimg.com/736x/81/ef/ac/81efacbc5df00f3aa075a184ceada3ec.jpg",
    category: "Beauty",
    discount: 15,
    rating: 4.5,
    peopleBought: 200,
    description: "Premium beauty products for your daily routine.",
  },
  {
    id: 19,
    name: "Men's Sneakers",
    price: 2000,
    image: "https://example.com/mens-sneakers.jpg",
    category: "Shoes",
    discount: 15,
    rating: 4.4,
    peopleBought: 400,
    description: "Comfortable and stylish men's sneakers.",
  },
  {
    id: 20,
    name: "Women's Sandals",
    price: 1500,
    image: "https://example.com/womens-sandals.jpg",
    category: "Shoes",
    discount: 10,
    rating: 4.3,
    peopleBought: 300,
    description: "Elegant and comfortable women's sandals.",
  },
  {
    id: 21,
    name: "Organic Apples",
    price: 150,
    image: "https://example.com/organic-apples.jpg",
    category: "Groceries",
    discount: 5,
    rating: 4.6,
    peopleBought: 600,
    description: "Fresh and organic apples.",
  },
  {
    id: 22,
    name: "Whole Wheat Bread",
    price: 50,
    image: "https://example.com/whole-wheat-bread.jpg",
    category: "Groceries",
    discount: 2,
    rating: 4.5,
    peopleBought: 500,
    description: "Healthy and fresh whole wheat bread.",
  },
  {
    id:23,
    name: " Men's Tshirts",
    price: 300,
    image:"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSIsCbXkBz9n3aFmUvzyrrjQfqrZsAeN0NP9xdusdB5eSPUBMrL9B2ZRc4cobKaHNHKusfIftv0Cxea84ZRJ8kBIYFjcr8Aoe7WUxp9ea_YdQ",

    category: "Tshirts",
    discount:5,
    rating:3.5,
    peopleBought:400,
   description:"Can find  best quality tshirts for men.",
  },
  {
    id:24,
    name: " women's Tshirts",
    price: 300,
    image:"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQPmzRwHRBqZ_LxzigPguEXK5qWGq7-9W444sjvwGjoR1OZm4ZNaxze0_rFKh7vzHwno0Cd3L7x-SxSxAjyIq-TuGBchnPLP5fCCPQXGGtGbUBrfexNxfqC",
   category: "Tshirts",
    discount:3,
    rating: 4,
    peopleBought:300,
   description:"Can find  best quality tshirts for women.",
  },
  {
    id:25,
    name: " women's shoes",
    image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcT1PRmWto-KYgSpfQgX0ADf5LmlMEbA1JwiCaeoM2Id-lBQzWwPfl9joXONPePpG7Nnuau6cbcoib6fyfghwPsNK28V8HKpn1yNYEEqHm617s5nMCnzuvh2fQ",
   price: 1000,
   category: "Shoes",
    discount: 2,
    rating: 4,
    peopleBought: 200,
   description:"These stylish women's shoes combine comfort and sophistication, perfect for any occasion.",
  },
  {
      id:26,
      name: " Men's shoes",
      image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSJDQoXFBGngD0CSBlwUXcW8F2pi9lLaSurZ35DYFh7jD-lozEgpLDyTSJu2DYcG09C3HM4kq95CE6W8jiGN2ghN9GhTe1FHXVsxZ7ZxvxkrbyYzaQp8Eaqtw",
     price: 2000,
     category: "Shoes",
      discount: 3,
      rating: 4.5,
      peopleBought: 200,
     description:"These stylish Men's shoes combine comfort and sophistication, perfect for any occasion.",
    },
    
  {
    id:27,
    name: "Odonil ",
    image: "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo0ODE4MTkzOTIwOTY5Mjg3OjE3MjM0NzgzMDQ6c3BfYXRmOjMwMDA2OTk3MzA5MTczMjo6MDo6&url=%2FOdonil-Toilet-Air-Freshener-Pack%2Fdp%2FB07SWDFMVW%2Fref%3Dsr_1_2_sspa%3Fcrid%3D20PEBHDDP79JR%26dib%3DeyJ2IjoiMSJ9.1i0zJV73XxInT6SBuCm2DQTvpkvtiLd0WI-H43XQoFk427wpNDBk6KG4sJpHiWpUb4deUAE6HaI6gystaEIgR4l9cM8BL4TH3tNB4jKD4cg5QJMSjsBZ6zFJ8fmmkuOtkxHQSjRHPhj5QXvanA3s-HNm-RFf7Kvpqv-GjGGuY_Yfg1Dd-sgSyKclJ0zjgD3d8YWf1C0t01z5oXwBDg2u9f6j4dk9eNl17d5Mit8bizOUTyeFu2JigDCy2mZTGLFwIa9BWwUxC1BC74gSicDDEhh93O7wJYrq69YU1cJy15I.ia5IZZIT8_8gFj026XnHBibiGb9_T0FLLWOu2Ru7i2o%26dib_tag%3Dse%26keywords%3Dodonil%26qid%3D1723478304%26sprefix%3Dodo%252Caps%252C231%26sr%3D8-2-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGY%26psc%3D1%26smid%3DA3S3NRUORQ4TZ9",
   price: 110,
   category: "Bathroom Air Freshner",
    discount: 2,
    rating: 4,
    peopleBought: 600,
    description:" Keep your home smelling fresh and inviting with Odonil Room Freshener. ",
  },
  {
    id:28,
    name: "Sugar ",
    image: "https://www.amazon.in/More-Sugar-Loose-1kg/dp/B07MNFVXDN/ref=sr_1_8?crid=20NGG06RNOCKJ&dib=eyJ2IjoiMSJ9.OIvjBPWeLnfsB-2dfmKUHY5S8N_m3ay3GJzVa_j7nTA1oufGAp81lghRZkNUEBK2DmsuKNIObIqy7J6RfSmmM8it1irSei63U1Q-_J7aCChrvTVHeW6QNNbSb8Y4Jxr_GybWk9djptnheQZmZ-KtQqxB-hPQfAzZCmt-8tBok5aoZHXCVBODHVkr5r9IbtzWM1bUYskDSaE3MykcBfd-1PbL38AAGw9DhgTqTGn_rZ-4yznZS2DiKalrgLbiLXsUVXXikvMrsg5WdvIMa41AHJ8I1X3hYIasyM85XHKuYCo.OiqrmlI7ykv7VnXVUJPwyMoWCLaO8p-4oI_7BamOujY&dib_tag=se&keywords=sugar&qid=1723478351&sprefix=sugar%2Caps%2C313&sr=8-8",
   price: 42,
   category: "Groceries",
    discount: 1,
    rating: 4,
    peopleBought: 700,
    description:"Elevate your cooking and baking with our premium granulated sugar. ",
  },
  {
    id:29,
    name: "Toor dall  Whole ",
    image : "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo3MDQ0OTY0MjM3MjgwNjY2OjE3MjM0Nzg0NDM6c3BfYXRmOjMwMDI4NjIzMTIwMzQzMjo6MDo6&url=%2FAmazon-Brand-Popular-Cholesterol-Additives%2Fdp%2FB0BSWQXJDL%2Fref%3Dsr_1_2_sspa%3Fcrid%3DKVJAR5UNYLEI%26dib%3DeyJ2IjoiMSJ9.4TrhB62j9wMfoEnfUneWHd2XCm_yFZ4rjA85JQ1B6QzGDXU7j8MMNIG5VJ5uQWzusHCH4W7suXTJu8PAcP2cDI_9gGnh_hnJ4Vc-IdEoQQ5ZV8GcLau7nrsea1oW1FFefO7w4AaVPIA3wK-U-h2OFNo-_hsxRhkoYprpMTwSfvKaOO6Vbl00Fy5c3tT7Ol6bt-Q7P1etEPUb4s0PGCZdzdhcdRP9lCsSHjQpReGIW5V0EZkJTYtorXTL1JABvTJp40uF4qjdL9TxysvdTX0MOd0yaoEnB_1hajoZlzDuQ10._wBMAhoCc5MdBnAPs3WERqD5YkGD6g1EjcMoINGUQJc%26dib_tag%3Dse%26keywords%3Dtoor%2Bdall%2Bwhole%26qid%3D1723478443%26sprefix%3Dtoor%2Bdall%2Bwhole%252Caps%252C232%26sr%3D8-2-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGY%26psc%3D1",
   price: 495,
   category: "Groceries",
    discount: 14,
    rating: 4,
    peopleBought: 800,
    description:"Enjoy the rich taste and nutritional benefits of our premium Toor Dal, also known as pigeon pea lentils. ",
  },
  
  {
    id:30,
    name: "white wheat flour ",
    image: "https://www.amazon.in/Aashirvaad-Superior-MP-Atta-1kg/dp/B006FGJ30G/ref=sr_1_9_f3_0o_fs?crid=HYF01RMJX9EZ&dib=eyJ2IjoiMSJ9.edcdHwHX5iX6eUacaKhpd0ihP-Yn47aYAmZjLLUrxpS3FO165fh921Vi7UXaCCXUj9EL3v9yRiJM1VyJUfSwVwyUij0hRx6zpYONqeNf8MCjZaqtW_-2jMVtlaYdVTp8BrDiME28gZI06VHB5lmEP87nP7cl4e9p9goQVOr-Da-a2RFKRsh8ULSx8uxn8PRmf1MTEqfOIGg1NfWMUIxnvB9n6B_Pr179q-sLOn7LYDCwYdT2TIxxfyP01nhvrTDwjbh6J-fEXZbgst9k0Litz4rhlDHXxppbhaIUC4ZgeuE.cFN1O_6h5RxZ4Gs_JaCoP9D-xb3GucpG4xtVJ3TWb5k&dib_tag=se&keywords=white+wheat+flour&qid=1723478572&sprefix=white+wheat%2Caps%2C245&sr=8-9",
    price: 60,
   category: "Groceries",
    discount: 11,
    rating: 4,
    peopleBought: 500,
    description:"Enjoy the rich taste and nutritional benefits of our  White wheat Flour. ",
  },
  
  {
    id:30,
    name: "Organic Raw Peanuts ",
    image : "https://www.amazon.in/Pro-Nature-Organic-Peanuts-500g/dp/B00MCLQL4O/ref=sr_1_6?crid=19VKE59M3XF34&dib=eyJ2IjoiMSJ9.Y2hgnYL-wXIGvdkrY4kLK9BCwnbvy3eQQG-5LH7NXrtzU9OBmfU8AKcQw713MdtK8UZLbOJd5rfu6cqi8mFOc_YlQ7jmO9gRPOHtYpuhxsiYmuZY-YSg7XIAtdlEIdMSgLFG6vy1OpN0XwMoL2luCASfNAgdNhk2upQqypVLi3YAgMzv5K6JvflC1x7yDE1Un6fILsv6h3O-ynWAmKhq_feMuiQDETCG6Jq6hRxdtERoRy_bnvgGa8QbA99PqYWqxW_HiR11BfgUDrvYizj1hbuopOAGzxjWzJnIPNsbpPo.-OFDSY4iRHYOcaBJoIAQOstuIGFE7SQWbjQGuZHbQwQ&dib_tag=se&keywords=palli&qid=1723478656&sprefix=palli%2Caps%2C230&sr=8-6",
    price: 170,
   category: "Groceries",
    discount: 2,
    rating: 4.5,
    peopleBought: 300,
    description:"Fresh And Organic Peanuts. ",
  },
  
  {
    id:31,
    name: "Maggi",
    image : "https://www.amazon.in/MAGGI-2-minute-Goodness-Choicest-Favourite/dp/B07B4KQRZG/ref=sr_1_2?crid=38RROCK4GAB97&dib=eyJ2IjoiMSJ9.h5EUNRZDM24hBcz9KIm8dw14-PMthoxXh0zsK-fJclRiI6D5ecPIZQ2_zABD7TK_M9Sh2OL5PrBWYCbmQ8cVGXL4IiiCDDtAUESu3SFDk8SjxUslyVqolpeZCKyB3rYgVTeJaYTyQMns4vsQbP3z_XCBjrFC9saQqDuPGuDUQ-j7l_n2E-oxE7eaBEMk9pi3ZC0l_kfdA-KoTsOn6WPXBARbpib7y3spnPqtqHHH4Wr8rB7mg5o5PK-xbkP5BDNwVA7V240u7tMgNHr6qvzloR-M9V4GKWFC-6DXCCjloVc.dXRqQKJ6rWGmaHfAHdQxcQ2qUGo0biHH-m6j9p6btww&dib_tag=se&keywords=maagi&qid=1723478954&sprefix=magi%2Caps%2C360&sr=8-2",
    price: 158,
   category: "Groceries",
    discount: 6,
    rating: 4.5,
    peopleBought: 300,
    description:"Relish your favorite masala taste with MAGGI 2-Minute Instant Noodles. ",
  },
  {
    id:32,
    name: "BedSheets",
    image: "https://m.media-amazon.com/images/I/71zD5GeS2iL.SX679.jpg",
    price: 179,
   category: "linens",
    discount: 70,
    rating: 4.5,
    peopleBought: 800,
    description:"Experience unparalleled softness and comfort with our premium polyester bedsheets, perfect for a blissful night's sleep.. ",
  },
  {
    id:33,
    name: "Pillows",
    image: "https://m.media-amazon.com/images/I/81NAqD+6vxL.AC_UL480_FMwebp_QL65.jpg",
    price: 659,
   category: "linens",
    discount: 49,
    rating: 4.5,
    peopleBought: 500,
    description:"filling is Microfiber Polyester and Outer cover is 100% Microfiber shell for a rich and luxurious feel. ",
  },
  {
    id:34,
    name: "Cloth Drying Stand",
    image: "https://m.media-amazon.com/images/I/717p6Eqie4L.SY879.jpg",
    price: 2000,
   category: "House-Hold Items",
    discount: 60,
    rating: 4,
    peopleBought: 500,
    description:"Comfortable for drying clothes in balcony. ",
  },
  
  {
    id:35,
    name: " Office Chair",
    image: "https://m.media-amazon.com/images/I/4143++9zAEL.AC_SX250.jpg",
    price: 3000,
   category: "House-Hold Items",
    discount: 70,
    rating: 4,
    peopleBought: 500,
    description:"Comfortable to work in any environment. ",
  },
  
  {
    id:36,
    name: "Shoe Rack",
    image: "https://m.media-amazon.com/images/I/61QaDuJi9RL.SX679.jpg",
    price: 1700,
   category: "House-Hold Items",
    discount: 65,
    rating: 4,
    peopleBought: 700,
    description:"This versatile plastic shoe rack organizer, able to accommodate up to 30 pairs of shoes . ",
  },
  {
    id:37,
    name: "Home Decor Storage Rack ",
    image: "https://m.media-amazon.com/images/I/71CSJON4FZL.SX679.jpg",
    price: 2700,
   category: "House-Hold Items",
    discount: 46,
    rating: 4,
    peopleBought: 600,
    description:"Features 6 open shelving spaces this bookshelf provides ample space for placing and organizing your books, plants, and collections . ",
  },
  {
    id:38,
    name: " MI Tv Remote ",
    image: "ṣhttps://m.media-amazon.com/images/I/41ZtaM2C3jL.SX522.jpg",
    price: 280,
   category: "Electronics",
    discount: 86,
    rating: 4,
    peopleBought: 500,
    description:"Compatible with MI Smart TV 4A 32 inch Led TV /Mi 4A 43 inch led TV . ",
  },
  {
    id:39,
    name: " Smart Speaker With Alexa ",
    image: "https://m.media-amazon.com/images/I/81aMuyDLANL.SY450.jpg",
    price: 280,
   category: "Electronics",
    discount: 86,
    rating: 4,
    peopleBought: 500,
    description:" Smart speaker with loud sound, balanced bass, crisp vocals and Alexa. ",
  },
  {
    id:40,
    name: " Portable Mini Home Theater LED Projector with Remote Controller ",
    image: "https://m.media-amazon.com/images/I/61zb0LGCK3L.SX679.jpg" ,
    price: 2500,
   category: "Electronics",
    discount: 75,
    rating: 4,
    peopleBought: 300,
    description:"  can Enjoy the best view of watching movies at home. ",
  },
  {
    id:41,
    name : "Home Security Wi-Fi Smart Camera",
    image : "https://m.media-amazon.com/images/I/61XL2jzXhTL.SX522.jpg",
    price: 1600,
   category: "Electronics",
    discount: 52,
    rating: 4,
    peopleBought: 300,
    description:" Records every image in crystal-clear 1080p defini —— 360º horizontal and 114º vertical rang  . ",
  },
  {
    id:42,
    name: "LED Ring Light",
    image: "https://m.media-amazon.com/images/I/41Z0tFaU+SL.SX679.jpg" ,
    price: 1300,
   category: "Electronics",
    discount: 65,
    rating: 4,
    peopleBought: 700,
    description:" No Shadow apertures, is essentially a boon for Photo-Video shoots with Lighting effects . "
  },
  {
    id:43,
    name: "Full Frame Lens ",
    image: "https://m.media-amazon.com/images/I/61ZfQ7emlOL.SX522.jpg" ,
    price: 80990,
   category: "Electronics",
    discount: 31,
    rating: 3.5,
    peopleBought: 500,
    description:"Can Experience a good pictures with this lens . "
  },
  {
    id:44,
    name: " Go Pro Camera  ",
    image: "https://m.media-amazon.com/images/I/51f3Ga7pyCL.SX679.jpg" ,
    price: 38990,
   category: "Electronics",
    discount: 28,
    rating: 4,
    peopleBought: 700,
    description:"Capture your adventures in stunning detail with the GoPro Action Camera. "
  },
  {
    id:45,
    name: " Drone Camera  ",
    image: "https://m.media-amazon.com/images/I/61fEXqwECyL.SX522.jpg" ,
    price: 32499,
   category: "Electronics",
    discount: 54,
    rating: 4,
    peopleBought: 700,
    description:"Capture breathtaking aerial views with the Go Drone Camera, designed for both amateur and professional photographers. "
  },
  {
    id:46,
    name: " Tripod Stand  ",
    image: " https://m.media-amazon.com/images/I/61acm0u1aoL.SX522.jpg" ,
    price: 1889,
   category: "photography",
    discount: 37,
    rating: 4,
    peopleBought: 700,
    description:"Elevate your photography and videography with the versatile GO Tripod Stand. "
  },
  {
    id:47,
    name: " Samsung Type C  Cable  ",
    image: " https://m.media-amazon.com/images/I/51ga1DANA8L.SL1500.jpg" ,
    price: 499,
   category: "Electronics",
    discount: 17,
    rating: 4.5,
    peopleBought: 700,
    description:" Stay connected and powered up with the Go Samsung Type-C Cable, designed for high-speed data transfer and reliable charging. "
  },
  
  {
    id:48,
    name: " USB Wifi Adapter ",
    image: "https://m.media-amazon.com/images/I/61txQU3urNL.SY879.jpg " ,
    price: 429,
   category: "Electronics",
    discount: 57,
    rating: 4.5,
    peopleBought: 500,
    description:"Upgrade your wireless connectivity with our high-speed USB WiFi adapter . "
  },
  {
    id:49,
    name: " Dolby Digital Speakers ",
    image: " https://m.media-amazon.com/images/I/41E--EoLIIL.SY300_SX300_QL70_FMwebp.jpg" ,
    price: 15989,
   category: "Electronics",
    discount: 33,
    rating: 4,
    peopleBought: 1500,
    description:" Enjoy dramatic, high-quality surround sound from 5.1 separate audio channels with Dolby Digital. "
  },
  
  {
    id:50,
    name: " Video Converter Adapter Cable ",
    image: " https://m.media-amazon.com/images/I/512IJNbc-TL.SX679.jpg" ,
    price: 299,
   category: "Electronics",
    discount: 63,
    rating: 4.5,
    peopleBought: 800,
    description:"Transform your multimedia experience with our high-quality video converter adapter cable. "
  },
  
  
  {
    id:51,
    name: "  Samsung Smart TV",
    image: " https://m.media-amazon.com/images/I/41zWlnRS4xL.SY300_SX300_QL70_FMwebp.jpg" ,
    price: 13490,
   category: "Electronics",
    discount: 29,
    rating: 4.5,
    peopleBought: 2000,
    description:"Transform your entertainment experience with the Samsung Smart TV, designed to deliver stunning visuals and immersive sound. "
  },
  
  {
    id:52,
    name: " Tata Play HD Connection With Basic Pack and Free Installation ",
    image: " https://m.media-amazon.com/images/I/71noSYP-cWL.SX679.jpg" ,
    price: 1130,
   category: "Electronics",
    discount: 68,
    rating: 4.5,
    peopleBought: 900,
    description:"Upgrade your entertainment experience with the Tata Play HD Connection . "
  },
  
  {
    id:53,
    name: "phone splitter ",
    image: " https://m.media-amazon.com/images/I/51Zv7lMuv0L.SX679.jpg" ,
    price: 2687,
   category: "Electronics",
    discount: 1,
    rating: 4.5,
    peopleBought: 900,
    description:"Simplify your communication needs with our versatile phone splitter adapter . "
  },
  
  {
    id:54,
    name: "Patch Cable Splitter ",
    image: "https://m.media-amazon.com/images/I/71gaqybjMFS.SX522.jpg.  " ,
    price: 2910,
   category: "Electronics",
    discount: 1,
    rating: 4.5,
    peopleBought: 1000,
    description:"Enhance your connectivity with our high-quality patch cable splitter. "
  },
  {
    id:55,
    name: " Bluetooth Edition Wireless Mouse ",
    image: "https://m.media-amazon.com/images/I/31O+6OxqSBL.SY300_SX300.jpg.  " ,
    price: 3499,
   category: "Electronics",
    discount: 42,
    rating: 4.2,
    peopleBought: 700,
    description:"Experience seamless connectivity and effortless control with our Bluetooth Edition Wireless Mouse. "
  },
  {
    id:56,
    name: "HP USB Wireless Spill Resistance Keyboard and Mouse Set",
    image: "https://m.media-amazon.com/images/I/61+D5C0h3fL.SX679.jpg.  " ,
    price: 999,
   category: "Electronics",
    discount: 55,
    rating: 4,
    peopleBought: 800,
    description:" Enhance your workspace with the HP USB Wireless Keyboard and Mouse Set, designed for both comfort and durability. "
  },
  {
    id:57,
    name: " Laptop Back-Pack",
    image: "https://m.media-amazon.com/images/I/514Mddg6EML.SX300_SY300_QL70_FMwebp.jpg.  " ,
    price: 549,
   category: "Office Euipment ",
    discount: 78,
    rating: 4.5,
    peopleBought: 1000,
    description:"Upgrade your daily commute with our sleek and functional laptop backpack . "
  },
  {
    id:58,
    name: "Docking Staion",
    image: "https://m.media-amazon.com/images/I/61tPYsj5cGL.SX679.jpg.  " ,
    price: 1999,
   category: "Electronics",
    discount: 75,
    rating: 4.4,
    peopleBought: 500,
    description:"Enhance your workspace with our sleek and functional docking station, designed to expand your laptop's connectivity options . "
  },

  {
    id:59,
    name: "Digital Graphics Pen Tablet",
    image: "https://m.media-amazon.com/images/I/61k9UtHrTgL.SX679.jpg.  " ,
    price: 23999,
   category: "Electronics",
    discount: 12,
    rating: 3.8,
    peopleBought: 800,
    description:" Unleash your creativity with our advanced Digital Graphics Pen Tablet, designed for artists, designers, and digital creators . "
  },
  {
    id:60,
    name: "Socket Surge Protector ",
    image: "https://m.media-amazon.com/images/I/41NqJAKnH6L.SY879.jpg.  " ,
    price:1099,
   category: "Electronics",
    discount: 27,
    rating: 4.5,
    peopleBought: 1200,
    description:" Safeguard your electronics with our reliable Socket Surge Protector. Designed to protect your devices from voltage spikes and power surges, this surge protector features multiple outlets. "
  },
  {
    id:61,
    name: "Multimedia Speaker for PC",
    image: "https://m.media-amazon.com/images/I/616O4vDmqeL.SX679.jpg.  " ,
    price: 349,
   category: "Electronics",
    discount: 61,
    rating: 3.9,
    peopleBought: 1500,
    description:"Enhance your audio experience with our premium multimedia speaker designed for PC use. "
  },
  {
    id:62,
    name: " Hp Wired On Ear Headphones With Mic",
    image: "https://m.media-amazon.com/images/I/61JZG+RYQnL.SX679.jpg.  " ,
    price:599,
   category: "Electronics",
    discount: 33,
    rating: 3.5,
    peopleBought: 1600,
    description: "Experience clear, immersive sound with the HP Wired On-Ear Headphones."
  },
  {
    id:63,
    name: "HP H150 Wireless Earbuds ",
    image: "https://m.media-amazon.com/images/I/61aD70hwrmL.SX679.jpg.  " ,
    price:1399,
   category: "Electronics",
    discount: 44,
    rating: 3.5,
    peopleBought: 2500,
    description:" Experience superior sound quality and ultimate convenience with the HP H150 Wireless Earbuds.",
  },
  {

    id: 64,
    name: "Acoustic Rosewood Guitar ",
    image: "https://m.media-amazon.com/images/I/71RkY055j7L.SX679.jpg.  " ,
    price:7399,
   category: "Muscial Instrument",
    discount: 7 ,
    rating: 4.2,
    peopleBought: 1200,
    description:" Experience superior sound quality and timeless beauty with our Acoustic Rosewood Guitar. "
  },
  {
    id:65,
    name: " Casiotone",
    image: "https://m.media-amazon.com/images/I/51wl4C1KAfL.SL1100.jpg",
    price: 9883  ,
   category: "Muscial Instrument",
    discount: 14 ,
    rating: .54,
    peopleBought: 1700,
    description:"Discover the joy of music with the Casiotone Portable Keyboard, a versatile and user-friendly instrument designed for musicians of all levels . "
  },
  {
    id:66,
    name: "Brass Tabla ",
    image: "https://m.media-amazon.com/images/I/71doEknXclL.SL1500.jpg.  " ,
    price: 7449,
   category: "Muscial Instrument",
    discount: 38,
    rating:  4,
    peopleBought: 2500,
    description:"Enhance your home décor with our stunning brass table, a perfect blend of sophistication and functionality . "
  },
  {
    id:67,
    name: "Saxophone",
    image: "https://m.media-amazon.com/images/I/51W+Y5Q9GGS.SL1045.jpg.  " ,
    price: 16999,
   category: "Muscial Instrument",
    discount: 41,
    rating:  1,
    peopleBought: 100,
    description:"Discover the rich, melodic tones of our Classic Alto Saxophone, a perfect choice for both beginner and professional musicians . "
  },
  {
    id:68,
    name: "Vocal Microphone",
    image: "https://m.media-amazon.com/images/I/41uadJAjsVL.SX679.jpg.  " ,
    price: 11589 ,
   category: "Cardioid ",
    discount: 20,
    rating:  4.5 ,
    peopleBought: 3000 ,
    description:"Elevate your sound with our high-quality professional vocal microphone . "
  },

  {
    id:69,
    name: " Flute",
    image: "https://m.media-amazon.com/images/I/31EIBUcIYIL.SY300_SX300_QL70_FMwebp.jpg.  " ,
    price: 399,
   category: "Muscial Instrument",
    discount: 50 ,
    rating: 4.2 ,
    peopleBought: 32000 ,
    description:" Discover the beauty of music with our high-quality  flute. "
  },

  {
    id:70,
    name: "Drum Stick ",
    image: "https://m.media-amazon.com/images/I/61HpQl1mieL.SX522.jpg.  " ,
    price:  990,
   category: "Muscial Instrument",
    discount: 1,
    rating: 4.6 ,
    peopleBought:  1800 ,
    description:"Elevate your drumming experience with our premium drumstick, crafted for both beginners and professional drummers . "
  },
  {
    id:71,
    name: "Pen",
    image: "https://m.media-amazon.com/images/I/61QhEcng-9L.SL1500.jpg.  " ,
    price:  206,
   category: "Office And Stationery",
    discount: 37 ,
    rating: 4.0,
    peopleBought:  4000 ,
    description:" Experience smooth and effortless writing with our Elegant Ballpoint Pen. "
  },
  {
    id:72,
    name: " A4 Sheet Paper",
    image: "https://m.media-amazon.com/images/I/71KjgvIpc+L.SX522.jpg.  " ,
    price: 354 ,
   category: "Office And Stationery",
    discount: 8,
    rating: 4.2 ,
    peopleBought:  1800 ,
    description:" Experience exceptional quality with our premium A4 sheet paper, designed for all your printing and writing needs. "
  },
  {
    id:73,
    name: " Coloring Kit",
    image: "https://m.media-amazon.com/images/I/61Mbe135kdL.SX679.jpg.  " ,
    price:  557,
   category: "Office And Stationery",
    discount: 20,
    rating: 4.4 ,
    peopleBought:  5000,
    description:" Unleash your artistic potential with our all-in-one Creative Coloring Kit . "
  },
  {
    id:74,
    name: "Highlighters" ,
    image: "https://m.media-amazon.com/images/I/51jveN6T5lL.SX522.jpg.  " ,
    price:  189 ,
   category: "Office And Stationery",
    discount:  76,
    rating: 3.9 ,
    peopleBought:  2200 ,
    description:"Make your notes and documents stand out with our vibrant  highlighters . "
  },
  {
    id:76,
    name: " File Folder",
    image: "https://m.media-amazon.com/images/I/81uKfisnWcL.SX522.jpg.  " ,
    price: 639 ,
   category: "Office And Stationery",
    discount: 36,
    rating: 4.4,
    peopleBought: 5000  ,
    description:"Keep your documents organized and easily accessible with our high-quality file folders . "
  },
  {
    id:76,
    name: "Note Counting Machine ",
    image: "https://m.media-amazon.com/images/I/71K4AQVK8AL.SX679.jpg.  " ,
    price:  6459,
   category: "Office And Stationery",
    discount: 28,
    rating: 4.2,
    peopleBought:  6000 ,
    description:"Ensure accuracy and security with our state-of-the-art note counting machine, equipped with advanced counterfeit detection technology . "
  },
{
    id:77,
    name: "Notebook Diary ",
    image: "https://m.media-amazon.com/images/I/71CENBiXFrL.SX522.jpg. ",
    price: 312 ,
   category: "Office And Stationery" ,
    discount: 30,
    rating: 4.3 ,
    peopleBought:  6500 ,
    description:" Stay organized and inspired with our stylish Notebook Diary. "
  },
  {
    id:78,
    name: "Book Cover ",
    image: "https://m.media-amazon.com/images/I/71yGBL04w3L.SX522.jpg.  " ,
    price: 375 ,
   category: "Office And Stationery",
    discount: 46,
    rating: 4.3 ,
    peopleBought: 7000 ,
    description:" Enhance the appeal of your favorite books with our elegant book cover. ",
  },{
    id:79,
    name: " White Board",
    image: "https://m.media-amazon.com/images/I/71gn2WLOSRL.SX522.jpg.  " ,
    price: 999 ,
   category: "Office And Stationery",
    discount: 67,
    rating: 3.7 ,
    peopleBought: 3000 ,
    description:"Enhance your workspace or classroom with our high-quality whiteboard . ",
  },{
    id:80,
    name: "Biometric " ,
    image: "https://m.media-amazon.com/images/I/512ToTn71oL.SX300_SY300_QL70_FMwebp.jpg.  " ,
    price:  3499,
   category:"Office And Stationery ",
    discount: 65,
    rating: 3.7 ,
    peopleBought:  10000 ,
    description:"  Enhance your security with our cutting-edge biometric system, designed for both residential and commercial use. "
  },
  {
    id:81,
    name: " Smart Watches " ,
    image: "https://m.media-amazon.com/images/I/31czMWqckzL.SX300_SY300_QL70_FMwebp.jpg.  " ,
    price: 7999 ,
   category:"Electronics ",
    discount: 1,
    rating:  4.0,
    peopleBought: 5000,
    description:" Discover the future of wearable technology with the Smartwatch Pro Series. "
  },
  {
    id:82,
    name: " Virtual Reality Headset" ,
    image: "https://m.media-amazon.com/images/I/71ARMCztUBL.SX679.jpg.  " ,
    price: 99990 ,
   category:"Electronics",
    discount: 22,
    rating: 3.7 ,
    peopleBought: 2800 ,
    description:" Immerse yourself in a new world with our cutting-edge Virtual Reality Headset . "
  },
  {
    id:83,
    name: "Handbags" ,
    image: "https://m.media-amazon.com/images/I/71zAWM7NVHL.SY695.jpg.  " ,
    price:  499,
   category:"Fashion Accessories ",
    discount: 75,
    rating: 3.7 ,
    peopleBought: 7000 ,
    description:"  Elevate your style with our sophisticated leather handbag, designed for both function and fashion. "
  },
  {
    id:84,
    name: "Women's Watch" ,
    image: "https://m.media-amazon.com/images/I/71nbOk-3qUL.SX679.jpg.  " ,
    price:  360,
   category:"Accessories ",
    discount: 82,
    rating: 4.0,
    peopleBought: 6000 ,
    description:" Discover timeless sophistication with our elegant women's watch, designed to complement any outfit with its classic style  . "
  },
  {
    id:85,
    name: " Men's watches " ,
    image: "https://m.media-amazon.com/images/I/81nj6IlZpVL.SY879.jpg.  " ,
    price:  999,
   category:"Accessories",
    discount: 78,
    rating: 3.8 ,
    peopleBought:  8000 ,
    description:"  Discover timeless sophistication with our Elegant Men's Stainless Steel Watch. "
  },
  {
    id:86,
    name: "Women's Jewellery" ,
    image: "https://m.media-amazon.com/images/I/419WruRQEoL.jpg.  " ,
    price:  198,
   category:"Fashion Accessories",
    discount: 90,
    rating: 3.8,
    peopleBought: 20000 ,
    description:"  Discover the timeless beauty of our women's jewelry collection, where sophistication meets style . "
  },
  {
    id:87,
    name: "Men's Jewellery " ,
    image: "https://m.media-amazon.com/images/I/6147s+pZ40L.SY625.jpg.  " ,
    price:  203,
   category:"Fashion Accessories ",
    discount: 80,
    rating: 4.1,
    peopleBought: 20000,
    description:"Discover our sophisticated collection of men's jewelry, designed to enhance any style with a touch of elegance . "
  },
  {
    id:88,
    name: "Wallet " ,
    image: "https://m.media-amazon.com/images/I/41sOI+8IhqL.SY300_SX300.jpg.  " ,
    price: 499 ,
   category:"Fashion Accessories ",
    discount: 67,
    rating: 4.0 ,
    peopleBought: 30000,
    description:"Discover the perfect blend of style and functionality with our elegant leather wallet . "
  },
  {
    id:89,
    name: "Travel Luggage" ,
    image: "Discover the perfect blend of durability and elegance with our premium travel luggage.  " ,
    price: 3291 ,
   category:"Travel Accessories ",
    discount: 1,
    rating: 4.1 ,
    peopleBought: 50000 ,
    description:"Discover the perfect blend of durability and elegance with our premium travel luggage  . "
  },
  {
    id:90,
    name: " Dog Food " ,
    image: "https://m.media-amazon.com/images/I/41GRG2SFFEL.SX300_SY300_QL70_FMwebp.jpg.  " ,
    price: 2848 ,
   category:" Pet Supplies",
    discount: 7,
    rating: 4.3,
    peopleBought: 30000 ,
    description:"  Keep your furry friends happy and healthy with our wide range of pet supplies . "
  },
  {
    id:91,
    name: " Sun Glasses And Frames " ,
    image: "https://m.media-amazon.com/images/I/41KML+1HubL.SX679.jpg.  " ,
    price: 944 ,
   category:" Fashion Accessories",
    discount: 53,
    rating: 4.1,
    peopleBought: 30000 ,
    description:" Upgrade your eyewear collection with our fashionable range of sunglasses and frames  . "
  },
  {
    id:92,
    name: " Mixers Grinders " ,
    image: "https://m.media-amazon.com/images/I/51PfScTbTmL.SX300_SY300_QL70_FMwebp.jpg.  " ,
    price: 2399 ,
   category:" Kitchen Appliances",
    discount: 55,
    rating: 3.9,
    peopleBought: 40000 ,
    description:"  Upgrade your kitchen with our high-performance mixer grinder, designed to make food preparation faster and easier  . "
  },
   
  {
    id:93,
    name: " Irons " ,
    image: "https://m.media-amazon.com/images/I/810Yr09Ji9L.SX679.jpg.  " ,
    price: 543 ,
   category:"Kitchen Appliances ",
    discount: 31,
    rating: 4.2,
    peopleBought: 50000 ,
    description:" Achieve perfectly smooth, wrinkle-free clothes with our premium steam iron  . "
  },
  {
    id:94,
    name: "Vaccum Cleaners  " ,
    image: "https://images-na.ssl-images-amazon.com/images/I/41pgKrVoZYL.SX300_SY300_QL70_FMwebp.jpg.  " ,
    price: 5699  ,
   category:" Home Appliances",
    discount: 43,
    rating: 4.2,
    peopleBought: 20000 ,
    description:" Discover the ultimate cleaning convenience with our advanced vacuum cleaner  . "
  },
  {
    id:95,
    name: " Coolers " ,
    image: "https://m.media-amazon.com/images/I/31TYCNqAUhL.SX300_SY300_QL70_FMwebp.jpg.  " ,
    price: 12090 ,
   category:"Home Appliances",
    discount: 29,
    rating: 3.1,
    peopleBought: 60000 ,
    description:"  Stay comfortable and beat the heat with our efficient air cooler . "
  },
  {
    id:96,
    name: " Geysers " ,
    image: "https://m.media-amazon.com/images/I/31KGeL7u8hL.SX300_SY300_QL70_FMwebp.jpg.  " ,
    price: 3799 ,
   category:" Home Appliances",
    discount: 48,
    rating: 4.0,
    peopleBought: 60000 ,
    description:"  Experience comfort and convenience with our advanced energy-efficient geyser  . "
  },
  {
    id:97,
    name: " Fans" ,
    image: "https://m.media-amazon.com/images/I/31lLuNtIefL.SY445_SX342_QL70_FMwebp.jpg.  " ,
    price: 3499 ,
   category:"  Home Appliances",
    discount: 32,
    rating: 4.2,
    peopleBought: 1000000 ,
    description:" Stay cool and comfortable with our high-performance electric fan, designed to deliver powerful airflow and energy efficiency  . "
  },
  {
    id:98,
    name: " Water Purifiers " ,
    image: "https://m.media-amazon.com/images/I/31ZMGuAaV2L.SX300_SY300_QL70_FMwebp.jpg.  " ,
    price: 16799,
   category:" Home Appliances",
    discount: 42,
    rating: 4.1,
    peopleBought: 100000 ,
    description:"  Ensure your family has access to clean and safe drinking water with our state-of-the-art water purifier . "
  },
  {
    id:99,
    name: "Inverter Batteries " ,
    image: "https://m.media-amazon.com/images/I/41RIfwyTpYS.SX300_SY300_QL70_FMwebp.jpg.  " ,
    price: 19475 ,
   category:" Home Appliances",
    discount: 41,
    rating: 4.1,
    peopleBought: 40000 ,
    description:" : Power your home or office with our durable and efficient inverter batteries, designed to provide consistent backup during power outages  . "
  },
  {
    id:100,
    name: " Decorative Lightings " ,
    image: "https://m.media-amazon.com/images/I/91kafYqFD-L.SX522.jpg.  " ,
    price: 1299 ,
   category:" Home Decor",
    discount: 74,
    rating: 4.1,
    peopleBought: 70000 ,
    description:" Transform your space with our exquisite collection of decorative lighting . ",
  },
]
export default products;