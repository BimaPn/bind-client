import Echo from "laravel-echo";
import Pusher from "pusher-js/types/src/core/pusher";

export {};

declare global {
  interface Window {
    Pusher: Pusher;
    Echo: Echo
  }
}
