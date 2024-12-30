import Button1 from "./Button1";
function Pricecard(props){
return(
<>

<div className="price-card text-center">
    <div className="icon">
    <div className={`icon-box-1 ${props.bgColor}`}>
        <div className="circle-1">
        <h1>{props.num}</h1>
        </div>

        </div>
    </div>
    <div className="heading-text">
        <h6>{props.heading}</h6>
        <p>{props.para}</p>
    </div>
    <div className="list-detail">
        <ul>
            <li><p>{props.para1}</p></li>
            <li><p>{props.para2}</p></li>
            <li><p>{props.para3}</p></li>
            <li><p>{props.para4}</p></li>
        </ul>
    </div>
    <div className="link-1">
    <Button1 path="#" name="Choose Plan"></Button1>
    </div>
</div>













</>
);
}
export default Pricecard;