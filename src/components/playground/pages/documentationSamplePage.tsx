import { Component } from "solid-js";
import PlaygroundDocumentation from "../../playgroundDocumentation";

const DocumentationSamplePage: Component = () => {
  return(
    <>
      <div class='flex flex-col justify-center px-4 sm:px-6'>
        <div class='flex flex-col w-full max-w-screen-2xl gap-y-1 pb-6'>
          <h6 class="font-semibold text-sm text-am-pink">
            Pages
          </h6>
          <h1 class="font-semibold font-display text-3xl text-slate-800 dark:text-slate-200">
            Documentation
          </h1>
        </div>

        <PlaygroundDocumentation/>
      </div>
    </>
  )
}

export default DocumentationSamplePage