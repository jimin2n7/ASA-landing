import pencilSys from "../assets/penSystem.svg"
import tagSys from "../assets/tagSystem.svg"
import stakingSys from "../assets/stakingSys.svg"
import crown from "../assets/grownSys.svg"
import slideSys from "../assets/slideSys.svg"
export const arraySystem = [
    {
        id:"1",
        title:"Sketch to Earn",
        img:pencilSys,
        desc:"Users can sketch and earn ASA tokens, the platform's native cryptocurrency. This feature encourages creativity and rewards users for contributing their art to the platform",
        class:"top-[50px] left-[100px] w-[400px]",
    },
    {
        id:"2",
        title:"Trade NFTs",
        img:tagSys,
        desc:"Users can trade NFTs by TON on ASA marketplace.",
        class:"top-[300px] left-[200px] w-[200px]",
    },
    {
        id:"3",
        title:"Staking NFTs",
        img:stakingSys,
        desc:"These NFTs offer a 10% APR, which is calculated based on the total number of mint tokens issued.",
        class:"top-[400px] left-[530px] w-[300px]",
    },
    {
        id:"4",
        title:"Campaign Event",
        img:crown,
        desc:"ASA allows users to stake their tokens or NFTs to earn additional rewards.",
        class:"top-[300px] right-[100px] w-[300px]",
    },
    {
        id:"5",
        title:"Showroom Owner",
        img:slideSys,
        desc:"Users have the autonomy to choose which showroom they would like to display their images in, giving them control over how their art is presented to potential buyers.",
        class:"top-[50px] right-[100px] w-[400px]",
    }
]