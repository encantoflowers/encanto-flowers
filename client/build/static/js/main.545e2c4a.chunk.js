(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{111:function(e,a,t){},114:function(e,a,t){},117:function(e,a,t){},120:function(e,a,t){},123:function(e,a,t){},126:function(e,a,t){},129:function(e,a,t){},132:function(e,a,t){},134:function(e,a,t){},137:function(e,a,t){},140:function(e,a,t){},143:function(e,a,t){},145:function(e,a,t){},154:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(79),l=t.n(c),o=t(13),i=t(155),m=t(183),s=t(185),u=t(181),d=t(24),p=t(3),E=t(10),g=t(151),f=t(39),b="UPDATE_PRODUCTS",h="UPDATE_SELECTED_PRODUCT",y="ADD_TO_CART",v="ADD_MULTIPLE_TO_CART",N="UPDATE_CART_QUANTITY",O="UPDATE_CATEGORIES",j="UPDATE_CURRENT_CATEGORY",w="UPDATE_TOTAL",_="UPDATE_CURRENT_QUANTITY",k=function(e,a){switch(a.type){case"ADD_PRODUCT":return Object(o.a)({},e,{products:[].concat(Object(f.a)(e.products),[a.payload])});case"UPDATE_PRODUCT":case"DELETE_PRODUCT":return Object(o.a)({},e,{products:a.payload});case"ADD_CATEGORY":return Object(o.a)({},e,{categories:[].concat(Object(f.a)(e.categories),[a.payload])});case"UPDATE_CATEGORY":case"DELETE_CATEGORY":return Object(o.a)({},e,{categories:a.payload});case h:return Object(o.a)({},e,{selectedProduct:[a.selectedProduct]});case _:return Object(o.a)({},e,{currentQuantity:a.currentQuantity});case y:return Object(o.a)({},e,{cart:[].concat(Object(f.a)(e.cart),[a.product])});case v:return Object(o.a)({},e,{cart:[].concat(Object(f.a)(e.cart),Object(f.a)(a.products))});case N:return Object(o.a)({},e,{cart:e.cart.map(function(e){return a._id===e._id&&(e.purchaseQuantity=a.purchaseQuantity),e})});case"REMOVE_FROM_CART":var t=e.cart.filter(function(e){return e._id!==a._id});return Object(o.a)({},e,{cart:t});case"CLEAR_CART":return Object(o.a)({},e,{cart:[]});case j:return Object(o.a)({},e,{currentCategory:a.currentCategory});case w:return Object(o.a)({},e,{total:a.total});default:return e}};var T,C,$,x,S,D=Object(n.createContext)(),P=D.Provider,A=function(e){e.value;var a,t=Object(g.a)(e,["value"]),c=(a={products:[],cart:[],categories:[],currentCategory:"",selectedProduct:"",currentQuantity:0,orderTotal:0},Object(n.useReducer)(k,a)),l=Object(E.a)(c,2),o=l[0],i=l[1];return r.a.createElement(P,Object.assign({value:[o,i]},t))},I=function(){return Object(n.useContext)(D)},B=t(108),L=t(182),R=t(167),U=t(186),Q=t(168),F=t(94),q=t(19),M=t(184),G=Object(M.a)(T||(T=Object(q.a)(["\n    query getProduct($_id: ID!) {\n        product (_id: $_id) {\n            _id\n            name\n            description\n            price\n            image {\n                name\n                description\n                img\n            }\n            categories {\n                _id\n                Name\n            }\n        }\n    }\n"]))),W=Object(M.a)(C||(C=Object(q.a)(["\n  query getCheckout($products: [ID]!, $total: Float! ) {\n    checkout(products: $products, total: $total) {\n      session\n    }\n  }\n"]))),Y=Object(M.a)($||($=Object(q.a)(["\n     query products {\n        products {\n            _id\n            name\n            description\n            price\n            image {   \n                name\n                description\n                img\n            }\n            categories {\n                _id\n                Name\n            }\n        }\n    }\n"]))),z=Object(M.a)(x||(x=Object(q.a)(["\n    query categories {\n        categories {\n            _id\n            Name\n        }\n    }\n"]))),H=Object(M.a)(S||(S=Object(q.a)(["\n    query user {\n        user {\n            _id\n            userName\n            email\n            password\n            role\n            orders {\n                _id\n                purchaseDate\n                products {\n                    _id\n                    name\n                    description\n                    price\n                   image {\n                       _id\n                       name\n                       description\n                       img \n                   }\n                }\n                total\n            }\n        }\n    }\n"])));function V(e,a,t){return new Promise(function(n,r){var c,l,o,i=window.indexedDB.open("encanto-flowers",1);i.onupgradeneeded=function(e){var a=i.result;a.createObjectStore("products",{keyPath:"_id"}),a.createObjectStore("categories",{keyPath:"_id"}),a.createObjectStore("cart",{keyPath:"_id"}),a.createObjectStore("total",{autoIncrement:!0})},i.onerror=function(e){console.log("There was an error")},i.onsuccess=function(r){switch(c=i.result,l=c.transaction(e,"readwrite"),o=l.objectStore(e),c.onerror=function(e){console.log("error",e)},a){case"put":o.put(t),n(t);break;case"get":var m=o.getAll();m.onsuccess=function(){n(m.result)};break;case"delete":o.delete(t._id);break;default:console.log("No valid method")}l.oncomplete=function(){c.close()}}})}t(92);var X=t(80),J=t(81),K=t(73),Z=new(function(){function e(){Object(X.a)(this,e)}return Object(J.a)(e,[{key:"getProfile",value:function(){return Object(K.a)(this.getToken())}},{key:"loggedIn",value:function(){var e=this.getToken();return!!e&&!this.isTokenExpired(e)}},{key:"isTokenExpired",value:function(e){try{return Object(K.a)(e).exp<Date.now()/1e3}catch(a){return!1}}},{key:"getToken",value:function(){return localStorage.getItem("id_token")}},{key:"login",value:function(e){localStorage.setItem("id_token",e),window.location.assign("/")}},{key:"logout",value:function(e){localStorage.removeItem("id_token",e),window.location.assign("/")}}]),e}());var ee=function(){var e,a=I(),t=Object(E.a)(a,2),c=t[0],l=t[1],o=Object(F.b)(z),i=o.loading,m=o.data,s=Object(F.b)(H).data;s&&(e=s.user);var u=c.categories;return Object(n.useEffect)(function(){m?(l({type:O,categories:m.categories}),m.categories.forEach(function(e){V("categories","put",e)})):i||V("categories","get").then(function(e){l({type:O,categories:e})})},[m,i,l]),r.a.createElement(L.a,{bg:"light",expand:"lg"},r.a.createElement(R.a,null,s&&1===e.role?r.a.createElement(L.a.Brand,{href:"/adminpanel"},r.a.createElement("img",{alt:"",src:"/images/encanto_logo_nav.png",width:"90",height:"30",className:"d-inline-block align-top"})):r.a.createElement(L.a.Brand,{href:"/"},r.a.createElement("img",{alt:"",src:"/images/encanto_logo_nav.png",width:"90",height:"30",className:"d-inline-block align-top"})),r.a.createElement(L.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(L.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(U.a,{className:"me-auto"},r.a.createElement(U.a.Link,{href:"/"},"Home"),r.a.createElement(Q.a,{title:"Categories",id:"basic-nav-dropdown"},i?r.a.createElement("div",null,r.a.createElement(Q.a.Item,{href:"#",key:"None"},"'Categories loading...'")):r.a.createElement("div",null,u.map(function(e){return r.a.createElement(Q.a.Item,{href:"/categories/".concat(e.Name),key:e._id,onClick:function(){var a;a=e._id,l({type:j,currentCategory:a})}},e.Name)}))),s&&1===e.role?r.a.createElement(U.a.Link,{href:"/addproduct"},"Add Product"):r.a.createElement("div",null),s&&1===e.role?r.a.createElement(U.a.Link,{href:"/addcategory"},"Add Category"):r.a.createElement("div",null),s&&1===e.role?r.a.createElement(U.a.Link,{href:"/updateproduct"},"Update Product"):r.a.createElement("div",null),s&&1===e.role?r.a.createElement(U.a.Link,{href:"/updatecategory"},"Update Category"):r.a.createElement("div",null),!s||0!==e.role&&1!==e.role?r.a.createElement(U.a.Link,{href:"/signup"},"Sign Up"):r.a.createElement(U.a.Link,{href:"/",onClick:function(){return Z.logout()}},"Logout"),!s||0!==e.role&&1!==e.role?r.a.createElement("div",null):r.a.createElement(U.a.Link,{href:"/cart"},"Cart"),!s||0!==e.role&&1!==e.role?r.a.createElement("div",null):r.a.createElement(U.a.Link,{href:"/userprofile"},"Profile"),s?r.a.createElement("div",null):r.a.createElement(U.a.Link,{href:"/login"},"Sign In")))))},ae=t(25),te=t.n(ae),ne=t(33),re=t(101),ce=t(171),le=t(172),oe=t(107),ie=t(169),me=t(170);t(111);function se(e){var a=e.item,t=I(),n=Object(E.a)(t,2),c=(n[0],n[1]),l=function(e){"plus"===e?(c({type:N,_id:a._id,purchaseQuantity:a.purchaseQuantity+1}),V("cart","put",Object(o.a)({},a,{purchaseQuantity:a.purchaseQuantity+1}))):"minus"===e&&a.purchaseQuantity>1&&(c({type:N,_id:a._id,purchaseQuantity:a.purchaseQuantity-1}),V("cart","put",Object(o.a)({},a,{purchaseQuantity:a.purchaseQuantity-1})))};return r.a.createElement(R.a,{className:"button-container-cart"},r.a.createElement(ie.a,null,r.a.createElement(me.a,null,r.a.createElement(oe.a,{onClick:function(){l("minus")},className:"button-qty-cart button-sel-cart"},"-")),a.purchaseQuantity,r.a.createElement(me.a,null,r.a.createElement(oe.a,{onClick:function(){l("plus")},className:"button-qty-cart button-sel-cart"},"+"))))}t(114);var ue=Object(re.a)("pk_test_51L0VV3LPz0RFKIjd3EYrAXUdRZuvg8UiM7umz4piCUvWVKswkNXlX16hNBy4W4beVZo2xcCLNyXOffGD7MRzTMrv00ynQ9o8ej");var de=function(){var e=I(),a=Object(E.a)(e,2),t=a[0],c=a[1],l=Object(ce.a)(W),i=Object(E.a)(l,2),m=i[0],s=i[1].data;function u(){var e=0;return t.cart.forEach(function(a){e+=a.price*a.purchaseQuantity}),e.toFixed(2)}return Object(n.useEffect)(function(){s&&ue.then(function(e){e.redirectToCheckout({sessionId:s.checkout.session})})},[s]),Object(n.useEffect)(function(){function e(){return(e=Object(ne.a)(te.a.mark(function e(){var a;return te.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,V("cart","get");case 2:a=e.sent,c({type:v,products:Object(f.a)(a)});case 4:case"end":return e.stop()}},e)}))).apply(this,arguments)}t.cart.length||function(){e.apply(this,arguments)}()},[t.cart.length,c]),r.a.createElement("div",{className:"shopping-cart my-5 pb-5"},r.a.createElement(R.a,null,r.a.createElement("h3",null,"Your Cart Items"),r.a.createElement("a",{href:"/"},"Back to shopping"),r.a.createElement(le.a,{striped:!0},r.a.createElement("thead",{className:"table-header"},r.a.createElement("tr",null,r.a.createElement("th",null,"Product"),r.a.createElement("th",null),r.a.createElement("th",null,"Price"),r.a.createElement("th",null,"Quantity"),r.a.createElement("th",null,"Total"))),r.a.createElement("tbody",null,t.cart.map(function(e){return r.a.createElement("tr",{key:e._id},r.a.createElement("td",null,r.a.createElement("img",{src:e.image[0].img,alt:e.name,style:{width:"50px"},className:"thumbnail-img"})),r.a.createElement("td",null,e.name),r.a.createElement("td",null,"$",e.price),r.a.createElement("td",null,e.purchaseQuantity),r.a.createElement("td",null,r.a.createElement(se,{item:Object(o.a)({},e)})," "),r.a.createElement("td",null,"$",function(e){return e.price*e.purchaseQuantity}(e)))}))),r.a.createElement("p",{style:{textAlign:"right"}},"Subtotal: $",u()),r.a.createElement("p",{className:"fineprint"},"Tax and shipping cost will be calulated later."),r.a.createElement(oe.a,{variant:"success",onClick:function(){c({type:w,total:u()}),V("total","put",u());var e=[];t.cart.forEach(function(a){for(var t=0;t<a.purchaseQuantity;t++)e.push(a._id)}),m({variables:{products:e,total:parseFloat(u())}})}},"Checkout")))},pe=t(187);t(117);var Ee=function(){var e=I(),a=Object(E.a)(e,2),t=a[0],c=a[1],l=t.products,o=t.currentCategory,i=t.categories,m=Object(p.g)().category.replace("%20"," "),s=Object(F.b)(Y),u=s.loading,d=s.data,g=i.find(function(e){return e.Name===m});return Object(n.useEffect)(function(){d?(c({type:b,products:d.products}),d.products.forEach(function(e){V("products","put",e)}),g&&c({type:j,currentCategory:g._id})):u||V("products","get").then(function(e){c({type:b,products:l})})},[d,u,c,g]),r.a.createElement(ie.a,{xs:1,s:2,md:3,lg:4,className:"g-4"},u||!g?r.a.createElement("div",null,"Loading..."):d?(t&&!o?t.products:t.products.filter(function(e){return e.categories.find(function(e){return e._id===o})})).map(function(e){return r.a.createElement(me.a,null,r.a.createElement(pe.a,{className:"single-card",key:e._id,onClick:function(){var a;a=e._id,c({type:h,selectedProduct:a}),window.location.assign("/product/"+a)}},r.a.createElement(pe.a.Img,{variant:"top",src:e.image[0].img,style:{paddingTop:"10px"}}),r.a.createElement(pe.a.Body,null,r.a.createElement(pe.a.Title,{className:"product-name"},e.name),r.a.createElement(pe.a.Text,{className:"price"},e.price))))}):r.a.createElement("div",null))},ge=t(173),fe=t(174),be=t(42);t(120);function he(){var e=I(),a=Object(E.a)(e,2),t=a[0],c=a[1],l=Object(p.g)().category.replace("%20"," "),o=t.categories,i=Object(n.useState)("All"),m=Object(E.a)(i,2),s=m[0],u=m[1];Object(n.useEffect)(function(){u(l)},[]);return r.a.createElement(R.a,{className:"buttongroup-container"},r.a.createElement(ge.a,{as:fe.a,title:"Category: ".concat(s),className:"category-dropdown mx-auto mt-4",variant:"light"},o?r.a.createElement("div",null,o.map(function(e){return r.a.createElement(be.a.Item,{key:e._id,onClick:function(a){var t;a.preventDefault(),t=e._id,c({type:j,currentCategory:t}),u(o.find(function(e){return e._id===t}).Name)}},e.Name)})):r.a.createElement("div",null,r.a.createElement(be.a.Item,{href:"#",key:"None"},"'Categories loading...'"))))}var ye=function(){return r.a.createElement(R.a,null,r.a.createElement(he,null),r.a.createElement(Ee,null))};t(123);function ve(){var e=I(),a=Object(E.a)(e,2),t=a[0],n=a[1],c=t.currentQuantity;return r.a.createElement(R.a,{className:"button-container"},r.a.createElement(ie.a,null,r.a.createElement(me.a,{lg:3},r.a.createElement(oe.a,{onClick:function(){c>0&&n({type:_,currentQuantity:c-1})},className:"button-qty button-sel"},"-")),r.a.createElement(me.a,{lg:3},c),r.a.createElement(me.a,{lg:3},r.a.createElement(oe.a,{onClick:function(){n({type:_,currentQuantity:c+1})},className:"button-qty button-sel"},"+"))))}t(126);function Ne(){var e=I(),a=Object(E.a)(e,2),t=a[0],c=a[1],l=Object(p.g)().productId,i=Object(n.useState)({}),m=Object(E.a)(i,2),s=m[0],u=m[1],d=Object(F.b)(G,{variables:{_id:l}}),g=d.loading,f=d.data,b=d.error,h=t.cart,v=t.currentQuantity,O=Object(n.useState)(r.a.createElement("div",null)),j=Object(E.a)(O,2),w=j[0],_=j[1];Object(n.useEffect)(function(){f&&!1===g&&u(f.product)},[f,g]);return g?r.a.createElement("div",null," ... loading ..."):b?(console.log("error: ",b),r.a.createElement("div",null," Hello world ")):r.a.createElement("div",null,r.a.createElement(R.a,{className:"product-item",key:100*Math.random()/20+3},r.a.createElement(ie.a,null,r.a.createElement(me.a,{xs:12,sm:12,md:4,lg:4},r.a.createElement("img",{className:"item-img",alt:"".concat(f.product.image[0].name),src:"".concat(f.product.image[0].img)})),r.a.createElement(me.a,{className:"description",xs:6,sm:6,md:8,lg:8},r.a.createElement("h4",null,f.product.name),r.a.createElement("p",null,f.product.description),r.a.createElement("h3",null,"$",f.product.price),r.a.createElement("div",null,r.a.createElement("p",null,"Quantity"),r.a.createElement(ve,null)),r.a.createElement("div",{className:"my-2"},r.a.createElement(oe.a,{className:"button my-2",onClick:function(){_(r.a.createElement("div",null,"Item added to Cart"));var e=h.find(function(e){return e._id===l});e?(c({type:N,_id:l,purchaseQuantity:v}),V("cart","put",Object(o.a)({},e,{purchaseQuantity:v}))):(c({type:y,product:Object(o.a)({},s,{purchaseQuantity:v})}),V("cart","put",Object(o.a)({},s,{purchaseQuantity:v})))}},"Add to Cart"),r.a.createElement("a",{href:"tel:123456789"},r.a.createElement(oe.a,{className:"button my-2"},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-telephone",viewBox:"0 0 16 16"},r.a.createElement("path",{d:"M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"}))," ","Call to Order"))),w))))}t(129);function Oe(){return r.a.createElement("div",null,r.a.createElement("figure",{className:"position-relative"},r.a.createElement("img",{src:"/images/Hero_Image.jpg",alt:"hero bouquet",className:"img-fluid"}),r.a.createElement("figcaption",{className:"fig-caption"},r.a.createElement("h2",null,"Flower Delivery"),r.a.createElement("h4",null,"Flowers for every occassion"))),r.a.createElement(ie.a,{className:"d-flex"},r.a.createElement(me.a,null,r.a.createElement("a",{href:"/categories/romance"},r.a.createElement("img",{href:"/categories/romance",src:"/images/romance.jpg",className:"category-img d-flex",alt:"romatic flowers"}))),r.a.createElement(me.a,null,r.a.createElement("a",{href:"/categories/get%20well"},r.a.createElement("img",{src:"/images/get_well.jpg",className:"category-img d-flex",alt:"white and blue flowers"}))),r.a.createElement(me.a,null,r.a.createElement("a",{href:"/categories/sympathy"},r.a.createElement("img",{src:"/images/simpathy.jpg",className:"category-img d-flex",alt:"sympathy"})))))}t(132);function je(){return r.a.createElement(R.a,{className:"card-container"},r.a.createElement("h2",null,"Featured Arrangements "),r.a.createElement("p",null,"Order for your loved ones on that special occassion."),r.a.createElement(ie.a,{xs:1,s:2,md:3,lg:4,className:"g-4"},r.a.createElement(me.a,null,r.a.createElement(pe.a,{className:"single-card"},r.a.createElement("a",{href:"/product/6289c0707a47f1c348505bb6"}," ",r.a.createElement(pe.a.Img,{variant:"top",src:"images/Bouquet01.jpg",style:{paddingTop:"10px"}})),r.a.createElement(pe.a.Body,null,r.a.createElement(pe.a.Title,{className:"product-name"},"Lavender Garden Bouquet"),r.a.createElement(pe.a.Text,{className:"price"},"$29.99,")))),r.a.createElement(me.a,null,r.a.createElement(pe.a,{className:"single-card"},r.a.createElement("a",{href:"/product/6289c0707a47f1c348505bb8"}," ",r.a.createElement(pe.a.Img,{variant:"top",src:"images/Bouquet02.jpg",style:{paddingTop:"10px"}})),r.a.createElement(pe.a.Body,null,r.a.createElement(pe.a.Title,{className:"product-name"},"Healing Blue & White"),r.a.createElement(pe.a.Text,{className:"price"},"$29.99")))),r.a.createElement(me.a,null,r.a.createElement(pe.a,{className:"single-card"},r.a.createElement("a",{href:"/product/6289c0707a47f1c348505bba"}," ",r.a.createElement(pe.a.Img,{variant:"top",src:"images/Bouquet03.jpg",style:{paddingTop:"10px"}})),r.a.createElement(pe.a.Body,null,r.a.createElement(pe.a.Title,{className:"product-name"},"Spring Sentiment Bouquet"),r.a.createElement(pe.a.Text,{className:"price"},"$35.99")))),r.a.createElement(me.a,null,r.a.createElement(pe.a,{className:"single-card"},r.a.createElement("a",{href:"/product/6289c0707a47f1c348505bbc"}," ",r.a.createElement(pe.a.Img,{variant:"top",src:"images/Bouquet04.jpg",style:{paddingTop:"10px"}})),r.a.createElement(pe.a.Body,null,r.a.createElement(pe.a.Title,{className:"product-name"},"Floral Embrace"),r.a.createElement(pe.a.Text,{className:"price"},"$48.99"))))))}t(134);function we(){return r.a.createElement("div",{className:"container-background"},r.a.createElement(ie.a,{className:"d-flex"},r.a.createElement(me.a,{className:"m-auto mx-5"},r.a.createElement("h2",null,"We make you look good"),r.a.createElement("h4",null,"Choose one of our popular bouquets"),r.a.createElement("p",null,"\u25cb We deliver in San Diego: Poway, Ramona, Rancho Bernardo, Rancho Pe\xf1asquitos, Carmel Mountain, Scripps Ranch, Mira Mesa "),r.a.createElement("p",null,"\u25cb Handmade: All our bouquets are craftly made with love."),r.a.createElement("a",{href:"/categories/seasonal"},r.a.createElement(oe.a,{className:"button-shop"},"Shop Now!"))),r.a.createElement(me.a,null,r.a.createElement("img",{className:"img-circle",alt:"happy flower lady",src:"images/flower_circle.png"}))))}t(137);function _e(){return r.a.createElement(R.a,{className:"card-container"},r.a.createElement("h2",null,"Seasonal"),r.a.createElement("p",null,"Order it for your loved ones."),r.a.createElement(ie.a,{xs:1,s:2,md:3,lg:4,className:"g-4"},r.a.createElement(me.a,null,r.a.createElement(pe.a,{className:"single-card"},r.a.createElement("a",{href:"/product/6289c0707a47f1c348505bbe"},r.a.createElement(pe.a.Img,{variant:"top",src:"images/Bouquet05.jpg",style:{paddingTop:"10px"}})),r.a.createElement(pe.a.Body,null,r.a.createElement(pe.a.Title,{className:"product-name"},"Garden Pathway"),r.a.createElement(pe.a.Text,{className:"price"},"$35.99")))),r.a.createElement(me.a,null,r.a.createElement(pe.a,{className:"single-card"},r.a.createElement("a",{href:"/product/6289c0707a47f1c348505bc0"},r.a.createElement(pe.a.Img,{variant:"top",src:"images/Bouquet06.jpg",style:{paddingTop:"10px"}})),r.a.createElement(pe.a.Body,null,r.a.createElement(pe.a.Title,{className:"product-name"},"Peace, Prayers & Blessings"),r.a.createElement(pe.a.Text,{className:"price"},"$59.99")))),r.a.createElement(me.a,null,r.a.createElement(pe.a,{className:"single-card"},r.a.createElement("a",{href:"/product/6289c0707a47f1c348505bc2"}," ",r.a.createElement(pe.a.Img,{variant:"top",src:"images/Bouquet07.jpg",style:{paddingTop:"10px"}})),r.a.createElement(pe.a.Body,null,r.a.createElement(pe.a.Title,{className:"product-name"},"Cherished Memories"),r.a.createElement(pe.a.Text,{className:"price"},"$39.99")))),r.a.createElement(me.a,null,r.a.createElement(pe.a,{className:"single-card"},r.a.createElement("a",{href:"/product/6289c0707a47f1c348505bc4"},r.a.createElement(pe.a.Img,{variant:"top",src:"images/Bouquet09.jpg",style:{paddingTop:"10px"}})),r.a.createElement(pe.a.Body,null,r.a.createElement(pe.a.Title,{className:"product-name"},"Vibrant Floral Medley"),r.a.createElement(pe.a.Text,{className:"price"},"$35.99")))),r.a.createElement("a",{href:"/categories/seasonal"},r.a.createElement(oe.a,{className:"button-shopnow mx-auto"},"Shop Now"))))}t(140);function ke(){return r.a.createElement(R.a,{fluid:!0,className:"fineprint-container d-flex"},r.a.createElement(R.a,{className:"text-container"},r.a.createElement("h2",null,"Flowershop, we do delivery"),r.a.createElement("p",null,"We deliver in San Diego: Poway, Ramona, Rancho Bernardo, Pe\xf1asquito, Carmel Mountain, Scripps Ranch, Mira Mesa, Area 2, Area 3, Area 4, Area 5, Area 6"),r.a.createElement("p",null,"Flowers for every occassion: Mother's Day, Friendship, Get Well, Graduation, Birthdays, Engagements, Bouquets, Anniversary Arrangements, Thank You Flowers, Balloons"),r.a.createElement(oe.a,{className:"button"},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",className:"bi bi-telephone",viewBox:"0 0 16 16"},r.a.createElement("path",{d:"M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"}))," Call to order")))}var Te=function(){return r.a.createElement("div",null,r.a.createElement(Oe,null),r.a.createElement(je,null),r.a.createElement(we,null),r.a.createElement(_e,null),r.a.createElement(ke,null))},Ce=(t(143),t(175));function $e(){return r.a.createElement("footer",{className:"container-fluid background mt-5"},r.a.createElement("hr",{className:"hr"}),r.a.createElement(R.a,{className:"py-3"},r.a.createElement(ie.a,null,r.a.createElement(me.a,{lg:6,md:6,sm:6},r.a.createElement(Ce.a,{src:"/images/encanto_logo_footer.png",className:"d-inline-block align-top logo-footer mt-5 mb-5"})),r.a.createElement(me.a,{lg:3,md:3,sm:3},r.a.createElement("h5",{className:"h5"},"Categories"),r.a.createElement("ul",{className:"nav flex-column"},r.a.createElement("li",{className:"nav-item mb-2"},r.a.createElement("a",{href:"/categories/Seasonal",className:"nav-link p-0 links"},"Seasonal")),r.a.createElement("li",{className:"nav-item mb-2"},r.a.createElement("a",{href:"/categories/Romance",className:"nav-link p-0 links"},"Romance")),r.a.createElement("li",{className:"nav-item mb-2 links"},r.a.createElement("a",{href:"/categories/Get%20Well",className:"nav-link p-0 links"},"Get Well")),r.a.createElement("li",{className:"nav-item mb-2"},r.a.createElement("a",{href:"/categories/Sympathy",className:"nav-link p-0 links"},"Sympathy")),r.a.createElement("li",{className:"nav-item mb-2"},r.a.createElement("a",{href:"/categories/Friendship",className:"nav-link p-0 links"},"Friendship")),r.a.createElement("li",{className:"nav-item mb-2"},r.a.createElement("a",{href:"/categories/Funerals",className:"nav-link p-0 links"},"Funerals")))),r.a.createElement(me.a,{lg:3,md:3,sm:3,className:"info-col"},r.a.createElement("h5",{className:"h5"},"Info"),r.a.createElement("ul",{className:"nav flex-column"},r.a.createElement("li",{className:"nav-item mb-2"},r.a.createElement("p",{className:"links"},"Contact Us:",r.a.createElement("a",{href:"tel:1231231234",className:"nav-link p-0 links"},"123-123-1234"))),r.a.createElement("li",{className:"nav-item mb-2"},r.a.createElement("a",{href:"#",className:"nav-link p-0 links"},"Terms & Conditions")),r.a.createElement("li",{className:"nav-item mb-2"},r.a.createElement("a",{href:"#",className:"nav-link p-0 links"},"Privacy Policy")))))))}var xe,Se,De,Pe,Ae,Ie,Be,Le,Re,Ue,Qe=t(176),Fe=Object(M.a)(xe||(xe=Object(q.a)(["\n  mutation addUser(\n    $userName: String!\n    $email: String!\n    $password: String!\n    $role: Int!\n  ) {\n    addUser(\n      userName: $userName\n      email: $email\n      password: $password\n      role: $role\n    ) {\n      token\n      user {\n        _id\n      }\n    }\n  }\n"]))),qe=Object(M.a)(Se||(Se=Object(q.a)(["\n  mutation deleteUser($id: ID!) {\n    deleteUser(id: $id) {\n      _id\n    }\n  }\n"]))),Me=Object(M.a)(De||(De=Object(q.a)(["\n  mutation addOrder($products: [ID]!, $total: Float!) {\n    addOrder(products: $products, total: $total) {\n      _id\n      purchaseDate\n      products {\n        _id\n        name\n        price\n        description\n        image {\n          _id\n          description\n          img\n        }\n      }\n      total\n    }\n  }\n"]))),Ge=(Object(M.a)(Pe||(Pe=Object(q.a)(["\n  mutation addCategory($Name: String) {\n    addCategory(Name: $Name) {\n      _id\n      Name\n    }\n  }\n"]))),Object(M.a)(Ae||(Ae=Object(q.a)(["\n  mutation updateCategory($id: ID!, $Name: String) {\n    updateCategory(id: $id, Name: $Name) {\n      _id\n      name\n    }\n  }\n"]))),Object(M.a)(Ie||(Ie=Object(q.a)(["\n  mutation removeCategory($Name: String!) {\n    removeCategory(Name: $Name) {\n      _id\n      Name\n    }\n  }\n"]))),Object(M.a)(Be||(Be=Object(q.a)(["\n  mutation addProduct(\n    $name: String!\n    $description: String!\n    $price: Float!\n    $image: String!\n    $categories: [ID]!\n  ) {\n    addProduct(\n      name: $name\n      description: $description\n      price: $price\n      image: $image\n      categories: $categories\n    ) {\n      _id\n      name\n      description\n      price\n      image {\n        _id\n        description\n        img\n      }\n      categories {\n        _id\n        Name\n      }\n    }\n  }\n"]))),Object(M.a)(Le||(Le=Object(q.a)(["\n  mutation updateProduct(\n    $_id: ID!\n    $name: String!\n    $description: String!\n    $price: Float!\n    $image: String!\n    $categories: [ID]!\n    $featured: Boolean\n    $seasonal: Boolean\n  ) {\n    updateProduct(\n      _id: $_id\n      name: $name\n      description: $description\n      price: $price\n      image: $image\n      categories: $categories\n      featured: $featured\n      seasonal: $seasonal\n    ) {\n      _id\n      name\n      description\n      price\n      image {\n        _id\n        description\n        img\n      }\n      categories {\n        _id\n        Name\n      }\n      featured \n      seasonal\n    }\n  }\n"]))),Object(M.a)(Re||(Re=Object(q.a)(["\n  mutation removeProduct($_id: ID!) {\n    removeProduct(_id: $_id) {\n      _id\n    }\n  }\n"]))),Object(M.a)(Ue||(Ue=Object(q.a)(["\n  mutation login($email: String!, $password: String!) {\n    login(email: $email, password: $password) {\n      token\n      user {\n        _id\n      }\n    }\n  }\n"]))));t(145);var We=function(){var e=Object(Qe.a)(Me),a=Object(E.a)(e,1)[0];return Object(n.useEffect)(function(){function e(){return(e=Object(ne.a)(te.a.mark(function e(){var t,n,r,c;return te.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,V("total","get");case 2:return t=e.sent,e.next=5,V("cart","get");case 5:if(n=e.sent,!(r=n.map(function(e){return e._id})).length){e.next=14;break}return e.next=10,a({variables:{products:r,total:parseFloat(t[t.length-1])}});case 10:c=e.sent,c.data.addOrder.products.forEach(function(e){V("cart","delete",e)});case 14:setTimeout(function(){window.location.assign("/")},3e3);case 15:case"end":return e.stop()}},e)}))).apply(this,arguments)}!function(){e.apply(this,arguments)}()},[a]),r.a.createElement("div",null,r.a.createElement(R.a,{className:"success-container my-5"},r.a.createElement("h2",null,"Success!"),r.a.createElement("p",null,"Thank you for your purchase!"),r.a.createElement("p",null,"You will now be redirected to the home page")))},Ye=t(46);var ze=function(e){var a=Object(n.useState)({email:"",password:""}),t=Object(E.a)(a,2),c=t[0],l=t[1],i=Object(Qe.a)(Fe),m=Object(E.a)(i,1)[0],s=function(){var e=Object(ne.a)(te.a.mark(function e(a){var t,n,r;return te.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.next=3,m({variables:{userName:c.userName,email:c.email,password:c.password,role:0}});case 3:t=e.sent,n=t.data,r=n.addUser.token,Z.login(r);case 7:case"end":return e.stop()}},e)}));return function(a){return e.apply(this,arguments)}}(),u=function(e){var a=e.target,t=a.name,n=a.value;l(Object(o.a)({},c,Object(Ye.a)({},t,n)))};return r.a.createElement("div",{className:"container my-1"},r.a.createElement(d.b,{to:"/login"},"\u2190 Go to Login"),r.a.createElement("h2",null,"Signup"),r.a.createElement("form",{onSubmit:s},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"userName",className:"p-2"},"User Name"),r.a.createElement("input",{type:"userName",name:"userName",id:"userName",placeholder:"User Name",onChange:u})),r.a.createElement("div",{className:"form-group mb-2"},r.a.createElement("label",{htmlFor:"email",className:"p-2"},"Email address"),r.a.createElement("input",{type:"email",name:"email",id:"email",placeholder:"Email",onChange:u})),r.a.createElement("div",{className:"form-group mb-4"},r.a.createElement("label",{htmlFor:"pwd",className:"p-2"},"Password"),r.a.createElement("input",{type:"password",name:"password",id:"pwd",placeholder:"Password",onChange:u})),r.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Submit")))};var He=function(e){var a=Object(n.useState)({email:"",password:""}),t=Object(E.a)(a,2),c=t[0],l=t[1],i=Object(Qe.a)(Ge),m=Object(E.a)(i,2),s=m[0],u=m[1].error,p=function(){var e=Object(ne.a)(te.a.mark(function e(a){var t,n;return te.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.prev=1,e.next=4,s({variables:{email:c.email,password:c.password}});case 4:t=e.sent,n=t.data.login.token,Z.login(n),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:setTimeout(function(){window.location.assign("/")},1e3);case 13:case"end":return e.stop()}},e,null,[[1,9]])}));return function(a){return e.apply(this,arguments)}}(),g=function(e){var a=e.target,t=a.name,n=a.value;l(Object(o.a)({},c,Object(Ye.a)({},t,n)))};return r.a.createElement("div",{className:"container my-1"},r.a.createElement(d.b,{to:"/signup"},"\u2190 Go to Signup"),r.a.createElement("h2",null,"Login"),r.a.createElement("form",{onSubmit:p},r.a.createElement("div",{className:"form-group mb-2"},r.a.createElement("label",{className:"p-2",htmlFor:"email"},"Email address"),r.a.createElement("input",{placeholder:"Email",name:"email",type:"email",id:"email",onChange:g})),r.a.createElement("div",{className:"form-group mb-4"},r.a.createElement("label",{className:"p-2",htmlFor:"pwd"},"Password"),r.a.createElement("input",{placeholder:"******",name:"password",type:"password",id:"pwd",onChange:g})),u?r.a.createElement("div",null,r.a.createElement("p",{className:"error-text"},"The provided credentials are incorrect")):null,r.a.createElement("div",{className:"flex-row flex-end"},r.a.createElement("button",{className:"btn btn-primary",type:"submit"},"Submit"))))};var Ve=function(){var e,a=Object(F.b)(H).data,t=r.a.createElement("div",null),c=!1;a&&(t=(e=a.user).orders.map(function(e){return r.a.createElement("tr",{key:e._id},r.a.createElement("td",null,e._id),r.a.createElement("td",null,new Date(parseInt(e.purchaseDate)).toLocaleDateString()),r.a.createElement("td",null," $",e.total," "))}));var l=Object(Qe.a)(qe),o=Object(E.a)(l,2),i=o[0],m=o[1];return m.data,m.loading,m.error,Object(n.useEffect)(function(){c&&(i({variables:{id:a.user._id}}),Z.logout())},[c]),r.a.createElement("div",null,e?r.a.createElement(R.a,{className:"order-history my-5"},r.a.createElement(d.b,{to:"/"},"\u2190 Back to Shopping"),r.a.createElement("h3",null,"Hello, ",e.userName),r.a.createElement(oe.a,{onClick:function(){i({variables:{id:e._id}}),Z.logout()}},"Delete Account"),r.a.createElement("h4",null,"Order History"),r.a.createElement(le.a,{striped:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Order"),r.a.createElement("th",null,"Date"),r.a.createElement("th",null,"Total"))),r.a.createElement("tbody",null,t))):null)};function Xe(){var e=Object(p.g)().category.replace("%20"," "),a=Object(n.useState)("All"),t=Object(E.a)(a,2),c=(t[0],t[1]);return Object(n.useEffect)(function(){c(e)},[]),r.a.createElement("div",null,r.a.createElement("h1",{className:"p-5"},"What would you like to do today?"),r.a.createElement("form",null,r.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Submit")))}var Je=Object(i.a)({uri:"/graphql"}),Ke=Object(B.a)(function(e,a){var t=a.headers,n=localStorage.getItem("id_token");return{headers:Object(o.a)({},t,{authorization:n?"Bearer ".concat(n):""})}}),Ze=new m.a({link:Ke.concat(Je),cache:new s.a});var ea=function(){return r.a.createElement(u.a,{client:Ze},r.a.createElement(A,null,r.a.createElement(d.a,null,r.a.createElement("div",null,r.a.createElement(ee,null),r.a.createElement(p.c,null,r.a.createElement(p.a,{path:"/",element:r.a.createElement(Te,null)}),r.a.createElement(p.a,{path:"/signup",element:r.a.createElement(ze,null)}),r.a.createElement(p.a,{path:"/login",element:r.a.createElement(He,null)}),r.a.createElement(p.a,{path:"/userprofile",element:r.a.createElement(Ve,null)}),r.a.createElement(p.a,{path:"/categories/:category",element:r.a.createElement(ye,null)}),r.a.createElement(p.a,{path:"/cart",element:r.a.createElement(de,null)}),r.a.createElement(p.a,{path:"/success",element:r.a.createElement(We,null)}),r.a.createElement(p.a,{path:"/product/:productId",element:r.a.createElement(Ne,null)}),r.a.createElement(p.a,{path:"/adminpanel",element:r.a.createElement(Xe,null)}))),r.a.createElement($e,null))))};t(152);l.a.createRoot(document.getElementById("root")).render(r.a.createElement(ea,null))},85:function(e,a,t){e.exports=t(154)},92:function(e,a,t){}},[[85,2,1]]]);
//# sourceMappingURL=main.545e2c4a.chunk.js.map