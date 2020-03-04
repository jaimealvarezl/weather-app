# WEATHER APP

This is a weather demo app built with ionic and angular

## Table of Contents
- [Configuration](#configuration)
- [Runnin](#running)


## <a name="configuration"></a>Configuration

To configure the project run the following commands:


```bash
# Clone the repo 
git clone https://github.com/jaimealv994/weather-app.git

# Change directory
cd weather-app

# Install project dependencies
npm run install
```

NOTE: before running modify the environment file in `src/environment/environemnt.ts` and change `openWeatherApiKey` with your **OPEN_WEATHER_MAP** key

## <a name="running"></a>Running


To launch the ionic server run `npm start` and open the browser with the following link http://localhost:8100

### Running on android

* sync the native project `ionic capacitor copy android`
* in android studio open the folder `weather-app/android` select a device and click run


### Running on ios

* open xcode `ionic capacitor open ios`
* sync the native project `ionic capacitor copy ios`
* In Xcode, select a target simulator or device and click the play button
