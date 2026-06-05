import { readFileSync } from "node:fs";
import { join } from "node:path";

export const dynamic = "force-static";

export function GET() {
  const svgPath = join(process.cwd(), "public", "consultant-johan-guerin.svg");
  const svg = readFileSync(svgPath, "utf8");
  const base64 = svg.match(/base64,([^"]+)/)?.[1];

  if (!base64) {
    return new Response("Portrait not found", { status: 404 });
  }

  return new Response(Buffer.from(base64, "base64"), {
    headers: {
      "Content-Type": "image/jpeg",
      "Cache-Control": "public, max-age=31536000, immutable"
    }
  });
}
