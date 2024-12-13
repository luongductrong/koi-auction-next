/** @format */

import { SYSTEMS } from '../data/systems';

interface SYSTEMServiceInterface {
  getSystemFeeInfor(): Promise<Record<string, any> | null>;
}

export default class SYSTEMService implements SYSTEMServiceInterface {
  constructor() {}

  async getSystemFeeInfor() {
    try {
      if (!SYSTEMS || SYSTEMS.length === 0) {
        throw new Error('Null or empty SYSTEMS');
      }

      // Convert array to object
      const systemInfo: Record<string, any> = {};
      SYSTEMS.forEach((system) => {
        const camelCaseName = this.toCamelCase(system.Name);
        systemInfo[camelCaseName] = system.Value;
      });

      return systemInfo;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      }
      return null;
    }
  }

  private toCamelCase(input: string): string {
    return input
      .toLowerCase()
      .replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, (match, index) => {
        if (+match === 0) return '';
        return index === 0 ? match.toLowerCase() : match.toUpperCase();
      })
      .replace(/\s+/g, '');
  }
}
