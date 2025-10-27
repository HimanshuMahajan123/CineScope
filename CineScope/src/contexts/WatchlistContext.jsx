import { createContext, useContext, useEffect, useState } from "react";


//Create Context
const WatchlistContext = createContext()

//Custom Hook for accessing context easily
export const useWatchlist = () => {
    const context = useContext(WatchlistContext)
    if(!context){
        throw new Error("useWatchlist must be used within a WatchlistProvider")
    }
    return context
}

//Holds the logic + state for the watchlist
export const WatchlistProvider = ({children}) => {

    const [watchlist , setWatchlist] = useState([])

    //Load watchlist from localStorage on mount
    useEffect(() => {
        console.log("0")
        const saved = localStorage.getItem("watchlist")
        // console.log("Loaded watchlist from localStorage:" , saved)
        if(saved && saved.length > 0){
            setWatchlist(JSON.parse(saved))
        }
    } , [])

    //Save watchlist to localStorage when it changes
    useEffect(() => {
        console.log("1");
        localStorage.setItem("watchlist" , JSON.stringify(watchlist))
    } , [watchlist])


    const addToWatchlist = (item) => {

        setWatchlist((prev) => {
            if(prev.find((prevItem) => prevItem.id === item.id && prevItem.mediaType === item.mediaType)){
                return prev
            }
            return [...prev , item]
        })
    }

    const removeFromWatchlist = (id , mediaType) => {

        setWatchlist((prev) => 
            prev.filter((item) => !(item.id === id && item.mediaType === mediaType))
        )
    }

    //Provide all values to children
    return (
        <WatchlistContext.Provider value={{watchlist , addToWatchlist , removeFromWatchlist}}>
            {children}
        </WatchlistContext.Provider>
    )
}