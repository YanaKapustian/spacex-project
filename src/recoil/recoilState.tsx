import { atom } from "recoil";

export interface Props {
  id: string;
  title: string; 
  flight: { 
    [x: string]: any; 
    links: { 
      flickr_images: string[]; 
    };
  };
}
//default value
let stringified = '{"__typename":"History","flight":{"__typename":"Launch","links":{"__typename":"LaunchLinks","flickr_images":["https://farm1.staticflickr.com/601/33026465643_462ef7a2cb_o.jpg","https://farm3.staticflickr.com/2850/32996438264_b79ca3664b_o.jpg","https://farm4.staticflickr.com/3956/32996437434_4dab1ae8e3_o.jpg","https://farm4.staticflickr.com/3831/32996435084_6c5662caca_o.jpg","https://farm4.staticflickr.com/3775/32915200224_b6ecfabd7e_o.jpg","https://farm4.staticflickr.com/3886/32915199874_b826eac153_o.jpg","https://farm3.staticflickr.com/2842/32915199514_6c44178e87_o.jpg","https://farm4.staticflickr.com/3771/32915198904_2df85aed05_o.jpg","https://farm4.staticflickr.com/3668/32915198334_d2fa2f16ab_o.jpg","https://farm4.staticflickr.com/3955/32915197674_24d6e27cf5_o.jpg","https://farm4.staticflickr.com/3830/33616913981_f04b6e2351_o.jpg","https://farm4.staticflickr.com/3819/33616913111_e699b48d66_o.jpg","https://farm4.staticflickr.com/3835/33361035860_c57ed61239_o.jpg","https://farm4.staticflickr.com/3783/33361035200_bfb797d38f_o.jpg","https://farm4.staticflickr.com/3698/33611796351_54d5a6d65a_o.jpg","https://farm3.staticflickr.com/2857/33611795531_82cc2d8789_o.jpg"]},"mission_name":"SES-10"},"id":"16","title":"First Reflight"}'

export const favToursState: any = atom({
   key: "favToursState",
   default: [JSON.parse(stringified)] as Props[]
 });