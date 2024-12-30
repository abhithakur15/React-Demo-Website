import Flogo from "./../assets/footer-logo.png";

function Footer(){
return(
<>
<footer>
<div className="container">
    <div className="row justify-content-center">
        <div className="col-lg-10">
<div className="text-center">
    <img src={Flogo} alt="" className="footer-logo" />
</div>
        </div>
        <div className="col-lg-10">
            <div className="social-media">
                <ul className="mb-0">
                    <li><a href="#" class="facebook"><i class="fa-brands fa-facebook"></i></a></li>
                    <li><a href="#" class="twitter"><i class="fa-brands fa-twitter"></i></a></li>
                    <li><a href="#" class="pintrest"><i class="fa-brands fa-pinterest"></i></a></li>
                    <li><a href="#" class="instagram"><i class="fa-brands fa-instagram"></i></a></li>
                </ul>
            </div>
        </div>
        <div className="col-lg-10">
            <div className="text-footer text-center">
                <p className="mb-0">© copyright 2020 by Layerdrops.com</p>
            </div>
        </div>
    </div>
</div>






</footer>
</>
);
}
export default Footer;