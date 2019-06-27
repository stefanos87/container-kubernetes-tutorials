# Docker basics tutorial
This tutorial provides the entry point to start familiarize with basic Docker concepts and operations.

A simple web application running on NodeJs is provided; it serves an HTML page and exposes 2 REST services endpoints:
* */healthz* endpoint - it just returns a string, testing that the application is up and healthy
* */restaurants* endpoint - it calls a REST service endpoint that returns a list of restaurants in Json format