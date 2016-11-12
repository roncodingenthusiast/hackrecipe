# hackrecipe

* Built using [AngularJS][1] as front-end 
* MySQL as backend. 
* Karma (Test Runner) + Jasmine (Testing Framework) for testing 
* GruntJs (Task Runner) for task automation

this website is a recipe website that lets you search, add, delete, recipes

How to run: 

- Run on a local server or an online server. 
- Just enter url localhost/hackrecipe/ and the use the application



## How to run project 

* Download project as zip and extract it 
* Copy the folder hackrecipe with content on your server
* If running using Xampp: move to folder c:/xampp/htdocs/  
* Start up your server (Example: start services on xampp control panel for apache and mysql)
* Go to [http://localhost/hackrecipe/app/][3] in your browser
	* If your port is not the default one you can go to [http://localhost:{INSERT_YOU_PORT}/hackrecipe/app/#/][4] replace: {INSERT_YOU_PORT} by your port. for example [http://localhost:8000/hackrecipe/app/#/][5] 

## How to run the unit test

* Make sure you have nodejs and firefox installed on your computer (preferable the 32 bits version you run into less PATH issue with that one)
* Open your windows command prompt and navigate to the project folder. ls/dir should be showing you: 
   * app/ test/ ....
* run: ``` npm install ```
  * NoteThe previous command installs all the dependencies from package.json to your local project. 
* run: 
``` grunt karma:unit ```
* You end up with something like this: 
![ALT][2]


Note: locate the connect.php file in app/phpscripts/ folder to update the schema name and password and username for the database. 


[1]: https://angularjs.org/
[2]: test/sample/test-running.PNG
[3]: http://localhost/hackrecipe/app/
[4]: http://localhost:8000/hackrecipe/app/#/
[5]: http://localhost:8000/hackrecipe/app/#/