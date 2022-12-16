import {Component, createMemo, createSignal } from "solid-js";
import lightLogoUrl from "../../assets/images/ambient_logo_black_new.png";
import darkLogoUrl from "../../assets/images/ambient_logo_white_new.png";
import Button from "../../assets/components/button.styled";
import DarkModeToggle, { darkMode } from "../shared/darkModeToggle";
import { useLocation } from "@solidjs/router";
import { css } from "solid-styled";

const NavBar: Component = () => {

  const location = useLocation();
  const pathname = createMemo(() => location.pathname);

  css`
    .menuBG {
      display: flex;
      transition: all 0.5s;
    }
    .menuShown {
      transform: translateX(0) !important;
    }
    .anim-menu {
      transition: all 0.5s;
    }
  `

  const [mobileMenu, setMobileMenu] = createSignal(false)

  return (
    <>
      <nav class="h-screen w-screen hidden justify-end fixed
      backdrop-blur-sm z-[100] bg-neutral-50 dark:bg-[#181819]
      bg-opacity-60 dark:bg-opacity-70" classList={{menuBG: mobileMenu()}}>
        <div class="absolute h-screen border-l p-4 py-3 sm:px-6 lg:px-10 flex flex-col justify-between
         backdrop-blur-md bg-neutral-50 dark:bg-[#181819] 
         border-l-neutral-200 dark:border-l-neutral-800 
        bg-opacity-80 dark:bg-opacity-90 w-64 max-w-full translate-x-full shadow-xl anim-menu" 
        classList={{menuShown: mobileMenu()}}>
          <div class="flex space-x-2 w-full justify-end">
            <a onClick={() => setMobileMenu(false)}>
              <Button>
                <i class="bi bi-list"></i>
              </Button>
            </a>
          </div>
          <div class="flex flex-col space-y-2 w-full pt-[1px] justify-start text-end">
            <a href="/playground" 
            class="font-medium text-lg font-display 
            text-slate-700 dark:text-slate-300 rounded-lg 
            hover:text-slate-900 hover:-translate-x-1 transition-all"
            classList={{['font-bold']: pathname() == '/playground'}}>
              Playground
            </a>
            <a href="https://github.com/kevintyj/ambient" 
            class="font-medium text-lg font-display 
            text-slate-700 dark:text-slate-300 rounded-lg 
            hover:text-slate-900 hover:-translate-x-1 transition-all"
            classList={{['font-bold']: pathname() == '/github'}}>
              Github
            </a>
            <a href="/coming-soon" 
            class="font-medium text-lg font-display 
            text-slate-700 dark:text-slate-300 rounded-lg 
            hover:text-slate-900 hover:-translate-x-1 transition-all"
            classList={{['font-bold']: pathname() == '/coming-soon'}}>
              Documentation
            </a>
          </div>
          <div class="flex flex-col space-y-2 w-full items-end">
            <a href="https://github.com/kevintyj/ambient">
              <Button>
                <i class="bi bi-github"></i>
              </Button>
            </a>
            <a href="/coming-soon">
              <Button>
                Documentation
              </Button>
            </a>
            <a href="https://kevintyj.com" class="font-medium text-sm font-display text-slate-700 dark:text-slate-300 rounded-lg hover:text-slate-900 underline pt-1">by Kevin (Taeyoon) Jin</a>
          </div>
        </div>
      </nav>
      <nav class="border-b h-14 px-4 sm:px-6 lg:px-10 flex justify-center fixed backdrop-blur-md backdrop-brightness-125
      bg-neutral-50 dark:bg-[#181819] border-b-neutral-200 dark:border-b-neutral-800 
      bg-opacity-80 dark:bg-opacity-90 w-full z-50">
        <div class="flex items-center w-full max-w-screen-2xl">
          <div class="flex items-center space-x-4 w-full pt-[1px]">
            <div class="-mt-1">
              <a href="/" class="block dark:hidden w-28"><img src={lightLogoUrl} alt={"Ambient Logo"}/></a>
              <a href="/" class="hidden dark:block w-28"><img src={darkLogoUrl} alt={"Ambient Logo"}/></a>
            </div>
            <a href="https://kevintyj.com" class="font-medium text-sm font-display text-slate-700 dark:text-slate-300 rounded-lg hover:text-slate-900 underline pr-4 hidden sm:block">by Kevin (Taeyoon) Jin</a>

            <a href="/playground" 
            class="font-medium text-sm font-display text-slate-700 dark:text-slate-300 rounded-lg hover:text-slate-900 hidden md:block"
            classList={{['font-bold']: pathname() == '/playground'}}>
              Playground
            </a>
          </div>
          <div class="flex items-center space-x-2">
            <a href="/coming-soon" class="hidden md:block">
              <Button>
                Documentation
              </Button>
            </a>
            <a href="https://github.com/kevintyj/ambient">
              <Button>
                <i class="bi bi-github"></i>
              </Button>
            </a>
            <DarkModeToggle/>
            <a onClick={() => setMobileMenu(true)} class="block md:hidden">
              <Button>
                <i class="bi bi-list"></i>
              </Button>
            </a>
          </div>
        </div>
      </nav>
    </>
  )
}

export default NavBar;
