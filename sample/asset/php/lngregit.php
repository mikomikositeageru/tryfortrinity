<?php
	require 'JSON.php';

	//session_start();

	$id = $_POST['data_id'];
	$pwd = $_POST['data_pwd'];

	if(strlen($id) < 4){
		echo "error_id_len";
		return;
	}
	if(strlen($pwd) < 5){
		echo "error_pwd_len";
		return;
	}
	try{
		$mysql = ["id"=>"miko", "password"=>"1q2w3e4r","host"=>"localhost", "db"=>"game"];
		$con = mysql_connect($mysql["host"], $mysql["id"], $mysql{"password"});
		mysql_query("set names utf8", $con);
		mysql_select_db("mgame");
		
		//check al eady ID from Databases
		$sql = "select * from user where id = '" . $id ."'";
		//$sql = "SELECT id from user";
		$sth = mysql_query($sql) or die("Query Error: " . mysql_error());
		//print_r($sth);
		$rows = array();
		$rt = array();

		while($r = mysql_fetch_array($sth)){
			$rows['id'] = $r['id'];
			if($rows['id'] == $id){
				echo "error_id_exist";
				return;
			} 
			array_push($rt, $rows);
		}
		//$output = json_encode($rt);
		//echo $output;
		//

		$sql = "INSERT INTO user(number, id, pwd) VALUES(". mt_rand(1, 100000) . ", '" . $id . "', '" . $pwd . "')";
		$sth = mysql_query($sql) or die("Query error: " . mysql_error());

		echo "success";
	} catch(exception $e){
		echo $e->getMessage();
	}
	mysql_close($con);
?>