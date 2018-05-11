# DrumMachine

## A website made using angular and multiple components.
## By Brea Borlas

Check it out at https://breatortilla.github.io/drum-machine/ or https://drum-mach.firebaseapp.com/

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.5.

## Setup/Installation Requirements

1. Clone this repository
2. Navigate into the local repository folder
3. Create a firebase database
4. In the firebase console, click "Add firebase to your web app"
5. In src/app/ create an api-keys.ts file, with the code:
  export var masterFirebaseConfig = { }
6. In the curly braces, place the information in curly braces from your firebase console
7. Run npm install
8. Run ng serve --open to open in a browser

## Known Bugs
* If you are at a high bpm and click a lot of buttons quickly, the app can take a second to catch up

## Technologies Used
* HTML
* CSS
* Javascript
* Angular

## User Stories
| Number | User Story | Completed |
| :-------------  | :------------- | :-------------|
| 1 | As a user, I can see the sounds available to add to the beat. | X |
| 2 | As a user, I can add a sound to the beat at a certain point (between 1 and 16). | X |
| 3 | As a user, I can take remove a beat from a certain point (between 1 and 16). | X |
| 4 | As a user, I can play the beat I've created. | X |
| 5 | As a user, I can stop the beat. | X |
| 6 | As a user, I can save my beat. | X |
| 7 | As a user, I can play my saved beat. | X |
| 8 | As a user, I can change drum kits. | X |

## Components
| Number | Component |
| :-------------  | :------------- |
| 1 | Show sound switches (list-beat-intervals)|
| 2 | Edit sound on beat (edit-sound)|
| 3 | Play, stop, speed up beat (manipulate-beat)|
| 4 | Save beat (save-beat)|
| 5 | Show saved beat (list-stored-beats)|
| 6 | Play saved beat (load-saved-beat)|
| 7 | Change drum kit (change-kit)|

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Support and contact details

_Email me at breatortilla@gmail.com for support_

### License

Copyright (c) 2018 **_{Brea Borlas}_**
