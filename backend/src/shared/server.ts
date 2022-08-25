import app from './app';

const serverPort = 3333;

app.listen(serverPort, () => {
  console.log(`Server up on port ${serverPort}`);
});
