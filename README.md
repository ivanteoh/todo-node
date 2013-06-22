todo-node
=========

An example node.js application that using express.js

Initial setup
=============

You do not need these commands below if you are going to clone the code from github

    * npm install -g express
    * express --sessions --hogan --force todo-node

Deploy to Heroku
================

Test this application in Heroku

    * heroku create
    * heroku addons:add mongolab:sandbox
    * git push heroku master
    * heroku ps:scale web=1
    * heroku open
