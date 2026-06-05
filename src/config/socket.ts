import { io } from 'socket.io-client'


export const socket = io('http://localhost:3001', {
    autoConnect: false,
    withCredentials: true,
})


export function sendMessage(roomId: string, text: string) {
    console.log(roomId, text)
    socket.emit("send_message", { roomId, messageText: text })
}