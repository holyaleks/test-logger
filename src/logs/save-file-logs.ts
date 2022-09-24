import { Config } from '../config/config';
import * as fs from 'fs';
import * as path from 'path';
import * as util from 'util';

var defaultPath = path.join(__dirname, '../..', '/')

export class ReportWriter {
    private readonly config = new Config();
    private readonly fsStream = this.fsStreamConfigured ? fs.createWriteStream(this.config.configuration.reportPath || defaultPath) : undefined;

    constructor(private readonly fsStreamConfigured = false) {}

    writeReport(): void | null {
        if (this.fsStreamConfigured) {
            const logFile = this.fsStream as fs.WriteStream;

            try {
                console.log = function(color: string, message: string, ending: string) {
                    logFile.write(util.format(message) + '\n' + ending);
                }
            } catch (e) {
                return null;
            }
        }
    }
}