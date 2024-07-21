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

To build an android app (.aab), run

```sh
eas build --platform android
```

## Build for lcoal android device (.apk)

To generate an .apk, modify the eas.json by adding one of the following properties in a build profile:

developmentClient to true (default)
distribution to internal
android.buildType to apk
android.gradleCommand to :app:assembleRelease, :app:assembleDebug or any other gradle command that produces .apk

After configuring run the below command to trigger the expo apk build

```sh
eas build -p android --profile preview
```

## Video


https://github.com/user-attachments/assets/a625566d-70a6-438f-b56b-3209643fac4a



https://github.com/user-attachments/assets/ddeb6217-aee2-443f-9745-e8a0a471c6dd

