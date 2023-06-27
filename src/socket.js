import { io } from 'socket.io-client';
export const initSocket = async () => {
    const options = {
        'force new connection': true,
        reconnectionAttempt: 'Infinity',
        timeout: 10000,
        transports: ['websocket'],
    };
    console.log("process.env.SERVER_URL", process.env.REACT_APP_URL)
    return io(process.env.REACT_APP_URL, options);
};
