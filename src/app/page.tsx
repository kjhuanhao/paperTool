"use client";
import  { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DropSkeletonCard } from "@/components/DropSkeletonCard";
import { dropRequest } from "@/services/dropRequest";
import { chatRequest } from "@/services/chatRequest";
import { Loader2 } from "lucide-react";

export default function Home() {
  const [originText, setOriginText] = useState("");
  const [citationText, setCitationText] = useState("");
  const [score, setScore] = useState<number>();
  const [isGenerating, setIsGenerating] = useState(false);
  const [resultScore, setResultScore] = useState<number>();
  const [resultText, setResultText] = useState("");
  return (
    <main className="flex min-h-screen min-w-full flex-col items-center py-24">
      <h1 className="text-4xl mb-20">AI论文降重工具</h1>
      <div className="flex flex-col md:flex-row gap-5 items-center">
        <div className="flex items-center flex-col mb-5 md:mb-0">
          <h2 className="text-2xl mb-5">原文</h2>
          <Textarea
            className="w-[290px] md:w-[410px] h-52 text-md"
            placeholder="在这里输入你的原文..."
            onChange={(e) => {
              setOriginText(e.target.value);
            }}
          />
        </div>
        <div className="flex items-center flex-col">
          <h2 className="text-2xl mb-5">引文</h2>
          <Textarea
            className="w-[290px] md:w-[410px] h-52 text-md"
            placeholder="在这里输入你的引文..."
            onChange={(e) => {
              setCitationText(e.target.value);
            }}
          />
        </div>
      </div>
      {isGenerating ? (
        <Button disabled className="my-10">
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Please wait
        </Button>
      ) : (
        <Button
          className="my-10"
          onClick={() => {
            setIsGenerating(true);
            dropRequest({ originText, citationText }).then((res) => {
              setScore(res.data.score);
            });
            chatRequest({ originText, citationText }).then((res) => {
              setResultScore(res.data.score);
              setResultText(res.data.result);
              setIsGenerating(false);
            });
          }}
        >
          Convert
        </Button>
      )}
      <div className="flex items-center flex-col">
        <h2 className="text-2xl mb-5">结果</h2>
        <p className="mb-2 text-red-700">
          原文和引文相似度计算结果: {score?.toFixed(2)}
        </p>
        {resultScore && (
          <Card className="w-[290px] md:w-[600px]">
            <CardHeader>
              <CardTitle>降重结果</CardTitle>
              {/* <CardDescription className="mt-3">与引文相似度: {resultScore?.toFixed(2)}</CardDescription> */}
            </CardHeader>
            <CardContent>
              <p>{resultText}</p>
            </CardContent>
          </Card>
        )}
        {/* <DropSkeletonCard/> */}
      </div>
    </main>
  );
}
