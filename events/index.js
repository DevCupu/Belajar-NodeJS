const { EventEmitter } = require('events')
 
const myEventEmitter = new EventEmitter();

const birthdayEventListener = (name) => {
    console.log(`Happy Birthday ${name}!`);
}

const birthdayAndini = (user) => { 
    console.log(`Hai Cantik ${user}`)
}

const onListener = ({ name, user }) => {
    birthdayAndini(user);
    birthdayEventListener(name);
}


myEventEmitter.on('call-user', onListener);

myEventEmitter.emit('call-user', { name: 'Iben', user: 'Andini'});


