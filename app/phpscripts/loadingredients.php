<?php
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

	$alltags = get_all_ingredients($link);

	echo '[';
	for ($i=0; $i<count($alltags); $i++) {
	    $tag = $alltags[$i];
	    
	    if($i>0) {
	        echo(',');
	    }
	    echo(json_encode($tag));
	}
	echo ']';

	// close mysql connection
	mysqli_close($link);
?>