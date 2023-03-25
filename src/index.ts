import { writeFileSync } from "fs";
import { fetchAnnotations } from "./utils";

async function master(): Promise<void> {
  const cookie = process.argv[2];

  const result = await fetchAnnotations({ cookie });

  writeFileSync("diigoArchive.json", JSON.stringify(result));
}

void master();
