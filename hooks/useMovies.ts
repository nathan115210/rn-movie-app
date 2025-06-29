// hooks/useMovies.ts
import {useState, useCallback, useEffect, useRef} from 'react';

export type Movie = {
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string;
};

export type OmdbResponse = {
    Search: Movie[];
    totalResults: string;
    Response: 'True' | 'False';
    Error?: string;
};

const API_KEY = 'c6a8cb87';

export const useMovies = (searchKey?: string) => {

    const searchQuery = searchKey || 'iron'; // Default search query if none provided
    const [movies, setMovies] = useState<Movie[]>([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState<number | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const initialLoadRef = useRef(true);
    const fetchMovies = useCallback(async () => {
        if (loading || (totalPages && page > totalPages)) return;
        setLoading(true);
        setError(null);
        try {
            const res = await fetch(`https://www.omdbapi.com/?s=${searchQuery}&page=${page}&apikey=${API_KEY}`);
            const data: OmdbResponse = await res.json();

            if (data.Response === 'True') {
                setMovies(prev => page === 1 ? data.Search : [...prev, ...data.Search]);
                const total = Math.ceil(parseInt(data.totalResults, 10) / 10);
                setTotalPages(total);
            } else {
                setError(data.Error || 'Unknown error');
            }
        } catch (err) {
            setError('Fetch failed');
        } finally {
            setLoading(false)
        }
    }, [loading, page, totalPages, searchQuery]);

    // When the search query changes, reset state and load page 1
    useEffect(() => {
        if (!initialLoadRef.current) {
            setMovies([]);
            setPage(1);
            setTotalPages(null);
        }
    }, [searchQuery]);

    // Fetch only when searchQuery or page changes
    useEffect(() => {
        if (initialLoadRef.current) {
            initialLoadRef.current = false;
        } else {
            fetchMovies();
        }
    }, [searchQuery, page]);

    const fetchMore = () => {
        if (!loading && (!totalPages || page < totalPages)) {
            setPage(prev => prev + 1);
        }
    };

    return {
        movies,
        loading,
        error,
        fetchMore,
    };
};
