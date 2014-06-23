<?php
	if (!isset($_POST['data-id']) || !isset($_POST['data-pwd'])) exit;
	$user_id = $_POST['data-id'];
	$user_pwd = $_POST['data-pwd'];

	try{
		$mysql = ["id"=>"miko", "password"=>"1q2w3e4r","host"=>"localhost", "db"=>"miko"];
		$con = mysql_connect($mysql["host"], $mysql["id"], $mysql{"password"});
		mysql_query("set names utf8", $con);
		mysql_select_db($mysql["db"]);

		//check al eady ID from Databases
		$sql = "select * from userinfo where username='" . $user_id ."'";
		//$sql = "SELECT id from user";
		$sth = mysql_query($sql) or die("Query Error: " . mysql_error());
		//print_r($sth);
		$rows = array();
		$rt = array();

		while($r = mysql_fetch_array($sth)){
			$rows['username'] = $r['username'];
			$rows['password'] = $r['password'];
			$rows['nickname'] = $r['nickname'];
			if($rows['username'] != $user_id){
				echo "error_id_notex";
				return;
			}  else {
				if($rows['password'] != $user_pwd){
					echo "error_pwd_incor";
					return;
				}
			}
			array_push($rt, $rows);
		}
		session_start();
		$_SESSION['user-id'] = $user_id;
		$_SESSION['user-name'] = $rows['nickname'];
		echo "success";
		mysql_close($con);
	} catch (exception $e){
		echo $e->getMessage();
	}	
?>