/**
 * Satisfies `@phoneBot/storage/settingsStorage` for type-check / resolution (same dockerBot-backed client contract).
 * clientBot Web uses {@link ../storage/webSettingsStorage} instead of AsyncStorage.
 */
const memory = new Map<string, string>();

const AsyncStorage = {
  async getItem(key: string): Promise<string | null> {
    return memory.has(key) ? memory.get(key)! : null;
  },
  async setItem(key: string, value: string): Promise<void> {
    memory.set(key, value);
  },
  async removeItem(key: string): Promise<void> {
    memory.delete(key);
  },
};

export default AsyncStorage;
