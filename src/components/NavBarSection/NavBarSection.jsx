import { SiGithub } from 'react-icons/si';

export default function NavBarSection() {
    const navigation = [
        {name: 'Home', href: '#home'},
        {name: 'About', href: '#about'},
        {name: 'Work', href: '#work'},
    ]

    return (
    <div className="py-5 hidden lg:block">
        <div className="flex justify-between">
            <div className="text-white font-normal text-4xl"><p><strong>Elon</strong> Musk</p></div>
            <div className="flex space-x-12">
                {
                    navigation.map((curr) => (
                        <a key={curr.name} href={curr.href} className="text-white  text-2xl">
                            {curr.name}
                        </a>
                    ))
                }
            </div>
            <a href="/" className="text-white text-4xl"><SiGithub /></a>
        </div>
    </div>
  )
}
