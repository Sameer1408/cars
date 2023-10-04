

function Card({ele,image}) {
   console.log(ele);
    return (
    <div className="Card">
     <div className="CardImg" style={{backgroundImage:`url(${image})`}}>
      </div>
     <div className="name">
        <p>{ele?.name}</p>
        <button className="btn" disabled={true}>{ele?.year}</button>
     </div>
     <div className="box4">
      <div>
      <i class="ri-group-line"></i>
      <p>{ele.people} People</p>
      </div>
      <div>
      <i class="ri-gas-station-line"></i>
      <p>{ele.type}</p>
      </div>
      <div>
      <i class="ri-speed-up-fill"></i>
      <p>{ele.average} kmph</p>
      </div>
      <div>
      <i class="ri-settings-6-line"></i>
      <p>{ele.gear}</p>
      </div>
     </div>

      <hr></hr>
      <div className="cardLast">
         <p>${ele.rent}
            <span>/month</span>
            </p>
         <div>
            <div id="heart">
            <i class="ri-heart-3-line"></i>
            </div>
            <div id="rate">
               Rate now
            </div>
         </div>
      </div>
    </div>
    );
  }
  export default Card;