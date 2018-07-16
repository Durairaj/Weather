# Weather

Detailed Weather Information
![Detailed Weather Information](https://github.com/Durairaj/openWeatherReact/blob/master/DetailedInformation.png)


Basic weather Information
![Basic Weather Information](https://github.com/Durairaj/openWeatherReact/blob/master/BasicInformation.png)

Unit Display settings configuration
![Unit Display Settings](https://github.com/Durairaj/openWeatherReact/blob/master/UnitDisplaySettings.png)

# Quick start

Clone this repo using git clone https://github.com/Durairaj/openWeatherReact.git

Move to the appropriate directory: cd openWeatherReact

To install it you need to run: `yarn install`

To execute the server, simply run `yarn run server`

To execute the client, simply run `yarn start`

To execute both the client and server in single script, simply run `yarn run dev`

There will be two available apis at the following addresses:

http://localhost:8081/api/weather0.json
http://localhost:8081/api/weather1.json

Tech Stack Used

1. React
2. Redux
3. Material-ui


Patterns Used
1.Container components to interact with the store
2.Render Prop for code reuse between components to load basic and detailed weather

styling 

1. Material-ui Jss styles

Local storage

1. Temperature Unit settings are persisted using redux-persist. It defaults to localStorage for web and AsyncStorage for react-native
2. This is implemented to avoid user change the settings to view the desired scale of units.

Open Weather API icons

1. Icon for the detailed weather information is loaded by using icon code on the openweather API platform


TODO

1. Tests needs to be added
 
