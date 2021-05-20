import { Redirect, Route, Switch } from 'react-router-dom';
import '../src/sass/App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePageContainer from './components/pages/home/HomePageContainer';
import NewsForIDContainer from './components/pages/home/NewsForIDContainer';
import AboutPageContainer from './components/pages/about/AboutPageContainer';
import VideoPageContainer from './components/pages/video/VideoPageContainer';
import NewsPageContainer from './components/pages/news/NewsPageContainer';
import ArticlePageContainer from './components/pages/article/ArticlePageContainer';


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
