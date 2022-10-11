import { useRecoilState } from "recoil";
import { favToursState } from "../../recoil/recoilState";
import { BlueBtn, CardBlock, DFSpaceBetween, Img, InfoBlock, Subtitle, Title } from "../../styledComponents/CardStyles";
import { Beige } from "../../styledComponents/NavbarStyles";
import { Props } from "../../recoil/recoilState";

interface PropsWFav extends Props {
   favorite?: boolean;
}

const Card = (props: PropsWFav) => {
   const [favTours, setFavTours] = useRecoilState<Array<Props>>(favToursState);
   let {id, title, favorite } = props;
   let mission = props.flight['mission_name'];
   let image = props.flight.links.flickr_images[0];

   function handleRemove() {
      let i = favTours.findIndex((el: { id: string; }) => el.id === id)
      setFavTours([...favTours.slice(0, i), ...favTours.slice(i + 1)])
   }

   function handleAdd() {
      let i = favTours.findIndex((el: { id: string; }) => el.id === id)
      if (i !== -1) return;
      setFavTours([...favTours, props])
   }
   return (
      <CardBlock>
         <Img src={image}></Img>
         <InfoBlock>
            <Title>{title}</Title>
            <Subtitle>{mission}</Subtitle>
            <DFSpaceBetween>
               <BlueBtn>BUY</BlueBtn>
               <Beige big onClick={favorite ? handleRemove : handleAdd}>
                  {!favorite ? <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M6.98311 3.31529C3.31152 4.49738 1.67386 8.50569 2.90482 12.3295C3.52947 14.1301 4.54534 15.7485 5.88004 17.0762C7.71101 18.8545 9.72254 20.4194 11.8849 21.7491L12.1304 21.8961C12.3656 22.0369 12.6598 22.0344 12.8926 21.8897L13.1218 21.7473C15.2812 20.4194 17.2927 18.8545 19.1174 17.0824C20.4584 15.7485 21.4743 14.1301 22.0937 12.3452C23.3291 8.50801 21.6847 4.4978 18.012 3.31535L17.7463 3.23623C16.0624 2.77309 14.273 3.0013 12.7645 3.85535L12.4964 4.01429L12.233 3.85623C10.6419 2.95344 8.7404 2.75003 6.98311 3.31529ZM11.8746 5.35427L12.0714 5.49538C12.3307 5.68111 12.6806 5.67742 12.936 5.48625C14.266 4.49057 15.9873 4.20082 17.5641 4.70669C20.4097 5.62284 21.7047 8.78096 20.7064 11.882C20.165 13.4417 19.2687 14.8696 18.0916 16.0405L17.5636 16.5421C16.141 17.8642 14.6026 19.061 12.9691 20.1156L12.5013 20.4098L12.644 20.4998C10.5805 19.2308 8.65375 17.7319 6.90582 16.0343C5.73505 14.8696 4.83877 13.4417 4.29207 11.8664C3.29808 8.77801 4.58746 5.62212 7.43153 4.70646C8.93331 4.22339 10.5706 4.46289 11.8746 5.35427ZM16.3703 6.98374C15.9855 6.86093 15.5739 7.07304 15.451 7.45749C15.3281 7.84194 15.5404 8.25316 15.9252 8.37597C16.6814 8.61735 17.2206 9.29803 17.2881 10.101C17.322 10.5031 17.6757 10.8017 18.0782 10.7679C18.4807 10.7341 18.7796 10.3807 18.7457 9.97853C18.6288 8.58859 17.6917 7.40551 16.3703 6.98374Z" fill="#1E1E1E"/>
                  </svg> : <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.8249 9.9682C19.8249 9.9682 19.2819 16.7032 18.9669 19.5402C18.8169 20.8952 17.9799 21.6892 16.6089 21.7142C13.9999 21.7612 11.3879 21.7642 8.77991 21.7092C7.46091 21.6822 6.63791 20.8782 6.49091 19.5472C6.17391 16.6852 5.63391 9.9682 5.63391 9.9682" stroke="#1E1E1E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M21.2082 6.73969H4.25024" stroke="#1E1E1E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M17.9407 6.73967C17.1557 6.73967 16.4797 6.18467 16.3257 5.41567L16.0827 4.19967C15.9327 3.63867 15.4247 3.25067 14.8457 3.25067H10.6127C10.0337 3.25067 9.5257 3.63867 9.3757 4.19967L9.1327 5.41567C8.9787 6.18467 8.3027 6.73967 7.5177 6.73967" stroke="#1E1E1E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  }
               </Beige>
            </DFSpaceBetween>
         </InfoBlock>
      </CardBlock>
   );
}
 
export default Card;