import { Redirect, Route, Switch } from 'react-router-dom';
import '../src/sass/App.scss';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "react-toastify/dist/ReactToastify.css";
import 'bootstrap/dist/css/bootstrap.min.css';

//Components
import HomePageContainer from './pages/home/HomePageContainer';
import NewsForIDContainer from './pages/home/NewsForIDContainer';
import AboutPageContainer from './pages/about/AboutPageContainer';
import VideoPageContainer from './pages/video/VideoPageContainer';
import NewsPageContainer from './pages/news/NewsPageContainer';
import ArticlePageContainer from './pages/article/ArticlePageContainer';
import ProfilePageContainer from './pages/profile/ProfilePageContainer';


const App = () => {
  return (
    <Switch>
      <Route path="/esas" exact  component={HomePageContainer} />
      <Route path='/esas/:id?' component={NewsForIDContainer } />
      <Route path='/xeberler' exact component={NewsPageContainer } />
      <Route path='/xeberler/:id?' component={NewsForIDContainer } />
      <Route path='/videolar' exact component={VideoPageContainer } />
      <Route path='/videolar/:id?' component={NewsForIDContainer } />
      <Route path='/meqaleler' exact component={ArticlePageContainer } />
      <Route path='/meqaleler/:id?' component={NewsForIDContainer } />
      <Route path='/haqqimizda' component={AboutPageContainer } />
      <Route path='/hesabim' component={ProfilePageContainer} />

      <Redirect from='/' to='/esas' />
    </Switch>
  );
}


export default App;
