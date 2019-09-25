# React Design Match

By [Justin Shaw](mailto:easyworkemail@gmail.com)

[github.com/justineshaw](https://github.com/justineshaw)

## Instructions

1. Navigate to [repo](https://github.com/justineshaw/react-design-copycat)
2. Clone locally using
   `git clone https://github.com/justineshaw/react-design-copycat`
3. Install dependencies by using `npm install`
4. Start app using `npm start`
5. Navigate to app in [browser](http://localhost:3000/)
6. Have fun!

## Discussion

I used the following technologies and libraries: React, Material-UI, Axios, and React Alert.

I used [create-react-app](https://github.com/facebook/create-react-app) 
to generate the scaffolding for the app front-end.

## Requirements Met

#### Use the images in the assets folder to design your react app exactly the same

I used `React` and `Material-UI` to create an app that displays a login page and a drawer.

#### The form inside of your app should work and when the save button is pressed the data should be sent to the API

I used `Axios` to send a `POST` request of `Form Data` type to the C/+/T API to create a new user with `user_name`, `user_email`, `user_phone`, and `pairing` data.

## And Then Some!

#### Error Handling

I used [React Alert](https://www.npmjs.com/package/react-alert) to provide user feedback when submitting the form to create a user. For example, the user sees a success message if they successfully created a user. Similarly, the user sees an api-generated error message if user creation was unsuccessful.
