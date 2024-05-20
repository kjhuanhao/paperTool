export function cosineSim(A: number[], B: number[]): number {
  if (A.length !== B.length) {
    throw new Error("The vectors must be of the same length");
  }

  let dotproduct = 0;
  let mA = 0;
  let mB = 0;

  for (let i = 0; i < A.length; i++) {
    dotproduct += A[i] * B[i];
    mA += A[i] * A[i];
    mB += B[i] * B[i];
  }

  mA = Math.sqrt(mA);
  mB = Math.sqrt(mB);

  if (mA === 0 || mB === 0) {
    throw new Error(
      "One of the vectors is zero, cannot compute cosine similarity"
    );
  }

  const similarity = dotproduct / (mA * mB);

  return similarity;
}
