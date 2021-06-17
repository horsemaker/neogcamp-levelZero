# lesson-one

## ex01: output your name

```javascript
console.log("Yash Ghodekar");
```
---
## ex02: read the name of your use
```javascript
prompt("Give me your name:") // On Browser
```

### Find npm readlineSync
```javascript
var readlineSync = require('readline-sync');
var userName = readlineSync.question('May I have your name?');
console.log(userName);
```
---