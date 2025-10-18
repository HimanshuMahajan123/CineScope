import { createContext, useContext } from "react";

export const WatchlistContext = createContext({

    watchlist : [],
    addToWatchlist : () => {},
    removeFromWatchlist : () => {}
})

export const useWatchlist = () => {
    return useContext(WatchlistContext)
}

export const WatchlistProvider = WatchlistContext