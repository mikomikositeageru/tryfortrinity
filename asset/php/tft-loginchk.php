<?php
session_start();
if (!isset($_SESSION['user-id']) || !isset($_SESSION['user-name'])){
	echo "nosession";
	exit;
}
$userid = $_SESSION['user-id'];
$username = $_SESSION['user-name'];

try{
	$mysql = ["id"=>"miko", "password"=>"1q2w3e4r","host"=>"localhost", "db"=>"miko"];
	$con = mysql_connect($mysql["host"], $mysql["id"], $mysql{"password"});
	mysql_query("set names utf8", $con);
	mysql_select_db($mysql["db"]);

	//check al eady ID from Databases
	$sql = "select * from userinfo where username='" . $userid ."'";
	//$sql = "SELECT id from user";
	$sth = mysql_query($sql) or die("Query Error: " . mysql_error());
	//print_r($sth);
	$rows = array();

	while($r = mysql_fetch_array($sth)){
		$rows['username'] = $r['username'];
		$rows['password'] = $r['password'];
		$rows['nickname'] = $r['nickname'];
	}

	$output = json_encode($rows);
	echo $output
	mysql_close($con);
} catch (exception $e){
	echo $e->getMessage();
}	
?>