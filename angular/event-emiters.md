Data binding in Angular is a way to establish a connection between the component's data (in the TypeScript code) and the template (HTML code). There are three types of data binding in Angular: Interpolation, Property binding, and Event binding. Let's explain each of them with examples:

1. Interpolation (One-Way Data Binding):

Interpolation is a one-way data binding technique that allows you to display component properties in the template. It uses double curly braces `{{ }}` to evaluate expressions and display the result in the HTML.

Example:
Let's say we have a component with the following TypeScript code:

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  template: `
    <h2>Hello, {{ name }}!</h2>
  `,
})
export class InterpolationComponent {
  name: string = 'John';
}
```

In the template (`app-interpolation.component.html`), we use interpolation to display the `name` property:

```html
<h2>Hello, {{ name }}!</h2>
```

When the component is rendered, the `name` property will be replaced with its value ('John'), and the output will be:

```
Hello, John!
```

2. Property Binding (One-Way Data Binding):

Property binding is another form of one-way data binding that allows you to set the property of an HTML element based on a component's property. It uses square brackets `[]` to bind the component property to the HTML element property.

Example:
Let's assume we have a component with the following TypeScript code:

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  template: `
    <button [disabled]="isDisabled">Click me!</button>
  `,
})
export class PropertyBindingComponent {
  isDisabled: boolean = true;
}
```

In the template (`app-property-binding.component.html`), we use property binding to disable the button based on the `isDisabled` property:

```html
<button [disabled]="isDisabled">Click me!</button>
```

When the component is rendered, the button will be disabled because the `isDisabled` property is set to `true`.

3. Event Binding (One-Way Data Binding):

Event binding is one-way data binding that allows you to respond to events (e.g., button clicks, mouse events) in the template by invoking methods in the component. It uses parentheses `()` to bind the event to the component method.

Example:
Let's assume we have a component with the following TypeScript code:

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  template: `
    <button (click)="onButtonClick()">Click me!</button>
    <p>{{ message }}</p>
  `,
})
export class EventBindingComponent {
  message: string = '';

  onButtonClick() {
    this.message = 'Button clicked!';
  }
}
```

In the template (`app-event-binding.component.html`), we use event binding to respond to the button click event:

```html
<button (click)="onButtonClick()">Click me!</button>
<p>{{ message }}</p>
```

When the button is clicked, the `onButtonClick()` method in the component is invoked, which updates the `message` property with the text 'Button clicked!'. The updated `message` property is then displayed in the paragraph (`<p>`) element.

These are the three types of data binding in Angular, allowing you to create dynamic and interactive user interfaces by connecting your component's data with the template.
