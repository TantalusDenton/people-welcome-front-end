A front end for PeopleWelcome

To run on Ubuntu 22.04:


##prerequisites:

###npm

curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash

export NVM_DIR="$HOME/.nvm"

[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"


### node

nvm install node

## Start Node.JS server
in the same directory a package-lock.json run once:

npm install

That will build modules. Do not commit them (they are in a new folder node_modules). Gitignore them.

To start the server, run the following in the same directory a pachage-lock.json :

npm start 

It will run a server on http://localhost:3000

## Troubleshooting

If you get an Error: Can't resolve 'react-simple-flex-grid', You also need to specifically install flex grid depenency:

npm i -S react-simple-flex-grid

If you get compile errors about python related stuff, just install python:

sudo apt install python3-pip

If you get "npm ERR! network If you are behind a proxy, please make sure that the 'proxy' config is set properly." then try disabling your VPN. If that doesn't work, try:

npm config delete proxy

npm config delete http-proxy

npm config delete https-proxy
