Classified
==========


This projects consists of two sub project 
* Frontend
* Backend

Frontend
------------
Frontend is build on AngularJS and uses Bootstrap for layout. 

## Installation
* install node (if you don´t already have)
* install Bower 'npm install bower -g'
* install Grunt 'npm install grunt -g' (if you want to build the project, not necessary for running it)
* install all frontend dependencies by running first 'npm install' in project $ROOT$/frontend
* then 'bower install' in project $ROOT$/frontend


## Run
* Run frontend by typing 'node webserver.js' in $ROOT$/frontend
* You can also type grunt serve (if you want to build project, and then run it)
* Open browser and go to URL http://localhost:9001/

## Test
Jasmine is used for testing and can be run by pointing browser to http://localhost:9001/test/SpecRunner.html

Backend
------------
Backend is build on node & express and uses NeDB to store data. 

## Installation
* install node (if you don´t already have)
* install all backend dependencies (including database) by running 'npm install' in project $ROOT$/backend

## Run
* Start server by typing 'node index.js' in project $ROOT$/backend.










