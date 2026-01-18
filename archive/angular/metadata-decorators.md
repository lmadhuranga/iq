Meta data - decorators in Angular, along with examples for each:

1. **@Component:**
As mentioned earlier, the `@Component` decorator is used to define and configure Angular components.

Example:

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  template: '<p>Hello, {{ name }}!</p>',
  styleUrls: ['./example.component.css'],
})
export class ExampleComponent {
  name: string = 'Angular Developer';
}
```

2. **@Directive:**
The `@Directive` decorator is used to define and configure custom directives in Angular.

Example:

```typescript
import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCustomDirective]',
})
export class CustomDirective {
  constructor(private el: ElementRef) {}

  @HostListener('mouseenter')
  onMouseEnter(): void {
    this.highlight('yellow');
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    this.highlight(null);
  }

  private highlight(color: string | null): void {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
```

3. **@Injectable:**
The `@Injectable` decorator is used to enable dependency injection for a class (typically used for services).

Example:

```typescript
import { Injectable } from '@angular/core';

@Injectable()
export class ExampleService {
  getData(): string {
    return 'Data from ExampleService';
  }
}
```

4. **@Input:**
The `@Input` decorator is used to mark a property of a component as an input property.

Example:

```typescript
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  template: '<p>{{ childProperty }}</p>',
})
export class ChildComponent {
  @Input() childProperty: string;
}
```

5. **@Output:**
The `@Output` decorator is used to mark a property of a component as an output property.

Example:

```typescript
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <button (click)="onButtonClick()">Click Me!</button>
  `,
})
export class ChildComponent {
  @Output() buttonClick: EventEmitter<string> = new EventEmitter();

  onButtonClick(): void {
    this.buttonClick.emit('Button Clicked!');
  }
}
```

6. **@ViewChild and @ViewChildren:**
The `@ViewChild` and `@ViewChildren` decorators are used to obtain references to elements or components inside the component's template.

Example:

```typescript
import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-example',
  template: `
    <input #inputField type="text" />
    <button (click)="focusInput()">Focus Input</button>
  `,
})
export class ExampleComponent {
  @ViewChild('inputField', { static: false }) inputField: ElementRef;

  focusInput(): void {
    this.inputField.nativeElement.focus();
  }
}
```

7. **@HostListener:**
The `@HostListener` decorator is used to listen to events on the host element of a component.

Example:

```typescript
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-example',
  template: '<button>Click Me!</button>',
})
export class ExampleComponent {
  @HostListener('click', ['$event'])
  onClick(event: MouseEvent): void {
    console.log('Button clicked!', event);
  }
}
```

8. **@HostBinding:**
The `@HostBinding` decorator is used to bind a property of the host element with a property in the component.

Example:

```typescript
import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-example',
  template: '<p>Hello, {{ name }}!</p>',
})
export class ExampleComponent {
  @HostBinding('style.color') textColor: string = 'red';
  name: string = 'Angular Developer';
}
```

9. **@Pipe:**
The `@Pipe` decorator is used to define and configure custom pipes in Angular.

Example:

```typescript
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize',
})
export class CapitalizePipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return '';

    return value.charAt(0).toUpperCase() + value.slice(1);
  }
}
```

10. **@NgModule:**
The `@NgModule` decorator is used to define and configure Angular modules.

Example:

```typescript
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExampleComponent } from './example.component';
import { ExampleDirective } from './example.directive';
import { ExamplePipe } from './example.pipe';

@NgModule({
  declarations: [ExampleComponent, ExampleDirective, ExamplePipe],
  imports: [CommonModule],
  exports: [ExampleComponent, ExampleDirective, ExamplePipe],
})
export class ExampleModule {}
```

These are some of the core decorators in Angular, each with its specific use case and benefits in building Angular applications.
