const express = require('express');

const PORT = 3000;

const app = express();

/******************GLOBAL ERROR HANDLER********************************** */
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Error with express middleware',
    status: 500,
    message: { err: 'An error has occured' },
  };

  const customErr = Object.assign(defaultErr, err);

  //display error in server
  console.log(customErr.log);
  //send the error message to the client
  return res.status(customErr.status).json(customErr.message);
});

app.listen(PORT, () => {
  console.log(`app is listening on port ${PORT}`);
});
