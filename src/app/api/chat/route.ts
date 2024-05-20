import { NextRequest, NextResponse } from "next/server";
import { ChatOpenAI, OpenAIEmbeddings } from "@langchain/openai";
import { cosineSim } from "../drop/similarity";

export async function POST(request: NextRequest) {
  const requestClone = request.clone();
  const body: DropRequest = await requestClone.json();
  const prompt = `你是一个论文降重助手，你需要根据我给你的原文，对原文进行降重，并返回降重后的文本。 \
  注意：可以对词语进行替换，以达到降低相似度的效果，还可以进行小部分改写，只改写原文，只改写原文！！！，不需要改引文，降低和引文的相似度 \
  (你需要通过调整主谓宾语序替换同义词、增减字数等方法，来达到论文去重的目的。请你修改下面这段文字：原文：${body.originText})\n\
  引文: ${body.citationText}`;
  const chatModel = new ChatOpenAI({
    model: "gpt-3.5-turbo",
    temperature: 0.6,
  });
  const result = await chatModel.invoke(prompt);
  // 计算相似度
  // const embedModel = new OpenAIEmbeddings({
  //   model: "text-embedding-3-small",
  // });
  // const result1 = await embedModel.embedQuery(body.citationText);
  // const result2 = await embedModel.embedQuery(result.content as string);
  // const similarity = cosineSim(result1, result2);
  return NextResponse.json({
    message: "success",
    data: { result: result.content, score: 1},
  });
}
