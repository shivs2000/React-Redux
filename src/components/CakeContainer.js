import React from 'react';
import {connect } from 'react-redux';
import buyCake from '../redux/cake/CakeActions'
const CakeContainer = (props) => {
    return ( 
      <div>
       <h2>Number of cakes:-{props.numberOfCakes}</h2>
       <button onClick={props.buyCake}>buy cake</button>
      </div> 
      );
}



const mapStateToProps=(state)=>{

  return{
   numberOfCakes:state.cake.numberOfCakes,

  }
}
const mapDispatchToprops=(dispatch)=>{

   return {
    buyCake:()=>dispatch(buyCake())
    }

}
 
export default connect(mapStateToProps,mapDispatchToprops)(CakeContainer);