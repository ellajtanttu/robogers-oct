# _Mr. Roboger's Neighborhood_

#### _Friday Independent Project: Week 3, Arrays and Looping_

#### By _**Ella Tanttu**_

## Technologies Used

* _CSS3_
* _HTML5_
* _JAVAscript_

## Description

_TO BE COMPLETED AFTER CODE IS BUILT_

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

Test: "It should return 1 if the number 1 is inputted"
Code:
beepBoop(1);
Expected Output: 1