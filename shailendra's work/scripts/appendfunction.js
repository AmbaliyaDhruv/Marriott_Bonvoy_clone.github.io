function appendata(data,main){

    data.map(({brand_name,filter_name,contact,hotel_name,hotele_address,main_image,place_name,price,room})=>{
let main_div=document.createElement("div")
// _____________________________________________________
let top_div=document.createElement("div")
let bottom_div=document.createElement("div")
// ---------------------------------- 
let top_left_div=document.createElement("div")
let top_righ_div=document.createElement("div")
let bottom_left_div=document.createElement("div")
let bottom_right_div=document.createElement("div")
let extra=document.createElement("div")

// ________________________________________________________
let brand_name1=document.createElement("p")
let hotel_name1=document.createElement("h2")
let price1=document.createElement("h1")
let text_rev=document.createElement("td")
let hotele_address1=document.createElement("h4")
let category1=document.createElement("th")
let main_image1=document.createElement("img")
let reiviws=document.createElement("th")
let hotel_detail=document.createElement("p")
let rate=document.createElement("h2")

brand_name1.textContent=`brand name ---${brand_name}`
hotel_name1.textContent=`${hotel_name}`
price1.textContent=`₹ ${price} /INR` 
main_image1.src=main_image
reiviws.textContent=` o o o o o`
hotel_detail.textContent=`viwe hotel detail`
hotele_address1.textContent=hotele_address
category1.textContent="Category 4"
rate.textContent="viwe rate"
text_rev.textContent="Reviews"
extra.append(category1,reiviws,text_rev)
top_left_div.append(main_image1)
top_righ_div.append(hotel_name1,hotele_address1,extra,hotel_detail)
bottom_left_div.append(price1)
bottom_right_div.append(rate)
top_div.append(top_left_div,top_righ_div)
bottom_div.append(bottom_left_div,bottom_right_div)
main_div.append(top_div,bottom_div)
main.append(main_div)




    })





}

export default appendata