import { OpenAIEmbeddings } from "@langchain/openai";
import { cosineSim } from "./similarity";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest){
  const requestClone = request.clone();
  const body: DropRequest = await requestClone.json();
  const embedModel = new OpenAIEmbeddings({
    model: "text-embedding-3-small",
  });
  const result1 = await embedModel.embedQuery(body.originText);
  const result2 = await embedModel.embedQuery(body.citationText);
  const similarity = cosineSim(result1, result2);
  return NextResponse.json({ message: "success", data: { score: similarity}});
}
