export const fetcher = async (url) => {
  const response = await fetch(url);

  if (response.status !== 200) {
    throw new Error(`An error occurred while fetching the data`);
  }

  return response.json();
};
