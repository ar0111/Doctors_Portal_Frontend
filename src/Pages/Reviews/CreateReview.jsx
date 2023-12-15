import React from 'react';
import ReactStars from "react-rating-stars-component";
import toast from 'react-hot-toast';

const CreateReview = () => {
    let rating;
    const ratingChanged = (newRating) => {
       rating = newRating;
    //    resetRatings(newRating);
    };

    const resetRatings = ()=>{
        rating = 0;
    }


    const handleReview = (event) =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const message = form.message.value;
        console.log(name, message, rating);

        const review = {
            name,
            message, 
            rating
        }

        fetch('https://doctor-portal-server-production-bfcb.up.railway.app/reviews', {
            method: "POST",
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(review)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.acknowledged){
                toast.success('Added Review Successfully');
                event.target.reset();
            }
            else{
                toast.error(data.message);
            }
        })

        // console.log(review);
    }

    

    return (
        <div className='mt-20 px-6 md:px-0'>
            <hr className='border-2' />
            <h1 className='text-start my-6 text-2xl'>Give Your Review</h1>
            <div className='flex flex-col md:flex-row'>
                <div className='basis-1/4'>
                        <form onSubmit={handleReview}>
                            <div className="sm:col-span-3">
                                <label className="text-start block text-sm font-medium leading-6 text-gray-900">Name</label>
                                <div className="mt-2">
                                    <input type="text" name="name" id="first-name" autoComplete="given-name" className="p-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                                </div>
                            </div>

                            <div className="sm:col-span-3 my-3">
                                <label className="text-start block text-sm font-medium leading-6 text-gray-900">Type Your Comment</label>
                                <div className="mt-2">
                                    <textarea id="about" name="message" rows="4" className="p-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
                                </div>
                            </div>

                            <div className="sm:col-span-3 my-3">
                                <label className="text-start block text-sm font-medium leading-6 text-gray-900">Rating</label>
                                <div className="mt-2">
                                    <ReactStars
                                        count={5}
                                        onChange={ratingChanged}
                                        size={30}
                                        isHalf={true}
                                        emptyIcon={<i className="far fa-star"></i>}
                                        halfIcon={<i className="fa fa-star-half-alt"></i>}
                                        fullIcon={<i className="fa fa-star"></i>}
                                        activeColor="#ffd700"
                                    />
                                </div>
                            </div>

                            <input className="btn btn-info w-full my-3" type="submit" value="Submit" />
                        </form>
                </div>   
            </div>
        </div>
    );
};

export default CreateReview;