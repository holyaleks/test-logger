import { Color } from '../models/enums/colors';
import { LogType } from '../models/enums/logger-type';
import { ColorReference } from '../models/types-objects/color-reference.tp';

export function colorPicker(logType: LogType, colorReference: Color): ColorReference {
  const pickedColor: ColorReference = {
    color: colorReference,
    logType: logType,
  };

  return pickedColor;
}
