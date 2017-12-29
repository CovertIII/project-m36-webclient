This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

This is a small experiment to learn about project m36.

Right now the websocket connection is hard coded to `wss://try.project-m36.io/ws/`;

The websocket connection does drop a lot.  Right now you have to
refresh the page to reconnect.

Each websocket connection gets it's own instance of the database
to modify - once the connection is dropped and a new one
established, the data from the old connection is gone.

You can see project here:

https://covertiii.github.io/project-m36-webclient/

I'm trying to experiment with this - but the console can take one
thing at a time;
https://github.com/agentm/project-m36/blob/07b9e1f8277f0af4f05a5e3f69e066e69efb53e1/examples/out_of_the_tarpit.tutd

