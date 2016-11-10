<?php
	include 'connect.php';
	$errors = array();
	$_POST = json_decode(file_get_contents('php://input'), true);

	if(empty($_POST['id'])){
		$errors['tagerror'] = "Empty tag";
	}else{
		delete_tag($_POST['id'], $link);
		$data['code'] = 400;
		$data['message'] = 'successful deleted tag';
		echo json_encode($data);
	}

	function delete_tag($tagid, $conn){
		$stmt = $conn->stmt_init();
		$result = array();

		$sql = 'delete from tag where id = ?';
		$stmt->prepare($sql);
		$stmt->bind_param("i", $tagid);
		$stmt->execute();
		$stmt->close();
	}
?>