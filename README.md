# OpenJobApp

Sunny's OpenJob app mvp. [His boring Trello Board](https://trello.com/b/PKTQFUBw/prototype-sunny)

## Plan/Todo

### Core features

- Sign In/Sign UP
- Language Selection
- Role Selection(Applicant(Call it 'A' )/Recruiter(Call it 'R'))
- A/R profile fill up page
- View Jobs(for A)
- Create job posts (for R)
- View Applicants (for R)

### hamburger/side menu view

- Account
- Posts (R) (Create/View)
- Applicants (R)
- Jobs Applied (A) (View)
- Help section (To help users with app and FAQs)
- Settings (Dark mode/ Language/ Accessibility tools)

## Initial setup

To start a new Expo project,I used below steps. Only for reference.

- Run `expo init` in terminal
- Select blank template
- Named it as "OpenJobApp"

## Development setup

- Using VSCode for development
- Explo CLI for React Native.
- Clone the repository
- Make sure you are inside the cloned folder
- Open terminal in VSCode and type `expo start` or `npm start`
- `http://localhost:19002/` to open metro bundler.
- Select the target platform in the metro bundler

## Libraries

- https://reactnavigation.org/docs/hello-react-navigation `npm install @react-navigation/stack` `npm install @react-navigation/native`
  `expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view`
  - `npm install @react-navigation/drawer` for drawyer

## Testing

- Android Virtual Device Manager( Virtual Device )

```
CPU/ABI: Google Play Intel Atom (x86)
Target: google_apis_playstore [Google Play] (API level 29)
hw.device.name: pixel_2
hw.ramSize: 1536
```

- Physical device with Expo Android App.
- Chrome browser

## Unit Testing & CI

- [ ] Unit Tests
- [x] CI on GitHub Actions

## Torubleshooting

- If some package error try `npm install ` in project folder. Make sure you close all other terminals.
- Android Emulator: Either hit Cmd+M, or run adb shell input keyevent 82 in your terminal window.
- Clearing the cache ,run: expo r -c
- shift + r in your console to clean cache and reload app.
- deleting .expo folder is a workaround
- Make sure you run `npm install` and then `npm start`
- Jumping from SDK38 to 39 in expo.
- emulator issues https://stackoverflow.com/questions/52751874/expo-run-on-android-emulator-using-windows-10
- emulator issues https://developer.android.com/studio/intro/update
- make sure to update emulator and platform tools

## Contribution

You are welcome to contribute and give feedback on our Gitter channel.
