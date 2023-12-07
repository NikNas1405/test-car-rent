// import {
//   CarListStyled,
//   CarsItemStyled,
//   LinkStyled,
//   Title,
//   ImageHolder,
// } from './FilmsList.styled';

// export const FilmsList = ({ movies }) => {
//   return (
//     <CarListStyled>
//       {movies.map(movie => (
//         <CarsItemStyled key={movie.id}>
//           <ImageHolder>
//             <img
//               src={
//                 movie.poster_path
//                   ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
//                   : 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700'
//               }
//               alt={movie.title}
//             />
//           </ImageHolder>
//           <TextHolder>
//             <Title>{movie.title || movie.original_title}</Title>
//             <Description></Description>
//           </TextHolder>
//           <Button>Learn more</Button>
//         </CarsItemStyled>
//       ))}
//     </CarListStyled>
//   );
// };
