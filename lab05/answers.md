# Lab 5: Package Management Tutorial
Please complete the hands-on activities associated with this lab outlined in the <a href="https://csci338.github.io/fall2024/assignments/lab05" target="_blank">Lab 5 Instructions</a> (on the course website). When you're done, answer the following questions. Feel free to use Google / ChatGPT to help you think about these questions (but keep in mind that you'll need to know them for the midterm exam).

## Part 1. Operating System Package Managers
Answer the questions for either Homebrew or apt (depending on whether you're using Linux / WSL or Windows)
1. What is Homebrew / apt, and why is it useful?
	They are package managers that make it easier to install programs on linux
2. What does the `update` command do (either `brew update` or `apt-get update`)?
	install the latest update 
3. Where are the packages that are managed by Homebrew / apt stored on your local computer?
	in your local / bin folder

## Part 2.
1. What is a python virtual environment?
	an isolated place where you can run python programs on your computer while easily managing dependencies
2. What is Poetry, and how is it different from other Python package managers like pip?
	it manages dependancies in a simpler way than pip
3. What happened when you issued the `poetry new poetry-demo` command?
	it created a new pyhton project
4. How do you run a python file using the poetry virtual environment?
	poetry run python [FILENAME].py
5. What is the purpose of the `poetry.lock` file?
	it keeps track of the different versions of all dependencies and ensures everything runs smoothly

## Part 3.
1. What are some of the things that `package.json` is used for?
	it specifies information about a product, as well as licsenses
2. Why wouldn't you want to check in the `node_modules` directory into GitHub?
	it won't tell you anything useful

