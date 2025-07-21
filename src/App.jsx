import React from "react";
import PostList from "./components/PostList";
import AddPost from "./components/AddPost";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Header />
      {/* <AddPost /> */}
      <PostList />
      <Footer />
    </div>
  );
};

export default App;
