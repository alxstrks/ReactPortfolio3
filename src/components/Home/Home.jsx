import Portrait from "./SuitPortrait.PNG"

export default function Home() {
  return (
    <div id="home">
        <div className="md:grid grid-cols-2 text-white h-screen">
            <div className="my-auto space-y-5">
                <p className="text-xl">Hello, I'm Elon Musk</p>
                <h1 className="text-8xl text-secondary">Full stack<br /> Developer</h1>
                <p className="font-semibold underline">something something</p>
            </div>
            <div className="flex">
                <img src={Portrait} alt="portrait" className="h-[65vh] rounded-xl my-auto"/>
            </div>
        </div>
    </div>
  )
}
