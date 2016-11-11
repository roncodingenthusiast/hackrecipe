<?php
/** Author: Ronald Ekambi 
    Purpose: loads recipe with associated tags and ingredient from db
*/
include('phpscripts/connect.php');
//load tags from database
function load_tags($link, $recipe_id){
    $stmt = $link->stmt_init();
    $result = array();
    $sql = 'select tag.* from recipe_tag as rt, tag where rt.tag_id=tag.id and rt.recipe_id = ?';
    $stmt->prepare($sql);
    $stmt->bind_param("i", $recipe_id);
    $stmt->execute();
    $result_set = $stmt->get_result();
    while ($row = $result_set->fetch_object()) {
        array_push($result, $row);
    }
    $stmt->close();
    return $result;
}

//load ingredients from database
function load_ingredients($link, $recipe_id){
    $stmt = $link->stmt_init();
    $result = array();
    $sql = 'select ingredient.* from recipe_ingredient as ri, ingredient where ri.ingredient_id=ingredient.id and ri.recipe_id = ?';
    $stmt->prepare($sql);
    $stmt->bind_param("i", $recipe_id);
    $stmt->execute();
    $result_set = $stmt->get_result();
    while ($row = $result_set->fetch_object()) {
        array_push($result, $row);
    }
    $stmt->close();
    return $result;
}

//load recipes from databases.
function load_recipes($link) {
    $result = array();
    $sql = 'select * from recipe';
    $result_set = mysqli_query($link,$sql);
    while ($row = $result_set->fetch_object()) {
        array_push($result, $row);
    }
    return $result;
}

$recipes = load_recipes($link);

//change result to Json object
echo '[';
for ($i=0; $i<count($recipes); $i++) {
    $recipe = $recipes[$i];
    $tags = load_tags($link, $recipe->id);
    $ingredients = load_ingredients($link, $recipe->id);
    $recipe->tags=$tags;
    $recipe->ingredients = $ingredients;
    if($i>0) {
        echo(',');
    }
    //generate a simple json value http://php.net/manual/en/function.json-encode.php
    echo(json_encode($recipe));
}
echo ']';

// close mysql connection
mysqli_close($link);