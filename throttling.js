**Throttling** in JavaScript is a technique used to control how often a function is executed. It ensures that a function is **only called once in a specified time interval**, even if it's triggered many times (like during scrolling, resizing, or button clicking).

---

### 🔁 Why use throttling?
If a function is called too frequently, it can **hurt performance**, especially in events like:
- `scroll`
- `resize`
- `mousemove`
- rapid `clicks`

---

### ✅ How throttling works
You set a **cooldown period** (`delay`), and the function will only run once during that period.

---

### ✅ Example (vanilla JavaScript):

```js
function throttle(func, delay) {
  let lastCall = 0;
  return function (...args) {
    const now = new Date().getTime();
    if (now - lastCall >= delay) {
      lastCall = now;
      func.apply(this, args);
    }
  };
}

// Example usage
function logScroll() {
  console.log("Scrolled at", new Date().toISOString());
}

window.addEventListener("scroll", throttle(logScroll, 1000));
```

**In this example**:
- `logScroll` runs **once every 1000ms (1 second)**, even if the scroll event fires more frequently.

---

### 🔄 Throttling vs Debouncing

| Feature        | Throttling                                  | Debouncing                                  |
|----------------|----------------------------------------------|---------------------------------------------|
| Execution time | Executes every `X` ms                        | Executes **after** `X` ms of inactivity     |
| Use case       | Repeated actions (scrolling, resizing)       | Final action (search input, form submit)    |

---

React use case for throttling, especially useful in situations like:

Handling window resize

Scroll events for infinite scroll

Preventing spamming of API calls on frequent actions

🧪 Example: Throttle window resize event in React
jsx
Copy
Edit
import React, { useEffect, useState } from 'react';

function throttle(func, delay) {
  let lastCall = 0;
  return function (...args) {
    const now = new Date().getTime();
    if (now - lastCall >= delay) {
      lastCall = now;
      func(...args);
    }
  };
}

const ResizeComponent = () => {
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = throttle(() => {
      setWindowSize(window.innerWidth);
    }, 1000); // Only update once every second

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div>
      <h2>Window width: {windowSize}px</h2>
      <p>Try resizing your window. The update will throttle every 1 second.</p>
    </div>
  );
};

export default ResizeComponent;
✅ What’s happening here?
A custom throttle function ensures setWindowSize isn’t called too frequently.

Without throttling, resize events could fire dozens of times per second, leading to laggy UI updates.
