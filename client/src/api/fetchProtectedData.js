export const fetchProtectedData = async (accessToken) => {
  const response = await fetch("http://localhost:5000/api/protected", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  return response.json();
};
