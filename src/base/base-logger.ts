import { LogType } from '../models/enums/logger-type';
import { colorPicker } from '../colors/color-picker';
import { configConsoleColors } from '../config/config';
import { ColorReference } from '../models/types-objects/color-reference.tp';
import { ILogger } from './interface/logger.interface';

export class Logger implements ILogger {

    startTest(message: string): void {
        this.logOperation(message, LogType.ST);
    }
    endTest(message: string): void {
        this.logOperation(message, LogType.END);
    }
    stackTrace(message: string): void {
        this.logOperation(message, LogType.TR);
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
        const color = configConsoleColors(type);
        const options = this.options();
        
        console.log(
            color.color,
            `[${type}] - ${new Date().toLocaleDateString(undefined, options)} ------------- ${message}`
        )
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