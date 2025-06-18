// Cookies are small strings of data that are stored directly in the browser. They are a part of the HTTP protocol, defined by the RFC 6265 specification.

// Cookies are usually set by a web server using the response Set-Cookie HTTP header. Then, the browser automatically adds them to (almost) every request to the same domain using the Cookie HTTP header.

// One of the most widespread use cases is authentication:

// Upon sign-in, the server uses the Set-Cookie HTTP header in the response to set a cookie with a unique “session identifier”.
// Next time the request is sent to the same domain, the browser sends the cookie over the net using the Cookie HTTP header.
// So the server knows who made the request.
// We can also access cookies from the browser, using document.cookie property.

// There are many tricky things about cookies and their attributes. In this chapter, we’ll cover them in detail.