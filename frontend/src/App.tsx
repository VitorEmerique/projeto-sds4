import BarChart from "components/BarChart";
import DataTable from "components/DataTable";
import DonutsChart from "components/DonutsChart";
import Footer from "components/Footer";
import NavBar from "components/NavBar";


function App() {
  return (
    <>
            <NavBar />
            <div className="container">
                <h1 className="text-primary py-3">Dashboard de Vendas</h1>

                <div className="row">
                    <div className="col-sm-6 px-3">
                        <h5 className="text-secondary text-center">Taxa de Sucesso (%)</h5>
                        <BarChart />
                    </div>
                    <div className="col-sm-6 px-3">
                        <h5 className="text-secondary text-center">Todas Vendas</h5>
                        <DonutsChart />
                    </div>
                </div>

                <div className="py-3">
                    <h2 className="text-primary">Todas Vendas</h2>
                </div>

                <DataTable />
            </div>
            <Footer />
        </>
  );
}

export default App;
