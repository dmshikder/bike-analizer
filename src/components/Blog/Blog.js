import React from "react";

const Blog = () => {
  return (
    <div className="p-8 grid grid-cols-2  gap-4 ">
      <div className="border-2 border-orange-200 text-left p-4 rounded">
        <h4 className="text-2xl font-bold">1. What is context API?</h4>
        <p className="text-xl pb-8">
          <span className="text-emerald-600 font-bold">Answer:</span> Context API is a component structure which provides a way to
          pass data directly to the grand child component. Prop drilling method
          is replaced by context API.
        </p>
      </div>
      <div className="border-2 border-orange-200 text-left p-4 rounded">
        <h4 className="text-2xl font-bold">2. What is semantic tag?</h4>
        <p className="text-xl">
          <span className="text-emerald-600 font-bold">Answer:</span>  semantic tag are html tag whic describes the meaning clearly.
          By using this type of tag we can provide additional information about
          that document. Some example of semantic tag are article, main, footer
          , header, nav, section
        </p>
      </div>
    </div>
  );
};

export default Blog;
