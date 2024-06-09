const getCoin = axios //

export useGetCoin = useQuery<InfoData>(
    ["info", coinId],
    () => fetchCoinInfo(`${coinId}`)
  );