import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import DescribeYourSelf from "./Components/DescribeYourSelf/DescribeYourSelf";
import Page3 from "./Components/Page3";
import YourInterest from "./Components/YourInterest/YourInterest";
import MathComfort from './Components/MathComfort/MathComfort';
import Page5 from './Components/Page5';
import Loading6 from './Components/Loading6';
import Result from './Components/Result/Result';

function Progress() {
  const location = useLocation();
  let progress = 0;
  switch (location.pathname) {
    case '/':
      progress = 5;
      break;
    case '/yourInterest':
      progress = 20;
      break;
    case '/page3':
      progress = 40;
      break;
    case '/MathComfort':
      progress = 160;
      break;
    case '/page5':
      progress = 280;
      break;
    default:
      progress = 0;
  }

  return (
    <div className="flex justify-start mx-60 pt-[3rem] w-100">
      <div className="progress-bar" style={{ height: '3px', background: 'green', width: `${progress}%` }}></div>
      <div className="progress-bar" style={{ height: '3px', background: 'white', width: `100%` }}></div>
    </div>
  );
}

function App() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const location = window.location.pathname;
    switch (location) {
      case '/':
        setProgress(10);
        break;
      case '/yourInterest':
        setProgress(20);
        break;
      case '/page3':
        setProgress(40);
        break;
      case '/MathComfort':
        setProgress(60);
        break;
      case '/page5':
        setProgress(100);
        break;
      default:
        setProgress(0);
    }
  }, []);

  const shouldShowProgress = !['/loading6', '/result'].includes(window.location.pathname);

  return (
    <>
      {progress < 100 && shouldShowProgress && <Progress />}
      <Routes>
        <Route path="/" element={<DescribeYourSelf />} />
        <Route path="/yourInterest" element={<YourInterest />} />
        <Route path="/page3" element={<Page3 />} />
        <Route path='/MathComfort' element={<MathComfort />} />
        <Route path="/page5" element={<Page5 />} />
        <Route path="/loading6" element={<Loading6 />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </>
  );
}

export default App;
