<?php
	/* Author: Ronald EKambi 
		Insert a new recipe to the database. 
		$recipeid: is the new recipe id. 
		$ingid: it is the ingredient id;
		$conn: is the connection object result of the function call of mysqli_connect(host, username, password, schema)
		$tagid: it is the tag id;
	*/ 
	include 'connect.php';
	//decode post data from the js file
	$_POST = json_decode(file_get_contents('php://input'), true);
	$intructions = $_POST['instructions'];
	$ingredients = $_POST['ingredients'];
	$tags = $_POST['tags'];
	$title = $_POST['title'];
	$url = $_POST['url'];
	$data = array();
	//insert_recipe returns the recipe id
	$recipeID = insert_recipe($title, $intructions, $url, $link);
	$data['recipe'] = 'successful entery of recipe';
	foreach($tags as $tag){ 
		insert_tag_recipe($recipeID, $tag, $link);
	}
	$data['tag'] = 'successful entery of tags';
	foreach($ingredients as $ing){
		insert_ing_recipe($recipeID, $ing, $link);
	}
	$data['ing'] = 'successful entery of ingredients';
	echo json_encode($data);
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