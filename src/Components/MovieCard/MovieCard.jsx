
import { toast } from 'react-toastify';
import tag from '../../assets/tag.svg';
import { getCoverImageUrl } from "../../util/cine-utility";
import { movieContext } from '../Context/context';
import MovieDetailsModal from '../MovieDetailsModal/MovieDetailsModal';
import Rating from '../Rating/Rating';
import { useContext, useState } from 'react';

const MovieCard = ({movie})=> {

    const [showModal,setShowModal] = useState(false);
    const [selectedMovie,setSelectedMovie] = useState(null);

    const {state,dispatch} = useContext(movieContext);

    const handleCloseModal = ()=> {

        setSelectedMovie(null);
        setShowModal(false);
    }

    const handleMovieSelection=(movie) =>{
        setSelectedMovie(movie)
        setShowModal(true)
    }

    const handleAddToCart = (e,movie) =>{
        e.preventDefault();
        e.stopPropagation();

        const found = state.cartDetails.find(cart =>{
            return  cart.id === movie.id
        })

        if(!found){
            
                dispatch({
                    type:"ADD_TO_CART",
                    payload:{
                        ...movie
                    }
                })
            toast.success(`${movie.title} has been added to the cart successfully`,{
                position: "bottom-right",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            })

        }else{
            toast.error(`${movie.title} has been added to the cart already`,{
                position: "bottom-right",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            })
        }

      
    }

  return (
    <>
    {
        showModal &&
        <MovieDetailsModal
            selectedMovie={selectedMovie}
            onClose={handleCloseModal}
            onAddCart={handleAddToCart}
        ></MovieDetailsModal>
    }
    <figure
      className="p-4 border-2 border-black/10 shadow-sm dark:border-white/10 drop-shadow-md md:drop-shadow-xl rounded-xl"
    >
        <a href="#" onClick={()=>handleMovieSelection(movie)}>
            <img
                className="w-full h-[500px] object-cover"
                src={getCoverImageUrl(movie.cover)}
                alt={movie.title}
            />
            <figcaption className="pt-4">
                <h3 className="text-xl mb-1">{movie.title}</h3>
                <p className="text-[#575A6E] text-sm mb-2">{movie.genre}</p>
                <div className="flex items-center space-x-1 mb-2">
                <Rating value={movie.rating}></Rating>
                </div>
                <button
                className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-bold text-m"
                href="#"
                onClick={(e)=>handleAddToCart(e,movie)}
                >
                <span>{movie.price}$</span>
                <img src={tag} alt="tag" />
                <span>| Add to Cart</span>
                </button>
            </figcaption>
        </a>
    </figure>
    </>
  );
};

export default MovieCard;
