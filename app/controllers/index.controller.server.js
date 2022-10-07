// Index controller 

// custom middleware
// function helloPlein(req, res, next){
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Hello from NodeJS Application');
// }

export function displayHomePage(req, res, next){
    res.render('index', {title: 'Home', page:'home'});
}

export function displayAboutPage(req, res, next){
    res.render('index', {title: 'About', page: 'about'});
}

export function displayProjectsPage(req, res, next){
    res.render('index', {title: 'Projects', page: 'projects'});
}

export function displayServicesPage(req, res, next){
    res.render('index', {title: 'Services', page: 'services'});
}

export function displayContactPage(req, res, next){
    res.render('index', {title: 'Contact', page: 'contact'});
}