import axios from "axios";
import Echo from "laravel-echo";
import { getSession } from "next-auth/react";

const broadcastAuthInstance = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_DATABASE_URL}/broadcasting`,
    headers: {
      'Content-Type': 'application/json','Accept': 'application/json'
    }
})

const EchoConfig = async () => {
  window.Pusher = require('pusher-js');
  const session = await getSession();
  // broadcastAuthInstance.defaults.headers.common['Authorization'] = `Bearer ${session.user.access_token}`;
  return new Echo({
  broadcaster: 'pusher',
  key: process.env.NEXT_PUBLIC_PUSHER_KEY,
  wsHost:"localhost",
  wsPort: 6001,
  forceTLS: false,
  disableStats: true,
   auth: {
      headers: {
        'Authorization': `Bearer ${session!.user.access_token}`,
      }
  },
  authEndpoint: `${process.env.NEXT_PUBLIC_DATABASE_URL}/api/broadcasting/auth`,
  }
)
}


export default EchoConfig
