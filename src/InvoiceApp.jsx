import { getInvoice } from "./services/InvoiceService";
import { ClientView } from "./components/ClientView";
import { CompanyView } from "./components/CompanyView";
import { InvoiceView } from "./components/InvoiceView";
import { TableItemsView } from "./components/TableItemsView";
import { TotalView } from "./components/TotalView";

export const InvoiceApp = () => {
    const {id, invoiceName, client, company, items, total} = getInvoice();

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
                    </div>
                </div>
            </div>
        </>
    );
}