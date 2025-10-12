Here’s a **Tailwind CSS interview cheat sheet** — covering the concepts and practical questions that are often asked in frontend or full-stack interviews 👇

---

## 🧠 1. **Core Concepts**

| Topic                     | Key Points                                                                                                                              |
| ------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| **Utility-first**         | Tailwind provides single-purpose utility classes (`p-4`, `bg-blue-500`, `flex`, `items-center`) to build UI without writing custom CSS. |
| **Responsive design**     | Uses **breakpoint prefixes** (`sm:`, `md:`, `lg:`, `xl:`) for mobile-first responsive design.                                           |
| **Hover / Focus / State** | Uses **state variants** like `hover:bg-blue-600`, `focus:outline-none`, `active:scale-95`.                                              |
| **Dark mode**             | Controlled by `dark:` prefix, e.g. `dark:bg-gray-800`.                                                                                  |
| **Custom theme**          | Defined in `tailwind.config.js` (extend colors, fonts, spacing).                                                                        |
| **Purge / JIT mode**      | Removes unused classes for production; JIT compiler generates styles on demand.                                                         |
| **Plugins**               | Extend Tailwind with community or custom plugins (`@tailwindcss/forms`, `typography`, etc.).                                            |

---

## 💻 2. **Common Interview Questions**

### ✅ Basic

1. **What is Tailwind CSS and why use it?**
   → It’s a utility-first CSS framework that allows rapid UI development without writing custom CSS files. Reduces context switching between HTML and CSS.

2. **How is Tailwind different from Bootstrap?**

   | Bootstrap                    | Tailwind                       |
   | ---------------------------- | ------------------------------ |
   | Component-based (pre-styled) | Utility-based (atomic classes) |
   | Opinionated UI design        | Fully customizable             |
   | Harder to override           | Easier to extend via config    |

3. **What are the main sections of `tailwind.config.js`?**

   * `theme`: define or extend default design tokens
   * `variants`: control available modifiers (e.g., `hover`, `focus`)
   * `plugins`: add extra functionality

---

### 🎨 Intermediate

4. **How to add a custom color or font?**

   ```js
   // tailwind.config.js
   theme: {
     extend: {
       colors: {
         brand: '#1da1f2',
       },
       fontFamily: {
         inter: ['Inter', 'sans-serif'],
       },
     },
   }
   ```

5. **Explain Tailwind’s JIT compiler.**
   → JIT (Just-In-Time) mode compiles styles on demand as you use them, making build times faster and allowing arbitrary values like `bg-[#123456]` or `w-[72px]`.

6. **How to handle dark mode?**

   ```js
   // tailwind.config.js
   darkMode: 'class' // or 'media'
   ```

   Then use:

   ```html
   <div class="bg-white dark:bg-gray-800"></div>
   ```

7. **How do you create a reusable component?**
   → Combine utilities via `@apply` in a CSS file or use React components:

   ```css
   .btn-primary {
     @apply bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600;
   }
   ```

---

### ⚙️ Advanced

8. **Performance optimization in Tailwind?**

   * Enable `content` array in config to purge unused classes.
   * Use `JIT` mode for on-demand generation.
   * Avoid using wildcards in `content` paths.

9. **How to use Tailwind with frameworks like React/Next.js?**

   * Install with `postcss` and `autoprefixer`.
   * Import Tailwind styles in your root file:

     ```js
     import './globals.css'
     ```

10. **How to override default spacing or breakpoints?**

    ```js
    theme: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '1024px',
      },
      spacing: {
        13: '3.25rem',
      },
    }
    ```

---

## 🔍 3. **Example Practical Tasks**

### 🧱 Create a responsive card

```html
<div class="max-w-sm p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition md:max-w-md">
  <img src="..." class="rounded-t-lg w-full" />
  <div class="p-4">
    <h3 class="text-lg font-semibold">Tailwind Card</h3>
    <p class="text-gray-600 text-sm">Responsive and minimal.</p>
  </div>
</div>
```

### 📱 Responsive grid layout

```html
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
  <div class="p-4 bg-blue-100 rounded">Item 1</div>
  <div class="p-4 bg-blue-200 rounded">Item 2</div>
  <div class="p-4 bg-blue-300 rounded">Item 3</div>
</div>
```

---

## ⚡ 4. **Most Asked Quick Facts**

| Question                      | Answer                                                              |
| ----------------------------- | ------------------------------------------------------------------- |
| Default Tailwind breakpoints? | `sm(640px)`, `md(768px)`, `lg(1024px)`, `xl(1280px)`, `2xl(1536px)` |
| How to center a div?          | `flex justify-center items-center`                                  |
| Gradient example              | `bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500`       |
| Add box shadow                | `shadow`, `shadow-lg`, `shadow-xl`                                  |
| Rounded corners               | `rounded`, `rounded-md`, `rounded-full`                             |

---

Would you like me to create a **Tailwind CSS interview Q&A PDF** or a **mock interview sheet** (with answers + short code tasks)?
