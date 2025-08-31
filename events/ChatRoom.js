const EventEmitter = require('events');

// ChatRoom class handles user actions and messaging
class ChatRoom extends EventEmitter {
  constructor() {
    super();
    this.users = new Set();     // Store users (unique)
    this.messages = [];         // Store message history
  }

  // Add a user to the chat room
  join(user)
   {
    if (this.users.has(user)) 
    {
      console.log(`${user} has already joined the chat.`);
    } 
    else
    {
      this.users.add(user);
      this.emit('join', user); // Trigger 'join' event
    }
   }

  // Remove a user from the chat room
  leave(user)
   {
    if (this.users.delete(user))
    {
      this.emit('leave', user); // Trigger 'leave' event
    } 
    else 
    {
      console.log(`User ${user} is not in the chat room.`);
    }
  }

  // Send a message from one user to another
  sendMessage(from, to, message) 
  {
    if (!this.users.has(from)) 
    {
      console.log(`${from} is not in the chat room.`);
      return;
    }

    if (!this.users.has(to)) 
    {
      console.log(`${to} is not in the chat room.`);
      return;
    }

    // Store message with timestamp
    this.messages.push({ from, to, message, time: new Date() });

    // Trigger 'sendMessage' event
    this.emit('sendMessage', { from, to, message });
  }

  // Send a message to all users except the sender
  broadcast(from, message) 
  {
    if (!this.users.has(from)) 
    {
      console.log(`${from} is not in the chat room.`);
      return;
    }

    for (const user of this.users) 
    {
      if (user !== from) 
      {
        this.messages.push({ from, to: user, message, time: new Date() });
        this.emit('sendMessage', { from, to: user, message });
      }
    }
  }

  // Get all messages sent in the chat room
  getHistory() 
  {
    return this.messages;
  }
  
}

module.exports=ChatRoom;