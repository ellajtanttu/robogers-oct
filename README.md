# _Mr. Roboger's Neighborhood_

#### _Friday Independent Project: Week 3, Arrays and Looping_

#### By _**Ella Tanttu**_

## Technologies Used

* _CSS3_
* _HTML5_
* _JAVAscript_

## Description

_A web application in which the user may enter their name, a number (negative or positive), and a preference for order of least to most or vice versa. Once the form is submitted, the number is translated into a list from 0 to that number, or that number to 0 (depending on order preference) into BeepBoop language. This means that any number containing a 3, 2, or 1 will ask the user if they would like to be it's neighbor; containing 2 or 1 (but not 3) will translate to "boop!"; or 1 (but not 3 or 2) will translate to "beep!"_

## View Deployment - GH-Pages
_https://ellajtanttu.github.io/robogers-oct/_

## Setup/Installation Requirements

* _Navigate to https://github.com/ellajtanttu/robogers-oct in your browser_
* _Clone this repository to your desktop_
* _Navigate to the top level of the directory_
* _Connect to your github repository_
* _open robogers-oct/index.html in your browser_
* _Open files in VS Code to edit_

## Known Bugs

_No known issues_

## License

_MIT Copyright (c) 2021 Ella Tanttu_
_https://opensource.org/licenses/MIT_

## Contact Information

_Ella Tanttu ellajtanttu@gmail.com_

--------

# TDD

## Problem Analysis

### Prompt-----
Create a web application that takes a number from the user and returns a range of numbers from 0 to the user inputted number with the following substitutions made within the returned range:
* Numbers that contain a 1: all digits are replaced (all digits) with "Beep!"
* Numbers that contain a 2: all digits are replaced (all digits) with "Boop!"
* Numbers that contain a 3: all digits are replaced (all digits) with "Won't you be my neighbor?"
These exceptions are written from least to most important. The first exception should apply unless the second exception does, and the same with the second and third. So, for example, in your finished program,
* The number 13 should be replaced with "Won't you be my neighbor?"
* The number 21 should be replaced with "Boop".
* The number 32 should be replaced with "Won't you be my neighbor?"
A user should be able to enter a new number and see new results over and over again.
Example: If a user inputs a 5, the program should display a list of values: "0", "Beep!", "Boop", "Won't you be my neighbor?", 4, 5

### Analysis-----
I'll need:
1. A loop that generates an array from 0–N
2. A conditional that recognises 1; third place, (or else())
3. A conditional that recognises 2; second place
4. A conditional that recognises 3; first place
5. UI that will clear the form for re-use

* (all in same function)

## Specs
Describe: beepBoop()

Test: "It should return 0 if the number 0 is inputted"\
Code:\
beepBoop(0);\
Expected Output: 0

Test: "It should return array range from 0 to 4 if the number 4 is inputted"\
Code:\
beepBoop(4);\
Expected Output: [0,1,2,3,4]

Test: "It should push 'found one' to end of array if 1 is present"\
Code:\
beepBoop(4);\
Expected Output: [0,1,2,3,4,"found one"]

Test: "It should replace 1 with 'Beep!' in an output array"\
Code:\
beepBoop(4);\
Expected Output: [0,"Beep!",2,3,4,]

Test: "It should replace 3 with 'Won't you be my neighbor?' in an output array"\
Code:\
beepBoop(4);\
Expected Output: [0,"Beep!",2,"Won't you be my neighbor?",4,]

Test: "It should replace 2 with 'Boop!' in an output array"\
Code:\
beepBoop(4);\
Expected Output: [0,'Beep!','Boop!','Won't you be my neighbor?',4,]

Test: "It should replace any number containing 3 with 'Won't you be my neighbor?'"\
Code:\
beepBoop(13);\
Expected Output: [ 0,'Beep!','Boop!','Won\'t you be my neighbor?',4,5,6,7,8,9,10,11,12,'Won\'t you be my neighbor?' ]

Test: "It should replace any number containing 2 but not 3 with 'Boop!'"\
Code:\
beepBoop(13);\
Expected Output: [ 0,'Beep!','Boop!','Won't you be my neighbor?',4,5,6,7,8,9,10,11,'Boop!','Won\'t you be my neighbor?' ]

Test: "It should replace any number containing 1 but not 2 or 3 with 'Beep!'"\
Code:\
beepBoop(13);\
Expected Output: [ 0,'Beep!','Boop!','Won't you be my neighbor?',4,5,6,7,8,9,'Beep!','Beep!','Boop!','Won\'t you be my neighbor?' ]

Test: "It should return array range from number to 0 if the number -4 is inputted"\
Code:\
beepBoop(4);\
Expected Output: [-4,-3,-2,-1]

Test: "It should replace any number containing 3 with 'Won't you be my neighbor, name?'"\
Code:\
beepBoop(13);\
Expected Output: [ 0,'Beep!','Boop!','Won\'t you be my neighbor, name?',4,5,6,7,8,9,10,11,12,'Won\'t you be my neighbor, name?' ]


