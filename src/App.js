import { useState } from 'react';
import './App.css';
import 'antd/dist/antd.css';
import Layout from "./component/layout";
import FirstPage from "./component/firstPage";
import SecondPage from "./component/secondPage";
import ThirdPage from './component/thirdPage';
import FourthPage from "./component/fourthPage";
import FifthPage from './component/fifthPage';

function App() {

  const [data, setData] = useState({});
  const [progress, setProgress] = useState(0);

  const handlePageData = async (value) => {
    await setData({
      ...data,
      ...value
    })
    await setProgress(progress + 1);
  }

  const flush = () => {
    setData({});
    setProgress(0);
  }

  const pageContext = () => {
    switch(progress) {
      case 0:
        return <FirstPage firstPageData={handlePageData} />
      case 1:
        return <SecondPage secondPageData={handlePageData} />
      case 2:
        return <ThirdPage thirdPageData={handlePageData} noOfWheels={data?.numberOfWheels} />
      case 3:
        return <FourthPage fourthPageData={handlePageData} vehicleType={data.vehicleType} noOfWheels={data?.numberOfWheels} />
      case 4:
        return <FifthPage fifthPageData={handlePageData} data={data} onFinish={flush} />
      default:
        return <></>
    }
  }

  return (
    <>
      <Layout>
        {pageContext()}
      </Layout>
    </>
  );
}

export default App;
