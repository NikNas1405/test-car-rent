// import { useState } from 'react';

// import { ModalOverlay } from '../Modal/Modal';

// import {
//   ImageGalleryItem,
//   ImageGalleryItemImage,
// } from './ImageGalleryItem.styled';

// export default function CarItem({ imgLarge, tags, imgUrl }) {
//   const [showModal, setShowModal] = useState(false);

//   const toogleModal = () => {
//     setShowModal(showModal => !showModal);
//   };

//   return (
//     <ImageGalleryItem className="gallery-item">
//       <ImageGalleryItemImage
//         onClick={toogleModal}
//         src={imgUrl}
//         alt={tags}
//         width="240"
//         loading="lazy"
//       />
//       {showModal && (
//         <ModalOverlay
//           largeUrl={imgLarge}
//           tags={tags}
//           isOpen={showModal}
//           onClick={toogleModal}
//         />
//       )}
//     </ImageGalleryItem>
//   );
// }

// <CarsItemStyled key={movie.id}>
//   <ImageHolder>
//     <img
//       src={
//         movie.poster_path
//           ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
//           : 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700'
//       }
//       alt={movie.title}
//     />
//   </ImageHolder>
//   <TextHolder>
//     <Title>{movie.title || movie.original_title}</Title>
//     <Description></Description>
//   </TextHolder>
//   <Button>Learn more</Button>
// </CarsItemStyled>;
