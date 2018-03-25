<?php

$conn=mysqli_connect('localhost','root','Yes','ajaxtest');
echo 'This is from PHP';
// GET variables
if(isset($_GET['name'])){

    // take value from form
    $name=mysqli_real_escape_string($conn,$_POST['name']);
    // pass this value into table user
    $query="INSERT INTO user VALUES('$name')";
    // check for connection and query
    if(mysqli_query($conn,$query)){
        echo 'Data is inserted';

    }
    else{
        echo 'error'.mysqli_error($conn);
    }
    echo 'my name is'. $_GET['name'];

}

// POST variables
if(isset($_POST['name'])){
    echo 'my name is'. $_POST['name'];

}

?>