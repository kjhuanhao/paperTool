export async function dropRequest(data: DropRequest): Promise<DropResponse>{
  const response = await fetch('/api/drop',{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  const responseData: DropResponse = await response.json();
  return responseData;
}