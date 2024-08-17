export const getSafeTransactions = async (chainId: string, address: string) => {
  const url = `https://safe-client.safe.global/v1/chains/${chainId}/safes/${address}/transactions/history`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch transactions");
  }

  const data = await response.json();

  return data?.results?.filter((tx: any) => tx.type === "TRANSACTION");
};
