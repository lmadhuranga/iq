In Angular, directives are an essential part of the framework that allow you to extend HTML with custom behaviors and functionality. Directives can be classified into three main types:

1. Component Directives:
   Components are directives with an associated template that define a custom UI element. They encapsulate the template, styles, and behavior of a specific part of the user interface.

   Example:

   ```typescript
   import { Component } from '@angular/core';

   @Component({
     selector: 'app-custom-component',
     template: '<h1>Hello, {{ name }}!</h1>',
     styleUrls: ['./custom-component.component.css']
   })
   export class CustomComponent {
     name = 'John';
   }
   ```

   In this example, we define a custom component directive using the `@Component` decorator. The `selector` specifies the custom HTML tag name used to include this component in other templates.

2. Attribute Directives:
   Attribute directives modify the behavior or appearance of an existing DOM element by applying custom behavior to it.

   Example:

   ```typescript
   import { Directive, ElementRef, Renderer2 } from '@angular/core';

   @Directive({
     selector: '[appHighlight]'
   })
   export class HighlightDirective {
     constructor(private elementRef: ElementRef, private renderer: Renderer2) {
       this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'yellow');
     }
   }
   ```

   In this example, we define a custom attribute directive using the `@Directive` decorator. The `selector` specifies the attribute name that triggers this directive. When the `appHighlight` attribute is added to an element, the `HighlightDirective` sets the background color of that element to yellow.

3. Structural Directives:
   Structural directives modify the DOM layout by adding or removing elements based on certain conditions.

   Example:

   ```html
   <div *ngIf="showContent">
     This content will only be shown when showContent is true.
   </div>
   ```

   In this example, we use the `*ngIf` structural directive to conditionally render the `<div>` element based on the value of the `showContent` variable. If `showContent` is true, the content inside the `<div>` will be displayed; otherwise, it will be removed from the DOM.

Angular provides built-in directives like `ngIf`, `ngFor`, and `ngSwitch` for common use cases. Additionally, you can create your own custom attribute and structural directives to suit the specific needs of your application. Directives play a crucial role in extending Angular's capabilities and enabling the creation of dynamic and interactive web applications.
