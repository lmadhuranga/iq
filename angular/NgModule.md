Sure! Let's create a simple example to demonstrate how to use `NgModule` in Angular.

Suppose we have two components, `AppComponent` and `HeaderComponent`, and we want to organize them into separate modules. We'll create two modules: `AppModule` and `HeaderModule`, and then import `HeaderModule` into `AppModule`.

Step 1: Create the `HeaderComponent`:

Create a file named `header.component.ts`:

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: '<h1>Header Component</h1>',
})
export class HeaderComponent {}
```

Step 2: Create the `HeaderModule`:

Create a file named `header.module.ts`:

```typescript
import { NgModule } from '@angular/core';
import { HeaderComponent } from './header.component';

@NgModule({
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
})
export class HeaderModule {}
```

Step 3: Create the `AppComponent`:

Create a file named `app.component.ts`:

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<h2>App Component</h2><app-header></app-header>',
})
export class AppComponent {}
```

Step 4: Create the `AppModule`:

Create a file named `app.module.ts`:

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderModule } from './header/header.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HeaderModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

Step 5: Set up the main application file:

Create a file named `main.ts`:

```typescript
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule);
```

In this example, we have created a `HeaderComponent` and a `HeaderModule` to encapsulate it. The `HeaderModule` exports the `HeaderComponent`, making it available to other modules. The `AppModule` then imports the `HeaderModule` and uses the `HeaderComponent` within the `AppComponent`.

By using `NgModule`, we can keep our code organized, promote reusability, and manage dependencies effectively in Angular applications.
