// Index controller 

// custom middleware
// function helloPlein(req, res, next){
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Hello from NodeJS Application');
// }

export function helloWorld(req, res, next){
    res.render('index', {title: 'Home'});
}

// // custom middleware
// function helloHtml(req, res, next){
//     res.setHeader('Content-Type', 'text/html');
//     res.end('<h1>Hello from NodeJS Application as html</h1>');
// };

// // custom middleware
// function helloJson(req, res, next){
//     res.setHeader('Content-Type', 'application/json');
//     res.end(JSON.stringify({"message": "Hello from NodeJS Application as json"}))
// };