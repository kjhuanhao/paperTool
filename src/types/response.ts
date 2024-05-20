interface DropResponse{
  data: {
    score: number;
  }
  message: string;
}

interface ChatResponse {
  data: {
    result: string;
    score: number;
  };
  message: string;
}
