# PupBook

A React Native mobile application built with Expo that displays a collection of dog profiles. Users can view a list of dogs and tap on individual cards to see detailed information about each pet.

## Features

- Grid layout displaying dog cards
- Individual detailed profile pages for each dog
- Type-safe routing using Expo Router
- Clean, modern UI with card-based design

## Prerequisites

- Node.js (v14 or newer)
- npm or yarn
- Expo CLI (`npm install -g expo-cli`)
- iOS Simulator (for Mac users) or Android Studio (for Android development)
- Expo Go app on your physical device (optional, for testing)

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd pupBook
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npx expo start
```

4. Run the app:
- Press `i` to open in iOS simulator
- Press `a` to open in Android emulator
- Scan the QR code with Expo Go (iOS) or Camera app (Android)

## Project Structure

```
pupBook/
├── app/                    # Main application directory
│   ├── _layout.tsx        # Root layout with navigation configuration
│   ├── index.tsx          # Entry point (redirects to dogs list)
│   ├── dogsList.tsx       # Main screen with grid of dog cards
│   ├── dog/
│   │   └── [id].tsx      # Dynamic route for individual dog profiles
│   ├── data/
│   │   └── dogs.ts       # Dogs data and types
│   └── hooks/
│       └── useDogs.ts     # Custom hook for dog data management
├── package.json
└── README.md
```

## Tech Stack

- React Native
- Expo
- TypeScript
- Expo Router (for navigation)

## Data Structure

Each dog in the application has the following properties:

```typescript
interface Dog {
  id: number;
  name: string;
  breed: string[];
  activityLevel: number;
  neuteredStatus: boolean;
}
```

## Available Scripts

- `npx expo start` - Start the development server
- `npm run ios` - Start the app in iOS simulator
- `npm run android` - Start the app in Android emulator
- `npm run web` - Start the app in web browser

## Notes

- `assets` directory is unused and legacy from `create-expo-app`, however has been left in place to be used for potential future iteration

## License

This project is licensed under the MIT License - see the LICENSE file for details.
