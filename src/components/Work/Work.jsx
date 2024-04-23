import Computer from "./computer.PNG";

export default function Work() {
  return (
    <div className="pb-44" id="work">
        <div className="text-secondary flex items-center space-x-12">
            <h1 className="text-6xl">work</h1>
            <div className="border-t-4 border-secondary w-full"></div>
        </div>
        <p className="text-white lg:px-44 py-12 text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut omnis commodi itaque? Officia assumenda odit debitis at dicta dignissimos eaque sequi quidem cumque esse doloremque, recusandae, laboriosam autem molestiae. Consectetur, non? Minus ducimus nostrum molestiae assumenda, veniam natus totam aut tenetur, nam magnam facilis doloribus dolores itaque. Dolorem mollitia iste inventore omnis tempore, fugiat autem laudantium illum asperiores culpa voluptas!
        </p>
        <div className="md:flex md:space-x-12 h-[60vh] justify-between text-white  text-center">
            <div>
                <img src={Computer} alt="work" className="object-scale-down max-h-full"/>
                <h2 className="text-3xl">My project</h2>
                <p className="text-lg">Project dsecription</p>
            </div>
            <div>
                <img src={Computer} alt="work" className="object-scale-down max-h-full"/>
                <h2 className="text-3xl">My project2</h2>
                <p className="text-lg">Project dsecription2</p>
            </div>
        </div>
    </div>
  )
}
