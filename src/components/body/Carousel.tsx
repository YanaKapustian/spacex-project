import React, { MouseEventHandler } from "react";
import Slider from "react-slick";
import { useQuery, gql } from '@apollo/client';
import Card from "./Card";
import { BeigeNext, BeigePrev } from "../../styledComponents/CardStyles";
import { atom, selector, useSetRecoilState, useRecoilState, useRecoilValue } from "recoil";
import { favToursState } from "../../recoil/recoilState";
import { Props } from "../../recoil/recoilState";

const GET_SPACEX = gql`
  query GetSpaceX {
    histories {
      flight {
        links {
          flickr_images
        }
        mission_name
      }
      id
      title
    }
  }
`

function PrevArrow(props: any) {
  const { onClick } = props;
  return (
     <BeigePrev
        style={{ }}
        onClick={onClick}
      >
        <svg style={{ position: 'absolute', top: '9px'}} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.5 5L8.5 12L15.5 19" stroke="#200E32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </BeigePrev>
  );
}

function NextArrow(props: any) {
  const { onClick } = props;
  return (
     <BeigeNext
        style={{ }}
        onClick={onClick}
      >
        <svg style={{ position: 'absolute', top: '9px', transform: 'rotate(180deg)'}} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.5 5L8.5 12L15.5 19" stroke="#200E32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </BeigeNext>
  );
}

const Carousel: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow></PrevArrow>,
  };
  
  const {loading, error, data} = useQuery(GET_SPACEX)

  if (loading) return <>Loading...</>
  if (error) return <>Error: ${error.message}</>

  let relevant = data.histories.filter((el: Props) => el.flight !== null && el.id && el.title && el.flight['mission_name'] && el.flight.links.flickr_images[0])

  return (
    <div>
    <Slider {...settings}>
    {relevant.map((el: Props) => <Card key={el.id} {...el}></Card>)}
    </Slider>
    </div>
  );
}
 
export default Carousel;