export const getData = async url => {
    const response = await fetch(url);
    
    
    if (response.ok) {
        return response.json();
    }


    // .then(response => {console.log(response)})
    // .catch(error => {console.log('error', error)})
    // ;
    console.log('response: ', response);
}