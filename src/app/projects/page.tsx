import Image from "next/image"


export default function Projects(){
    return(
        <div className="projects">
            <div className="projects-img">
                <div className="sample">
                    <h1 className="sample-h">Sample<br />Project</h1>
                </div>
            <Image src="/image/image 15.png" width="570" height="255" alt="image15" className="image15" />
            <Image src="/image/image 16.png" width="270" height="255" alt="image16" className="image16" />
            <Image src="/image/image 17.png" width="470" height="255" alt="image17" className="image17" />
            <Image src="/image/image 18.png" width="370" height="255" alt="image18" className="image18" />
            <Image src="/image/Frame 11.png" width="222" height="71" alt="frame11" className="frame11" />

            </div>
        </div>
    )
}