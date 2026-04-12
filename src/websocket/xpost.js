import wizkid from "./assetsX/wizkid.webp"
import asake from "./assetsX/asake.jpg"
import ayra from "./assetsX/ayra.jpg"
import davido from "./assetsX/davido.jpg"
import lay from "./assetsX/lay.jpg"
import ckay from "./assetsX/ckay.jpg"
import burna from "./assetsX/burna.jpg"
import rema from "./assetsX/rema.jpg"
import tems from "./assetsX/tems.jpg"
import './xpost.css'






const Xpost=()=>{

    return(<>
    
    <div className="x-root-div">

        <div>
            <div>
                <h3>TEAM A</h3>
                 <div className="img-div">
                
                <img src={wizkid} alt=''/>
                <img src={asake} alt=''/>
                <img src={ayra} alt=''/>
                </div>

                </div>
<div>
                <h3>TEAM B</h3>
                 <div className="img-div">
                
                <img src={davido} alt=''/>
                <img src={lay} alt=''/>
                <img src={ckay} alt=''/>
                </div>

                </div>
                <div>
                <h3>TEAM C</h3>
                 <div className="img-div">
                
                <img src={burna} alt=''/>
                <img src={rema} alt=''/>
                <img src={tems} alt=''/>
                </div>

                </div>
        </div>
        </div>
    </>)
}

export default Xpost;