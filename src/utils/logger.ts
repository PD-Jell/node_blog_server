export interface Logger {
  (...args: any[]): void;
}

export const getLogger = (prefix: string): Logger => {
  return (...args: any[]) => {
    console.log(prefix, new Date().toLocaleString(), ...args);
  };
};
