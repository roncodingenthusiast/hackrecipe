<?php
	/*Author: Ronald Ekambi 
		creates tag in the database. 
	  */
	include 'connect.php';//gets db connection
	$errors = array();
	//decode json submission from js 
	$_POST = json_decode(file_get_contents('php://input'), true);

	//if empty dont insert the data and return something with errors
	if(empty($_POST['text'])){
		$errors['tagerror'] = "Empty tag";
		echo json_encode($errors);
	}else{
		//$link comes from connect.php file.
		insert_tags($_POST['text'], $link);
		$data['code'] = 401;
		$data['message'] = 'successful created tag';
		echo json_encode($data);
	}

	//$conn: connection object result of mysqli_connect call
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