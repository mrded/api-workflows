export const getAccessToken = async () => {
  const result = await Bun.$`gcloud auth print-access-token`.text();
  return result.trim();
};

export const getIdentityToken = async (audience?: string) => {
  const cmd = audience
    ? Bun.$`gcloud auth print-identity-token --audiences=${audience}`
    : Bun.$`gcloud auth print-identity-token`;
  const result = await cmd.text();
  return result.trim();
};
