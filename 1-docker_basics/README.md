# Docker basics tutorial
To start familiarize with basic Docker concepts and operations, a simple application code is provided.

The application is a vary basic web application running on NodeJs, that simply serves an HTML page and exposes 2 endpoints:
* */healthz* endpoint - it just returns a string, testing that the application is up and healthy
* */restaurants* endpoint - it calls a service that returns a list of restaurants in Json format