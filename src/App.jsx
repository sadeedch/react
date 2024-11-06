
import MainHeader from "./Components/MainHeader";
import PostsList from "./Components/PostsList";
import { useState } from 'react';
function App() {

  const [modalIsVisible, setModalIsVisible] = useState(false);

  function showModalHandler () {
    setModalIsVisible(true);
  }

  function hideModalHandler () {
    setModalIsVisible(false);
}

  return(
    <>
    <MainHeader onCreatePost={showModalHandler}/>
    <main>
        <PostsList isPosting = {modalIsVisible} onStopPosting = {hideModalHandler}/>
   </main>
   </>
  )
}

export default App;
