import Image from "next/image"

export default function Home(){
  return <>
  <header className="">
    <h1 className="text-[80px] text-center mt-[80px] text-green-500 font-feeling">Flavia</h1>
    <p className="text-center mt-[20px] text-slate-400 text-[20px]">A minimal dark theme for VS code and sublime text editor.</p>
  </header>

  <div className="flex justify-center mt-[80px]">
    <Image 
      src='/images/CodeSnippet.png'
      alt='Image'
      width={1280}
      height={1022}
      className="rounded-lg shadow-2xl max-sm:h-[240px] max-sm:w-[360px] mx-auto"
    />
  </div>

  <div className="flex gap-4 justify-center max-sm:items-center max-sm:flex-col max-sm:p-5 mt-[100px]">
  <a href="https://marketplace.visualstudio.com/items?itemName=ShahAbulKalam.flavia-dark" target="_blank" rel="noopener noreferrer">
    <div className="flex items-center gap-5 rounded-md bg-slate-700 w-[280px] px-[30px] py-3 max-sm:px-5  transition-transform duration-300 hover:-translate-y-3 delay-140">
      <Image
        src='/images/VSCodeIcon.png'
        alt="VSCode"
        width={100}
        height={100}
      />
      <p className="text-slate-100 mt-2">Download <br/>for VS Code</p>
    </div>
  </a>

  {/* <a href="https://marketplace.visualstudio.com/vscode" target="_blank" rel="noopener noreferrer" className="cursor-not-allowed"> */}
  <div className="flex items-center gap-5 rounded-md bg-slate-700 w-[280px] px-[30px] py-3 max-sm:px-5 ">
      <Image
        src='/images/Sublime.svg'
        alt="Sublime"
        width={100}
        height={100}
          
      />
      <p className="text-slate-100 mt-2">Soon on <br/> Sublime</p>
    </div>
  {/* </a> */}
  </div>

  <div className="text-center text-slate-300 text-[26px] mt-[120px]">
    <h1>Color Palette</h1>
    <div>
    <div className="flex justify-center gap-8 mt-6">
      <div title="#ffa7a6" className="rounded-full h-[32px] w-[32px] bg-[#ffa7a6] transition-transform duration-300 hover:-translate-y-2 delay-140"></div>
      <div title="#6ff254" className="rounded-full h-[32px] w-[32px] bg-[#6ff254] transition-transform duration-300 hover:-translate-y-2 delay-140"></div>
      <div title="#aa2fbc" className="rounded-full h-[32px] w-[32px] bg-[#aa2fbc] transition-transform duration-300 hover:-translate-y-2 delay-140"></div>
      <div title="#ff00a7" className="rounded-full h-[32px] w-[32px] bg-[#ff00a7] transition-transform duration-300 hover:-translate-y-2 delay-140"></div>
      <div title="#009bdb" className="rounded-full h-[32px] w-[32px] bg-[#009bdb] transition-transform duration-300 hover:-translate-y-2 delay-140"></div>
      <div title="#ffdf35" className="rounded-full h-[32px] w-[32px] bg-[#ffdf35] transition-transform duration-300 hover:-translate-y-2 delay-140"></div>
    </div>
    <div className="flex justify-center gap-8 mt-6">
      <div title="#d7dce2" className="rounded-full h-[32px] w-[32px] bg-[#d7dce2] transition-transform duration-300 hover:-translate-y-2 delay-140"></div>
      <div title="#28b95c" className="rounded-full h-[32px] w-[32px] bg-[#28b95c] transition-transform duration-300 hover:-translate-y-2 delay-140"></div>
      <div title="#00776c" className="rounded-full h-[32px] w-[32px] bg-[#00776c] transition-transform duration-300 hover:-translate-y-2 delay-140"></div>
      <div title="#6679a4"  className="rounded-full h-[32px] w-[32px] bg-[#6679a4] transition-transform duration-300 hover:-translate-y-2 delay-140"></div>
      <div title="#1b1b27" className="rounded-full h-[32px] w-[32px] bg-[#1b1b27] transition-transform duration-300 hover:-translate-y-2 delay-140"></div>
      <div title="#101019" className="rounded-full h-[32px] w-[32px] bg-[#101019] transition-transform duration-300 hover:-translate-y-2 delay-140"></div>
    </div>
    </div>
  </div>

  <footer className="mt-[120px]">
    <div className="flex justify-center">
    <Image
      src='/images/Flavia.png'
      alt="Flavia"
      width={100}
      height={100}
      className="rounded-full"
    />
    </div>

    <a href="https://iamshah.xyz" target="_blank" rel="noopener noreferrer">
    <div className="flex justify-center mt-[40px]">
      <h1 className="border border-green-500 rounded-md px-5 py-2 mb-[50px] text-slate-100 hover:bg-green-500 cursor-pointer" style={{ transitionDuration: "0.5s" }}>Made by Shah</h1>
    </div>
    </a>

  </footer>

  </>
}