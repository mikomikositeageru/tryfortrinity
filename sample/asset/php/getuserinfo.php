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
	mysql_select_db($mysql["db"]);

	$sql = "select distinct * from user_stage1_info as a natural join user_leader_card as b where number='".$user_name."'";
	$sth = mysql_query($sql) or die("Query Error: ". mysql_error());

	while($r = mysql_fetch_array($sth)){
		$rows['number'] = $r['number'];
		$rows['name'] = $r['name'];
		$rows['lv'] = $r['lv'];
		$rows['strength'] = $r['strength'];
		$rows['agillity'] = $r['agillity'];
		$rows['intelligent'] = $r['intelligent'];
		$rows['starttime'] = $r['starttime'];
		$rows['endtime'] = $r['endstime'];
		$rows['leadtime'] = $r['leadtime'];
		$rows['count'] = $r['count'];
	}
	$output = json_encode($rows);
	echo $output;
} catch(exception $e) {
	echo $e->getMessage();
}
?>