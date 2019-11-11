# TodoHomework

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.17. As a project for first one training in ApplaudoStudios

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

You can also run `ng serve --open` to directly open it in your default browser.

## HowTo

For this project is required Bootstrap, Popper.js and jQuery. For that, run `npm install bootstrap jquery popper.js`

After that you only need to add the modules to the `angular.json` file.

The styles and scripts should look like this: 

    "styles": [
        "./node_modules/bootstrap/dist/css/bootstrap.css",
        "src/styles.css"
    ],
    "scripts": [
        "./node_modules/jquery/dist/jquery.js",
        "./node_modules/popper.js/dist/umd/popper.js",
        "./node_modules/bootstrap/dist/js/bootstrap.js"
    ]