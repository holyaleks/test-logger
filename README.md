# Test Logger

Test logger tool is for easier logging your activity within the automated tests. For instance you need to log the tests steps in your test or some test logs (tracing, info or some errors without throwing), therefore this tool helps you do it more productively.

# Installiation

[![npm](https://img.shields.io/npm/v/tests-logger?style=flat-square)](https://www.npmjs.com/package/tests-logger) 

Install `Test Logger` in your test project with the following command

```
npm install test-logger
```

Import logger in your file

```TypeScript
// ./file.ts
import { Log } from 'test-logger'
```
# Logger types

This test logger has different types. Wich have mark of the type, date (dd/M/yyyy, hh:mm:ss.ms), and message you want to log.
More about them below:

1. [STR] - Start. We can use this log to define the start of the test to easily find the beginning of the tests in your logs.

```TypeScript
// ./file.ts
import { Log } from 'test-logger';

Log.startTest('The test starts here');

// [STR]  24/9/2022, 15:38:18.731 --------------------------------------- The test starts here
```

2. [END] - End. We can use this log to define the end of the test to easily find the ending of the tests in your logs.

```TypeScript
// ./file.ts
import { Log } from 'test-logger';

Log.endTest('The test ends here');

// [END]  24/9/2022, 15:38:18.731 --------------------------------------- The test ends here
```

3. [TRC] - Trace. We can use this log to define the stack traces in your framework.

```TypeScript
// ./file.ts
import { Log } from 'test-logger';

Log.stackTrace('Executing connection to the DB');

// [TRC]  24/9/2022, 15:38:18.731 --------------------------------------- Executing connection to the DB
```

4. [INF] - Information. We can use this log to define the information about commands in your framework.

```TypeScript
// ./file.ts
import { Log } from 'test-logger';

Log.info('Connection is successfully');

// [INF]  24/9/2022, 15:38:18.731 --------------------------------------- Connection is successfully
```

5. [WRN] - Warning.

```TypeScript
// ./file.ts
import { Log } from 'test-logger';

Log.warning(`Connection is successfully. Taken time: ${connectingTime}`);

// [WRN]  24/9/2022, 15:38:18.731 --------------------------------------- Connection is successfully. Taken time: 0:8:64
```

6. [ERR] - Error.

```TypeScript
// ./file.ts
import { Log } from 'test-logger';

Log.warning(`Connection is failed`);

// [ERR]  24/9/2022, 15:38:18.731 --------------------------------------- Connection is failed
```

7. [STP] - Test steps.

```TypeScript
// ./file.ts
import { Log } from 'test-logger';

Log.testStep(`Login to your account`);

// [STP]  24/9/2022, 15:38:18.731 --------------------------------------- Login to your accoun
```

# Configuration

You may need to configure your logger for your approaches or goals. However you do not need to change everything. Therefore some configuration for this logger is described below

## Log configuration

Basically, this test logger is able to log information in two ways. The first one is show logged information in your console while running tests, the second one is to log information into `.log` file. Let's get review each of them

### Console log

For this way you do not need an additional configuration. This logger shows your logs in the console by default with colored rows depends on log type (see below about color configuration)

### File log

If you need to log test information in file, not in console and store it somewhere you need to change some configuration for this test logger. Let's create a file `loggerconfig.json` in the root directory of your project. Add the following code for this config file:

```JSON
{
    "report": true
}
```

With the above config file test logs will be logged in the file `test-logs.log` in the root directory of your project. If you want to store this file in another place, you have to add `reportPath` parameter:

```JSON
{
    "report": true,
    "reportPath": "/reports/test-logger-report.log"
}
```

## Color configuration

Basically this test logger using default colors for logging test information in [different types](https://github.com/holyaleks/test-logger/edit/master/README.md#logger-types) for console

### Basic color configuration

Start and End logs in the console have green color ![#00FF00](https://via.placeholder.com/10/00FF00/00FF00.png):

![image](https://user-images.githubusercontent.com/44750553/192115196-52a755da-87c1-4df5-92bc-a73e65391f73.png)
![image](https://user-images.githubusercontent.com/44750553/192115186-952fb2cc-8a47-49d7-b767-77edabe88a05.png)

Trace logs in the console have cyan color ![#00FFFF](https://via.placeholder.com/10/00FFFF/00FFFF.png):

![image](https://user-images.githubusercontent.com/44750553/192115284-da132363-fc7d-4994-87db-0c726a48b883.png)

Information logs in the console have blue color ![#0000FF](https://via.placeholder.com/10/0000FF/0000FF.png):

![image](https://user-images.githubusercontent.com/44750553/192115317-d38a9d80-f777-4c13-b1e7-538123ee02b7.png)

Warning logs in the console have yelow color ![#FFFF00](https://via.placeholder.com/10/FFFF00/FFFF00.png):

![image](https://user-images.githubusercontent.com/44750553/192115776-a542f871-5b49-4773-a172-4e17af10df76.png)

Error logs in the console have red color ![#FF0000](https://via.placeholder.com/10/FF0000/FF0000.png):

![image](https://user-images.githubusercontent.com/44750553/192116147-537aaf2a-1a34-47ce-95d2-c3e6227f38c7.png)

Test step logs in the console have magenta color ![#FF00FF](https://via.placeholder.com/10/FF00FF/FF00FF.png):

![image](https://user-images.githubusercontent.com/44750553/192116199-377d22f3-c5df-4187-9a85-65e1036fc85e.png)

If you want to configure your own console colors, please use the `loggerconfig.json` file and add the following configuration for collors:

```JSON
{
    "report": true,
    "reportPath": "/reports/test-logger-report.log",
    "colors": {
        "testStep": "FgWhite"
    }
}
```

You can find available colors or formats right here:

```
Reset: "\x1b[0m",
Bright: "\x1b[1m",
Dim: "\x1b[2m",
Underscore: "\x1b[4m",
Blink: "\x1b[5m",
Reverse: "\x1b[7m",
Hidden: "\x1b[8m",

FgBlack: "\x1b[30m",
FgRed: "\x1b[31m",
FgGreen: "\x1b[32m",
FgYellow: "\x1b[33m",
FgBlue: "\x1b[34m",
FgMagenta: "\x1b[35m",
FgCyan: "\x1b[36m",
FgWhite: "\x1b[37m",

BgBlack: "\x1b[40m",
BgRed: "\x1b[41m",
BgGreen: "\x1b[42m",
BgYellow: "\x1b[43m",
BgBlue: "\x1b[44m",
BgMagenta: "\x1b[45m",
BgCyan: "\x1b[46m",
BgWhite: "\x1b[47m"
```
