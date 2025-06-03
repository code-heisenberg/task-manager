
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext.jsx';

function About() {

    const { theme, setTheme } = useContext(ThemeContext);
    console.log(theme)
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">About Us</h1>
      <p className="text-lg text-center max-w-2xl">
        We are a team of passionate developers dedicated to building amazing web applications. Our mission is to create user-friendly and efficient software solutions that make a difference.
      </p>
      <p>Current Theme: {theme}</p>
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>Switch Theme</button>
    </div>
  );
}
export default About;