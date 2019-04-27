require('dotenv').config();
const server = require('./server');
const PORT = process.env.PORT || 5555;

server.listen(PORT, () => {
    console.log(`Listening to localhost: ${PORT}`);
});


