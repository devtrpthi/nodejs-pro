const express = require('express');

const greetMiddleware  = require('./greet.js');

class greetingService {
  constructor(greeting = 'Hello') {
    this.greeting = greeting;
  }

  createGreeting(name){
    return `$(this.greeting), $(name)!`;
  }
}

express()
.use('/api/vi/service1', greetMiddleware({
    service: new greetingService('Hello'),
  }))
.use('/api/v1/service2', greetMiddleware({ 
    service: new greetingService('Hi'),
  }))
.listen(3000);
