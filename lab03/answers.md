# Lab 3 Answers

## Part 1: Git

### 1.1. List the contents of the lab03-exercises repo immediately after initialization

```
answers.md  README.md


```

### 1.2. Paste the output of your `git status` command

```

On branch my_lab3_work
Untracked files:
  (use "git add <file>..." to include in what will be committed)
        README.md

nothing added to commit but untracked files present (use "git add" to track)

```

### 1.3. Paste the output of the state of your repository after committing your README.md file

```
[my_lab3_work 03ed698] add README.md to the repository
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 lab03/README.md


```

### 1.4. Copy your `git log` output

```
commit 03ed6981b9ad51798dad57878167a9fd34354585 (HEAD -> my_lab3_work)
Author: aindelic <aindelic@unca.edu>
Date:   Wed Sep 11 15:59:31 2024 -0400

    add README.md to the repository

commit 5e7a7816cecb15b6ba6a5efc3ebf792e0b578543 (origin/main, origin/lab02, origin/HEAD, main)
Author: aindelic <aindelic@unca.edu>
Date:   Wed Sep 11 15:33:49 2024 -0400
:


```

### 1.5. Copy your `git diff` output

```
# paste code here

diff --git a/lab03/README.md b/lab03/README.md
index e69de29..2627300 100644
--- a/lab03/README.md
+++ b/lab03/README.md
@@ -0,0 +1,2 @@
+Find All Duplicates
+Write a function (or static method in the case of Java) that accepts a list of integers and returns a list of only those integers that appear more than once.
```

### 1.6. Reflection

We've learned 6 git subcommands now. Describe each of them in your own words in the section below:

- git init - makke the file system for git
- git status - tells you the current info on the git repo
- git add - adds new or updated files to working directory
- git commit - finalizes the changes to be made
- git log - log of all updates to branch
- git diff - shows the changes between updated files

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

### 3.3. What do the three "Merge pull request" options mean?

create merge commit - all history and commits from current branch will be added to base branch

squash and merge - combine a series of commits from current branch into 1 and then add to the base branch

rebase and merge - the commits from the curret branch will be places on top of the last commit on the base branch
