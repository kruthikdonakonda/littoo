import React from "react"
function Form()
{
    return(
        <>
        <form method="POST">
            <label for="NAME">Name:</label>
            <input type="text" name="NAME" placeholder="NAME"></input>
            <br/>
            <label for="EMAIL">Email:</label>
            <input type="text" name="EMAIL" placeholder="EMAIL"></input>
            <br/>
            <label for="DOB">Date:</label>
            <input type="date" name="DOB" placeholder="DD-MM-YY"></input>
            <br/>
            <label for="MB">Mobile Number:</label>
            <input type="number" name="MB" placeholder="MOBILE NUMBER"></input>
            <br/>
            <label for="TOE">Type of Event:</label>
            <select name="TOE">
             <option value="SMALL">Small Party</option>
             <option value="BIG">Big Party</option>
             <option value="GLORIFIED">Glorified Parcels</option>
            </select>
            <br/>
            <label for="RO">Residential/Office:</label>
            <select name="RO">
              <option value="OFFICE">Office</option>
              <option value="RESIDENTIAL">Residential</option>
            </select>
            <br/>
            <label for="NOP">Number of People:</label>
            <input type="number" name="NOP" placeholder="NUMBER OF PEOPLE"></input>
            <br/>
            <label for="VA">Venue Address:</label>
            <input type="text" name="VA" placeholder="ENTER STATE"></input>
            <br/>
            <label for="YM">Your Message:</label><br/>
            <textarea cols="20" rows="8" name="YM"></textarea>
            <br/>
            <input type="submit" value="Submit"></input>
            <input type="reset" value="Reset"></input>
        </form>
        </>
    )
}
export default Form;