<?php
	/** Author: Ronald Ekambi 
		deletes an incredient from db
	**/
	include 'connect.php';
	$errors = array();
	$_POST = json_decode(file_get_contents('php://input'), true);

	if(empty($_POST['id'])){
		$errors['ingerror'] = "Empty ingredient";
	}else{
		delete_ing($_POST['id'], $link);
		$data['code'] = 400;
		$data['message'] = 'successful deleted ingredient';
		echo json_encode($data);
	}

	function delete_ing($ingid, $conn){
		$stmt = $conn->stmt_init();
		$result = array();

		$sql = 'delete from ingredient where id = ?';
		$stmt->prepare($sql);
		$stmt->bind_param("i", $ingid);
		$stmt->execute();
		$stmt->close();
	}
?>