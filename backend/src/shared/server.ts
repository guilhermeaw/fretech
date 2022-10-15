import app from './app';

const serverPort = process.env.API_PORT || 3333;

app.listen(serverPort, () => {
  console.log(`Server up on port ${serverPort}`);
});
