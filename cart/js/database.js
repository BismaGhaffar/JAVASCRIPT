 // Initialize Firebase
 var config = {
    apiKey: "AIzaSyDiKhizHXYktdBTt5jzsIz4IOBKgqjDVTM",
    authDomain: "cart-862e4.firebaseapp.com",
    databaseURL: "https://cart-862e4.firebaseio.com",
    projectId: "cart-862e4",
    storageBucket: "cart-862e4.appspot.com",
    messagingSenderId: "847755371432"
  };
  firebase.initializeApp(config);

var ref=firebase.database().ref().child("ItemList");
  let node=ref.child('user');

  let counter=0;

 var data= JSON.parse(localStorage.getItem('cartlist'));

 console.log(data);
  console.log(node);


// node.push().set(data);
//   node.set(data);

  function placeorder(){
    //   alert('working');
console.log('placeholdre')
// node.set(data);
    //  node.push(ref.set(data));
    
if(!cart.length){
  confirm('No Item is selected');
  history.back();
  
}
else{
  node.set(data);
  openmodal();
 
   
}
   

//Retrieve from database
// var content=document.getElementById('demo');
// node.on("value",(snap)=>{
//   var result=snap.val();
//   result.map((array,index)=>{
//     console.log('from firebase',array.id);

//     // demo.innerHTML+=`<tr><td>array.id</td></tr>`;
//   })
//   console.log(result);
//     })


    
  }

