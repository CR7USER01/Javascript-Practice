//  map

//  Create a new Map object (Capital M!)
    const map = new Map();

    map.set('IN', "India")
    map.set('US', "United States")
    map.set('UK', "United Kingdom")
    map.set('FR', "France")

    console.log(map);

    for (const [key, value] of map) {
        console.log(key, ':-', value);

        
    }

    const myObject = {
        'game1': 'NFS' ,
        'Game2': 'Spiderman'
    }
    for (const [key, value] in myObject) {
        console.log(key, ':-', value);

    }
