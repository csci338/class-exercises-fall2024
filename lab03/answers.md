# Lab 3 Answers

## Part 1: Git

### 1.1. List the contents of the lab03-exercises repo immediately after initialization
```
# paste code here
git status
On branch master

No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        README.md

nothing added to commit but untracked files present (use "git add" to track)

```

### 1.2. Paste the output of your `git status` command
```

# paste code here
git status
On branch master

No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        README.md

nothing added to commit but untracked files present (use "git add" to track)

```

### 1.3. Paste the output of the state of your repository after committing your README.md file
```
# paste code here
 git status
On branch master
nothing to commit, working tree clean

```

### 1.4. Copy your `git log` output
```
# paste code here
Author: bmungal <bmungal@unca.edu>
Date:   Thu Sep 5 10:35:07 2024 -0400

    add README.md to the repository

```

### 1.5. Copy your `git diff` output
```
# paste code here
diff --git a/README.md b/README.md
index d5a4e8c..c3ee4e4 100644
--- a/README.md
+++ b/README.md
@@ -1 +1,3 @@
-Lab03 9/5/24 collab with Jacob Forrest
\ No newline at end of file
+Lab03 9/5/24 collab with Jacob Forrest ^M
+Find All Duplicates^M
+Write a function (or static method in the case of Java) that accepts a list of integers and returns a list of only those integers that appear more than once.
\ No newline at end of file


```


### 1.6. Reflection

We've learned 6 git subcommands now. Describe each of them in your own words in the section below:

* git init - makes a new git repository. I see this as a folder where you can use git commands.

* git status - git status show you what branch you're on, any commits, and pending untracked files

* git add - I think of add as an update to the changes you made to a file.

* git commit - git commit bundles everything you added into an update and allows you to comment the changes that were made.

* git log - git log shows you a timestamp of what was added to the repository/ more info about who added what.

* git diff - git diff shows you the changes that were made to the repositroy. Shows the difference between the commit and the repository


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
https://github.com/bmungal/lab03-exercises
```

### 3.3. What do the three "Merge pull request" options mean? 
Describe each of them in your own words.

Merge queue - merges all pull requests into the busiest branch, in our case main.  

Squash - Allows you to condense multiple commits into one singular commit with an overall summary of the changes. (helps to look neater if you have multiple commits)

Rebase - creating a sepeate head pointer that points to both your new feature branch and your main branch. All conflicts are resolved during this process.