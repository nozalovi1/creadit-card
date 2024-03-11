import React, { useState } from 'react';
import './CreditCardForm.css';
import backgroundimg from './images/background.png'
import backcard from './images/back-card.png'
import card from './images/back.png'




const CreditCardForm = () => {
    const [cardNumber, setCardNumber] = useState('•••• •••• •••• ••••');
    const [cardHolder, setCardHolder] = useState('FULL NAME');
    const [expiration, setExpiration] = useState('00/00');
    const [cvv, setCvv] = useState('');

    const handleCardNumberChange = (event) => {
        const value = event.target.value.replace(/[^0-9]/g, ''); 
        let formattedValue = '';
        if (value.length <= 16) { 
            for (let i = 0; i < value.length; i++) {
                if (i % 4 === 0 && i !== 0) { 
                    formattedValue += ' ';
                }
                formattedValue += value[i];
            }
            setCardNumber(formattedValue);
        } else {
            alert('Only 16 characters allowed.'); 
            setCardNumber(value.slice(0, 16)); 
            setTimeout(() => {
                setCardNumber(''); 
            }, 0); 
        }
    };


    const handleCardHolderChange = (event) => {
        setCardHolder(event.target.value.toUpperCase());
    };

    const handleExpirationChange = (event) => {
        let value = event.target.value;
        value = value.replace(/\D/g, '');
        let formattedValue = '';
        for (let i = 0; i < value.length; i++) {
            if (i === 2 && value.length > 2) { 
                formattedValue += '/';
            }
            formattedValue += value[i];
           
        }
        setExpiration(formattedValue);
    };



    const handleCvvChange = (event) => {
        const value = event.target.value.replace(/[^0-9]/g, ''); 
        if (value.length <= 3) { 
            setCvv(value); 
        } else {
            alert('Only 3 characters allowed.'); 
            setTimeout(() => {
                setCvv('');
            }, 0); 
        }
    };

  

    return (
        <div className="container">
            <div className="credit-card">
                <div className="card-front">
                    <div className="card-number">{cardNumber}</div>
                    <div className="card-info">
                        <div className="card-info-item">
                            <label className='card-text'>Card Holder</label>
                            <div className='card-holder'>{cardHolder}</div>
                        </div>
                        <div className="card-info-item">
                            <label className='expires-text' >Card Number</label>
                            <div className='expires'>{expiration}</div>
                        </div>
                        <div className="cvv">
                        <label className='cvv-text'>CVV</label>
                        <label className='mmyy'>Exp. Date (MM/YY)</label>
                        <div className='cv'>{cvv}</div>
                    </div>
                    </div>
                </div>
                <div className='background-png'>
                    <img src={backgroundimg} alt="" />
                    <img className='card-img' src={backcard} alt="" />
                    <img className='backcard-img' src={card} alt="" />
                    </div>

                <div className="card-back">
                    
                </div>
            </div>
            <form className="credit-card-form">
                <input
                    type="text"
                    placeholder="Card Number"
                    value={cardNumber}
                    onChange={handleCardNumberChange}
                />
                <input
                    type="text"
                    placeholder="Card Holder"
                    value={cardHolder}
                    onChange={handleCardHolderChange}
                />
                <input
                    type="text"
                    placeholder="MM/YY"
                    value={expiration}
                    onChange={handleExpirationChange}
                />
                <input
                    type="text"
                    placeholder="CVV"
                    value={cvv}
                    onChange={handleCvvChange}
                />
                <button className='submit-btn' type="submit">Confirm</button>

            </form>

        </div>
    );
};

export default CreditCardForm;
