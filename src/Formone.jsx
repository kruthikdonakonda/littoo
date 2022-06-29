import React from "react";
function Formone()
{
    return(
        <>
        <form method="POST">
            <label for="fname">First Name </label>
            <input type="text" name="fname"></input>
            <p>(Max 50 Characters Allowed)</p>
            <br/>
            <label for="lname">Last Name </label>
            <input type="text" name="lname"></input>
            <p>(Max 50 Characters Allowed)</p>
            <br/>
            <label for="ei">Email ID </label>
            <input type="text" name="ei"></input>
            <br/>
            <label for="mn">Mobile Number </label>
            <input type="number" name="mn"></input>
            <p>(10 Digits Allowed)</p>
            <br/>
            <label for="gender">Gender </label>
            <select name="gender">
             <option value="Male">Male</option>
             <option value="Female">Female</option>
            </select>
            <br/>
            <label for="DOB">Date of Birth(DOB) </label>
            <input type="date" name="DOB"></input>
            <br/>
            <label for="address">Address </label>
            <textarea cols="20" rows="8" name="address"></textarea>
            <br/>
            <label for="city">City </label>
            <input type="text" name="city"></input>
            <p>(Max 50 Characters Allowes)</p>
            <br/>
            <label for="pc">Pin Code </label>
            <input type="number" name="pc"></input>
            <p>(Max 6 Numbers Allowed)</p>
            <br/>
            <label for="state">State</label>
            <input type="text" name="state"></input>
            <p>(Max 50 Characters Allowed)</p>
            <br/>
            <label for="country">Country</label>
            <input type="text" name="country"></input>
            <br/>
            <label for="hobbies">Hobbies</label>
            <select name="hobbies">
                <option value="Drawing">Drawing</option>
                <option value="Singing">Singing</option>
                <option value="Dancing">Dancing</option>
                <option value="Others">Others</option>
            </select>
            <input type="text" name="hobbies"></input>
            <p>(Max 50 Characters Allowed)</p>
            <br/>
             <label for="qualification">Qualification</label>
             <select name="qualification">
                 <option value="High School(10th)">High School(10th)</option>
                 <option value="Higher School(11th)">Higher School(11th)</option>
                 <option value="Graduation(Bachelors)">Graduation(Bachelors)</option>
                 <option value="Post Graduation(Masters)">Post Graduation(Masters)</option>
                 <option value="Phd">Phd</option>
             </select>
             <br/>
             <label for="CAF">Courses Applied For </label>
             <select name="CAF">
                 <option value="BCA(Bachelors of Computer Applications)">BCA</option>
             </select>
        </form>
        </>
    )
}