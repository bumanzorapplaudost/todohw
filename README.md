# TodoHomework

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.17. As a project for first one training in ApplaudoStudios

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

You can also run `ng serve --open` to directly open it in your default browser.

## HowTo

For this project is required Bootstrap, Popper.js and jQuery. For that, run `npm install bootstrap jquery popper.js`

After that you only need to add the modules to the `angular.json` file.

The styles and scripts should look like this: 

    `
    "styles": [
        "./node_modules/bootstrap/dist/css/bootstrap.css",
        "src/styles.css"
    ],
    "scripts": [
        "./node_modules/jquery/dist/jquery.js",
        "./node_modules/popper.js/dist/umd/popper.js",
        "./node_modules/bootstrap/dist/js/bootstrap.js"
    ]
    `

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
