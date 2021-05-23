import { Redirect, Route, Switch } from 'react-router-dom';
import '../src/sass/App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePageContainer from './pages/esas/HomePageContainer';
import NewsForIDContainer from './pages/esas/NewsForIDContainer';
import AboutPageContainer from './pages/haqqimizda/AboutPageContainer';
import VideoPageContainer from './pages/videolar/VideoPageContainer';
import NewsPageContainer from './pages/xeberler/NewsPageContainer';
import ArticlePageContainer from './pages/meqaleler/ArticlePageContainer';


const App = () => {
  return (
    <Switch>
      <Route path="/esas" exact  component={HomePageContainer} />
      <Route path='/esas/:id?' component={NewsForIDContainer } />
      <Route path='/xeberler/' component={NewsPageContainer } />
      <Route path='/xeberler/:id?' component={NewsForIDContainer } />
      <Route path='/videolar/' component={VideoPageContainer } />
      <Route path='/videolar/:id?' component={NewsForIDContainer } />
      <Route path='/meqaleler/' component={ArticlePageContainer } />
      <Route path='/meqaleler/:id?' component={NewsForIDContainer } />
      <Route path='/haqqimizda/' component={AboutPageContainer } />
      
      
      <Redirect from='/' to='/esas' />
    </Switch>
  );
}


export default App;
