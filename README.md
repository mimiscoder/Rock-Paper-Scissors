# Rock-Paper-Scissors(Rochambeau)

## Personal Feeling

YEAHHHHH! I did finish the project successfully. It was just a simple Rochambeau game. YES! Originally it was one of the names for this game (you can learn more about it [here](https://en.wikipedia.org/wiki/Rock_paper_scissors)), which we call Rock, Paper, and Scissors for some reason. This was one of the project assignments in the Foundation course of TOP (The Odin Project). Overall, I think it was pretty much easy to do, and there wasn't anything specific that made me lose my mind (not yet, lol). Because I already have some programming experience in different programming languages like Python, and I even have some prior experience with JavaScript as well. 

I built a UI for my simple game using the JavaScript DOM (Document Object Model). To be honest, it was a bit challenging, but I was able to create a functional, event-based UI that works just fine.

## Project Description

It's just a simple Rock, Paper, and Scissors game made using HTML and JavaScript. You play this game with a computer. 
You have three buttons which are: Rock, Paper and Scissors. Once you click on one of them, the computer will also choose either Rock, Paper and Scissors. 
Follwing the buttons, the result will be imadiately written on the page which explain who won the round and what both you and computer choose. Below the result line, we have two other lines that will track the scores for both you and computer, and will be written after each round. 
The game will continue like that until the one first reach 5 points, and then that player will be anounced as winner. You will be asked to play again if you click ok you will continue, and if you click cancel the window will be closed. 

## Challanges And Problems

I want to be honest; I didn't face any big problems or challenges while building this project. There were some small problems and challenges here and there, but I can't remember any serious ones.

Building the UI for the game using HTML and JavaScript DOM (Document Object Model) was mostly easy to do until I reached a certain point. At first, I didn’t know what to do when either the human (you) or the computer reached 5 points (it was mentioned on the course page, but I didn’t understand how to go about it). My first guess was to disable the buttons in a way that they would not work, so the listeners wouldn’t respond to any events triggered by those buttons, but I wasn’t sure about it.

There was also no guidance on how to handle this situation in the related JavaScript course from the Foundations path of The Odin Project. Because of that, I checked out other solutions from other students and how they approached this part of the project. By the way, I didn’t look at their code. I was just trying to understand what should be done after the situation I mentioned earlier.

Finally, I found a way to do it. However, another issue appeared. I was updating the scores for both the user and the computer by modifying the textContent of the elements responsible for displaying the scores using DOM manipulation. After that, I attempted to display the result using the `alert()` function.

The problem here was that I expected the message inside the `alert()` function to be shown after the scores were updated on the page. But it was completely the opposite of what I was expecting, which made me confused about why this was happening.

After doing some research, I discovered that this behavior is related to how the DOM rendering process works. The score values are updated and stored in memory first, but the browser does not immediately render those changes on the screen. The UI is only updated after the entire script finishes executing. Because `alert()` blocks execution before the browser gets a chance to render the updated UI, the alert message appears before the updated scores are shown on the page.

The solution to this problem was to use a function called `setTimeout()`, which accepts two arguments: first, a function, and second, a time delay. In this case, it allows the browser to finish rendering the updated scores on the page before executing the `alert()` function.


## Learning Experience

- I think I learned better how to use functions more effectively.
- I learned that DOM manipulations/changes are rendered on the UI only after the entire script finishes executing. Functions - like alert() can pause this rendering, because they block JavaScript execution.