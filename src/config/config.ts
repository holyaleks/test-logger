import { LogType } from '../models/enums/logger-type';
import { ColorReference } from '../models/types-objects/color-reference.tp';
import { Color } from '../models/enums/colors';

export function configConsoleColors(logType: LogType): ColorReference {
    switch (logType) {
        default:
            return {
                color: Color.FgGreen,
                logType: LogType.ST
            };
        case LogType.END:
            return {
                color: Color.FgGreen,
                logType: LogType.END
            };
        case LogType.ERR:
            return {
                color: Color.FgRed,
                logType: LogType.ERR
            };
        case LogType.WRN:
            return {
                color: Color.FgYellow,
                logType: LogType.WRN
            };
        case LogType.INF:
            return {
                color: Color.FgBlue,
                logType: LogType.INF
            };
        case LogType.TR:
            return {
                color: Color.FgCyan,
                logType: LogType.INF
            };
        case LogType.STP:
            return {
                color: Color.FgMagenta,
                logType: LogType.INF
            };
    }
}