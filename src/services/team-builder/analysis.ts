import axios from "axios";
import Database from "better-sqlite3";
import { readFile } from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

export class TeamBuilderAnalysis {
  private db: Database;
  private bountyData: any;

  public bountySummaries: [];

  constructor() {
    this.db = new Database(":memory:");
    this.bountySummaries = [];
    this.initialize();
  }

  private async initialize() {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const filePath = join(__dirname, '../../../data/bounty/bouties.json');
    const fileContent = await readFile(filePath, 'utf-8');
    this.bountyData = JSON.parse(fileContent);
  }

  async analyzeBounties() {
    this.logInfo(JSON.stringify(this.bountyData));

    return this.bountySummaries;
  }

  private logStatus(message: string) {
    console.log(`[STATUS] ${message}`);
  }

  private logError(message: string) {
    console.error(`[ERROR] ${message}`);
  }

  private logInfo(message: string) {
    console.info(`[INFO] ${message}`);
  }

  private logDebug(message: string) {
    console.debug(`[DEBUG] ${message}`);
  }
}
