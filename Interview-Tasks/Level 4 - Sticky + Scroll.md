```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Level 4 - Sticky + Scroll</title>

  <style>
    /* Reset default spacing and set full height */
    html,
    body {
      margin: 0;
      height: 100%;
    }

    /* Body setup:
   - Full viewport height
   - Prevent page scrolling
   - Stack children vertically (header → layout → footer)
*/
    body {
      height: 100vh;
      overflow: hidden;
      display: flex;
      flex-direction: column;
    }

    /* Sticky header at the top */
    .header {
      height: 60px;
      background: #222;
      color: white;

      display: flex;
      align-items: center;
      padding-left: 20px;

      position: sticky;
      top: 0;
    }

    /* Main layout container:
   - Takes remaining height
   - Horizontal layout (sidebar + content)
*/
    .layout {
      flex: 1;
      /* fill remaining space */
      display: flex;
      min-height: 0;
      /* IMPORTANT: allows children to scroll */
    }

    /* Sidebar:
   - Fixed width
   - Independent scrolling
*/
    .sidebar {
      width: 240px;
      background: #f4f4f4;
      padding: 15px;

      overflow: auto;
      /* enables sidebar scroll */
    }

    /* Content area:
   - Flexible width
   - Independent scrolling
*/
    .content {
      flex: 1;
      padding: 20px;

      overflow: auto;
      /* enables content scroll */
    }

    /* Footer:
   - Fixed height
   - Stays at bottom due to flex layout
*/
    .footer {
      height: 40px;
      background: #222;
      color: white;

      display: flex;
      align-items: center;
      justify-content: center;
    }
  </style>
</head>

<body>

  <header class="header">Header (Sticky)</header>

  <div class="layout">
    <aside class="sidebar">
      <h3>Sidebar</h3>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        <li>Item 4</li>
        <li>Item 5</li>
        <li>Item 6</li>
        <li>Item 7</li>
        <li>Item 8</li>
        <li>Item 9</li>
        <li>Item 10</li>
        <li>Item 11</li>
        <li>Item 12</li>
        <li>Item 13</li>
        <li>Item 14</li>
        <li>Item 15</li>
      </ul>
    </aside>

    <main class="content">
      <h2>Content Area</h2>
      <p>Scroll inside this area, not the whole page.</p>
      <div>
        <p>Line 1</p>
        <p>Line 2</p>
        <p>Line 3</p>
        <p>Line 4</p>
        <p>Line 5</p>
        <p>Line 6</p>
        <p>Line 7</p>
        <p>Line 8</p>
        <p>Line 9</p>
        <p>Line 10</p>
        <p>Line 11</p>
        <p>Line 12</p>
        <p>Line 13</p>
        <p>Line 14</p>
        <p>Line 15</p>
        <p>Line 16</p>
        <p>Line 17</p>
        <p>Line 18</p>
        <p>Line 19</p>
        <p>Line 20</p>
        <p>Line 21</p>
        <p>Line 22</p>
        <p>Line 23</p>
        <p>Line 24</p>
        <p>Line 25</p>
        <p>Line 26</p>
        <p>Line 27</p>
        <p>Line 28</p>
        <p>Line 29</p>
        <p>Line 30</p>
        <p>Line 31</p>
        <p>Line 32</p>
        <p>Line 33</p>
        <p>Line 34</p>
        <p>Line 35</p>
        <p>Line 36</p>
        <p>Line 37</p>
        <p>Line 38</p>
        <p>Line 39</p>
        <p>Line 40</p>
      </div>
    </main>
  </div>

  <footer class="footer">Footer</footer>

</body>

</html>
```
