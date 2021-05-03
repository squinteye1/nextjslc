import { getStrapiMedia } from "@/lib/strapi/media";
import Image from "next/image";

const Images = ({ image, style }) => {
  const imageUrl = getStrapiMedia(image);
  console.log(imageUrl);
  const checkImage =
    imageUrl.length > 0
      ? imageUrl
      : "https://res.cloudinary.com/du5zxnv4a/image/upload/v1617543479/we_love_pizza_b524f280cd.jpg";

  return (
    <Image
      src={checkImage}
      alt="test"
      width={500}
      height={300}
      layout="intrinsic"
      loading="lazy"
      style={style}
    />
  );
};

export default Images;
