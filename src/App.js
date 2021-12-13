
import { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom"
import { useTranslation } from "react-i18next";
import './App.css';
import Banner from './components/Banner/Banner';
import TodoPage from './pages/TodoPage/TodoPage';
import FollowersPage from './pages/FollowersPage/FollowersPage';

function App() {
  const {i18n} = useTranslation();
  const [dir, setDir] = useState('ltr');

  useEffect(() => {
    setDir(i18n.language === 'en' ? 'ltr' : 'rtl')
  }, [i18n.language])

  useEffect(() => {
    const lang = localStorage.getItem('lang') || 'en'
    i18n.changeLanguage(lang)
    setDir(lang === 'en' ? 'ltr' : 'rtl')
  }, [])

  return (
    <div className="App" data-testid={"learn react"} dir={dir}>
      <Banner />
      <Switch>
        <Route strict exact path="/" component={TodoPage}/>
        <Route strict exact path="/followers" component={FollowersPage}/>
      </Switch>
    </div>
  );
}

export default App;
