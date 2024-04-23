export default function Contact() {
  return (
    <div className="pb-44" id="Contact">
        <div className="text-secondary flex items-center space-x-12">
            <h1 className="text-6xl">contact</h1>
            <div className="border-t-4 border-secondary w-full"></div>
        </div>
        <p className="text-white lg:px-44 py-12 text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore nam recusandae dignissimos quae, perferendis qui officiis nihil deleniti magni aut eligendi doloribus neque repellat nobis perspiciatis labore laborum, est provident.
        </p>
        <form className="text-white px-12 lg:px-64">
            <label htmlFor="name">Name</label><br/>
            <input className="bg-black border-b-2 border-white w-[90%]" type="text" id="name" name="name" /><br/><br/>
            <label htmlFor="email">Email</label><br/>
            <input className="bg-black border-b-2 border-white w-[90%]" type="text" id="email" name="email" /><br/><br/>
            <label htmlFor="info">Comments</label><br/>
            <textarea name="info" id="info" rows="6" className="bg-black w-[90%] border-b-2 border-white"></textarea><br />
            <div className="flex justify-center">
                <input className="mt-5 border-b-4 border-white hover:bg-white hover:bg-opacity-10 cursor-pointer" type="submit" value="Click here to Submit" />
            </div>
        </form>
    </div>  
  )
}
