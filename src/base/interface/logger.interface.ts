export interface ILogger {
  startTest(message: string): void;
  endTest(message: string): void;
  stackTrace(message: string): void;
  error(message: string): void;
  warning(message: string): void;
  info(message: string): void;
  testStep(message: string): void;
}
