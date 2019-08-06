//Install express server
const express = require('express');
const path = require('path');
const request = require('request');
const HTMLParser = require('node-html-parser');
const fs = require('fs');

const app = express();
const arrPublications = [];


request('http://www.imperial.ac.uk/respub/search.jsonp?respub-action=search.html&id=00959440&limit=300&minyear=2013&maxyear=2019&page=1&person=true', function(err,res,body){
	body = body.replace('(', '');
	body = body.replace(');', '');

	fs.writeFile( __dirname + '/src/assets/publications.json', body, 'utf-8', function(err){
		if (err) console.log(err);
		console.log('file created');
	});
});

//request('https://scholar.google.com/citations?user=kWTPnDIAAAAJ&pagesize=100', function(err,res,body){
//	
//	const root = HTMLParser.parse(body);
//	const publications = root.querySelectorAll('.gsc_a_tr');
//	
//	for (let publication of publications) {
//		let pubObj = {};
//		pubObj.urlDetail = publication.childNodes[0].childNodes[0].attributes['data-href'];
//		pubObj.pubTitle = publication.childNodes[0].childNodes[0].text;
//		pubObj.authors = publication.childNodes[0].childNodes[1].text;
//		pubObj.citationsUrl = publication.childNodes[1].childNodes[0].attributes['href'];
//		pubObj.citations = publication.childNodes[1].childNodes[0].text;
//		pubObj.year = publication.childNodes[2].text;
//		arrPublications.push(pubObj);
//	}
//
//	arrPublications.sort((a,b) => b.year - a.year);
//
//	fs.writeFile( __dirname + '/src/assets/publications.json', JSON.stringify(arrPublications), 'utf-8', function(err){
//		if (err) console.log(err);
//		console.log('file created');
//	});
//});


//async function getPublicationsJson() {
//	const arrPublications = [];
//	let response;
//	try {
//		response = await fs.readFile('/response.txt');
//	} catch (err) {
//		console.log(err);
//	}
//	
//	console.log(response);
//	const root = HTMLParser.parse(response);
//	const publications = root.querySelectorAll('.gsc_a_tr');
//
//	for (let publication of publications) {
//		let pubObj = {};
//		pubObj.urlDetail = publication.childNodes[0].childNodes[0].attributes['data-href'];
//		pubObj.pubTitle = publication.childNodes[0].childNodes[0].text;
//		pubObj.citationsUrl = publication.childNodes[1].childNodes[0].attributes['href'];
//		pubObj.year = publication.childNodes[2].text;
//		arrPublications.push(pubObj);
//		//request('https://scholar.google.com/' + pubObj.urlDetail, function(err2, res2, body2){
//		//	const root2 = HTMLParser.parser(body2);
////
//		//	pubObj.pubExternalURL = root2.querySelector('.gsc_vcd_title_link')[0].attributes['href'];
//		//	var arrDetailRow = root2.querySelector('gsc_vcd_value');
//		//	pubObj.authors = arrDetailRow[0].text;
//		//	pubObj.date = arrDetailRow[1].text;
//		//	pubObj.description = arrDetailRow[6].text;
//		//	pubObj.publisher = arrDetailRow[5].text;
//		//	pubObj.volume = arrDetailRow[2].text;
//		//	pubObj.issue = arrDetailRow[3].text;
//		//	pubObj.pages = arrDetailRow[4].text;
////
//		//	pubObj.pubTitle = publication.childNodes[0].childNodes[0].text;
//		//	pubObj.citationsUrl = publication.childNodes[1].childNodes[0].attributes['href'];
//		//	pubObj.year = publication.childNodes[2].text;
//		//	arrPublications.push(pubObj);
//		//})
//	}
//
//	fs.writeFile('publications.json', JSON.stringify(arrPublications), 'utf-8', function(err){
//		if (err) console.log(err);
//		console.log('file created');
//	});
//}


//request('https://scholar.google.com/citations?user=kWTPnDIAAAAJ&pagesize=100', function(err,res,body){
//	const root = HTMLParser.parse(body);
//	const publications = root.querySelectorAll('.gsc_a_tr');
//	const arrPublications = [];
//	for (let publication of publications) {
//		let pubObj = {};
//		pubObj.urlDetail = publication.childNodes[0].childNodes[0].attributes['data-href'];
//		request('https://scholar.google.com/' + pubObj.urlDetail, function(err2, res2, body2){
//			const root2 = HTMLParser.parser(body2);
//
//			pubObj.pubExternalURL = root2.querySelector('.gsc_vcd_title_link')[0].attributes['href'];
//			var arrDetailRow = root2.querySelector('gsc_vcd_value');
//			pubObj.authors = arrDetailRow[0].text;
//			pubObj.date = arrDetailRow[1].text;
//			pubObj.description = arrDetailRow[6].text;
//			pubObj.publisher = arrDetailRow[5].text;
//			pubObj.volume = arrDetailRow[2].text;
//			pubObj.issue = arrDetailRow[3].text;
//			pubObj.pages = arrDetailRow[4].text;
//
//			pubObj.pubTitle = publication.childNodes[0].childNodes[0].text;
//			pubObj.citationsUrl = publication.childNodes[1].childNodes[0].attributes['href'];
//			pubObj.year = publication.childNodes[2].text;
//			arrPublications.push(pubObj);
//		})
//	}
//
//	fs.writeFile('publications.json', JSON.stringify(arrPublications), 'utf-8', function(err){
//		if (err) console.log(err);
//		console.log('file created');
//	});
//	//console.log(root.querySelector('.gsc_a_tr').childNodes[0].childNodes[0].attributes['data-href']);
//});


// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/rlalab'));

app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname+'/dist/rlalab/index.html'));
});

//getPublicationsJson();

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);