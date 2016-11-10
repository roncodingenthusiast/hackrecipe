INSERT
INTO
  tag(`text`)
VALUES('Lunch'),('breakfast'),('Dinner'),('brunch');

INSERT
INTO
  recipe(
    `id`,
    `created_by`,
    `RecipeTitle`,
    `url`
  )
VALUES(
  1,
  NULL,
  'What is my favorite food?',
  'https://www.youtube.com/watch?v=VGh5DV0D3wk'
),(
  2,
  NULL,
  'What is my favorite sport?',
  'https://www.youtube.com/watch?v=pSvn0rp0kz0'
),(
  3,
  NULL,
  'Do you like pats?',
  NULL
),(
  4,
  NULL,
  'What pats do you like?',
  NULL
);
INSERT
INTO
  recipe_tag(`recipe_id`,
  `tag_id`)
VALUES(1, 1),(1, 2),(2, 3),(3, 5),(4, 5);


INSERT
INTO
  ingredient(`text`)
VALUES('tomato'),('salad'),('beans'),('salt'),('sugar'),('ice');

INSERT
INTO
  recipe_ingredient(`recipe_id`,
  `ingredient_id`)
VALUES(1, 1),(1, 2),(2, 3),(3, 5),(4, 5);