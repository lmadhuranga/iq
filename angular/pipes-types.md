Sure, here are some examples of pure pipes in Angular:

1. DatePipe (Built-in Pure Pipe):
   The DatePipe is a built-in pure pipe that formats dates into various date formats.

   ```html
   <!-- Using DatePipe to format the current date -->
   {{ currentDate | date: 'dd/MM/yyyy' }}
   ```

2. UpperCasePipe (Built-in Pure Pipe):
   The UpperCasePipe is a built-in pure pipe that converts a string to uppercase.

   ```html
   <!-- Using UpperCasePipe to convert a string to uppercase -->
   {{ 'hello world' | uppercase }}
   ```

3. Custom Pure Pipe:
   Here's an example of a custom pure pipe that multiplies a given value by a factor:

   ```typescript
   import { Pipe, PipeTransform } from '@angular/core';

   @Pipe({ name: 'multiply' })
   export class MultiplyPipe implements PipeTransform {
     transform(value: number, factor: number): number {
       return value * factor;
     }
   }
   ```

   ```html
   <!-- Using the custom pure pipe to multiply a number by a factor -->
   {{ 5 | multiply: 3 }} <!-- Output: 15 -->
   ```

4. SlicePipe (Built-in Pure Pipe):
   The SlicePipe is a built-in pure pipe that extracts a portion of an array or string.

   ```typescript
   fruits = ['apple', 'banana', 'orange', 'grape', 'mango'];
   ```

   ```html
   <!-- Using SlicePipe to extract a portion of an array -->
   {{ fruits | slice: 1:3 }} <!-- Output: banana, orange -->
   ```

5. CurrencyPipe (Built-in Pure Pipe):
   The CurrencyPipe is a built-in pure pipe that formats numbers into currency strings based on the locale.

   ```html
   <!-- Using CurrencyPipe to format a number into currency -->
   {{ price | currency: 'USD': true }} <!-- Output: $10.00 -->
   ```

Pure pipes are stateless and only execute their `transform` method when their input values change. This makes them efficient for scenarios where the data is not frequently changing, as they avoid unnecessary recalculations and improve performance.

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Sure, here are some examples of impure pipes in Angular:

1. AsyncPipe (Built-in Impure Pipe):
   The AsyncPipe is a built-in impure pipe that subscribes to an Observable or Promise and automatically handles the subscription and unsubscription.

   ```typescript
   import { Component } from '@angular/core';
   import { Observable, of } from 'rxjs';

   @Component({
     selector: 'app-example',
     template: `
       <div>{{ data$ | async }}</div>
     `,
   })
   export class ExampleComponent {
     data$: Observable<number> = of(42); // Some Observable emitting data
   }
   ```

2. Custom Impure Pipe:
   Here's an example of a custom impure pipe that generates a random number every time the view is re-rendered:

   ```typescript
   import { Pipe, PipeTransform } from '@angular/core';

   @Pipe({ name: 'randomNumber', pure: false }) // Marking the pipe as impure
   export class RandomNumberPipe implements PipeTransform {
     transform(): number {
       return Math.random();
     }
   }
   ```

   ```html
   <!-- Using the custom impure pipe to generate a random number -->
   {{ randomNumber | randomNumber }} <!-- Output: A random number on every change detection cycle -->
   ```

3. Custom Impure Pipe with External Dependency:
   An impure pipe can use external dependencies that change over time. For example, a pipe that depends on the current time:

   ```typescript
   import { Pipe, PipeTransform } from '@angular/core';

   @Pipe({ name: 'currentTime', pure: false }) // Marking the pipe as impure
   export class CurrentTimePipe implements PipeTransform {
     transform(): string {
       return new Date().toLocaleTimeString();
     }
   }
   ```

   ```html
   <!-- Using the custom impure pipe to display the current time -->
   {{ 'Current Time: ' + (null | currentTime) }} <!-- Output: Current Time: 10:15:30 AM (changes on each change detection cycle) -->
   ```

Impure pipes are used when you have side effects or calculations that depend on the current state of the application or external factors. However, they should be used with caution, as they may lead to unnecessary recalculations and impact application performance if overused. It's essential to evaluate the necessity of using an impure pipe in each specific scenario to avoid performance issues.
