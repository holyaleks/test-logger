import { LogType } from '../models/enums/logger-type';
import { Config } from '../config/config';
import { ILogger } from './interface/logger.interface';
import { ReportWriter } from '../logs/save-file-logs';

export class Logger implements ILogger {
    private readonly config = new Config
    private readonly reportWriter = new ReportWriter(this.config.configuration.report);

    startTest(message: string): void {
        this.logOperation(message, LogType.STR);
    }
    endTest(message: string): void {
        this.logOperation(message, LogType.END);
    }
    stackTrace(message: string): void {
        this.logOperation(message, LogType.TRC);
    }
    error(message: string): void {
        this.logOperation(message, LogType.ERR);
    }
    warning(message: string): void {
        this.logOperation(message, LogType.WRN);
    }
    info(message: string): void {
        this.logOperation(message, LogType.INF);
    }
    testStep(message: string): void {
        this.logOperation(message, LogType.STP);
    }

    private logOperation(message: string, type: LogType): void {
        const color = this.config.configConsoleColors(type);
        const options = this.options();
        const date = new Date();
        
        if (this.config.configuration.report) {
            this.reportWriter.writeReport();
        }
        const loggedMessage = `[${type}]  ${date.toLocaleDateString('it-US', options) + `.${date.getMilliseconds()}`} --------------------------------------- ${message}`;
        console.log(color, loggedMessage, type === LogType.END && this.config.configuration.report ? '\n                            ************************************************\n' : '');
    }

    private options(): {} {
        return { 
            year: 'numeric',
            month: 'numeric', 
            day: 'numeric', 
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric'
        };
    }
}