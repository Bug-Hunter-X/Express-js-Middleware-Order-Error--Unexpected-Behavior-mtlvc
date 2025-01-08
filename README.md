# Express.js Middleware Order Bug

This repository demonstrates a subtle bug related to middleware execution order in Express.js. The bug occurs when middleware intended to modify the response is placed after the response has already been sent. This can lead to unexpected behavior and errors that are difficult to debug.

## Bug Description
The `bug.js` file contains an Express.js application with middleware that attempts to modify the response after the response has already been sent. This results in the middleware not having any effect and potentially causing errors.

## Solution
The `bugSolution.js` file provides a corrected version of the application. The middleware that modifies the response is moved to an earlier position in the middleware stack, ensuring it executes before the response is sent.