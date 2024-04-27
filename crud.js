let title=document.getElementById('title') ;
let price=document.getElementById('price') ;
let taxes=document.getElementById('taxes') ;
let ads=document.getElementById('ads') ;
let discount=document.getElementById('discount') ;
let total=document.getElementById('total') ;
let category=document.getElementById('category') ;
let count=document.getElementById('count') ;
let submit=document.getElementById('submit') ;


let mood='create' ;
let tmp ;

//test :
console.log(title , price , taxes , ads , discount  , category , count , submit , total)
// get total
function getTotal(){
    if(price.value !=''){
        let result= (+price.value + +taxes.value + +ads.value) - +discount.value  ;
        total.innerHTML = result ;
        total.style.background='#040' ;
    }
    else{
        total.innerHTML = '' ;
        total.style.background='#a00d02' ;

    }
}



// create product
let products=[] ;

let storedProducts = localStorage.getItem('products');

if (storedProducts && storedProducts.trim() !== '') {
    try {
        products = JSON.parse(storedProducts);
        document.getElementById('deleteAll').innerHTML="<button id='btndeleteAll' onClick='deleteAll()'>Delete All (" + products.length + ")</button>";
    } catch (error) {
        console.error('Error parsing JSON:', error);
    }
}
else{
    document.getElementById('deleteAll').innerHTML="";

}

console.log(products);


//ajouter un element :
submit.onclick=()=>{
    let newproduct={
        title:title.value ,
        price:price.value ,
        taxes:taxes.value ,
        ads:ads.value ,
        discount:discount.value ,
        total:total.innerHTML ,
        count:count.value ,
        category:category.value ,
    }

    if(title.value!='' && price.value!='' && category.value!='' && newproduct.count <=100){
        if(mood=='create'){
            // count
            for(let i=0 ; i< +count.value ; i++){
                products.push(newproduct) ;
        
            }
        }
        else{
            products [tmp]=newproduct ;
            mood='create' ;
            submit.innerHTML='Create' ;
            count.style.display='block'
    
    
        }

        clearinputs() ;

    }
  
    console.log(products) ;

    localStorage.setItem('products' , JSON.stringify(products)) ;
    document.getElementById('deleteAll').innerHTML="<button id='btndeleteAll' onClick='deleteAll()'>Delete All (" + products.length + ")</button>";

    afficher() ;

}

// save localstorage 

// clear inputs 
function clearinputs(){
    title.value='';
    price.value='' ;
    taxes.value='';
    ads.value='' ;
    discount.value='' ;
    total.innerHTML='' ;
    count.value='';
    category.value='' ;
    total.style.background='#a00d02' ;
}

// read
function afficher(){
    let table='' ;
    for(let i=0 ; i<products.length ; i++){
        table+=`
        <tr>
        <td>${i+1}</td>
        <td>${products[i].title}</td>
        <td>${products[i].price}</td>
        <td>${products[i].taxes}</td>
        <td>${products[i].ads}</td>
        <td>${products[i].discount}</td>
        <td>${products[i].total}</td>
        <td>${products[i].category}</td>
        <td><button onClick='updateData(${i})' id="update">update</button></td>
        <td><button onClick='deleteData(${i})' id="delete">delete</button></td>

    </tr>
        `
    }

    document.getElementById('tbody').innerHTML=table;
}

afficher() ;


// delete
function deleteData(i){
    products.splice(i,1) ; // supprimer de l'index i 1 élément 
    localStorage.setItem('products', JSON.stringify(products)) ;
    afficher();
}

//delete All
function deleteAll(){
    products=[] ;
    localStorage.removeItem('products') ;
    afficher();
    document.getElementById('deleteAll').innerHTML="";

}


// update
function updateData(i){
    title.value=products[i].title;
    price.value=products[i].price ;
    taxes.value=products[i].taxes;
    ads.value=products[i].ads ;
    discount.value=products[i].discount ;
    total.innerHTML=products[i].total ;
    count.style.display='none' ;
    category.value=products[i].category ;
    total.style.background='#040' ;
    mood='update' ;
    submit.innerHTML='Update' ;
    tmp=i ;
    title.focus() ;

    scroll({
        top:0 ,
        behavior:'smooth' ,
    })

}

// search
let searchmood='title' ;

function getSearchMood(id){
    let search=document.getElementById('search');
    if(id=='searchTitle') searchmood='title' ;
    else searchmood='category' ;
    search.focus() ;
    search.value='' ;
    search.placeholder='Search By '+id ;
    console.log(searchmood) ;

    afficher() ;

}

function searchData(value){
    let table='';
    if(searchmood=='title'){
        for(let i=0 ; i<products.length ; i++){
            if(products[i].title.includes(value.toLowerCase())){ 
                table+=`
                    <tr>
                            <td>${i}</td>
                            <td>${products[i].title}</td>
                            <td>${products[i].price}</td>
                            <td>${products[i].taxes}</td>
                            <td>${products[i].ads}</td>
                            <td>${products[i].discount}</td>
                            <td>${products[i].total}</td>
                            <td>${products[i].category}</td>
                            <td><button onClick='updateData(${i})' id="update">update</button></td>
                            <td><button onClick='deleteData(${i})' id="delete">delete</button></td>
                    
                    </tr>
                `
            }
        }
    
       
    }
    else{

        for(let i=0 ; i<products.length ; i++){
            if(products[i].category.includes(value.toLowerCase())){ 
                    table+=`
                        <tr>
                            <td>${i}</td>
                            <td>${products[i].title}</td>
                            <td>${products[i].price}</td>
                            <td>${products[i].taxes}</td>
                            <td>${products[i].ads}</td>
                            <td>${products[i].discount}</td>
                            <td>${products[i].total}</td>
                            <td>${products[i].category}</td>
                            <td><button onClick='updateData(${i})' id="update">update</button></td>
                            <td><button onClick='deleteData(${i})' id="delete">delete</button></td>
                        </tr>
                     `
            }
        }

    }

    document.getElementById('tbody').innerHTML=table;
    
    
}

// clear data












// get total
// create product
// save localstorage
// clear inputs 
// read
// count
// delete
// update
// search
// clear data











// get total
// create product
// save localstorage
// clear inputs 
// read
// count
// delete
// update
// search
// clear data











// get total
// create product
// save localstorage
// clear inputs 
// read
// count
// delete
// update
// search
// clear data











// get total
// create product
// save localstorage
// clear inputs 
// read
// count
// delete
// update
// search
// clear data











// get total
// create product
// save localstorage
// clear inputs 
// read
// count
// delete
// update
// search
// clear data











// get total
// create product
// save localstorage
// clear inputs 
// read
// count
// delete
// update
// search
// clear data











// get total
// create product
// save localstorage
// clear inputs 
// read
// count
// delete
// update
// search
// clear data











// get total
// create product
// save localstorage
// clear inputs 
// read
// count
// delete
// update
// search
// clear data


