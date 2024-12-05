/** @format */

import { systems } from '../data/systems';

interface SystemServiceInterface {
  getSystemFeeInfor(): Promise<Record<string, any> | null>;
}

export default class SystemService implements SystemServiceInterface {
  constructor() {}

  async getSystemFeeInfor() {
    try {
      if (!systems || systems.length === 0) {
        throw new Error('Null or empty systems');
      }

      // Convert array to object
      const systemInfo: Record<string, any> = {};
      systems.forEach((system) => {
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
