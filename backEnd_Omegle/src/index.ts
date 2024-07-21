const express = require('express');
import { createServer } from 'node:http';
import { join } from 'node:path';
import { Server } from 'socket.io';

const app = express();
const io = new Server(app);

app.get('/', (req, res) => {
  res.sendFile(join(__dirname, 'index.html'));
});

io.on('connection', (socket) => {
  console.log('a user connected');
});

app.listen(3000, () => {
  console.log('server running at http://localhost:3000');
});