<?php
	if (!isset($_POST['data_id']) || !isset($_POST['data_pwd'])) exit;
	$user_id = $_POST['data_id'];
	$user_pwd = $_POST['data_pwd'];

	try{
		$mysql = ["id"=>"miko", "password"=>"1q2w3e4r","host"=>"localhost", "db"=>"game"];
		$con = mysql_connect($mysql["host"], $mysql["id"], $mysql{"password"});
		mysql_query("set names utf8", $con);
		mysql_select_db("mgame");

		//check al eady ID from Databases
		$sql = "select * from user where id='" . $user_id ."'";
		//$sql = "SELECT id from user";
		$sth = mysql_query($sql) or die("Query Error: " . mysql_error());
		//print_r($sth);
		$rows = array();
		$rt = array();

		while($r = mysql_fetch_array($sth)){
			$rows['number'] = $r['number'];
			$rows['id'] = $r['id'];
			$rows['pwd'] = $r['pwd'];
			$rows['leader'] = $r['leader'];
			if($rows['id'] != $user_id){
				echo "error_id_notex";
				return;
			}  else {
				if($rows['pwd'] != $user_pwd){
					echo "error_pwd_incor";
					return;
				}
			}
			array_push($rt, $rows);
		}
		session_start();
		$_SESSION['user_id'] = $user_id;
		$_SESSION['user_name'] = $rows['number'];
		echo "success";
		mysql_close($con);
	} catch (exception $e){
		echo $e->getMessage();
	}	
?>