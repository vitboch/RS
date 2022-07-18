const users = [
    {
        username: 'David',
        status: 'online',
        lastActivity: 10
    },
    {
        username: 'Lucy',
        status: 'offline',
        lastActivity: 22
    },
    {
        username: 'Bob',
        status: 'online',
        lastActivity: 104
    }
]
const onlineUsers = []
users.forEach(obj => obj.status === 'online' ? onlineUsers.push(obj) : false)

let usersOnlineNames = ''
onlineUsers.forEach(obj => usersOnlineNames += obj.username + ', ')

alert(`The following users are online now: ${usersOnlineNames.slice(0, -2)}`)