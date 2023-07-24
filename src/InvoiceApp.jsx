import { useState } from "react";
import { getInvoice } from "./services/InvoiceService";
import { ClientView } from "./components/ClientView";
import { CompanyView } from "./components/CompanyView";
import { InvoiceView } from "./components/InvoiceView";
import { TableItemsView } from "./components/TableItemsView";
import { TotalView } from "./components/TotalView";

export const InvoiceApp = () => {
    const {id, invoiceName, client, company, items: itemsInitial, total} = getInvoice();
    
    const [productValue, setProductValue] = useState('');
    const [priceValue, setPriceValue] = useState('');
    const [quantityValue, setQuantityValue] = useState('');

    const [items, setItems] = useState(itemsInitial);

    const [counter, setCounter] = useState(4);

    const onProductChange = ({target}) => {
        console.log(target.value);
        setProductValue(target.value);
    };

    const onPriceChange = ({target}) => {
        console.log(target.value);
        setPriceValue(target.value);
    }

    const onQuantiityChange = ({target}) => {
        console.log(target.value);
        setQuantityValue(target.value);
    }

    const onInvoiceSubmit = (event) => {
        event.preventDefault();

        if (productValue.trim() <= 1)  return;
        if (isNaN(priceValue) || priceValue.trim() <= 1)  return;
        if (isNaN(quantityValue) || quantityValue.trim() < 1)  return;

        setItems([...items, 
            {
                id:counter, 
                product: productValue.trim(), 
                price: parseInt(priceValue.trim()),
                quantity: parseInt(quantityValue.trim(),10)
            }]);
        setProductValue('');
        setPriceValue('');
        setQuantityValue('');
        setCounter(counter + 1);
    }

    return (
        <>
            <div className="container">
                <div className="card">
                    <div className="card-header">
                        Invoice Example
                    </div>

                    <div className="card-body">
                        <InvoiceView id={ id } invoiceName={ invoiceName }/>
                        <div className="row my-3">
                            <div className="col">
                                <ClientView title="Customer Data" client={ client } />
                            </div>

                            <div className="col">
                                <CompanyView title="Company Data" company={ company } />
                            </div>
                        </div>

                        <TableItemsView title="Invoice Products" items={ items }/>
                        <TotalView total={ total }/>
                        <form className="w-50" onSubmit={event => onInvoiceSubmit(event)}>
                            <input 
                                type="text" 
                                name="product" 
                                value={productValue} 
                                placeholder="Product" 
                                className="form-control m-3" 
                                onChange={onProductChange} />
                            <input 
                                type="text" 
                                name="price" 
                                value={priceValue} 
                                placeholder="Price" 
                                className="form-control m-3" 
                                onChange={onPriceChange} />
                            <input 
                                type="text" 
                                name="quantity" 
                                value={quantityValue} 
                                placeholder="Quantity" 
                                className="form-control m-3" 
                                onChange={onQuantiityChange} />

                            <button 
                                type="submit" 
                                className="btn btn-primary m-3">
                                    Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}