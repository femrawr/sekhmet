const socket = new WebSocket('ws://' + location.host);

socket.onmessage = (msg) => {
    console.log('server says: ', msg.data);
};

const sendToServer = (msg) => {
    console.log('sending to server: ' + msg);
    socket.send(msg);
};