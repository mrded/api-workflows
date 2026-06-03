const getToken = async () => {
  const result = await Bun.$`gcloud auth print-access-token`.text();
  return result.trim();
};

export const api = async (
  method: string,
  url: string,
  body?: unknown,
) => {
  const token = await getToken();

  const response = await fetch(url, {
    method,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: body ? JSON.stringify(body) : undefined,
  });

  return response;
};
