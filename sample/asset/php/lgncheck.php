<?php
session_start();
if(!isset($_SESSION['user_id']) || !isset($_SESSION['user_name'])){
	echo "nosession";
	exit;
}
$user_id = $_SESSION['user_id'];
$user_name = $_SESSION['user_name'];
try{
	$mysql = ["id"=>"miko", "password"=>"1q2w3e4r","host"=>"localhost", "db"=>"mgame"];
	$con = mysql_connect($mysql["host"], $mysql["id"], $mysql{"password"});
	mysql_query("set names utf8", $con);
	mysql_select_db("mgame");

	//check al eady ID from Databases
	$sql = "select * from user where id='" . $user_id ."'";
	//$sql = "SELECT id from user";
	$sth = mysql_query($sql) or die("Query Error: " . mysql_error());
	//print_r($sth);
	$rows = array();

	while($r = mysql_fetch_array($sth)){
		$rows['number'] = $r['number'];
		$rows['id'] = $r['id'];
		$rows['leader'] = $r['leader'];
		$rows['tuto'] = $r['tuto'];
	}
	//if tutorial user then run
	$output = json_encode($rows);
	echo $output;
	mysql_close($con);
} catch (exception $e){
	echo $e->getMessage();
}
?>