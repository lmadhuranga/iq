## 🎯 EndB (Emirates NBD) Interview – Summary & Feedback

**Role Applied:** Full Stack Developer (Node.js + React.js) – Dubai

Based on your transcript and your CV , here is a structured summary and honest evaluation.

---

# 📌 1️⃣ Interview Flow Summary

### 🔹 Introduction

* 10+ years experience
* Angular + PHP (6 years)
* .NET + React (2 years)
* Last 5 years: React + Node.js (more frontend-focused)
* CRM + E-commerce experience
* No direct banking experience
* Insurance investment module experience

---

### 🔹 Backend Questions (Node.js / Microservices)

**Asked Topics:**

* Payment gateway integration
* Webhook vs API
* SOLID principles
* Microservices
* Communication between services
* Drawbacks of microservices
* Security fundamentals
* DevOps knowledge
* Kafka / message queues

**Your Strengths:**
✅ You explained webhook concept correctly
✅ Mentioned tokens + authentication
✅ Mentioned Kafka & queues
✅ Explained SOLID reasonably
✅ Understood role-based auth + rate limiting

**Weak Areas:**
❌ Microservices drawbacks (you couldn’t answer)
❌ Security fundamentals not detailed enough
❌ Event loop explanation unclear
❌ Some answers lacked structure
❌ DevOps knowledge basic

---

### 🔹 JavaScript / TypeScript Questions

**Asked Topics:**

* JS vs TS
* Why TypeScript?
* var vs let vs const
* Event Loop
* Promise vs Promise.all vs Promise.allSettled
* Promise lifecycle stages
* Lodash
* Closure

**Your Strengths:**
✅ Understood TypeScript benefits
✅ Explained Promise.all vs allSettled correctly
✅ Closure explanation somewhat correct
✅ Knew Lodash purpose

**Weak Areas:**
❌ Event loop explanation was not structured
❌ var/let/const answer incomplete
❌ TypeScript “what is not possible without TS” weak answer

---

### 🔹 React Questions

**Asked Topics:**

* Hooks
* useEffect
* useState
* useRef
* useMemo
* React.memo
* Virtual DOM
* Class vs Functional
* Context API
* API calls
* React advantages

**Your Strengths:**
✅ Good understanding of hooks
✅ Explained useEffect lifecycle replacement
✅ Explained Context API properly
✅ Knew HOC
✅ Explained Virtual DOM reasonably

**Weak Areas:**
❌ React.memo vs useMemo explanation incomplete
❌ Some answers rushed
❌ Slight confusion in component types

---

# 📊 Overall Performance Evaluation

### 🔹 Communication

* You sounded slightly nervous
* Some broken sentence structure
* Concepts were correct but explanation not polished

### 🔹 Technical Confidence

| Area                  | Rating (/10) |
| --------------------- | ------------ |
| React                 | 7.5          |
| JavaScript            | 6.5          |
| Node.js               | 6            |
| Microservices         | 5            |
| DevOps                | 4            |
| Communication clarity | 6            |

---

# 🚨 Biggest Risk for Banking Role

Since this is likely **Emirates NBD**, banking companies expect:

* Strong backend fundamentals
* Strong security knowledge
* Strong system design
* Strong event loop understanding
* Clean structured answers

You appeared more frontend-heavy.

---

# 🟢 Good News

You were not bad.

You:

* Have real experience
* Have production exposure
* Have e-commerce + insurance background
* Understand integration concepts

Your problem was:

> Not structured explanation
> Not confident delivery
> Some backend depth missing

---

# 🎯 What You Should Improve (Very Important)

### 1️⃣ Event Loop (Must fix immediately)

You must answer like this:

> JavaScript is single-threaded.
> It uses call stack, Web APIs, callback queue, microtask queue.
> Promises go to microtask queue.
> setTimeout goes to callback queue.
> Event loop moves tasks when call stack is empty.

---

### 2️⃣ Microservices Drawbacks (Must know)

Answer should be:

