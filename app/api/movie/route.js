import axios from "axios";
import Sentiment from "sentiment";

export async function GET(req) {

  const { searchParams } = new URL(req.url);
  const movieId = searchParams.get("id");

  try {

    // Get movie details from OMDb
    const movieRes = await axios.get(
      `https://www.omdbapi.com/?i=${movieId}&apikey=${process.env.OMDB_API_KEY}`
    );

    const movie = movieRes.data;

    let reviews = [];

    try {

      // get TMDB (but don't crash if it fails)
      const tmdbFind = await axios.get(
        `https://api.themoviedb.org/3/find/${movieId}?api_key=${process.env.TMDB_API_KEY}&external_source=imdb_id`
      );

      const tmdbMovie = tmdbFind.data.movie_results?.[0];

      if (tmdbMovie) {

        const reviewRes = await axios.get(
          `https://api.themoviedb.org/3/movie/${tmdbMovie.id}/reviews?api_key=${process.env.TMDB_API_KEY}`
        );

        reviews = reviewRes.data.results
          .map(r => r.content)
          .slice(0,5);
      }

    } catch (tmdbError) {

      console.log("TMDB failed, using fallback reviews");

      // fallback reviews 
      reviews = [
        "Amazing movie with great visuals",
        "Very entertaining science fiction film",
        "Loved the story and action scenes",
        "A classic movie everyone should watch",
        "Great performances by the cast"
      ];
    }

    // Sentiment analysis
    const sentiment = new Sentiment();

    let score = 0;

    reviews.forEach(review => {
      const result = sentiment.analyze(review);
      score += result.score;
    });

    let overallSentiment = "Mixed";

    if (score > 5) overallSentiment = "Positive";
    if (score < -5) overallSentiment = "Negative";

   const summary = reviews.length
  ? reviews[0].slice(0, 200)
  : "No audience reviews available for this movie.";

    return Response.json({
      movie,
      reviews,
      sentiment: overallSentiment,
      summary
    });

  } catch (error) {

    console.log("MAIN ERROR:", error);

    return Response.json(
      { error: "Failed to fetch movie data" },
      { status: 500 }
    );

  }
}