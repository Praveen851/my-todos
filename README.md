### My-todos


## Installation Instructions

Install node version v20.15.1

Install expo

```sh
npm install -g expo-cli
```

## Steps to run the project

Clone the repository

```sh
cd my-todos
```

Install dependecies

```sh
npm install
```

Open android emulator

Run the following command to run the app

```sh
npm run andriod
```
## Build process

Install eas 

```sh
sudo npm install -g eas-cli
```
Login to eas

```sh
eas login
```
Enter you expo credentials

```sh
eas build:configure
```

To build an android apk, run

```sh
eas build --platform android
```
