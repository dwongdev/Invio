import { dirname, resolve } from "std/path";
import { getEnv } from "./env.ts";

export function getDataRootDir(): string {
  const databasePath = getEnv("DATABASE_PATH", "./invio.db")!;
  return resolve(dirname(databasePath));
}

export function resolveInDataRoot(...parts: string[]): string {
  return resolve(getDataRootDir(), ...parts);
}
