# 🔹 Angular Basics – Answers

### 1. What is Angular?

Angular is a **TypeScript-based front-end framework** developed by Google to build **single-page applications (SPAs)** using components, services, and dependency injection.

### 2. Difference between Angular and AngularJS

| AngularJS                  | Angular            |
| -------------------------- | ------------------ |
| JavaScript                 | TypeScript         |
| MVC                        | Component-based    |
| Two-way binding by default | Controlled binding |
| Slow                       | Faster, optimized  |

### 3. Why TypeScript?

* Static typing
* Better tooling
* Early error detection
* Object-oriented programming support

### 4. Building blocks of Angular

* Components
* Modules
* Templates
* Services
* Directives
* Dependency Injection

### 5. What is a Component?

A component controls a **view (HTML)** and handles UI logic.

### 6. What is `@Component`?

A decorator that defines metadata like selector, template, and styles for a component.

### 7. Constructor vs ngOnInit

* **constructor** → Dependency injection
* **ngOnInit** → Component initialization logic

### 8. What is Data Binding?

Connecting data between **component class and template**.

### 9. Types of Data Binding

* Interpolation `{{ }}`
* Property binding `[ ]`
* Event binding `( )`
* Two-way binding `[( )]`

### 10. Angular CLI

Command-line tool to create, build, test, and deploy Angular apps.

---

# 🔹 Components & Templates – Answers

### 1. Lifecycle hooks

Methods that run at different stages of component life.

### 2. Lifecycle hooks list

`ngOnInit`, `ngOnChanges`, `ngDoCheck`, `ngAfterViewInit`, `ngOnDestroy`

### 3. ngIf vs ngFor

* `ngIf` → conditionally shows elements
* `ngFor` → loops through data

### 4. trackBy

Improves performance by tracking items using unique IDs.

### 5. Template reference variables

Used to access DOM elements using `#ref`.

### 6. ViewEncapsulation

Controls how styles apply to components.

### 7. Inline vs External template

Inline → inside component
External → separate HTML file

### 8. Parent to child data

Using `@Input()`

### 9. Child to parent data

Using `@Output()` with `EventEmitter`

### 10. @ViewChild

Access child component or DOM element.

---

# 🔹 Directives – Answers

### 1. What are directives?

Instructions to manipulate DOM elements.

### 2. Types

* Structural (`*ngIf`)
* Attribute (`ngClass`)
* Custom

### 3. Structural vs Attribute

Structural changes DOM structure; Attribute changes appearance/behavior.

### 4. *ngIf behind scenes

Uses `<ng-template>`.

### 5. Custom directive

Created using `@Directive`.

### 6. HostListener

Listens to DOM events.

### 7. HostBinding

Binds properties to host element.

---

# 🔹 Services & Dependency Injection – Answers

### 1. Service

Reusable business logic or data provider.

### 2. Why services?

Code reuse, separation of concerns.

### 3. Dependency Injection

Providing dependencies automatically.

### 4. How DI works?

Angular injector creates and injects objects.

### 5. providedIn: 'root'

Creates singleton service.

### 6. Singleton vs multiple instances

Root → single
Module/component → multiple

### 7. Injector

Responsible for creating services.

### 8. Service inside service?

Yes, via constructor injection.

---

# 🔹 Modules – Answers

### 1. Angular Module

Groups related components and services.

### 2. NgModule vs Component

Module organizes app; Component controls UI.

### 3. Shared Module

Reusable components/pipes.

### 4. Core Module

Singleton services.

### 5. Lazy Loading

Loads modules on demand.

### 6. Benefits

Faster load, better performance.

### 7. Eager vs Lazy

Eager loads at start; Lazy loads later.

---

# 🔹 Routing – Answers

### 1. Angular Routing

Navigation between views.

### 2. router-outlet

Placeholder for route content.

### 3. routerLink vs navigate

HTML vs TypeScript navigation.

### 4. Route parameters

Dynamic route values.

### 5. ActivatedRoute

Access route info.

### 6. Route Guards

Control access to routes.

### 7. Guard types

CanActivate, CanDeactivate, Resolve, CanLoad

### 8. Resolver

Fetch data before route loads.

### 9. Protect routes

Using guards.

---

# 🔹 Forms – Answers

### 1. Form types

Template-driven & Reactive

### 2. Difference

Template → HTML-based
Reactive → Model-based

### 3. FormControl

Single input control.

### 4. FormGroup

Group of controls.

### 5. FormArray

Dynamic form fields.

### 6. Validation

Using Validators.

### 7. Custom validation

Custom function.

### 8. Submit form

Using `(ngSubmit)`.

### 9. Reset form

`form.reset()`

---

# 🔹 HTTP & API – Answers

### 1. HTTP calls

Using HttpClient.

### 2. HttpClient

Angular service for APIs.

### 3. Observable

Async data stream.

### 4. Observable vs Promise

Multiple values vs single value.

### 5. HttpInterceptor

Intercepts HTTP requests.

### 6. Use cases

Auth headers, logging.

### 7. Error handling

`catchError`.

### 8. Add headers

Using HttpHeaders.

### 9. Retry

Using `retry()`.

---

# 🔹 RxJS – Answers ⭐

### 1. RxJS

Reactive programming library.

### 2. Observable

Emits values over time.

### 3. Subject

Observable + Observer.

### 4. BehaviorSubject

Stores latest value.

### 5. subscribe()

Consumes data.

### 6. pipe()

Chains operators.

### 7. Operators

map, filter, switchMap

### 8. switchMap vs mergeMap

switchMap cancels previous; mergeMap doesn’t.

### 9. Unsubscribe

Prevents memory leaks.

### 10. Prevent leaks

unsubscribe, async pipe.

---

# 🔹 Change Detection – Answers

### 1. Change Detection

Updates UI when data changes.

### 2. Default vs OnPush

OnPush improves performance.

### 3. How Angular detects?

Zone.js.

### 4. Zone.js

Tracks async operations.

### 5. Performance tips

Lazy loading, OnPush, trackBy.

### 6. async pipe

Auto subscribe/unsubscribe.

### 7. Memory leaks cause

Unsubscribed observables.

---

# 🔹 Advanced Angular – Answers

### 1. AOT

Compile at build time.

### 2. AOT vs JIT

AOT faster & secure.

### 3. Ivy

New Angular compiler.

### 4. SSR

Render on server.

### 5. Angular Universal

SSR framework.

### 6. Micro-frontend

Multiple apps in one UI.

### 7. Data sharing

Services, RxJS.

### 8. State management

NgRx.

### 9. NgRx vs services

NgRx for large apps.

### 10. Security

XSS protection, CSRF tokens.

---

# 🔹 Scenario Questions – Short Answers

* Large forms → Reactive Forms
* Role-based access → Guards
* Optimize API → Caching, RxJS
* Reuse components → Shared Module
* Project structure → Core, Shared, Feature
* Auth → JWT + Interceptors
* Pagination → Backend + UI
* Deploy → Build + server
* Env variables → environment.ts
* Testing → Jasmine, Karma

---

If you want next 🔥
✅ **Angular mock interview (Q&A style)**
✅ **Angular coding tasks with solutions**
✅ **Angular + RxJS interview cheat sheet (PDF)**

Just tell me 😄
