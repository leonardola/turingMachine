# turingMachine
This is a universal turing machine, with it you could run all possible algorithms
It is meant to be just a school project, but if you wanna contribute feel free, I will be glad to accept your pull request

## Why is there so many branches?
First I made it in php, mainly because that's the language I use more often and that was available for the job. But php made the running of busy beaver 5 really slow taking up to 10 minute(master branch), so I decided to create something faster, so the php script got inlined(inlided_php branch) wich made it run on only 18 seconds. Not good enough, jumped to javascript(javascript_executor branch) which ran in only 1 second.

## If you wanna learn
If you wanna learn go for the master branch I tried to make it the most clean and easy possible, all the other branches use the same algorithm only inlined

## How to run
- You'll need a php server like apache
- Clone the project to your web root folder
- Execute in your browser localhost/turingMachine/Views/home.html
- Now select one predefined machines or enter your own
- Click execute

## Editor
- If you want to use a graphical editor access localhost/turingMachine/Views/editor.html
- Click the + button to add states
- First click the two states
- Change the data inside the input it is formated as Read;Write;Goto
