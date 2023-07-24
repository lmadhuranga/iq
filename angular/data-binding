In Angular, there are four main types of data binding, each serving a different purpose in connecting data between the component class and the template:

1. **Interpolation (One-Way):**
Interpolation is a one-way data binding technique that allows you to display the value of a component's property in the template. It uses double curly braces `{{ }}` to bind the property value. Interpolation only allows data to flow from the component to the template, not the other way around.

Example:

Component Class:
```typescript
export class AppComponent {
  name: string = 'John Doe';
}
```

Template:
```html
<p>Hello, {{ name }}!</p>
```

Output:
```
Hello, John Doe!
```

2. **Property Binding (One-Way):**
Property binding is another form of one-way data binding that allows you to set the value of an HTML element's property or attribute using a component property. It is denoted by square brackets `[ ]`.

Example:

Component Class:
```typescript
export class AppComponent {
  imageUrl: string = 'example.jpg';
}
```

Template:
```html
<img [src]="imageUrl" alt="Example Image">
```

Output:
```html
<img src="example.jpg" alt="Example Image">
```

3. **Event Binding (One-Way):**
Event binding allows you to respond to events triggered by the user (e.g., click, input, mouseover) and call methods in the component class. It is denoted by parentheses `( )`.

Example:

Component Class:
```typescript
export class AppComponent {
  buttonClicked(): void {
    console.log('Button clicked!');
  }
}
```

Template:
```html
<button (click)="buttonClicked()">Click Me!</button>
```

Output (In the console when the button is clicked):
```
Button clicked!
```

4. **Two-Way Binding:**
Two-way data binding is a combination of property binding and event binding. It allows you to keep the values of an input field and a component property in sync. It is denoted by `[(ngModel)]` using the `FormsModule` provided by Angular.

Example:

Module:
```typescript
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [FormsModule],
})
export class AppModule {}
```

Component Class:
```typescript
export class AppComponent {
  name: string = 'John Doe';
}
```

Template:
```html
<input [(ngModel)]="name" placeholder="Enter your name">
<p>Your name is: {{ name }}</p>
```

Output:
```
Input: (User types "Jane Smith" into the input field)
Your name is: Jane Smith
```

With two-way binding, any changes made in the input field are immediately reflected in the component's property, and vice versa.

These are the main types of data binding in Angular, allowing you to establish communication and synchronization between the component class and the template, creating dynamic and interactive web applications.


  Sure, here's an example page that demonstrates the different types of data binding in Angular:

1. **app.component.ts (Component Class):**
```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Angular Data Binding Example</h1>
    
    <!-- Interpolation (One-Way) -->
    <p>Hello, {{ name }}!</p>

    <!-- Property Binding (One-Way) -->
    <img [src]="imageUrl" alt="Example Image">

    <!-- Event Binding (One-Way) -->
    <button (click)="buttonClicked()">Click Me!</button>

    <!-- Two-Way Binding -->
    <input [(ngModel)]="name" placeholder="Enter your name">
    <p>Your name is: {{ name }}</p>
  `,
})
export class AppComponent {
  name: string = 'John Doe';
  imageUrl: string = 'https://via.placeholder.com/150';
  
  buttonClicked(): void {
    console.log('Button clicked!');
  }
}
```

2. **app.module.ts (Module):**
```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

3. **index.html (Main HTML File):**
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Angular Data Binding Example</title>
</head>
<body>
  <app-root></app-root>
</body>
</html>
```

This example demonstrates the use of interpolation, property binding, event binding, and two-way binding. When you run the application, you will see a page displaying the following:

```
Angular Data Binding Example

Hello, John Doe!

[Example Image]

Click Me!

[Input Field]
Your name is: John Doe
```

1. The `Hello, John Doe!` text is rendered using interpolation, displaying the value of the `name` property in the component class.
2. The `<img>` tag uses property binding to set the `src` attribute to the value of the `imageUrl` property in the component class.
3. The `Click Me!` button uses event binding to call the `buttonClicked()` method in the component class when clicked, which logs a message in the console.
4. The `<input>` field uses two-way binding with `[(ngModel)]="name"`, keeping the value of the input field and the `name` property in the component class in sync. The entered name is displayed below the input field.
