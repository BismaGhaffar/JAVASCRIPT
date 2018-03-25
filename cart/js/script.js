function showbtn(ele){
    var ele=document.getElementById(ele);
   ele.children[2].children[0].style.opacity="1";
   ele.children[2].children[1].style.opacity="1";
}

function hidebtn(ele){

    var ele=document.getElementById(ele);
    ele.children[2].children[0].style.opacity="0";
    ele.children[2].children[1].style.opacity="0";
}

function increament(index){

    //single object 
    var collection=items[index];
    var eleindex=cart.map(function(item){
//id in strng format
        return item.id

    }).indexOf(collection.id);

    console.log(eleindex);

    eleindex > -1 ? cart[eleindex].quantity++ : (collection.quantity++,cart.push(collection));
    console.log(cart);

    totalquantity();
 
    localStorage.setItem('cartlist',JSON.stringify(cart));
}

function decreament(index){
    var collection=items[index];
    var eleindex=cart.map(function(item){
        return item.id
    }).indexOf(collection.id);
    //condition
    eleindex > -1 && cart[eleindex].quantity > 0 ? cart[eleindex].quantity--:eleindex > -1 && cart[eleindex].quantity==0 ? cart.splice(eleindex,1):false;
    totalquantity()

   
    console.log(cart);
    //localstorage
    cart.length > 0 ? localStorage.setItem('cartlist',JSON.stringify(cart)):localStorage.removeItem('cartlist');


}

function totalquantity(){
var total=document.getElementById('item-qty');
    var result=0;
    cart.forEach(function(item){
  result+=item.quantity;

  total.innerHTML='Quantity:'+result;
    })
}


// modalfunction

function openmodal(){
    // alert('modal');
    var modal=document.getElementById('modal');
    var closebtn=document.getElementById('closebtn');
    var order=document.getElementById('placeodr');
    // order.onclick=function(){

        // alert('order');}
        modal.style.display="block";
    

    closebtn.onclick=function(){
        modal.style.display="none";

        setTimeout(function(){

           
            
            window.location.href="./index.html";
          },2000);
    }
}

function cancilorder(){
// console.log(cart.length);
if(!cart.length){
    confirm('No item has selected');

}

else{

    confirm("Are you sure to delete order");
        localStorage.removeItem("cartlist");

        firebase.database().ref('ItemList').remove();
        window.location.href='./whislist.html';
    
    }
    
    
}
