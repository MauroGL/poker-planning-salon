import io from 'socket.io-client';
const socket = io.connect('http://localhost:30003');

export function refreshUsers(users) {
  return {
    type: 'REFRESH_USERS',
    users: users
  }
}

export function createRoom(room, userName) {
  return (dispatch) => {
    console.log('connected!', userName);
    dispatch(connectedSuccessfully());
    socket.emit(
      'room',
      {
        room: room,
        name: userName
      }
    );
    
    socket.on('messageRoom', (data) => {
      dispatch(refreshUsers(data));
    });
  }
}

function connectedSuccessfully(status) {
  return {
    type: 'CONNECTED_SUCCESSFULLY'
  }
}
