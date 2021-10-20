import React from 'react';
import './Training.css';

const Training = () => {
    return (
        <div>
            <div className="container py-5">
                <div className="row details d-flex align-items-center justify-content-center">
                    <div className="col-md-6">
                        <div className="trainig-img">
                            <img className="img-fluid" src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="details">
                            <h1 className='text-center'>It’s One-on-Wonderful</h1>
                            <p>Here at Crunch, we focus on bringing you the most powerful workouts to meet your needs: our toolbox includes weighted battle ropes, kettlebells, TRX® suspension straps, MMA equipment, Bulgarian Bags, and the list goes on. It may sound like a mouthful, but this world-class functional training equipment helps our trainers provide you with an array of High Intensity Interval Training (HIIT) workouts.Our Crunch Fitness locations offer HIITZone, an all-encompassing fitness program including personal training, small group training, and nutrition.Let’s make a lunge date!</p>
                        </div>
                    </div>
                </div>
                <div className="row py-5 details d-flex align-items-center justify-content-center">
                    <div className="col-md-6">
                        <div className="details">
                            <h1 className='text-center'>Personal Training</h1>
                            <p>You can think of personal training like our secret sauce – it’s the fastest and safest way to get seriously awesome results. Our experienced trainers develop fun (yes, fun!) individualized fitness programs that incorporate cutting-edge exercises and nutrition to help you crush your fitness goals. Plus, Crunch Fitness personal trainers in the HIITZone program use the Combative Training Center to help you reach your fitness goals.With specialized certifications that ensure you’re getting an effective workout, our trainers provide limitless motivation for everyone. You don’t need to be a professional athlete or aspiring fitness guru to be part of our programs. And if you’re already a professional athlete, we still want to hang with you.</p>
                            <div className="training-btn text-center mx-auto">
                            <button>Learn More</button></div>
                            
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="training-img">
                            <img className="img-fluid" src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80" alt="" />
                        </div>
                    </div>
                </div>
                <div className="row details d-flex align-items-center justify-content-center">
                    <div className="col-md-6">
                        <div className="">
                            <h1 className='text-center'>Small Group Training</h1>
                            <p>Get sweaty with your best friend or make a new workout buddy on the turf in our group training sessions! With a team environment to motivate you through that last rep, your results are waiting just behind that punching bag. Our trainers will keep you challenged and engaged with expert attention on your road to glory Speak to your favorite personal trainer to learn more about small group training sessions at your club. There are tons of fun small group training programs to choose from under the HIITZone umbrella</p>
                            <div className="training-btn text-center">
                            <button>Learn More</button></div>
                            
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="training-img">
                            <img className="img-fluid" src="https://images.unsplash.com/photo-1580086319619-3ed498161c77?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1469&q=80" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Training;