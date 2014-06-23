<?php
	require 'JSON.php';

	$id = $_POST['data_id'];
	$pwd = $_POST['data_pwd'];

	echo "\n";
	try{
		$mysql = ["id"=>"miko", "password"=>"1q2w3e4r","host"=>"localhost", "db"=>"game"];
		$con = mysql_connect($mysql["host"], $mysql["id"], $mysql{"password"});
		mysql_query("set names utf8", $con);
		mysql_select_db("mgame");
		$sql_id = "select id from user";
		$sql_pwd = "select password from user";
		//$qdl_session = "select "

		$output = $sql_id + $sql_pwd;
		echo "output: " . $output;
	} catch(exception $e){
		echo $e->getMessage();
	}
	mysql_close($con);
?>