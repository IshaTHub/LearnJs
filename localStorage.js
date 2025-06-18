// localStorage demo
// The main features of localStorage are:

// Shared between all tabs and windows from the same origin.
// The data does not expire. It remains after the browser restart and even OS reboot.
// For instance, if you run this code…

localStorage.setItem('test', 1);
// …And close/open the browser or just open the same page in a different window, then you can get it like this:

alert( localStorage.getItem('test') ); // 1
// We only have to be on the same origin (domain/port/protocol), the url path can be different.

// The localStorage is shared between all windows with the same origin, so if we set the data in one window, the change becomes visible in another one.

