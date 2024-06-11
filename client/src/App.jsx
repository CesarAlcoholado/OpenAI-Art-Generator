import { ImageResults } from "./components/imageResults/ImageResults";
import { Header } from "./components/header/Header";
import { useState } from "react";
function App() {
  const [listOfImages, setListOfImages] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div>
      <Header setListOfImages={setListOfImages} setIsLoading={setIsLoading} setError={setError}/>
      <ImageResults listOfImages={listOfImages} isLoading={isLoading} error={error}/>
    </div>
  );
}

export default App
