import { Config } from '../config/config';
import * as fs from 'fs';
import * as path from 'path';
import * as util from 'util';

var defaultPath = path.join(__dirname, '../..', '/test-logs.log');

export class ReportWriter {
  private readonly config = new Config();
  private readonly fsStream = this.fsStreamConfigured ? this.createStream() : undefined;

  constructor(private readonly fsStreamConfigured = false) {}

  writeReport(): void | null {
    if (this.fsStreamConfigured) {
      const logFile = this.fsStream as fs.WriteStream;

      try {
        console.log = function (color: string, message: string, ending: string) {
          logFile.write(util.format(message) + '\n' + ending);
        };
      } catch (e) {
        return null;
      }
    }
  }

  private createStream(): fs.WriteStream {
    if (fs.existsSync(path.join(__dirname, '../..', `${this.config.configuration.reportPath}`) || defaultPath)) {
      return fs.createWriteStream(
        path.join(__dirname, '../..', `${this.config.configuration.reportPath}`) || defaultPath,
      );
    } else {
      fs.mkdirSync(
        path.join(__dirname, '../..', `${this.config.configuration.reportPath?.replace(/[\w-]+\.log/, '')}`) ||
          defaultPath,
        { recursive: true },
      );

      return fs.createWriteStream(
        path.join(__dirname, '../..', `${this.config.configuration.reportPath}`) || defaultPath,
      );
    }
  }
}
