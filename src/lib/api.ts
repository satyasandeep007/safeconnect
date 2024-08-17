export const getSafeTransactions = async (chainId: string, address: string) => {
  const url = `https://safe-client.safe.global/v1/chains/${chainId}/safes/${address}/transactions/history`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch transactions");
  }

  const data = await response.json();

  return data?.results?.filter((tx: any) => tx.type === "TRANSACTION");
};

export const getSafeTokens = async (chainId: string, address: string) => {
  const url = `https://safe-client.safe.global/v1/chains/${chainId}/safes/${address}/balances/usd?trusted=false`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch transactions");
  }

  const data = await response.json();

  return data;
};

export const getSafeCollectibles = async (chainId: string, address: string) => {
  const url = `https://safe-client.safe.global/v2/chains/${chainId}/safes/${address}/collectibles`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch transactions");
  }

  const data = await response.json();

  return data;
};

export const getTrendData = async () => {
  try {
    const url = `https://api.coingecko.com/api/v3/search/trending`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Failed to fetch transactions");
    }

    const data = await response.json();

    return data;

    return data.coins;
  } catch (error) {
    console.log(error);
  }
};

export const getCryptoMarketData = async () => {
  try {
    const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d`;

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Failed to fetch transactions");
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getCoinData = async (coinid: any) => {
  try {
    const url = `https://api.coingecko.com/api/v3/coins/${coinid}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=true&sparkline=false`;

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Failed to fetch transactions");
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getSearchResult = async (query: any) => {
  try {
    const url = `https://api.coingecko.com/api/v3/search?query=${query}`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Failed to fetch transactions");
    }

    const data = await response.json();

    return data.coins;
  } catch (error) {
    console.log(error);
  }
};

export const getNftsData = async () => {
  try {
    const url = "https://api.coingecko.com/api/v3/nfts/list?per_page=10&page=1";
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Failed to fetch transactions");
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getMarketChartData = async (id: any, days: any) => {
  try {
    const url = `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}&interval=daily`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Failed to fetch transactions");
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};
