import React from 'react';
import {connect} from 'react-redux';
import {buyIceCream} from '../redux/iceCream/IceCreamAction'

function IceCreamContainer(props) {
    return (
        <div>
            <h2>Number of iceCream:-{props.numberOfIceCream}</h2>
            <button onClick={props.buyIceCream}> ICECREAMS</button>
        </div>
    );
}


const mapStateToProps=(state)=>{
    return { 
        numberOfIceCream:state.iceCream.numberOfIceCream,
    }

}
const mapDispatchToprops=(dispatch)=>{
return {

    buyIceCream:()=>dispatch(buyIceCream()),
}

}
export default connect(mapStateToProps,mapDispatchToprops)(IceCreamContainer);

