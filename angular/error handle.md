In Angular, you can handle errors in various ways depending on the context and the type of error you encounter. Here are some common techniques for error handling in Angular:

1. Error Handling in HTTP Requests:
   When making HTTP requests using Angular's HttpClient module, you can handle errors using the `subscribe()` method's error callback. The `subscribe()` method accepts three callback functions: one for successful responses, one for errors, and one for completion.

   Example:

   ```typescript
   import { HttpClient, HttpErrorResponse } from '@angular/common/http';

   constructor(private http: HttpClient) {}

   fetchData() {
     this.http.get('/api/data').subscribe(
       (data) => {
         // Process successful response
       },
       (error: HttpErrorResponse) => {
         console.log('Error occurred:', error);
         // Handle the error here
       }
     );
   }
   ```

2. Error Handling in Template-driven Forms:
   In template-driven forms, you can handle validation errors using the `ngModel` directive and Angular's built-in form validation features. You can use directives like `ngModel`, `ngModelGroup`, and Angular's validation classes to check for form validity and display error messages.

   Example:

   ```html
   <form #myForm="ngForm">
     <label>Name:</label>
     <input type="text" name="name" [(ngModel)]="name" required>
     <div *ngIf="myForm.controls.name.invalid && myForm.controls.name.touched">
       Name is required.
     </div>

     <button type="submit">Submit</button>
   </form>
   ```

3. Global Error Handling with ErrorHandler:
   Angular provides an ErrorHandler class that you can extend to create a global error handler for your application. By overriding the `handleError()` method, you can catch and handle unhandled errors that occur in any part of your application.

   Example:

   ```typescript
   import { ErrorHandler, Injectable } from '@angular/core';

   @Injectable()
   export class GlobalErrorHandler implements ErrorHandler {
     handleError(error: any): void {
       // Handle the error here
       console.error('Global Error:', error);
     }
   }
   ```

   In your AppModule, you can provide the custom error handler:

   ```typescript
   import { NgModule, ErrorHandler } from '@angular/core';
   import { GlobalErrorHandler } from './global-error-handler';

   @NgModule({
     providers: [
       { provide: ErrorHandler, useClass: GlobalErrorHandler }
     ],
   })
   export class AppModule {}
   ```

These are just a few examples of how to handle errors in Angular. Depending on your application's requirements and architecture, you may need to employ additional error handling strategies, such as custom error services, custom error components, or error logging services. Always consider the context and the type of error when choosing the appropriate error handling approach for your Angular application.
