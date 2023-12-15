import React from 'react';
import ReactStars from "react-rating-stars-component";
import toast from 'react-hot-toast';

const EachReview = ({review, refetch}) => {

    const deleteReview = (review)=>{
        // console.log(user);
        const aggree = window.confirm(`Are you want to delete this user ${review.name} review`);
        if(aggree){
            // console.log("Yes Aggree");
            fetch(`https://doctor-portal-server-production-bfcb.up.railway.app/reviews/${review._id}`, {
                method: "DELETE"
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                if(data.deletedCount > 0){
                    toast.success("Delete Review Successfully")
                    refetch();
                }
            })
        }
    }

    return (
        <div className='px-4 md:px-0'>
            <div className="card w-96 bg-base-100 shadow-xl w-full">
                <div className="card-body">
                    <ReactStars
                        count={5}
                        value={review.rating}
                        size={30}
                        isHalf={true}
                        emptyIcon={<i className="far fa-star"></i>}
                        halfIcon={<i className="fa fa-star-half-alt"></i>}
                        fullIcon={<i className="fa fa-star"></i>}
                        activeColor="#ffd700"
                    />
                    <h2 className="card-title">Name: {review.name}</h2>
                    <p className='text-start'>{review.message}</p>
                    <div className="card-actions justify-start">
                        <button onClick={()=> deleteReview(review)} className="btn btn-primary">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EachReview;