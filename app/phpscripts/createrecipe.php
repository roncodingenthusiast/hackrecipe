<?php 
	include 'connect.php';
	
	function insert_ing_recipe($recipeid, $ingid, $conn){
		$stmt = $conn->stmt_init();
		$result = array();
		$sql = 'insert into recipe_ingredient(recipe_id, ingredient_id)values(?,?)';
		$stmt->prepare($sql);
		$stmt->bind_param("ii", $recipeid, $ingid);
		$stmt->execute();
		$stmt->close();
	}
	function insert_tag_recipe($recipeid, $tagid, $conn){
		$stmt = $conn->stmt_init();
		$result = array();
		$sql = 'insert into recipe_tag(recipe_id, tag_id)values(?,?)';
		$stmt->prepare($sql);
		$stmt->bind_param("ii", $recipeid, $tagid);
		$stmt->execute();
		$stmt->close();
	}
	function insert_recipe($recipetitle, $recipedetail, $recipeurl, $conn){
		$stmt = $conn->stmt_init();
		$result = array();
		$sql = 'insert into recipe(created_by, recipetitle, recipedetail, url)values(null, ?, ?, ?)';
		$stmt->prepare($sql);
    	$stmt->bind_param("sss", $recipetitle, $recipedetail, $recipeurl);
    	$stmt->execute();
    	$sql = "SELECT id FROM recipe ORDER BY id DESC LIMIT 1";
    	$result_set = mysqli_query($conn, $sql);
    	/**get the id from currently inserted recipe*/
    	while ($row = $result_set->fetch_object()) {
	        array_push($result, $row);
	    }
	    $idInserted = $result[0];
	    $finalId;
	    foreach($idInserted as $littleId){ $finalId = $littleId;}
    	$stmt->close();
    	return $finalId;
	}
?>