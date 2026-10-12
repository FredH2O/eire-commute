import { XMLParser } from "fast-xml-parser";

export async function GET(request: Request) {
  const stop = new URL(request.url).searchParams.get("stop");

  if (!stop || !/^[a-zA-Z]{2,6}$/.test(stop)) {
    return Response.json({ error: "Invalid stop" }, { status: 400 });
  }

  try {
    // fetch data
    const response = await fetch(
      `http://luasforecasts.rpa.ie/xml/get.ashx?action=forecast&stop=${encodeURIComponent(stop)}&encrypt=false`,
      { cache: "no-store" },
    );

    if (!response.ok) {
      return Response.json({ error: "Luas API failed" }, { status: 502 });
    }

    const xml = await response.text();

    const json = new XMLParser({ ignoreAttributes: false }).parse(xml);

    return Response.json(json);
  } catch {
    return Response.json({ error: "Could not reach Luas" }, { status: 502 });
  }
}
