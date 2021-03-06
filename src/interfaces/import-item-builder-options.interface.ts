import { FileLog } from '../common/file-log';

export interface ImportItemBuilderOptions {
  dir: string;
  baseRepo?: string;
  baseFolder?: string;
  mapFile?: string;
  publish?: boolean;
  republish?: boolean;
  force?: boolean;
  validate?: boolean;
  skipIncomplete?: boolean;
  logFile?: string | FileLog;

  revertLog?: string;
}
