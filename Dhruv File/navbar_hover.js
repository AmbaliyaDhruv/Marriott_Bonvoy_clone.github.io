let flage=true;
let box=document.querySelector(".hoverOuter")
function clickOn(){
    if(flage){
        box.innerHTML=` <div class="hover">
        <div id="find_reserve">
            <div class="find_reserve_vacation">Looking for Vacation Packages ? <a href="">ROOM+FLIGHT</a>&nbsp;<a href="">ROOM+CAR</a></div>
            <div class="find_reserve_inner">
                <div class="find_reserve_destination">
                    Destination
                    <br>
                    <input type="text" placeholder="city,airport,attraction or address" id="HotelNameinput">
                </div>
                <div class="find_reserve_dates">
                    Dates
                    <br>
                    <input type="text" id="Datesinput">

                </div>
                <div class="find_reserve_findHotels">
                    <button id="HotelsSubmit">FIND HOTELS</button>
                </div>
            </div>
            <div class="find_reserve_class">
                <a href="">Find a Hotel</a><br>
                <a href="">Find a Hotel for Group(10+room)</a><br>
                <a href="">Browse by Destination</a><br>
                <a href="">Browse by Interest</a><br>
                <a href="">Lookup Reservation</a><br>
                <a href="">Worldwode Telephone Reservation</a><br>
                <a href="">Find a Private Home Rental</a><br>
            </div>
        </div>  
    </div>`
        flage=false;
    }
    else{
        box.innerHTML=null;
        flage=true;
    }
}

function clickOn1(){
    if(flage){
        box.innerHTML=` <div class="hover">
      <div id="special_offers">
          <div class="special_offers_first">
              <div>Deals</div>
              <div>Resorts:Save up to 20%</div>
          </div>
          <div class="special_offers_second">
              <div>Gift Cards</div>
              <div>Shop Marriott</div>
              <div>Shop Westin</div>
          </div>
          <div class="special_offers_third">
              <img src="https://cache.marriott.com/marriottassets/universal-nav/deals/MR_UnivNav_Deals_clsc.jpg?&interpolation=progressive-bilinear&downsize=600px:*" width="100%" height="100%" alt="">
          </div>
          <div class="special_offers_foruth">
              <div class="special_offers_foruth_1st">Exclusive getaways,member offers & more</div>
              <div class="special_offers_foruth_2nd">SEE ALL SAVINGS</div>
          </div>
      </div>
  </div>`
        flage=false;
    }
    else{
        box.innerHTML=null;
        flage=true;
    }
}