import {buildReleaseImagePath, formatRating} from "../../src/services/TMDB";

describe(
	"TMDB service",
	() => {
		test(
			"should return the complete image path",
			() => {
				const posterPath = "/e1mjopzAS2KNsvpbpahQ1a6SkSn.jpg";

				expect(buildReleaseImagePath(posterPath)).toBe(
					`https://image.tmdb.org/t/p/w500${posterPath}`,
				);
			},
		);

		test(
			"should return the release rating as percentage",
			() => {
				const voteAverage = 5.91;

				expect(formatRating(voteAverage)).toBe("59.1");
			},
		);
	},
);
