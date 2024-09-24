# Lab 3 Answers

## Part 1: Git

### 1.1. List the contents of the lab03-exercises repo immediately after initialization
```
# paste code here

total 8
drwxr-xr-x  4 rubynuss  staff  128 Sep  5 10:18 .
drwxr-xr-x  6 rubynuss  staff  192 Sep  5 10:17 ..
drwxr-xr-x  9 rubynuss  staff  288 Sep  5 10:18 .git
-rw-r--r--  1 rubynuss  staff    9 Sep  5 10:17 README.md

```

### 1.2. Paste the output of your `git status` command
```
# paste code here

On branch main

No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)
	README.md

nothing added to commit but untracked files present (use "git add" to track)

```

### 1.3. Paste the output of the state of your repository after committing your README.md file
```
# paste code here

[main (root-commit) 8e6ddef] add README.md to the repository
 Committer: Ruby Nuss <rubynuss@Rubys-MacBook-Air.local>
Your name and email address were configured automatically based
on your username and hostname. Please check that they are accurate.
You can suppress this message by setting them explicitly. Run the
following command and follow the instructions in your editor to edit
your configuration file:

    git config --global --edit

After doing this, you may fix the identity used for this commit with:

    git commit --amend --reset-author

 1 file changed, 1 insertion(+)
 create mode 100644 README.md

```

### 1.4. Copy your `git log` output
```
# paste code here

commit 8e6ddeff446cce45c86447504dda304207819233 (HEAD -> main)
Author: Ruby Nuss <rubynuss@Rubys-MacBook-Air.local>
Date:   Thu Sep 5 10:21:55 2024 -0400

    add README.md to the repository

```

### 1.5. Copy your `git diff` output
```
# paste code here

diff --git a/README.md b/README.md
index d71cc64..18f94b1 100644
--- a/README.md
+++ b/README.md
@@ -1 +1,6 @@
 hello :D
+
+Find All Duplicates
+Write a function (or static method in the case of Java) that accepts a list of integers and returns a list of only those integers that appear more than once.
+
+

```


### 1.6. Reflection

We've learned 6 git subcommands now. Describe each of them in your own words in the section below:

* git init
initialize a new git repo

* git status 
list all commits and untracked files

* git add 
add file to be staged for commit

* git commit 
commit changes to github

* git log 
list git history

* git diff 
show changes between before and after commit


### 1.7. Practice: Find All Duplicates (Java)
Make sure you implement the `FindDuplicates.java` class as specified in the instructions (with the nested loops implementation).


## Part 2: GitHub

### 2.1. Practice: Find All Duplicates (Python)
Make sure you implement the `find_duplicates.py` file as specified in the instructions (with the nested loops implementation).


## Part 3: Branching

### 3.1. Implement the More Efficient Version of the "Find Duplicates" problem
Implement the more efficient Version of the "Find Duplicates" problem using a dictionary (or hashmap) data structure instead of nested loops. You may do this in either your Python file or in the Java file that you’ve already made. Do this by adding a second function/method to your Java/Python file with a slightly different name.


### 3.2. Link to Repo
Please make sure that the new repo that you made today on GitHub is public, and paste a link to it below.

```bash
# paste your new repo link here...

```

https://github.com/runuss720/lab03-exercises

### 3.3. What do the three "Merge pull request" options mean? 
Describe each of them in your own words.
- create a merge commit - everything from current branch will be added to base, all individual commits saved

- squash and merge - all commits from current branch will be combined into 1

- rebase and merge - all commits will be encorporated into front of master branch
