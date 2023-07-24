In Angular, pipes are a feature that allows you to transform data in your templates before displaying it to the user. Pipes are used to format, filter, and manipulate data in a declarative way, making it easier to present the data in a user-friendly manner. Angular provides several built-in pipes, and you can also create your own custom pipes.

Built-in Angular Pipes:
1. DatePipe: Formats dates into various date formats.
   Example: `{{ currentDate | date: 'dd/MM/yyyy' }}`

2. CurrencyPipe: Formats numbers into currency strings based on the locale.
   Example: `{{ price | currency: 'USD': true }}`

3. DecimalPipe: Formats numbers into decimal strings.
   Example: `{{ numberValue | number: '1.2-2' }}`

4. PercentPipe: Formats numbers into percentage strings.
   Example: `{{ percentValue | percent }}`

5. LowerCasePipe: Converts a string to lowercase.
   Example: `{{ 'Hello World' | lowercase }}`

6. UpperCasePipe: Converts a string to uppercase.
   Example: `{{ 'Hello World' | uppercase }}`

7. SlicePipe: Extracts a portion of an array or string.
   Example: `{{ arrayData | slice: 0:3 }}`

8. AsyncPipe: Subscribes to an observable and automatically handles the data flow.
   Example: `{{ observableData | async }}`

Custom Pipes:
You can also create your own custom pipes to perform specific transformations that are not covered by the built-in pipes. To create a custom pipe, you need to implement the `PipeTransform` interface and define a `transform` method that takes an input value and optional parameters, and returns the transformed output.

Example of a Custom Pipe:

```typescript
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'myCustomPipe' })
export class MyCustomPipe implements PipeTransform {
  transform(value: any, param1: any, param2: any): any {
    // Custom transformation logic here based on input value and parameters
    // Return the transformed output
    return transformedValue;
  }
}
```

Usage of Custom Pipe:

```html
<!-- Using the custom pipe in the template -->
{{ inputData | myCustomPipe: param1: param2 }}
```

Angular pipes are a powerful tool to enhance the presentation of data in your application and can be used with ease in the template syntax to format data before rendering it to the user.
