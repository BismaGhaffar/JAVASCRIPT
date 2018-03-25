<?php

$conn=mysqli_connect('localhost','root','Yes','ajaxtest');
$query="SELECT * FROM user";
// get result
$result=mysqli_query($conn,$query);
// fetch data
$response=mysqli_fetch_all($result,MYSQLI_ASSOC);
echo json_encode($response);
?>