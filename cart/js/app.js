// var cart=localStorage.getItem('cartlist') ||  [];
// cart.length > 0 ? cart=JSON.parse(cart):false;
// console.log(cart);

var cart = localStorage.getItem("cartlist") || [];
cart.length > 0 ? cart = JSON.parse(cart) : false;
console.log(cart);

totalquantity();



        
            
        function showdata(){
        
        var content=document.getElementById('tbl');

        var row=document.createElement("tr");
        var txtnode=document.createTextNode("<h2>No Content is Selected</h2>");
row.appendChild(txtnode);
        var txt=document.getElementById('demo')
        cart.map(function(item,index,){

            if(cart.length==0){

                content.appendChild(row);
               
            }

            else{

                console.log(cart[0].id);


                // content.innerHTML+="<tr><td>"+cart[index].id+"</td><td><img src='images/"+cart[index].image'"/></td></tr>";

                content.innerHTML+=`<tr><td>`+cart[index].id+`</td><td><img class="tdimg"src="images/`+cart[index].image+`"/></td><td>`+cart[index].name+`</td>
                <td>`+cart[index]. quantity+`</td>`;
            }
            

        })
        
        
        console.log('here');
        console.log(cart);


        }