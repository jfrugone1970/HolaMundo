# HolaMundo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

In this project too using Pipe Angular to represent data, This use Pipe's date like {{ dob | date: 'dd/MM/yyyy' }
<p> Mi fecha de nacimiento es {{ dob | date: 'shortDate' }}

Too use Person's Pipe like: multiplica.pipe.ts.


import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multiplica'
})
export class MultiplicaPipe implements PipeTransform {

  transform(value: any, args: any): any {

    let x: any = parseFloat(args)
    return value * x;
  }

}

Too is use other structure pipe person and the name like "Tanto Por Ciento"

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tantoPorCiento'
})
export class TantoPorCientoPipe implements PipeTransform {

  transform(value: any, args: any): any {

    let x: any = args / 100;

    return value * x;
  }

}

Other Pipe structure use is called "MediaPipe", and your code of struture is:

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'media'
})
export class MediaPipe implements PipeTransform {




  transform(value: any, ...args: any[]): any {

    let acsuma: any = 0;
    let contador: any = 1;

    value.array.forEach((dato: any) => {

      acsuma += dato;
      contador += 1;

    });



    return acsuma / contador;
  }

}

There three structure pipe are of the most commonly structure in my project of Angular.








































