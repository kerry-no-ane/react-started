import React from "react";
import Article from "./Article";
import * as FooBar from "./components/FooBar";
import Hoge from "./components/Hoge";

const Blog = () => {
  return (
    <>
      <Article title={"Reactの基本知識"} />
      <FooBar.Foo />
      <FooBar.Bar />
      <Hoge />
    </>
  );
};

export default Blog;
