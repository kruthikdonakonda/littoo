import React from "react"
function Yourelf()
{
    return(
        <>
        <form method="POST">
        <label for="Name"></label>
        <input type="text" name="Name" placeholder="NAME *"></input>
        <br/>
        <label for="Job"></label>
        <input type="text" name="Job" placeholder="OCCUPATION *"></input>
        <br/>
        <label for="Place"></label>
        <input type="text" name="Place" placeholder="ADDRESS *"></input>
        <br/>
        <label for="DBL"></label>
        <input type="text" name="DBL" placeholder="DESIRED BUSSINNESS LOCATION *"></input>
        <br/>
         <label for="PYPTOO"></label>
         <input type="text" name="PYPTOO" placeholder="PLACE YOUR PREFER TO OPEN OUTLET *"></input>
         <br/>
         <label for="Email"></label>
         <input type="text" name="Email" placeholder="E-MAIL *"></input>
         <br/>
         <label for="CN"></label>
         <input type="number" name="CN" placeholder="CONTACT NUMBER *"></input>
         <br/>
         <label for="CTFC"></label>
         <input type="time" name="CTFC" placeholder="CONVENIENT TIME FOR CALL "></input>
         <br/>
         <label for="RBHYCTK"></label>
         <input type="text" name="RBHYTCK" placeholder="REFERRED BY/HOW YOU COME TO KNOW *"></input>
         <br/>
         <label for="LCATI"></label>
         <input type="text" name="LCATI" placeholder="LIQUID CAPITAL AVAILABLE TO INVEST *"></input>
         <br/>
         <label for="TFOSB"></label>
         <input type="time" name="TFOSB" placeholder="TIME FRAME ON STARTING BUSINESS *"></input>
         <br/>
         <label for="WAYDTFT"></label>
         <input type="text" name="WAYDTFT" placeholder="WHOM ARE YOU DELIVERING THIS FROM TO *"></input>
         <br/>
         <label for="AM"></label>
         <textarea cols="20" rows="8" name="AM" placeholder="ADDITIONAL MESSAGE *"></textarea>
         <br/>
         <input type="submit" value="Submit"></input>
         <input type="reset" value="Reset"></input>
        </form>
        </>
    )
}
export default Yourelf;