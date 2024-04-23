import Computer from "./computer.PNG";

export default function Work() {

    const ProjectImages = [
        {href:Computer, title: 'My Project', desc: 'Project Description'},
        {href:Computer, title: 'My Project2', desc: 'Project Description2'},
    ]


  return (
    <div className="lg:pb-24" id="work">
        <div className="text-secondary flex items-center space-x-12">
            <h1 className="text-6xl">work</h1>
            <div className="border-t-4 border-secondary w-full"></div>
        </div>
        <p className="text-white xl:px-44 py-12 text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut omnis commodi itaque? Officia assumenda odit debitis at dicta dignissimos eaque sequi quidem cumque esse doloremque, recusandae, laboriosam autem molestiae. Consectetur, non? Minus ducimus nostrum molestiae assumenda, veniam natus totam aut tenetur, nam magnam facilis doloribus dolores itaque. Dolorem mollitia iste inventore omnis tempore, fugiat autem laudantium illum asperiores culpa voluptas!
        </p>
        <div className="flex space-x-12 justify-between text-white  text-center">
            {
                ProjectImages.map((curr) => (
                    <div>
                        <img src={curr.href} alt={curr.title} className="object-scale-down max-h-full"/>
                        <h2 className="text-3xl">{curr.title}</h2>
                        <p className="text-lg">{curr.desc}</p>
                    </div>
                ))
            }
        </div>
    </div>
  )
}
