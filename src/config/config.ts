import { LogType } from '../models/enums/logger-type';
import { colors } from '../models/enums/colors';
import * as fs from 'fs';
import * as path from 'path';
import { Configuration } from '../models/types-objects/config.obj';

var jsonPath = path.join(__dirname, '../../', )

export class Config {
    public configuration: Configuration = this.readConfig();

    configConsoleColors(logType: LogType): string {
        if (this.configuration.colors.start !== undefined && logType === LogType.STR) {
            const index = Object.keys(colors).indexOf(this.configuration.colors.start);
            return Object.values(colors)[index];
        } 
        if (this.configuration.colors.error !== undefined && logType === LogType.ERR) {
            const index = Object.keys(colors).indexOf(this.configuration.colors.error);
            return Object.values(colors)[index];
        }
        if (this.configuration.colors.end !== undefined && logType === LogType.END) {
            const index = Object.keys(colors).indexOf(this.configuration.colors.end);
            return Object.values(colors)[index];
        }
        if (this.configuration.colors.info !== undefined && logType === LogType.INF) {
            const index = Object.keys(colors).indexOf(this.configuration.colors.info);
            return Object.values(colors)[index];
        }
        if (this.configuration.colors.testStep !== undefined && logType === LogType.STP) {
            const index = Object.keys(colors).indexOf(this.configuration.colors.testStep);
            return Object.values(colors)[index];
        }
        if (this.configuration.colors.trace !== undefined && logType === LogType.TRC) {
            const index = Object.keys(colors).indexOf(this.configuration.colors.trace);
            return Object.values(colors)[index];
        }
        if (this.configuration.colors.warning !== undefined && logType === LogType.WRN) {
            const index = Object.keys(colors).indexOf(this.configuration.colors.warning);
            return Object.values(colors)[index];
        }
        else {
            return this.defaultColorConfiguration(logType);
        }
    }

    private defaultColorConfiguration(logType: LogType): string {
        switch (logType) {
            default:
                return colors.FgGreen;
            case LogType.END:
                return colors.FgGreen;
            case LogType.ERR:
                return colors.FgRed;
            case LogType.WRN:
                return colors.FgYellow;
            case LogType.INF:
                return colors.FgBlue;
            case LogType.TRC:
                return colors.FgCyan;
            case LogType.STP:
                return colors.FgMagenta;
        }
    }

    private readConfig(): Configuration {
        let configuration: Configuration = new Configuration();
        
        try {
            configuration = JSON.parse(fs.readFileSync(jsonPath + '\\loggerconfig.json', 'utf8'));
            return this.setConfig(configuration);
        } catch (e) {
            return configuration;
        }
    }

    private setConfig(config: any): Configuration {
        const configuration = Object.assign(new Configuration(), config);
    
        return configuration;
    }
}