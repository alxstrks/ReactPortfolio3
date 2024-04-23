import {SiFacebook, SiInstagram, SiGithub} from 'react-icons/si'

export default function Footer() {
  return (
    <div className="text-white py-5 flex justify-between">
        <div className="text-3xl"><strong>Elon</strong> Musk</div>
        <div>Copyright EM</div>
        <div className="flex space-x-5 text-4xl">
            <a href="/"><SiFacebook /></a>
            <a href="/"><SiInstagram /></a>
            <a href="/"><SiGithub /></a>
        </div>
    </div>
  )
}
