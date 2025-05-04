import React from 'react'

export default function CreditCardForm() {
    
    const [cardNumber, setCardNumber] = useState('');
    const [cvv, setCvv] = useState('');
    const [idNumber, setIdNumber] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // כאן ניתן לבצע שליחה או עיבוד של הנתונים
        console.log('Number:', cardNumber);
        console.log('CVV:', cvv);
        console.log('ID:', idNumber);
    };

    return (
        <div className="container mt-5">
            <h2>הכנס פרטי אשראי</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="cardNumber" className="form-label">מספר כרטיס אשראי</label>
                    <input
                        type="text"
                        className="form-control"
                        id="cardNumber"
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value)}
                        placeholder="XXXX XXXX XXXX XXXX"
                        required
                    />
                </div>
                <div className="row">
                    <div className="col-md-6 mb-3">
                        <label htmlFor="cvv" className="form-label">קוד CVV</label>
                        <input
                            type="text"
                            className="form-control"
                            id="cvv"
                            value={cvv}
                            onChange={(e) => setCvv(e.target.value)}
                            placeholder="XXX"
                            maxLength="3"
                            required
                        />
                    </div>
                    <div className="col-md-6 mb-3">
                        <label htmlFor="idNumber" className="form-label">תעודת זהות</label>
                        <input
                            type="text"
                            className="form-control"
                            id="idNumber"
                            value={idNumber}
                            onChange={(e) => setIdNumber(e.target.value)}
                            placeholder="תעודת זהות"
                            required
                        />
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">שלח</button>
            </form>
        </div>




    )
}
