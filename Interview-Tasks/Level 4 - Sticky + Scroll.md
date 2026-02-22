```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Level 4 - Sticky + Scroll</title>

  <style>
    html, body {
  margin: 0;
  height: 100%;
}

/* Stop page scroll + vertical layout */
body {
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

/* Sticky header */
.header {
  height: 60px;
  position: sticky;
  top: 0;
}

/* Layout below header */
.layout {
  flex: 1;
  display: flex;
  min-height: 0;   /* Important */
}

/* Sidebar */
.sidebar {
  width: 240px;
  overflow: auto;
}

/* Content */
.content {
  flex: 1;
  overflow: auto;
}
  </style>
</head>
<body>

  <header class="header">Header (Sticky)</header>

  <div class="layout">
    <aside class="sidebar">
      <h3>Sidebar</h3>
      <!-- fake long menu -->
      <ul>
        <li>Item 1</li><li>Item 2</li><li>Item 3</li><li>Item 4</li><li>Item 5</li>
        <li>Item 6</li><li>Item 7</li><li>Item 8</li><li>Item 9</li><li>Item 10</li>
        <li>Item 11</li><li>Item 12</li><li>Item 13</li><li>Item 14</li><li>Item 15</li>
        <li>Item 16</li><li>Item 17</li><li>Item 18</li><li>Item 19</li><li>Item 20</li>
        <li>Item 21</li><li>Item 22</li><li>Item 23</li><li>Item 24</li><li>Item 25</li>
        <li>Item 26</li><li>Item 27</li><li>Item 28</li><li>Item 29</li><li>Item 30</li>
      </ul>
    </aside>

    <main class="content">
      <h2>Content Area</h2>
      <p>Scroll inside this area, not the whole page.</p>

      <!-- fake long content -->
      <div>
        <p>Line 1</p><p>Line 2</p><p>Line 3</p><p>Line 4</p><p>Line 5</p>
        <p>Line 6</p><p>Line 7</p><p>Line 8</p><p>Line 9</p><p>Line 10</p>
        <p>Line 11</p><p>Line 12</p><p>Line 13</p><p>Line 14</p><p>Line 15</p>
        <p>Line 16</p><p>Line 17</p><p>Line 18</p><p>Line 19</p><p>Line 20</p>
        <p>Line 21</p><p>Line 22</p><p>Line 23</p><p>Line 24</p><p>Line 25</p>
        <p>Line 26</p><p>Line 27</p><p>Line 28</p><p>Line 29</p><p>Line 30</p>
        <p>Line 31</p><p>Line 32</p><p>Line 33</p><p>Line 34</p><p>Line 35</p>
        <p>Line 36</p><p>Line 37</p><p>Line 38</p><p>Line 39</p><p>Line 40</p>
      </div>
    </main>
  </div>

</body>
</html>
```
