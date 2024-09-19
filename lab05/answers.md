# Lab 5: Package Management Tutorial
Please complete the hands-on activities associated with this lab outlined in the <a href="https://csci338.github.io/fall2024/assignments/lab05" target="_blank">Lab 5 Instructions</a> (on the course website). When you're done, answer the following questions. Feel free to use Google / ChatGPT to help you think about these questions (but keep in mind that you'll need to know them for the midterm exam).

## Part 1. Operating System Package Managers
Answer the questions for either Homebrew or apt (depending on whether you're using Linux / WSL or Windows)
1. What is Homebrew / apt, and why is it useful?
	Apt is Linux distribution command that allows us to downlaod packages. This command is useful because it allows us to run environments from different distributors,
	like Python or Javascript, in our command line.


2. What does the `update` command do (either `brew update` or `apt-get update`)?
	apt-get update is command that gets the latest version of our following package and installs it into our system.

3. Where are the packages that are managed by Homebrew / apt stored on your local computer?
	Since I used apt, the files primarily seemed to be stored in the local/bin directory. As a matter of fact, Peotry plainly stated that my package was installed
	in my .local/bin.


## Part 2.
1. What is a python virtual environment?
	A seperated environment that allows you to run and manage Python projects with their own dependencies, and the doesn't affect the global Python environment 
	installed on my system.

2. What is Poetry, and how is it different from other Python package managers like pip?
	It is a dependency management tool designed to ease the process of managing Python projects. While pip can do dependency management, it is not as synchrnous
	or have as smooth a workflow as Poetry.

3. What happened when you issued the `poetry new poetry-demo` command?
	Poetry created a new directory, but not just a plain directory, but a directory that came with files that allowed for the previously mentioned smoother worflow
	and a standardized confguration, such as the toml file.

4. How do you run a python file using the poetry virtual environment?
	python run python <file name>


5. What is the purpose of the `poetry.lock` file?
	Its primary purpose is to ensure that the exact versions of dependencies used in a project are locked down and consistently replicated across different
	environments.

## Part 3.
1. What are some of the things that `package.json` is used for?
	- Information on the project as awhole, like version number or name
	- Dependencies associated with the project
	- Stores scripts to be ran during start, testing, and build
	- Repositories
	- etc.

2. Why wouldn't you want to check in the `node_modules` directory into GitHub?
	Most likely for its large size and plenty of the project's vital information is already stored in the package.json and package-lock.json.


