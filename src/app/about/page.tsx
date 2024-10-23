import Header from "../../component/header"
import Image from "next/image"

export default function About(){
    return(
        <div className="about">
            <div>
                <Image  src="/image/Rectangle 8.png" width="270" height="265" alt="Rectangle8" className="Rectangle8" />
                <Image  src="/image/Rectangle 9.png" width="270" height="345" alt="Rectangle9" className="Rectangle9" />
                <Image  src="/image/Rectangle 10.png" width="270" height="140" alt="Rectangle10" className="Rectangle10" />
            </div>
            <div className="about-dis">
                <h1 className="h-about">About</h1>
                <p className="p-about">Lorem Ipsum is simply dummy text of the printing and typesetting 
                    industry. Lorem Ipsum has been the industry's standard dummy text 
                    ever since the 1500s, when an unknown printer took a galley of type 
                    and scrambled it to make a type specimen book. It has survived not 
                    only five centuries, but also the leap into electronic typesetting,
                    remaining essentially unchanged.
                </p>
                <div className="read-div">
                <Image  src="/image/Group 12.png" width="123" height="24" alt="Group12" className="Group12" />
                </div>   
            </div>
        </div>
    );
}
