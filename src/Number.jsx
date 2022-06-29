import React from "react"
function Number()
{
    return(
        <>
        <form method="POST">
        <label for="name"></label>
        <input type="text" name="name" placeholder="NAME *"></input>
        <br/>
        <label for="email"></label>
        <input type="text" name="email" placeholder="E-MAIL *"></input>
        <br/>
        <label for="pm"></label>
        <input type="number" name="pm" placeholder="PHONE NUMBER *"></input>
        <br/>
        <label for="message"></label>
        <textarea cols="20" rows="8" name="message" placeholder="MESSAGE *"></textarea>
        <br/>
        <input type="submit" value="Submit"></input>
        <input type="reset" value="Reset"></input>
        </form>
        </>
    )
}
export default Number;