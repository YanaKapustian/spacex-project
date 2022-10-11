import { useRecoilState } from "recoil";
import { favToursState } from "../../recoil/recoilState";
import { Block } from "../../styledComponents/CardStyles";
import Card from "./Card";
import Outline from "./Outline";
import { Props } from "../../recoil/recoilState";

const Cards: React.FC = () => {
   const [favTours] = useRecoilState<Array<Props>>(favToursState);
   let lg = Array.from(Array(Math.ceil(3 - (favTours.length % 3))).keys());
   if (favTours.length === 0) lg = [0, 1, 2];
   
   return (
      <Block>
            {favTours.map((el: Props) => <Card key={el.id} {...el} favorite></Card>)}
            {lg.map(el => <Outline key={el}></Outline>)}
      </Block>
   );
}
 
export default Cards;