// sessionStorage
// The sessionStorage object is used much less often than localStorage.

// Properties and methods are the same, but it’s much more limited:

// The sessionStorage exists only within the current browser tab.
// Another tab with the same page will have a different storage.
// But it is shared between iframes in the same tab (assuming they come from the same origin).
// The data survives page refresh, but not closing/opening the tab.
// Let’s see that in action.

// Run this code…

 sessionStorage.setItem('test', 1);
// …Then refresh the page. Now you can still get the data:

 alert( sessionStorage.getItem('test') ); // after refresh: 1
But if you open the same page in another tab, and try again there, the code above returns null, meaning “nothing found”.

// That’s exactly because sessionStorage is bound not only to the origin, but also to the browser tab. For that reason, sessionStorage is used sparingly.

Storage event
// When the data gets updated in localStorage or sessionStorage, storage event triggers, with properties:

// key – the key that was changed (null if .clear() is called).
// oldValue – the old value (null if the key is newly added).
// newValue – the new value (null if the key is removed).
// url – the url of the document where the update happened.
// storageArea – either localStorage or sessionStorage object where the update happened.
// The important thing is: the event triggers on all window objects where the storage is accessible, except the one that caused it.

// Let’s elaborate.

// Imagine, you have two windows with the same site in each. So localStorage is shared between them.

// You might want to open this page in two browser windows to test the code below.

// If both windows are listening for window.onstorage, then each one will react on updates that happened in the other one.

// // triggers on updates made to the same storage from other documents
window.onstorage = event => { // can also use window.addEventListener('storage', event => {
  if (event.key != 'now') return;
  alert(event.key + ':' + event.newValue + " at " + event.url);
};

localStorage.setItem('now', Date.now());
// Please note that the event also contains: event.url – the url of the document where the data was updated.

// Also, event.storageArea contains the storage object – the event is the same for both sessionStorage and localStorage, so event.storageArea references the one that was modified. We may even want to set something back in it, to “respond” to a change.

// That allows different windows from the same origin to exchange messages.

// Modern browsers also support Broadcast channel API, the special API for same-origin inter-window communication, it’s more full featured, but less supported. There are libraries that polyfill that API, based on localStorage, that make it available everywhere.
