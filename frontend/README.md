# ServiceSpin Frontend

## Description

The frontend of ServiceSpin is built using React Native with Expo, providing an intuitive and responsive user interface for both iOS and Android platforms.

## Prerequisites

- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later)
- Expo CLI
- Expo Go app on your iOS or Android device (for testing on physical devices)

## Installation

To set up the frontend development environment, follow these steps:

1. Navigate to the frontend directory:

   ```
   cd frontend
   ```

2. Install the dependencies:
   ```
   npm install
   ```

## Running the App

To start the Expo development server (make sure you are in the frontend directory!):

```
npm start
```

This will start the Metro bundler and display a QR code in your terminal.

### Running on a simulator/emulator:

- For iOS Simulator: Press `i` in the terminal or CLI
- For Android Emulator: Press `a` in the terminal or CLI

### Running on a physical device:

1. Install the Expo Go app on your iOS or Android device
2. Scan the QR code displayed in the terminal with your device's camera (iOS) or the Expo Go app (Android)

### Running on web:

To run the app in a web browser:

```
npm run web
```

Usage:

- `npm start` to start the Expo development server
- `npm run android` to run on Android device/emulator
- `npm run ios` to run on iOS simulator
- `npm run web` to run in a web browser

## Troubleshooting

If you encounter any issues:

1. Ensure all dependencies are correctly installed
2. Clear the Expo cache:
   ```
   expo r -c
   ```
3. Verify that your Expo CLI is up to date:
   ```
   npm install -g expo-cli
   ```
4. Check Expo's status page for any ongoing issues: https://status.expo.dev/

## Additional Resources

- [Expo Documentation](https://docs.expo.dev/)
- [React Native Documentation](https://reactnative.dev/docs/getting-started)
- [React Navigation](https://reactnavigation.org/) for routing and navigation
