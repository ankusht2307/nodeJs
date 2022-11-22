const os = require('os');

// info about current user
const user = os.userInfo();
console.log('current user: ', user);

// methods returns the system uptime in seconds
console.log(`The system uptime is ${os.uptime()} seconds`);

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMemory: os.totalmem(),
    freeMemory: os.freemem()
}

console.log(`System details: `, currentOS);
