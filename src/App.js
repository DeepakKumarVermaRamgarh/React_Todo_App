import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/globalStyles";
import {
  AppContainer,
  Footer,
  Header,
  ThemeToggle,
} from "./styles/styled-components";
import { useState } from "react";
import { darkTheme, lightTheme } from "./styles/theme";
import { ToDoList } from "./components/ToDoList";
import { ThemeTogglerSvg } from "./components/ThemeTogglerSvg";

function App() {
  // State to manage the current theme, initialized with lightTheme as default
  const [theme, setTheme] = useState(lightTheme);

  return (
    <>
      {/* ThemeProvider from styled-components used to pass the current theme */}
      <ThemeProvider theme={theme}>
        {/* AppContainer styled-component wraps the entire app */}

        <AppContainer>
          {/* ThemeToggle button, which toggles between lightTheme and darkTheme */}
          <ThemeToggle
            onClick={() =>
              theme === lightTheme ? setTheme(darkTheme) : setTheme(lightTheme)
            }
          >
            {/* ThemeTogglerSvg component renders the SVG icon based on theme */}
            <ThemeTogglerSvg theme={theme} />
          </ThemeToggle>

          {/* Header component with the title "📓 Todo List" */}
          <Header>📓 Todo List</Header>

          {/* ToDoList component that displays the list of todos */}
          <ToDoList />

          {/* Footer with a message and copyright */}
          <Footer>
            Double click on todo to edit | &copy; Deepak Kumar Verma
          </Footer>
        </AppContainer>

        {/* GlobalStyles component containing global CSS styles */}
        <GlobalStyles />
      </ThemeProvider>
    </>
  );
}

export default App;
