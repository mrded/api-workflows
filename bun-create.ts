#!/usr/bin/env bun
import { readdir, readFile, rename, unlink, writeFile } from "node:fs/promises";
import { basename, join } from "node:path";

const dest = process.cwd();
const projectName = basename(dest);

const SKIP_DIRS = new Set(["node_modules", ".git"]);
const SELF = "bun-create.ts";

const walk = async (dir: string): Promise<string[]> => {
  const entries = await readdir(dir, { withFileTypes: true });
  const nested = await Promise.all(
    entries
      .filter((e) => !SKIP_DIRS.has(e.name))
      .map((e) => {
        const full = join(dir, e.name);
        return e.isDirectory() ? walk(full) : Promise.resolve([full]);
      }),
  );
  return nested.flat();
};

const replaceInFile = async (path: string) => {
  const content = await readFile(path, "utf8").catch(() => null);
  if (content === null || !content.includes("PROJECT_NAME")) return;
  await writeFile(path, content.replaceAll("PROJECT_NAME", projectName));
};

const files = await walk(dest);
await Promise.all(files.map(replaceInFile));

await rename(join(dest, "gitignore"), join(dest, ".gitignore")).catch(() => {});
await unlink(join(dest, SELF)).catch(() => {});

console.log(`scaffolded ${projectName}`);
console.log("next: bun install && bun requests/create-user.ts");
