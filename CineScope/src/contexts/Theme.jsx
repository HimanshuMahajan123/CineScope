import { createContext , useContext, useEffect , useState} from "react";

const ThemeContext = createContext()

export const useTheme = () => {
    const context = useContext(ThemeContext)
    if(!context){
        throw new Error("useTheme must be used within a ThemeProvider")
    }
    return context
}

export const ThemeProvider = ({children}) => {

    const [theme , setTheme] = useState(() => {
        const savedTheme = localStorage.getItem("theme")
        return savedTheme ? savedTheme : "light"
    })

    useEffect(() => {
        if(theme === "dark"){
            document.querySelector("html").classList.add("dark")    
        }
        else{
            document.querySelector("html").classList.remove("dark")
        }

        localStorage.setItem("theme" , theme)
    }, [theme])

    const toggleTheme = () => setTheme((prev) => (prev === "dark" ? "light" :"dark"))

    return(
        <ThemeContext.Provider value ={{theme , toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}