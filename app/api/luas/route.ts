import { XMLParser } from "fast-xml-parser";

export async function GET(request: Request) {
  const stop = new URL(request.url).searchParams.get("stop");

  console.log("Requested stop:", stop);

  const response = await fetch(
    `http://luasforecasts.rpa.ie/xml/get.ashx?action=forecast&stop=${stop}&encrypt=false`,
  );

  const xml = await response.text();

  const json = new XMLParser({ ignoreAttributes: false }).parse(xml);

  return Response.json(json);
}
