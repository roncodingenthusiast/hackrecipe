create schema recipeschema;

create table recipe (
 id int not null auto_increment Primary Key,
 created_by int, -- TODO: foreign key -> users.id
 created_on timestamp default CURRENT_TIMESTAMP,
 modified_by int,
 modified_on timestamp default 0 ON UPDATE CURRENT_TIMESTAMP,
 RecipeTitle text,
 url varchar(1000)
);	
create table tag (
 id int not null auto_increment Primary Key,
 `text` text
);
-- join table for many-to-many between recipes and tags
create table recipe_tag (
 recipe_id int not null,
 tag_id int not null
);

