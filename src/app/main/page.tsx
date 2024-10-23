import Image from "next/image"


export default function Main(){
    return(
        <div className="main">
            <div className="main-img">
                <Image src="/image/Rectangle 6.png" width="770" height="829" alt="rectangle6" className="rectangle6" />
                <Image src="/image/Frame 10.png" width="222" height="71" alt="frame10" className="frame10" />
            </div>
            <div>
                <p className="project">PROJECT</p>
                <p className="lorem">Lorem</p>
            </div>
        </div>
    )
}