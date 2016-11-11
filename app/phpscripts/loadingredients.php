<?php
	/** Author: Ronald Ekambi
		Purpose: loads ingredients from db  
	*/
	include 'connect.php';
	function get_all_ingredients($conn){
		$stmt = $conn->stmt_init();
    	$result = array();
    	$sql = "select * from ingredient";
    	$result_set = mysqli_query($conn,$sql);
	    while ($row = $result_set->fetch_object()) {
	        array_push($result, $row);
	    }
	    return $result;
	}

	$allingredients = get_all_ingredients($link);

	echo '[';
	for ($i=0; $i<count($allingredients); $i++) {
	    $ing = $allingredients[$i];
	    
	    if($i>0) {
	        echo(',');
	    }
	    echo(json_encode($ing));
	}
	echo ']';

	// close mysql connection
	mysqli_close($link);
?>