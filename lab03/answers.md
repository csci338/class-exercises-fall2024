
# Lab 3 Answers

## Part 1: Git

### 1.1. List the contents of the lab03-exercises repo immediately after initialization
```
> ls -la
total 0
drwxrwxrwx 1 ablazer1 ablazer1 4096 Sep  5 10:32 .
drwxrwxrwx 1 ablazer1 ablazer1 4096 Sep  5 10:23 ..
drwxrwxrwx 1 ablazer1 ablazer1 4096 Sep  5 10:34 .git
-rwxrwxrwx 1 ablazer1 ablazer1   18 Sep  5 10:25 README.md


```

### 1.2. Paste the output of your `git status` command
```
> git status
On branch master

No commits yet

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)
        new file:   README.md


```

### 1.3. Paste the output of the state of your repository after committing your README.md file
```
> git status
On branch master
nothing to commit, working tree clean


```

### 1.4. Copy your `git log` output
```
> git log
commit 1f3352d7208cb52deded8a992a411936027a1238 (HEAD -> master)
Author: anthonyablazer <ablazer1@unca.edu>
Date:   Thu Sep 5 10:49:42 2024 -0400

    add README.md to the repository


```

### 1.5. Copy your `git diff` output
```
> git diff
diff --git a/README.md b/README.md
index eddecec..e1f5a5a 100644
--- a/README.md
+++ b/README.md
@@ -1 +1,4 @@
 # Lab 3 README.md
+
+Find All Duplicates
+Write a function (or static method in the case of Java) that accepts a list of integers and returns a list of only those integers that appear more than once.


```


### 1.6. Reflection

We've learned 6 git subcommands now. Describe each of them in your own words in the section below:

* git init - initiates a new repository, as well as a branch called "main" or "master"
* git status - tells us which changes will and will not be committed.
* git add - adds selected files to list of files whos chnages will be committed ; unlisted will not be committed.
* git commit - allows you to see the latest changes in the repository on GitHub, as well as in your repository history
* git log - retraces commits made by you and other collaborators
* git diff - Shows changes made to previously committed files


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
# https://github.com/anthonyablazer/lab03-exercises

```

### 3.3. What do the three "Merge pull request" options mean? 
Describe each of them in your own words.

Merge Commit takes all the commits from the pull request and merges them into the base branch as a new merge commit. 
Squash and Merge means commits are combined into one commit and merged into the main branch.
Rebase and Merge moves your commits from the pull request and "replays" them on top of the latest version of the main branch, without adding a new merge commit.
