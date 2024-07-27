import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Marquee from "react-fast-marquee";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import './gallery.css'

const Gallery = () => {
    const { data: photos = [] } = useQuery({
        queryKey: ["photos"],
        queryFn: async () => {
            const res = await axios.get('/gallery.json');
            return res.data;
        }
    });

    return (
        <div className="max-w-7xl mx-auto overflow-x-hidden">
            <SectionTitle color={"My Photo"} text={"Gallery"}/>
           <div>
           <Marquee className="">
                {photos?.map(photo => (
                    <div key={photo?.id} className={` z-50 mx-5  `}>
                        <img
                            src={photo?.Image}
                            alt=""
                            className="w-48 h-52 md:w-60 md:h-72 object-cover  rounded-md img-rotat "
                        />
                    </div>
                ))}
                
            </Marquee>
           </div>
        </div>
    );
};

export default Gallery;
