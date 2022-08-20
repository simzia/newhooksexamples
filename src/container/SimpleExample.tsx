import { ThemeContextProvider } from "../components/context/ThemeContext";
import { Box } from "../components/context/Box";

function SimpleExample() {
    return (
        <div className="App">
            <ThemeContextProvider>
                <Box />
            </ThemeContextProvider>
        </div> 
    )
}

export default SimpleExample