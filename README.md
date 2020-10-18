# Saas Frontend

# Overview

This application is a [Vue 3](https://vuejs.org/) front end that uses a [Larvel backend](https://github.com/Leping08/saas-template-back-end).


# Project setup
```
git clone https://github.com/Leping08/saas-template-front-end
```

### Install dependencies
```
npm install
```

### Env
```
Duplicate .env.example to .env.local and set the stripe public key if payment processing is being utilized.
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Run your end-to-end tests
```
npm run test:e2e
```

### Lints and fixes files
```
npm run lint
```

# Details

### Auth

The authencation is a cookie basied authencation handeled on the backend using [Laravel Sanctum](https://laravel.com/docs/master/sanctum)

### Login

The user name and password will be sent to the public `/login` endpoint. If successful the `laravel_session` cookie will be set in the browser and the user object will be set in [Vuex](https://vuex.vuejs.org/). After that the login component will redirect the user to the dashboard. If the login request fails the errors will be displayed in the login component.

### Logout

When logging out the Vuex user object will be cleared and the Laravel Sanctum cookie will be deleted.

### App Initialization

When the vue app is initialized the system will check if the browser has a `laravel_session` cookie. If so that will be used when requesting the `/api/user` endpoint to determine the user. If the user is sent back, vuex will store the user object and that is what the vue app uses to determine is the user is logged. If the `laravel_session` cookie is not set when the app is initialized the app will check if the route requires auth and if so it will redirect to the login page.

### SignUp

The sign up page uses [Stripe.js](https://stripe.com/docs/js) to handel credit card info and send it back to the Laravel backend. The products are also populated from the backend and can have monthly and yearly subscriptions.

### Components

The theme is based on [Tailwind UI](https://tailwindui.com/) and currently has the following features as Vue 3 components.

- Accordion
- Avatar
- Badge
- Breadcrumbs
- Button
- Card
- Charts using [ApexCharts](https://apexcharts.com/)
- Countdown Timer
- Credit Card Input using [Stripe.js](https://stripe.com/docs/js)
- DataTable
- Description List
- Dropdown
- Flash Messages
- Modal
- Progress Bar
- Loading Spinner
- Search Select
- Toggle
- Tooltip

All components use a Vuex theme object that interacts with [Tailwind CSS colors](https://tailwindcss.com/docs/background-color).

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
