import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'



export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam-core.p.rapidapi.com/',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', '370cae1365msh6cd6ad328d93bdcp193545jsn35ebee6c9df4');

            return headers;
        },
    }),
    endpoints: (builder) => ({
        getTopCharts: builder.query({ query: () => 'v1/charts/world' }),

        getSongsByGenre: builder.query({ query: (genre) => `v1/charts/genre-world?genre_code=${genre}`
    }),

        getSongDetails: builder.query({ query: ({ songid }) => `v1/tracks/details?track_id=${songid}` }),

        getSongRelated: builder.query({
            query: ({ songid }) => `v1/tracks/related?track_id=${songid}`
        }),
        getArtistDetails: builder.query({ query: (artistId) => `v2/artists/details?artist_id=${artistId}` }),

        getSongsByCountry: builder.query({query: (countryCode) => `v1/charts/country?country_code=${countryCode}` }),
        getSongsBySearch: builder.query({ query: (searchTerm) => `v1/search/multi?search_type=SONGS_ARTISTS&query=${searchTerm}` })
    }),
});

export const {
    useGetTopChartsQuery,
    useGetSongsByGenreQuery,
    useGetSongDetailsQuery,
    useGetSongRelatedQuery,
    useGetArtistDetailsQuery,
    useGetSongsByCountryQuery,
    useGetSongsBySearchQuery,  
    
} = shazamCoreApi;