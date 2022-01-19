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



function clickOn2(){
    if(flage){
        box.innerHTML=` <div class="hover">
        <div id="vacation">
             <div class="vacation_first">
                 <div onclick="movevacationpage()">Vacations</div>
                 <div>Explore Destination</div>
                 <div>Homes & Villas</div>
                 <div>Residences</div>
                 <div>Marriott Vacation Club</div>
             </div>
             <div class="vacation_second">
                 <div>The Ritz-Carlton</div>
                 <div>All-Inclusive Vacations</div>
                 <div>Hotel & Flight</div>
                 <div>Cars,Tours & Activities</div>
                 <div>Travel Tipes</div>
                 <div>Dine + Drink</div>
             </div>
             <div class="vacation_third">
                 <img src="https://cache.marriott.com/marriottassets/universal-nav/meetings-and-events/Nav_Vacations_feature_Large.png?&interpolation=progressive-bilinear&downsize=600px:*" width="100%" height="100%" alt="">
             </div>
             <div class="vacation_fourth">
                 <div class="vacation_fourth_1st">Imagine Your Dream Vacation</div>
                 <div class="vacation_fourth_2nd">Get inspiration and plan your next getaway.</div>
                 <div class="vacation_fourth_3rd" onclick="movevacationpage()" >EXPLORE VACATION</div>
             </div>
        </div>
    </div>
`
        flage=false;
    }
    else{
        box.innerHTML=null;
        flage=true;
    }
}


function movevacationpage(){
    window.location.href="vaction.html"
}


function clickOn5(){
    if(flage){
        box.innerHTML=` <div class="hover">
        <div id="about_marriott">
            <div class="about_marriott_first">
                <div>Sign In</div>
                <div>Marriott Bonvoy Overview</div>
                <div>Member Benefits</div>
                <div>How to Earn Points</div>
            </div>
            <div class="about_marriott_second">
                <div>How to Use Points/Certificates</div>
                <div>Marriott Bonvoy Credit Card</div>
                <div>Marriott Insiders</div>
            </div>
            <div class="about_marriott_third">
                <img src="https://cache.marriott.com/marriottassets/universal-nav/rewards/JoinMR_photo_121918.jpg?&interpolation=progressive-bilinear&downsize=600px:*" width="100%" height="100%" alt="">
            </div>
            <div class="about_marriott_foruth">
                <div class="about_marriott_foruth_1st">Join Marriott Bonvoy</div>
                <div class="about_marriott_foruth_3rd">
                    <ul>
                        <li>Enjoy our lowest rates</li>
                        <li>Free in-room Wi-Fi</li>
                        <li>Mobile check-in and more</li>
                    </ul>
                </div>
                <div class="about_marriott_foruth_2nd">JOIN NOW</div>
            </div>
        </div>
    </div> `
        flage=false;
    }
    else{
        box.innerHTML=null;
        flage=true;
    }
}
