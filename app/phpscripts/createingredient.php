<?php
	include 'connect.php';
	$errors = array();
	$_POST = json_decode(file_get_contents('php://input'), true);

	if(empty($_POST['text'])){
		$errors['tagerror'] = "Empty ingredient";
	}else{
		insert_ingredient($_POST['text'], $link);
		$data['code'] = 401;
		$data['message'] = 'successful created ingredient';
		echo json_encode($data);
	}


	function insert_ingredient($ingname, $conn){
		$stmt = $conn->stmt_init();
		$result = array();

		$sql = 'insert into ingredient(text)VALUES(?)';
		$stmt->prepare($sql);
		$stmt->bind_param("s", $ingname);
		$stmt->execute();
		$stmt->close();
	}
?>