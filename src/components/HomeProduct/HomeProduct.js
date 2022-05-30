import React from 'react';
import './HomeProduct.css';

const HomeProduct = () => {
    return (
        <div className="home-product grid grid-cols-2 gap-4 p-8 justify-items-center  ">
        <div>
          <h2 className="text-3xl font-bold pb-4">Royal Enfield Meteor 350</h2>
          <p>
            Royal Enfield Meteor 350 is available in 3 variants and 10 colours
            with top variant price starting from Rs. 2,21,983. The Royal Enfield
            Meteor 350 is powered by 349cc BS6 engine which develops a power of
            20.2 bhp and a torque of 27 Nm. With both front and rear disc brakes,
            Royal Enfield Meteor 350 comes up with anti-locking braking system.
            This Meteor 350 bike weighs 191 kg and has a fuel tank capacity of 15
            liters. The Meteor 350 is the first motorcycle from Royal Enfield’s
            new J platform. This bike replaced the famous Thunderbird . In fact, in order to cater to
            a wide range of buyers, Royal Enfield launched the Meteor 350 in three
            variants.
          </p>
          <button className="bg-yellow-200 p-2 mt-3 rounded btn"><a target="_blank" href="https://www.youtube.com/watch?v=lgQL-9yjs20" rel="noreferrer">See demo</a></button>
        </div>
        <div>
          <img className="pt-10  "
            src="https://imgd.aeplcdn.com/1280x720/bw/models/royal-enfield-meteor-350-fireball20201106124644.jpg?q=80"
            alt=""
          />{" "}
        </div>
        
      </div>
    );
};

export default HomeProduct;