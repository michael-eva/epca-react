const https = require('https');

exports.handler = async function(event, context) {
  // Parse the URL parameters from the path
  const path = event.path.replace('/.netlify/functions/proxy-video', '');
  const cloudFrontUrl = `https://d19kz0rwf2xrwq.cloudfront.net${path}`;
  
  try {
    // Make a request to CloudFront
    const response = await new Promise((resolve, reject) => {
      const req = https.get(cloudFrontUrl, {
        headers: {
          'Origin': 'https://www.epca.net.au'
        }
      }, (res) => {
        let data = [];
        
        res.on('data', chunk => {
          data.push(chunk);
        });
        
        res.on('end', () => {
          resolve({
            statusCode: res.statusCode,
            headers: res.headers,
            body: Buffer.concat(data)
          });
        });
      });
      
      req.on('error', (error) => {
        reject(error);
      });
      
      req.end();
    });
    
    // Return the response from CloudFront
    return {
      statusCode: response.statusCode,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': response.headers['content-type'] || 'application/vnd.apple.mpegurl'
      },
      body: response.body.toString('base64'),
      isBase64Encoded: true
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  }
};
