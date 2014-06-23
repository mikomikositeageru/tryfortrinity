<?php
$userdata = json_decode($_POST["userinfo"]);
$user_number = (int)$userdata->number;
//$r = array();
/*$x_time = date("Y-m-d H:i:s");
$tt = strtotime($x_time) + strtotime("0000-00-00 00:05:00");*/
$times = strtotime("now");  // 현재 서버의 시간을 timestamp 값으로 가져옴
$data1 = "'".date("Y-m-d h:i:s", $times)."'";  // 초 -> 년-월-일 시:분:초  변환
//$data2 = date("Y-m-d h:i:s", $times+300);
try{
	$mysql = ["id"=>"miko", "password"=>"1q2w3e4r","host"=>"localhost", "db"=>"mgame"];
	$con = mysql_connect($mysql["host"], $mysql["id"], $mysql{"password"});
	mysql_query("set names utf8", $con);
	mysql_select_db($mysql["db"]);
	//1. gather info static leadtime to stage1 info
	//2. update 'user_number's stage1 info, set starttime, endtime, leadtime
	//$sql = "UPDATE user_stage1_info SET startstage=". $data1 .",endstage=[value-3],leadtime=[value-4],count=[value-5] WHERE number='"
	//step 1.
	$sql = "select leadtime from stage1_info";
	$sth = mysql_query($sql) or die("Query Error: ". mysql_error());
	while($r = mysql_fetch_array($sth)){
		$rows['leadtime'] = $r['leadtime'];
	}
	//set date2 (this date is added leadtime of stage1_info)
	$data2 = date("Y-m-d h:i:s", $times+$rows['leadtime']);
	//set user leadtime ()
	$count = $userdata->count + 1;

	echo $data1." : ".$data2." : ".$count;
	//step 2.
	$sql = "UPDATE user_stage1_info SET starttime=".$data1.",endtime='".$data2."',leadtime=". 0 .",count=".(int)$count." WHERE 'number'=".$user_number;
	$sth = mysql_query($sql) or die("Query Error: ". mysql_error());

	$sql = "select * from user_stage1_info where number=".$user_number;
	$sth = mysql_query($sql) or die("Query Error: ". mysql_error());

	while($r = mysql_fetch_array($sth)){
		$temp['number'] = $r['number'];
		$temp['starttime'] = $r['starttime'];
		$temp['endtime'] = $r['endtime'];
		$temp['leadtime'] = $r['leadtime'];
		$temp['count'] = $r['count'];
	}
	$output = json_encode($temp);
	echo $output;
} catch(exception $e){
	echo $e->getMessage();
}

// (
//     [number] => 15821
//     [name] => f072
//     [lv] => 1
//     [strength] => 10
//     [agillity] => 10
//     [intelligent] => 10
//     [startstage] => 
//     [endstage] => 
//     [count] => 0
// )
?>

