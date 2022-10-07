
// import third-party nodejs module
const connect = require('connect');

// intanciate app-server
const app = connect();

// custom middleware
function helloPlein(req, res, next){
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello from NodeJS Application');
}

// custom middleware
function helloHtml(req, res, next){
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Hello from NodeJS Application as html</h1>');
};

// custom middleware
function helloJson(req, res, next){
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({"message": "Hello from NodeJS Application as json"}))
};

// add middleware to connect application
app.use('/json', helloJson);
app.use('/html', helloHtml);
app.use('/', helloPlein);

//run app
app.listen(3000);

console.log('Server running at http://localhost:3000');