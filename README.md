WebDevTask1
===========

Project for creating a login and register page utilizing Director.js as part of the Talentbuddy Web Dev Course.

**[Skip To Setup](#setup)**

## Project Scope

The task for this project was to create a SPA (Single Page Application) utilizing [Director.js](https://github.com/flatiron/director) for HTML5 page routing. The application was required to accept routes on page load, and navigate inside the page using the HTML5 History API. Specifically, this meant DISABLING the `#` routing system typically seen on older SPAs.

The project requirement also stated that the application was to have 2 pages, a login page and a sign up page. These pages were to have no functionality other than linking between themselves.

Assets where provided along with the design guideline that the site should look as similar as possible to this:
![](https://photos-1.dropbox.com/t/0/AABPexvtu0BSu_Xs6gPepGA627fRX5fV7MBbDd9186c0RQ/12/20018531/png/1024x768/3/1410508800/0/2/Login.png/tR6424AbIJkFTuAx_Hccpwk00qx86l6mbpyn7eMBpMQ)

## Setup
You will need to have Node.js and NPM instaled as well as nginx.

#### Step 1: Configure NGINX

In order to access the node server using the `http://127.0.0.1` web address, you'll need to proxy port 80 to port 3000. The node server runs on port 3000 to prevent issues with having to run the server as root or administrator in order to use port 80. 

Configure your NGINX instance with the follow directive:

```
server {
	listen 127.0.0.1:80;

	location / {
        proxy_pass http://localhost:3000;
    }
}
```

#### Step 2: Install Bower and project's bower components

This project uses [Bower](http://bower.io) to manage it's JavaScript and CSS dependencies. You can install bower by execting the command, `npm install bower -g`, in your terminal or console. Once you have bower installed on your local machine, you can pull down the dependencies for the project by running the command, `bower install`, inside the project's root folder.

#### Step 3: Install build and run-time npm modules

This project also utilizes the [Grunt build tool](http://gruntjs.com) to manage compiling assets for development and production. To install these modules, execute the command, `npm install` inside the project's root folder.

## Development

Now you have a working environment to develop on the project with. There are a few available grunt commands to assist development:

* `grunt build`
* `grunt watch`

These commands allow you to build all the assets into a runnable project and watch for any changes to the source files, and re-compile them on change. It's also smart enough to only recompile the changed pieces, not the whole project. 

For a complete list of available grunt commands, refer to the project's [GruntFile](GruntFile.js).

## Production

To run the project outside of development, after completing the Setup steps, run the command, `grunt build`, followed by the command, `node index.js`. Then open your browser to http://127.0.0.1