* Network latency
* Distributed debugging difficulty
* Deployment complexity
* Data consistency challenges
* Monitoring complexity

---

### 3️⃣ Security Fundamentals (Banking Important)

You must mention:

* JWT
* OAuth2
* HTTPS
* CSRF
* XSS
* Rate limiting
* API gateway
* Encryption at rest
* Encryption in transit

---

### 4️⃣ React.memo vs useMemo (They were testing depth)

Correct Answer:

* `useMemo` → memoizes value
* `React.memo` → memoizes component
* `useCallback` → memoizes function

---

# 💡 Would You Pass?

If this is first round screening → maybe 50/50
If this is technical round → borderline

For ENBD banking role → backend depth might be concern.

---

# 🧠 Final Honest Feedback

You are strong frontend fullstack developer.
But for banking-grade backend systems:

You need:

* More confidence
* More structured answers
* Deeper backend fundamentals
* Clear event loop explanation
* Better microservices understanding

---

If you want, I can:

* 🔥 Prepare you for next banking interview
* 🔥 Give you top 25 Node + React banking questions
* 🔥 Do mock interview simulation
* 🔥 Give you perfect structured answers

Tell me what you want next 💪

```
endb interview 
rs
I You Yeah, Hello, maduranga, yeah, hello. Madhur, Anga, Hi, how
are you? Yeah, give me a minute. Uh,
please explain me what is the role you are going to get interviewed and give me a little information about your experience and what is the question you going to apply for?
Yeah, I'm going to apply for something like full stack developer, not js and React js and my experience, something like my character, something like, 10 years ago, I was Angular developer in that time, plus php. Back in after that, I switch to That's mean I have angular experience, something like six years with PHP,
and then I move into the.net
plus react, something like two years after that. Now I'm working something like last five years, something like not Js plus react, but more into the React. Part in React, I have something like six years experience, not just something like four to five years experience. And I have work in CRMs and
E commerce platforms. Also. I
So this question is based out of
full stack, not just react, Yeah, location,
I think Dubai, Because en dB, Okay. Do I
wait any banking experience?
No, I don't have the banking experience.
Okay? You know, anything related to banking apps?
I was working in
this soft logic insurance company,
okay, what is the, what is the technical terms? You know, in insurance?
Technical terms mean,
in sorts of software, modules,
sorry, in certain software, what are the modules you have created in?
I mean, I was participated. New Module, something like, invest, investment. Something like, in Sri Lanka, we are doing something like insurance as investment. Something like, if we pay something like 20 years, I implement that module. Something like,
from the scratch, that module I completed.
Okay, what are the, you know, there is something like ports, insurance. Means there, there will be something quotes, so what are the things you will check for the insurance?
Yeah, that's mean, something like use, what are the modules I was working No,
yeah, something like the registration flow I completed, that's mean onboarding flow. After that, I provide one platform to pay all the stuff that's mean dashboard part and
some notifications and emails and impact
and also
the payment for the payment, what are the things you have considered
payments? I integrate the payment gateways, and
I need anything is, what are the what is the payment gateway?
What is the payment gateway? Mean, it's Sri Lankan, one voc, Bank of silo.
Okay, you have implemented that to your company. Is it? Yeah, that's integrated. Okay, how you how do you have you implemented?
That's mean, the they gave the documentation based on that. We follow up the documentation and we integrate the with our tokens. That's mean, client tokens, and that's mean. They provide the secret tokens and the public tokens, and using these tokens, we authenticate with their back end. After that I'm calling that's mean for the verification. They are calling one web hook, also,
if it is, if it is failing,
okay, what is web hook? Web hook is,
it's open in our end, right? If it is payment is failing, they are calling us. The payment is fail, and they inform us that's mean, it's calling our endpoint. I update the status of that payment.
What is the difference between web hook and API? API? Mean,
it's rest application, something like but the web hook is it's outside this are calling us,
okay. Other Other differences,
most of the time we are implement item 10 C for the web hooks, because
it's need to be monitored, because
it's some that's mean it can't be multiple executable. So we are implement item 10 C for that
one little bit on web book
for the web hook? Yeah, the web hook. We are providing tokens also because it's need to be validated. Not everyone called us. Only authorized person need to be accessed. The web hooks,
okay, tell me more about what you know about why we are using
because
okay, no issues, no issues that we go for the next one, okay.
What are solid principles? Solid
principle mean, as a developer, we had followed them, because solid mean, single, responsible. That's mean, if it is a class, it should be only one purpose. O mean open to extend, close to modify. Something like class need to be extendable, but modification limited. I means something like no need to load all the interfaces. And D means shouldn't parent component shouldn't depend on the child components, child interfaces,
okay. What is JavaScript versus TypeScript?
JavaScript, that's mean, all the typescripts are convert to the JavaScript in the compiler. Previously, we use the JavaScript, but nowadays we are trendy. Is going to the TypeScript, because we can define the type something like when we are defined the variables we can define it is a string or whatever. The things it's very easy to debug, the things that's mean, before it's a compiler compile, we can identify if there is a issue that's mean relate to the types. I
And it's provide classes and
the normally structured programming.
Okay, can you tell me why we are preferring TypeScript. Wait a minute. Hi, Mom.
Hi, very good morning.
I'm so sorry. It's little bit delay
from my end.
Yeah, he's for se rule Sayed,
okay, okay, yeah,
that's for our envy itself. Yes, yes, for again, BD, Sc, rule, okay, okay, Understood, understood,
Okay, understood him. I will take it. Thank you.
Thank you. Thank you. Okay,
can you tell me without, without TypeScript, what are the things? Is not possible.
We can define the types
without TypeScript, okay,
okay, and
we can use the classes,
okay, what is difference between varlet and cat, const, no
Latin const, yeah.
That's mean when we are using the const when we are using the VA, we That's mean it is hoisted. But when we are using the const, it is something like constant light, we can identify if it is reference error or something like that. Spin the hoist. When it is hoisting the undefined is the hoisting in VA, but when it is a hoisting it will be referenced because some misunderstand and misconfiguration we can identify when we are using the calls and loss call standard,
Okay, okay. What is event looping system.
Event loop means, in JavaScript, it is a single thread application. So event loop means it is the handling all the things it has. The main component, something like event loop and the main one, that means it is something like HF and the thread is the hard work is done. Something like workers are going doing some background, background tasks. Lib uv is the IU operations handling in the event.
Okay, how we will
implement promise in the function.
Promise in the function mean,
what is the syntax?
The spinner,
we call the promise, the spin, we call the end points, and it's returned the end response, then dot, then we can access the result so.
What is difference between Promise, promise or promise, all settled,
right? Promise or that's promise. All mean it that's been it's calling multiple promises and return and need to be successful all the things but promise settle all. If he is something like fail, we can continue the task.
Okay, what are the steps? Which means steps that promise will do while it is returning the response? What are the stages
it will go under? There's something like success, stage, cancel, not the cancel, catch or reject. Then final,
okay. You
okay, so, explain me.
Explain me, NPM internal packages,
NPM internal packages.
What did you mean by that?
What are the NPM packages? You know? Please explain me
that's been normal NPM packages, that's been tonight, that's been VI, import the NPM. And based on that, that's mean something like we can enhance a implement functionality, something like low dash or something so we can import and using inside Our applications.
Okay, what are the packages you have used before?
All of the packages, sign, PM, something like low, dash, chart,
toast, messages,
express, all of them.
Okay, okay, give me what is low dash.
Lodash is mean like something like it is utility library, utility package it is providing some copy, some replacement. And it is very popular, something like back 2015 because during that time, JavaScript didn't provide much flexible things. It had so many utilities, items. Okay, okay.
What is closer in JavaScript framework?
Close, in, close. I mean, it can be, that's me. Once it's compiled, that's it can access the outer method, and also, once it's complete the compiler, it still maintain the
it's remember the its values. Okay. So
can't give me a minute
What. What is micro services?
Micro services mean, when we implement a huge application, we can divide the these services into the micro services, the simple, simple one, something like payments and users, authentication, users and other services. Because of that, it is very easy to deploy, as well as when it is developing, very easy to develop, because no need to depend on others. And for that one, we can use some message queue application, Kafka, Revit queue, MQ, those kind of things.
So. Okay, what are the micro services you have created?
I created micro services for the E commerce application, something like users and orders.
Okay? How the microservices will communicate by itself.
Itself mean using message queue, something like Kafka or a victim queues.
So why we are using the messaging for communication
from one service to another one.
Because when, when we are using this one, if it is one services down, it will be in the queue. When it's when it is up, it will be resumed the task. Okay,
okay, so what are the drawbacks of microservices? Drawbacks of microservice? I
no idea what is the security fundamentals you will follow on micro services
that's been for the API gateway, we are doing role based authentications, based on that we authenticate, and also the rate limitings After that, if it is client side, accessing something like we are using HTTP only cookies.
So how confident are you in micro services? Rate yourself in 10?
Little bit low, because I didn't much work with the bike services later last, because last project is something like I was working fully in front end
part. So you are a front end engineer.
That's not much. Something like 60% front end, 40% something like back end.
Okay, okay,
okay, what are the DevOps skills, you know,
I have done development in GitHub workflows and
some deployment in AWS,
okay and Basic Docker, I know.
Okay. What is web hooks?
Web hooks mean,
no, what is hooks in React, JS, okay,
hooks mean, previously we had something like, something like That's mean, basically hooks mean it's something like some function. So basically we have fundamental hooks, something like use effect, use callback, use ref and use
all the things I use hooks.
Use effect is commonly using for the
basic event, something like on. That's mean previously it it had something like component did mount, unmount, though, so all the things are replaced from that one and use instead, using for the store the component store values and use refuse for the without free rendering
X, That's mean, pass the values. Those are hooks.
Okay, without using hooks? What? What is the? How can you achieve the result? The same one?
With okay, how you will call the AK from React js.
You see, using a fetch and Axios,
okay. What is advantages of React js?
Advantages mean we can,
it has routers. So we can call the splitting. We can do lazy loading all the stuff and also the structure, modulized the folder structure wise. And because of that, no need to load all the things into a single page. And we can use next js for only if it is we are using next JS it is server side rendering also available.
Okay, what is
Tom? Virtual? Dom versus real DOM.
Now virtual dome is real dome. That's been the real dome updating is very expensive. That's why we are in the virtual DOM part that's been in React application. It's saying something like dome painting, if it is something like modification happen in the dome. It's compared with the new node and the old note. If it is there is a new one, it will be first render the paint the new notes, then compare with that one that then re render all things. That's then paint whole thing in the browser.
Okay.
Okay, then what is component types?
Components type mean, H, O, C,
there are different types of component types. What are those?
Maybe you are talking about control and uncontrolled.
No class, functional and hoc,
okay. What is class component?
Class components mean? That's mean when we can use the class one, but in the HRC, something like, we are providing one component to the hoc, high order component, then it is written with the enhanced feature, something like we can add some logs and authentication checking.
It's rapid. They chose it.
Okay. What is context? Okay.
Context API means when you're passing the data that's mean between parent to child. If something like down the line, we have passed something like 10 components down it is calling from drilling to avoid that one we have seen the context API or any other state management.
That's why we are using state management. We
okay, what is?
What is used? It
use you, state,
use state, okay, sorry, use state. Using for the state management inside the component something like we can define default value as a state, and it is returning two values, two variables, set state and the set value part and return the current value. So when we can using the set value and set the values and access the value from the other variable, normal access variable. Okay.
What is react memo was unreact Lazy,
normally memo and
react memo means it's using
memorize the values you. Yeah, that's been normally. The question is something like coming to call back with React memo, react dot memo or use memo, access. Hello, yes, yes. Use memo or react dot memo. 


summery 
```
