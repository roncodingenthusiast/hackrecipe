<?php
include 'connect.php';

function delete_tags($link, $recipe_id) {
    $stmt = $link->stmt_init();
    $sql = "delete from recipe_tag where recipe_id = ?";
    $stmt->prepare($sql);
    $stmt->bind_param("i", $recipe_id);
    $stmt->execute();
    $stmt->close();
}
function delete_ingredients($link, $recipe_id) {
    $stmt = $link->stmt_init();
    $sql = "delete from recipe_ingredient where recipe_id = ?";
    $stmt->prepare($sql);
    $stmt->bind_param("i", $recipe_id);
    $stmt->execute();
    $stmt->close();
}

function delete_recipe($link, $recipe_id) {
    $stmt = $link->stmt_init();
    $sql = "delete from recipe where id = ?";
    $stmt->prepare($sql);
    $stmt->bind_param("i", $recipe_id);
    $stmt->execute();
    $stmt->close();
}

$method = $_SERVER['REQUEST_METHOD'];

if($method == "DELETE") {
    $id = $_GET['id'];

    delete_ingredients($link,$id);
    delete_tags($link,$id);
    delete_recipe($link,$id);
    mysqli_commit($link);
} else {
    http_response_code(400);
}


?>