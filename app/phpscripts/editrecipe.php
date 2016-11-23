<?php
	/*Author: Ronald EKambi 
	  Purpose: gets encode json data from controller, edits the recipe in the database!*/
	include 'connect.php';
	//decode post data from the js file
	$_POST = json_decode(file_get_contents('php://input'), true);
	$gotRecipeTitle = false; $recipetitle;
	$gotUrl = false; $url;
	$gotTags = false; $tags;
	$gotIngredients = false; $ingredients;
	$gotDetails = false; $details;
	$gotNothing = true;
	if(isset($_POST['recipetitle'])){
		$gotRecipeTitle = true;
		$gotNothing = false;
		$recipetitle = $_POST['recipetitle'];
	}
	if(isset($_POST['recipedetail'])){
		$gotDetails = true;
		$gotNothing = false;
		$details = $_POST['recipedetail'];
	}
	if(isset($_POST['url'])){
		$gotUrl = true;
		$gotNothing = false;
		$url = $_POST['url'];
	}
	if(isset($_POST['tags'])){
		$gotTags = true;
		$tags = $_POST['tags'];
	}
	if(isset($_POST['ingredients'])){
		$gotIngredients = true;
		$ingredients = $_POST['ingredients'];
	}
	if(!$gotNothing){
		$id = $_POST['id'];
		$stmt = $link->stmt_init();
	
		if($gotRecipeTitle && $gotUrl && $gotDetails){
			$sql = 'update recipe set recipetitle=?, recipedetail=?, url=? where id=?';
			$stmt->prepare($sql);
			$stmt->bind_param("sssi",$recipetitle, $details, $url, $id);
		}else if($gotRecipeTitle && $gotUrl){
			$sql = 'update recipe set recipetitle=?, url=? where id=?';
			$stmt->prepare($sql);
			$stmt->bind_param("ssi",$recipetitle, $url, $id);
		}else if($gotDetails && $gotUrl){
			$sql = 'update recipe set recipedetail=?, url=?, where id=?';
			$stmt->prepare($sql);
			$stmt->bind_param("ssi",$details, $url, $id);
		}else if($gotDetails && $gotRecipeTitle){
			$sql = 'update recipe set recipetitle=?, recipedetail=? where id=?';
			$stmt->prepare($sql);
			$stmt->bind_param("ssi", $recipetitle, $recipedetail, $id);
		}else if($gotUrl){
			$sql = 'update recipe set url=? where id=?';
			$stmt->prepare($sql);
			$stmt->bind_param("si", $url, $id);
		}else if($gotRecipeTitle){
			$sql = 'update recipe set recipetitle=? where id=?';
			$stmt->prepare($sql);
			$stmt->bind_param("si", $recipetitle, $id);
		}else if($gotDetails){
			$sql = 'update recipe set recipedetail=? where id=?';
			$stmt->prepare($sql);
			$stmt->bind_param("si", $details, $id);
		}

		$stmt->execute();
		$stmt->close();
		
	}

	if($gotTags){
		$id = $_POST['id'];
		print_r($tags);
		delete_recipe_tag($id, $link);
		foreach($tags as $tag){ 
			insert_tag_recipe($id, $tag, $link);
		}
	}
	if($gotIngredients){
		$id = $_POST['id'];
		print_r($ingredients);
		delete_recipe_ingredient($id, $link);
		foreach($ingredients as $ing){ 
			insert_ingredient_recipe($id, $ing, $link);
		}
	}
	function delete_recipe_tag($rid, $conn){
		$stmt = $conn->stmt_init();
		$result = array();
		$sql = 'delete from recipe_tag where recipe_id = ?';
		$stmt->prepare($sql);
		$stmt->bind_param("i", $rid);
		$stmt->execute();
		$stmt->close();
	}
	function insert_tag_recipe($id, $tagid, $conn){
		$stmt = $conn->stmt_init();
		$sql = 'insert into recipe_tag(recipe_id, tag_id)values(?,?)';
		$stmt->prepare($sql);
		$stmt->bind_param("ii", $id, $tagid);
		$stmt->execute();
		$stmt->close();
	}
	function delete_recipe_ingredient($rid, $conn){
		$stmt = $conn->stmt_init();
		$result = array();
		$sql = 'delete from recipe_ingredient where recipe_id = ?';
		$stmt->prepare($sql);
		$stmt->bind_param("i", $rid);
		$stmt->execute();
		$stmt->close();
	}
	function insert_ingredient_recipe($id, $tagid, $conn){
		$stmt = $conn->stmt_init();
		$sql = 'insert into recipe_ingredient(recipe_id, ingredient_id)values(?,?)';
		$stmt->prepare($sql);
		$stmt->bind_param("ii", $id, $tagid);
		$stmt->execute();
		$stmt->close();
	}
?>