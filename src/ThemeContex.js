import { useState, createContext } from 'react'


const Themecontext = createContext()

function ThemeProvider({children}) {
    const [theme, setTheme] = useState('dark')
    const toggleTheme = () => {
        setTheme(theme==='dark'?'light':'dark')
    }
    const value ={
        theme,
        toggleTheme
    }
    return <Themecontext.Provider value={value}>
        {children}
    </Themecontext.Provider>
}


export { ThemeProvider,Themecontext }