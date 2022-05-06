const apiConfig = {
  baseUrl: "https://api.themoviedb.org/3/",
  apiKey: "44359baef4e2629e404804c911cf02f6",
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;
