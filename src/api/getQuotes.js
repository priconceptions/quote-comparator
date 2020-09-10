import { QUOTES_URL } from './apiConstants';
const queryString = require('query-string');

async function getQuotes(authToken, params) {
    let myHeaders = new Headers();
    myHeaders.append("Authorization", authToken);
        
    const requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
    
    const quotesPromise = await fetch(
      `${QUOTES_URL}?${queryString.stringify(params)}`, 
      requestOptions)
    const data = await quotesPromise.json();
    return data;
}

export default getQuotes;