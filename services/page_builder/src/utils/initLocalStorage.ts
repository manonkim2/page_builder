interface IStorage {
  get(key: string): string | null;
  set(key: string, value: string): void;
  remove(key: string): void;
}

const initLocalStorage = (prefix: string): IStorage => {
  return {
    get: (key: string) => {
      return localStorage.getItem(`${prefix}_${key}`);
    },
    set: (key: string, value: string) => {
      localStorage.setItem(`${prefix}_${key}`, value);
    },
    remove: (key: string) => {
      localStorage.removeItem(`${prefix}_${key}`);
    },
  };
};

export const previewStorage = initLocalStorage("preview");
