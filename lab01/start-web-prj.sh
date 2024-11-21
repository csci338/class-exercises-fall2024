# 1. Create a new directory called "src"
mkdir my_new_folder

# 2. Navigate into it:
cd my_new_folder

# 3. Create a new starter index.html file:
echo '''
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css" />
    <title>Hello World</title>
</head>

<body>
    <h1>Hello World</h1>
    <p>Your starter file.</p>
</body>

</html>
''' > index.html

# 4. Create a new starter style.css file:
echo '''
body * {
    box-sizing: border-box;
}
body {
    font-family: Arial, sans-serif;
}
''' > style.css

# 5. Navigate to original directory:
cd ..

# # 6. Open the index.html file in a web browser:
# open my_new_folder/index.html
