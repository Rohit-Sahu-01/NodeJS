const ChatRoom=require('./ChatRoom.js')

// Create a new chat room instance
const chat = new ChatRoom();

// Set up event listeners for logging

chat.on('join', (user) => {
  console.log(`${user} joined the chat room.`);
});

chat.on('leave', (user) => {
  console.log(`${user} left the chat room.`);
});

chat.on('sendMessage', ({ from, to, message }) => {
  console.log(`${from} to ${to}: "${message}"`);
});

// Simulate chat usage

chat.join('Rohit');
chat.join('Alice');
chat.join('Rohit'); // Already joined

chat.sendMessage('Rohit', 'Alice', 'Hey Alice!');
chat.sendMessage('Alice', 'Rohit', 'Hey Rohit!');
chat.sendMessage('Bob', 'Alice', 'Hello?'); // Invalid sender

chat.broadcast('Rohit', 'Good morning everyone!');

chat.leave('Alice');
chat.sendMessage('Alice', 'Rohit', 'You there?'); // Alice has left

// Print the chat history
console.log('\nChat History:');
chat.getHistory().forEach((msg, index) => 
    {
    console.log(
    `${index + 1}. [${msg.time.toLocaleTimeString()}] ${msg.from} to ${msg.to}: "${msg.message}"`
    );
    }
);
