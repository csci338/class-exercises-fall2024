# Lab 5: Package Management Tutorial
Please complete the hands-on activities associated with this lab outlined in the <a href="https://csci338.github.io/fall2024/assignments/lab05" target="_blank">Lab 5 Instructions</a> (on the course website). When you're done, answer the following questions. Feel free to use Google / ChatGPT to help you think about these questions (but keep in mind that you'll need to know them for the midterm exam).

## Part 1. Operating System Package Managers
Answer the questions for either Homebrew or apt (depending on whether you're using Linux / WSL or Windows)
1. What is Homebrew / apt, and why is it useful?
apt is a package managment system that makes it easier to install, update and manage pakages in a system.
2. What does the `update` command do (either `brew update` or `apt-get update`)?
It updates the loacl package by retreving the lastest versions.
3. Where are the packages that are managed by Homebrew / apt stored on your local computer?
They are stored in usr in brinaries, libaries, and configeration files.

## Part 2.
1. What is a python virtual environment?
An isolate enviorment that allows a user to work on different project without the porjects effecting each other.
2. What is Poetry, and how is it different from other Python package managers like pip?
It is a denpendence mangagment tool that while also installs like pip can also manage data.
3. What happened when you issued the `poetry new poetry-demo` command?
it created a directory called poetry-demo that come with a basic structure. 
4. How do you run a python file using the poetry virtual environment?
poetry run python <file_name>.py
5. What is the purpose of the `poetry.lock` file?
To ensure different enviorments all use the same dependenices .

## Part 3.
1. What are some of the things that `package.json` is used for?
Defines the configeration and dependencies for a project.
2. Why wouldn't you want to check in the `node_modules` directory into GitHub?
They can be very large and is redundent.

