import './Massage.sass';



function Massage(props) {
        return ( 
        <div className = {props.massage}>
            <h1> Hello, {props.text} </h1>
        </div> );
    }
 
export default Massage;