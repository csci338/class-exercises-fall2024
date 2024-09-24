# Lab 4: Docker Tutorial

**Before you begin...**
1. Ensure that Docker is running and that you can access the Docker Dashboard
1. Open the command prompt
2. Run the following command: `docker run -dp 80:80 docker/getting-started`
3. Open [http://localhost](http://localhost) in your browser to complete the tutorial.


Complete the following tutorial sections (note that #4 and #9 are optional) and answer the questions below:

## 1. Getting Started
Consider the command you just ran: `docker run -d -p 80:80 docker/getting-started`

Answer the following:
1. Explain what the -p flag is doing (in your own words)
`tells it which ports to use--in this case, 80:80 maps port 80 on the host (us!!) to port 80 on the container (docker).`
2. How do you think [http://localhost](http://localhost) is communicating with Docker?
`isn't it just a web dev tool? I know you need a specific certificate on your computer... I'd imagine it's similar to how you can open files from your system in a browser. It's related to your computer, not Docker itself. I suspect it wouldn't run if the docker application wasn't open.`

## 2. Our Application
When you download and unzip `app`, save it inside of the `lab04` directory (while on your `lab04` branch). Then follow the instructions for this section. When you're done, answer the following questions about the `Dockerfile` you just made:
1. What is `node:18-alpine` and where did it come from?
`it's an image we want on our computer to start working from. If you google "computer image", you get "A computer image is a picture composed of an array of elements called pixels". This is not what we're doing!! (though I may have thought it was for a few short moments.) An image is just. a representation of a thing on your computer. It's like how I download iso files, or images of a disk, to boot a new distro on my computer. Like I guess it is just a picture of the state of something? but it's not a picture. it's just like a saved copy. idk how to explain it. And it got automatically downloaded when I ran that docker build command. `

2. Which commands in the Dockerfile instructed Docker to copy the code from `app` onto the Docker image? Explain.
`Was it not just the "copy . ." command? And then the yarn installs its dependencies.`

3. What do you think would happen if you forgot to add `CMD ["node", "src/index.js"]` in your Dockerfile? Why?
`i think that it would still install everything just nicely but! there would be no way to easily command-line run starting a new container from this image. I don't know if there's some other clicking way to get to it.`

## 3. Updating Our App
In this section, you learned that if you make a change to the code, you have to 
* Rebuild the Docker image,
* Delete the container that you previously made (which is still running), and
* Create a brand new container

Answer the following:
1. What are two ways you can delete a container?
`with the command line (id, stop, and then remove the container) or just in the app.`

## 4. Sharing Our App (Optional)
You don't have to complete this section, but I do want you to navigate to the Docker Image repository and take a look: [https://hub.docker.com/search?q=&type=image&image_filter=official](https://hub.docker.com/search?q=&type=image&image_filter=official). These are all of the potential Docker Images you can utilize to build your own containers (which will save you a lot of time)!

## 5. Persisting our DB

1. What is the difference between the `run` and the `exec` command?
`run makes a new container and starts working with it. exec just takes an already running container and executes commands on it.`
`this is also where my answers all deleted themselves and didn't save so this is my second time answering these, so I'm sorry if they're rushed`
2. What does the `docker exec -it` command do, exactly. Try asking ChatGPT!
`exec-s it and (according to the documentations), -i keeps STDIN open and going, and -t opens up a proxy terminal. basically it just opens a little terminal for you to run commands on the container.`
3. What was the purpose of creating a volume?
`it lets us keep all our data together and makes it possible to access the same data with different containers.`
4. Optional: How does the TODO app code know to use the volume you just made? Hint: open `app/src/persistence/sqlite.js` and see if you can figure it out.

## 6. Using Bind Mounts
1. Why are bind mounts useful? 
`bind mounts keep our data (and more!) connected directly to our project. we ALWAYS know where it is. It can also hold other stuff, kinda like how you can import packages, but not the same at all. `
2. Note that the commands below can also be represented in a Dockerfile (instead of in one big string of commands on the terminal). What are the advantages of using a Dockerfile?
`number 1 Dockerfile advantage -> don't have to type everything out again/copy paste. You can run everything with one command and you know that you didn't mistype anything and that it's going to do exactly what you want.`

```
docker run -dp 3000:3000 \
    -w /app -v "$(pwd):/app" \
    node:18-alpine \
    sh -c "yarn install && yarn run dev"
```

## 7. Multi-Container Apps
If you have never worked with network applications, this section may be confusing. That said, try to answer this question as best you can:

1. If you have two containers running that are sandboxed (i.e., one container can't reach into another container and see its internal state or code), how did you get your two containers to communicate with one another? In other words, how was the web application container able to communicate with the database container?
`two containers need to be on the same network to talk!! according to the tutorial, anyway. So the web application container was able to communicate with the database container because they're on the same network. `

## 8. Using Docker Compose
1. What is the purpose of the `docker-compose.yml` file?
`to me it seems to be very similar to a Makefile or a Dockerfile in that it keeps all the info you need to do something, like commands. however, it also stores definitions and the like for your containers. kind of like a script if it also told you what costumes everyone should get wears and what materials to build the set out of.`

## 9. Image Building Best Practices (Optional)
Optional section. Only complete if you want to.


## What to turn in
After answering all of the questions above...
1. Make sure that your `app` folder is inside of your `lab04` folder (including your `Dockerfile` and `docker-compose.yml` files).
1. Then, stage, commit, and push your 'lab04' branch to GitHub. 
1. Create a Pull Request (but do not merge your pull request -- that doesn't happen until Sarah reviews it).
1. Paste a link to your pull request in the Lab04 submission
