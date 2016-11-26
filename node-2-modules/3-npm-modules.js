var request = require('request');

request('http://www.pluralsight.com/', function(err, response, body) {
  if (err) throw err;
  console.log( "statusCode = " + response.statusCode );
  if( response.statusCode === 200 ) {
      console.log(body);
      console.log('-----');
      //console.dir(response);
  }
})