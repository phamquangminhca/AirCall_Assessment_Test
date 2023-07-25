import React from 'react';
import {SlCallIn} from 'react-icons/sl';
import { PiDotsThreeVerticalLight } from 'react-icons/pi';

function Activity() {
  const dottedLineStyle = {
    borderTop: '1px dotted #dddddd',
    margin: '20px 0',
    width: '100%',
    position: 'relative', // Add relative positioning to the container

  };
  return (
    <div style={containerStyle}>
      <div style={dottedLineStyle}>
        <div style={dateStyle}>July 27, 2017</div>
      </div>
      <div style={contentStyle}>
        <div style={iconContainerStyle}>
          <SlCallIn />
        </div>
        <div>
            <span style={phoneNumberStyle}>
                +33 6 45 13 53 91
            </span>
            <div style={textBelowPhoneNumberStyle}>
                tried to call on <span style={nameBelowPhoneNumberStyle}>Xavier</span>
            </div>
        </div>
        <div style={timeStyle}>
            <PiDotsThreeVerticalLight style={dropDownIconStyle} />  
            <span style={timeTextStyle}>07:58</span> <div style={pmTextStyle}>PM</div>
        </div>
      </div>
      
    </div>
  )
}

const timeTextStyle = {
    fontSize: '11px', // Set the font size to 14 pixels (you can adjust this value as needed)
    marginTop: '3px',
    color: '#BBBBBB',
};

const nameBelowPhoneNumberStyle = {
    fontSize: '12px',
    fontWeight: '500', // Set the font weight to a little more bold (600 is bolder than the default weight)
    color: '#999999',
}

const pmTextStyle = {
    border: '1px solid #dddddd',
    borderRadius: '2px',
    marginLeft: '4px', // Add margin to the left of the "PM" text
    fontSize: '9px', // Set the font size to 14 pixels (you can adjust this value as needed)
    padding: '3px',
    color: '#BBBBBB',
    fontWeight: '600', // Set the font weight to a little more bold (600 is bolder than the default weight)
};

const dropDownIconStyle = {
    fontSize: '1rem',
    cursor: 'pointer',
    color: '#BBBBBB',
    marginRight: '3px', // Add margin to the right of the drop-down icon
  };

const textBelowPhoneNumberStyle = {
    marginTop: '5px', // Add margin at the top to create space between the phone number and the text below it
    color: '#BBBBBB',
    fontSize: '11px',

  };

const phoneNumberStyle = {
    fontWeight: 'bold', // Add font weight to make the phone number bold
    color: '#555555',
};

const timeStyle = {
    marginLeft: 'auto', // This will push the "07:58 PM" div to the rightmost side of the content div\
    display: 'flex',
    fontWeight: 'bold',

};

const iconContainerStyle = {
    marginLeft: '20px', // Add margin to the left of the icon container
    marginRight: '15px', // Add some margin between the icon and the next div
  };

const contentStyle = {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#fffcfc',
    border: '1px solid #dddddd',
    borderRadius: '10px',
    height: '60px',
    width: '90%', // Set the width of the content div to 90% of its parent's width
    maxWidth: '400px', // Set a maximum width for the button to prevent it from becoming too wide

};

const dateStyle = {
    position: 'absolute', // Add absolute positioning to the date element
    top: '50%', // Align the element to the middle vertically
    left: '50%', // Align the element to the middle horizontally
    transform: 'translate(-50%, -50%)', // Center the element exactly in the middle
    backgroundColor: '#ffffff', // Optional: Add a background color to make the date stand out
    padding: '0 10px', // Optional: Add some padding around the date
    fontSize: '11px', // Set the font size to 14 pixels (you can adjust this value as needed)
    color: '#BBBBBB',
    fontWeight: '600', // Set the font weight to a little more bold (600 is bolder than the default weight)

  };

const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%', // Set the width to 100vw (100% of the viewport width)
  };

export default Activity;
