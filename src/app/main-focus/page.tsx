import Image from "next/image"


export default function Mainfocus(){
    return(
        <div >
            <h1 className="focus-h1">Main Focus/Mission Statement</h1>
            <div className="focus-div1">
                <Image src="/image/1.png" width="120" height="140" alt="1" className="img1" />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur,
                     lectus et facilisis placerat.</p>
            </div>
            <div className="focus-div2">
                <Image src="/image/2.png" width="120" height="140" alt="2" className="img2" />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur, lectus et facilisis placerat, 
                    magna mauris porttitor tortor, a auctor est felis ut nisl.</p>
            </div>
        </div>
    )
}