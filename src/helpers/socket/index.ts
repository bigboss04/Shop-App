import { io } from 'socket.io-client'

const connectSocketIO = () => {
  // NEXT_PUBLIC_API_HOST=http://localhost:3001
  const socket = io(process.env.NEXT_PUBLIC_API_HOST as string)

  return socket
}

export default connectSocketIO
