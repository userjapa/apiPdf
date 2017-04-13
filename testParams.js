var app  = require('express')(),
	request = require('request');

app.get('/:pdf', function(req,res) {
	var pdf = req.params.pdf;
	if (req.url === '/favicon.ico') {
        res.writeHead(200, {'Content-Type': 'image/x-icon'});
        res.end("Sai fora favicon!");
    } else {
		console.log('O nome do pdf é: '+pdf);
		res.send('Pegou pdf!!!');
    }
}).listen(3000);