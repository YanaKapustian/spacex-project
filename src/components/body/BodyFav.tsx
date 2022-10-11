import { Container } from '../../styledComponents/MainStyles';
import { useRecoilState } from 'recoil';
import { favToursState } from '../../recoil/recoilState';
import { ClearAll } from '../../styledComponents/CardStyles';
import Cards from './Cards';
import { Props } from "../../recoil/recoilState";

const BodyFav: React.FC = () => {
   const [, setFavTours] = useRecoilState<Array<Props>>(favToursState);
   
   function removeFavs() {
      setFavTours([])
   }

  return (
    <div>
      <Container margin="60px auto">
         <ClearAll onClick={removeFavs}>Clear all</ClearAll>
         <Cards></Cards>
      </Container>
    </div>
  );
}

export default BodyFav;