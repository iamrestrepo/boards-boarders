# Boards to surfers/snowboarders

## What is this? 

This is a RESTful web platform that allows board makers and surfers/snowboarders to manage their boards. 

The app uses Sequelize, Express and React as its primary but not exclusive set of tools. 


### Functionality 

 At its very basic, Boards & boarders satisfies the basic functions of persistent storage, CRUD. 

```
  - Board makers are able to  

CREATE / Input new boards in the database.
READ / Retrieve boards from the database.
    Board makers are able to display their "top 5 riders" on a board's page.
UPDATE / Modify information about a board in the database.
DELETE a board from the database. 

``` 

```
  - Boarders are be able to  

CREATE / profile (w/ISA ranking, Last tournament won, Country , favorite wave , current board).
READ / profile's information, boards by maker or name. 
UPDATE /  boards to profile, current board, favorite boards from their selected ones , comments on selected boards.
DELETE /  boards from their favorite boards' list.

```