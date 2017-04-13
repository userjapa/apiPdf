var app = require('express')(),
	request = require('request'),
	cors = require('cors'),
	bodyParser = require('body-parser'),
	mongoose = require('mongoose'),
	Schema = mongoose.Schema,
	pdfUtil = require('pdf-to-text');

var BearSchema = new Schema({
	name: String
})

app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.json());

app.get('/:pdf', cors(), function(req,res) {
	
	var texto = "";
	var pdf = req.params.pdf;
	
	if (req.url === '/favicon.ico') {
        res.writeHead(200, {'Content-Type': 'image/x-icon'});
        res.end("Sai fora favicon!");
    } else {
		res.header("Access-Control-Allow-Origin", "*");
    	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

		pdfUtil.pdfToText(pdf, function(err, data) {
			if (err) throw(err);
			texto = data;
			obj = {texto: texto};
			console.log('O nome do pdf é: '+pdf);
			console.log(texto);
			res.json(obj);
			console.log("Pegou pdf "+pdf+"!!! \n" + texto);
		});	
		module.exports = mongoose.model('Bear', BearSchema);
		
    }
})

var server = app.listen(3000, function() {
	var host = server.address().address;
	host = (host === '::' ? 'localhost' : host);
	var port = server.address().port;
	
	console.log('Runninng at localhost:3000');
})
