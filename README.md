# Prerequisites
-[node.js](https://nodejs.org/en/) >= v10
- [npm](https://www.npmjs.com/package/npm?activeTab=versions) >= 6.14.0

# Installation

Angular can be installed in 2 ways:
Globally using the following command:
- `npm install -g @angular/cli` - latest version
or
- `npm install -g @angular/cli@12.0.0` - specific version

Locally by creating a new root folder where the project will be created and run the following command:
- `npm install  @angular/cli` 
or
- using npx command (comes with npm 5.2+)(https://www.npmjs.com/package/npx)
 - npx is a tool for running npm packages that:
   - live inside of a local node_modules folder or
   - are not installed globally.
- `npx -p @angular/cli ng new {project_name}`
- `npx ng generate component {component-name}`
# SocialMedia

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.0.0.

## Development server

Run `npm start` for a dev server. The application will open at `http://localhost:4300/`. Port has been changed to avoid conflict when running. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
