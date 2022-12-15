import React from "react";

function Blogs() {
  return (
    <div
      id="blogs"
      className="bg-neutral-800 flex flex-col justify-start items-start w-full p-5"
    >
      <div className="text-primary font-head text-[3.75rem] border-b-4 border-[#6B4748] w-full text-left md:pl-[8rem] xl:pl-[12rem]">
        Blogs
      </div>
      <div className="flex flex-wrap flex-col md:flex-row justify-around items-center w-full p-2 xl:p-4">
        <div className="bg-primary mb-4 md:pb-2 h-[25rem] md:h-[23rem] w-[15rem] md:w-[20rem]  rounded-[1rem] flex flex-col justify-between items-start p-2">
          <div className="font-body text-left text-secondary text-4xl">
            JavaScript: Synchronous or Asynchronous?
          </div>
          <div className="text-left">
            The basic definition of javascript is that Javascript is synchronous
            single-threaded language, but what does it mean? Let's go through it
            one by one, javascript is synchronous which means ...
          </div>

          <a
            className="p-2 m-2 rounded-full w-[5rem] text-center bg-secondary text-white border-2 border-[#6B4748]"
            href="https://hashnode.com/post/javascript-synchronous-or-asynchronous-ckz7fv9e205labbs1ekfi6b6m"
            target="_blank"
          >
            Read
          </a>
        </div>
        <div className="bg-primary mb-4 md:pb-2 h-[25rem] md:h-[23rem] w-[15rem] md:w-[20rem]  rounded-[1rem] flex flex-col justify-between items-start p-2">
          <div className="font-body text-left text-secondary text-4xl">
            UseContext hook for beginners
          </div>
          <div className="text-left">
            In react when we want to use some value from one component to
            another we generally pass it as a prop but continuously passing
            those props through components can result to prop drilling so to
            avoid that we use context.
          </div>

          <a
            className="p-2 m-2 rounded-full w-[5rem] text-center bg-secondary text-white border-2 border-[#6B4748]"
            href="https://hashnode.com/post/usecontext-hook-for-beginners-cl4r5fzhe02wx9vnv43w01jox"
            target="_blank"
          >
            Read
          </a>
        </div>
      </div>
    </div>
  );
}

export default Blogs;
