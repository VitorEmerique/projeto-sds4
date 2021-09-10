import BarChart from "components/BarChart";
import DataTable from "components/DataTable";
import DonutsChart from "components/DonutsChart";
import Footer from "components/Footer";
import NavBar from "components/NavBar";

const Dashboard = () => {
    return (
        <>
            <NavBar />
            <div className="container">
                <h1 className="text-primary py-3">Dashboard de vendas</h1>
                <div className="row px-3">
                    <div className="col-sm-6">
                        <h5 className="text-center text-secondary">Taxa de sucesso</h5>
                        <BarChart />
                    </div>
                    <div className="col-sm-5">
                        <h5 className="text-center text-secondary">Taxa de sucesso</h5>
                        <DonutsChart />
                    </div>
                    <div className="py-3">
                        <h2 className="text-primary">Todas vendas</h2>
                    </div>

                </div>
                <DataTable />
            </div>
            <Footer />
        </>
        
    );
}

export default Dashboard;