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

According to the link we followed above, the -p 80:80 command we just ran mapped the ports of host 80 to container 80... I think this means we synched the ports to allow functions to operate and transactions to happen across the network. I guess synched everything up to allow for proper communciation.

2. How do you think [http://localhost](http://localhost) is communicating with Docker?

Because of the last command, we have established connection between our local network and docker. Now that this communication is established, we can now send/ store things in docker because there is full access both ways. 

## 2. Our Application
When you download and unzip `app`, save it inside of the `lab04` directory (while on your `lab04` branch). Then follow the instructions for this section. When you're done, answer the following questions about the `Dockerfile` you just made:
1. What is `node:18-alpine` and where did it come from?

node:18-apline is the start node that we told the DockerFile to start from

2. Which commands in the Dockerfile instructed Docker to copy the code from `app` onto the Docker image? Explain.

WORKDIR /app and COPY .. work together to set the destination and run a command (COPY)

3. What do you think would happen if you forgot to add `CMD ["node", "src/index.js"]` in your Dockerfile? Why?

Because CMD specifies a command to run, I don't think anything would execute. From my experience with Eclipse, when you start a new Java project, an SRC folder is created. The SRC contains all the source code for your future classes... without this I don't think you'd have a starting point for things you store/ work on. 

## 3. Updating Our App
In this section, you learned that if you make a change to the code, you have to 
* Rebuild the Docker image,
* Delete the container that you previously made (which is still running), and
* Create a brand new container

Answer the following:
1. What are two ways you can delete a container?

1. use the docker ps command to get the docker id, then use docker stop <id> and docker rm <id>
2. remove the container using the Docker Dashboard, if you hover over the app container and click the trash icon, you can remove the container

## 4. Sharing Our App (Optional)
You don't have to complete this section, but I do want you to navigate to the Docker Image repository and take a look: [https://hub.docker.com/search?q=&type=image&image_filter=official](https://hub.docker.com/search?q=&type=image&image_filter=official). These are all of the potential Docker Images you can utilize to build your own containers (which will save you a lot of time)!

## 5. Persisting our DB

1. What is the difference between the `run` and the `exec` command?

Run starts up a new container and runs the process in that container
Exec starts a process in a container that already exists

2. What does the `docker exec -it` command do, exactly. Try asking ChatGPT!

According to chatgpt, this allows us to input/ execute commands in the container as if we were on the command line.

3. What was the purpose of creating a volume?

Creating a volume maintains the link to our data. Changes in the container or directory will be seen on the host machine.

4. Optional: How does the TODO app code know to use the volume you just made? Hint: open `app/src/persistence/sqlite.js` and see if you can figure it out.

## 6. Using Bind Mounts
1. Why are bind mounts useful? 

Bind mounts in my mind works like a directed refresh. We can make changes to containers and send source code to specfic places and see the changes right away.

2. Note that the commands below can also be represented in a Dockerfile (instead of in one big string of commands on the terminal). What are the advantages of using a Dockerfile?

```
docker run -dp 3000:3000 \
    -w /app -v "$(pwd):/app" \
    node:18-alpine \
    sh -c "yarn install && yarn run dev"
```

Dockerfiles remind me of MakeFiles in the sense that you do not need to retype a path, you set one up for yourself in the dockerfile.

## 7. Multi-Container Apps
If you have never worked with network applications, this section may be confusing. That said, try to answer this question as best you can:

1. If you have two containers running that are sandboxed (i.e., one container can't reach into another container and see its internal state or code), how did you get your two containers to communicate with one another? In other words, how was the web application container able to communicate with the database container?

You can connect the two containers by linking them through a network. Once they can find eachother, they can communicate with one another. You need info like MYSQL Host, user, password, and database. 

## 8. Using Docker Compose
1. What is the purpose of the `docker-compose.yml` file?

The docker-compose.yml file lets you condense the configurations for an entire application into a single file. This makes projects much easier to manage. 

## 9. Image Building Best Practices (Optional)
Optional section. Only complete if you want to.


## What to turn in
After answering all of the questions above...
1. Make sure that your `app` folder is inside of your `lab04` folder (including your `Dockerfile` and `docker-compose.yml` files).
1. Then, stage, commit, and push your 'lab04' branch to GitHub. 
1. Create a Pull Request (but do not merge your pull request -- that doesn't happen until Sarah reviews it).
1. Paste a link to your pull request in the Lab04 submission
