export default function About() {
    const skills  = [
        {name: 'Front-End', desc: 'design and development'},
        {name: 'Python', desc: 'design and development'},
        {name: 'Machine Learning', desc: 'design and development'},
    ]

  return (
    <div className="lg:pb-24 max-lg:pt-12" id="about">
        <div className="text-secondary flex items-center space-x-12">
            <h1 className="text-6xl">about</h1>
            <div className="border-t-4 border-secondary w-full"></div>
        </div>
        <p className="text-white xl:px-44 py-12 text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut omnis commodi itaque? Officia assumenda odit debitis at dicta dignissimos eaque sequi quidem cumque esse doloremque, recusandae, laboriosam autem molestiae. Consectetur, non? Minus ducimus nostrum molestiae assumenda, veniam natus totam aut tenetur, nam magnam facilis doloribus dolores itaque. Dolorem mollitia iste inventore omnis tempore, fugiat autem laudantium illum asperiores culpa voluptas!
        </p>
        <div className="lg:flex space-x-12 justify-around text-center">
            {
                skills.map((curr) => (
                    <div className="text-white">
                        <h1 className="text-4xl">{curr.name}</h1>
                        <p>{curr.desc}</p>
                    </div>
                ))
            }
        </div>
    </div>
  )
}
