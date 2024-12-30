function Card1(props){
return(
<>
<div className="card-a">
<div className={`icon-box ${props.bgColor}`}>
            <div className="icon text-center">
        
            <i className={props.iconClass}></i>
            </div>
          </div>
          <div className="text text-center">
            <h6>{props.text}</h6>
            <p>{props.para}</p>
          </div>
        </div>



</>
);
}

export default Card1;
