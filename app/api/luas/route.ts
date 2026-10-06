import { XMLParser } from "fast-xml-parser";

export async function GET() {
  const response = await fetch(
    "http://luasforecasts.rpa.ie/xml/get.ashx?action=forecast&stop=ran&encrypt=false",
  );

  const xml = await response.text();

  const json = new XMLParser().parse(xml);

  return Response.json(json);
}
