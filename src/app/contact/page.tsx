import Image from "next/image"

export default function Contact(){
    return(
        <div className="contact">
            <h1 className="contact-us">Contact Us</h1>
            <div className="contact-input">
                <input type="text"  placeholder="Name" className="input1"></input>
                <input type="number"  placeholder="Phone no" className="input2"></input>
                <input type="email"  placeholder="Email" className="input3"></input>
                <input type="text"  placeholder="Interested In" className="input4"></input>
                <input type="text"  placeholder="Message" className="input5"></input>
            </div> 
            <div className="contact-img">
            <Image src="/image/image 12.png" width="749" height="369" alt="image12" className="image12" />

            </div>
            <Image src="/image/Frame 12.png" width="222" height="71" alt="frame12" className="frame12" />

        </div>
    )
}