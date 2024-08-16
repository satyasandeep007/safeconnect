export const getSafeTransactions = async (chainId: string, address: string) => {
  const url = `https://safe-client.safe.global/v1/chains/${chainId}/safes/${address}/transactions/history`;

  return [];
};
