<?php
	include 'connect.php';
	$errors = array();
	$_POST = json_decode(file_get_contents('php://input'), true);

	if(empty($_POST['text'])){
		$errors['tagerror'] = "Empty tag";
	}else{
		insert_tags($_POST['text'], $link);
		$data['code'] = 401;
		$data['message'] = 'successful created tag';
		echo json_encode($data);
	}


	function insert_tags($tagname, $conn){
		$stmt = $conn->stmt_init();
		$result = array();

		$sql = 'insert into tag(text)VALUES(?)';
		$stmt->prepare($sql);
		$stmt->bind_param("s", $tagname);
		$stmt->execute();
		$stmt->close();
	}
?>