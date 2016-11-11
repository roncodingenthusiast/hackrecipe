<?php
	/*Author: Ronald EKambi 
	  Purpose: gets encode json data from controller, insert the new ingredient in database*/
	include 'connect.php';
	$errors = array();
	//decodes the json data
	$_POST = json_decode(file_get_contents('php://input'), true);

	//if it is empty it create the tagerror
	if(empty($_POST['text'])){
		$errors['tagerror'] = "Empty ingredient";
	}else{
		//if it is not empty
		insert_ingredient($_POST['text'], $link);
		$data['code'] = 401;
		$data['message'] = 'successful created ingredient';
		//resends a json object to the js file that submitted request
		echo json_encode($data);
	}

	//takes a connection: conn  and an ingredient name: ingname
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