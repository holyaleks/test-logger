import { LogType } from '../models/enums/logger-type';
import { colorPicker } from '../colors/color-picker';
import { configConsoleColors } from '../config/config';
import { ColorReference } from '../models/types-objects/color-reference.tp';

export class Logger {

    static logStartTest(message: string): void {
        this.logOperation(message, LogType.ST);
    }
    static logEndTest(message: string): void {
        this.logOperation(message, LogType.END);
    }
    static logStackTrace(message: string): void {
        this.logOperation(message, LogType.TR);
    }
    static logError(message: string): void {
        this.logOperation(message, LogType.ERR);
    }
    static logWarning(message: string): void {
        this.logOperation(message, LogType.WRN);
    }
    static logInfo(message: string): void {
        this.logOperation(message, LogType.INF);
    }
    static logTestStep(message: string): void {
        this.logOperation(message, LogType.STP);
    }

    private static logOperation(message: string, type: LogType): void {
        const color = configConsoleColors(type);
        const options = this.options();
        
        console.log(
            color.color,
            `[${type}] - ${new Date().toLocaleDateString(undefined, options)} ------------- ${message}`
        )
    }

    private static options(): {} {
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