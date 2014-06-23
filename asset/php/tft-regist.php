<?php
	//session_start();

	$id = $_POST['data-id'];
	$pwd = $_POST['data-pwd'];
	$nick = $_POST['data-nick'];

	if(strlen($id) < 4){
		echo "error_id_len";
		return;
	}
	if(strlen($pwd) < 5){
		echo "error_pwd_len";
		return;
	}
	try{
		$mysql = ["id"=>"miko", "password"=>"1q2w3e4r","host"=>"localhost", "db"=>"miko"];
		$con = mysql_connect($mysql["host"], $mysql["id"], $mysql{"password"});
		mysql_query("set names utf8", $con);
		mysql_select_db($mysql["db"]);
		
		//check al eady ID from Databases
		$sql = "select * from userinfo where username = '" . $id ."'";
		//$sql = "SELECT id from user";
		$sth = mysql_query($sql) or die("Query Error: " . mysql_error());
		//print_r($sth);
		$rows = array();
		$rt = array();

		while($r = mysql_fetch_array($sth)){
			$rows['username'] = $r['username'];
			if($rows['username'] == $id){
				echo "error_id_exist";
				return;
			} 
			array_push($rt, $rows);
		}
		//$output = json_encode($rt);
		//echo $output;
		//

		$sql = "INSERT INTO userinfo(username, password, nickname) VALUES('" .$id. "', '" .$pwd. "', '".$nick."')";
		$sth = mysql_query($sql) or die("Query error: " . mysql_error());

		echo "success";
	} catch(exception $e){
		echo $e->getMessage();
	}
	mysql_close($con);
?>