export class Configuration {
    colors = {
        error: undefined,
        start: undefined,
        trace: undefined,
        info: undefined,
        warning: undefined,
        testStep: undefined,
        end: undefined,
    };
    report = false;
    reportPath: string | undefined = undefined;
}