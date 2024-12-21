import {BrowserRouter, Route,Routes} from 'react-router-dom'
import './App.css';
import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import CreateListing from './pages/CreateListing';
import ListingDetails from './pages/ListingDetails';
import TripList from './pages/TripList';
import WishList from './pages/WishList';
import PropertyList from './pages/PropertyList';
import ReservationList from './pages/ReservationList';
import CategoryPage from './pages/CategoryPage';
import SearchPage from './pages/SearchPage';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>}></Route>
          <Route path='/register' element={<RegisterPage/>}></Route>
          <Route path='/login' element={<LoginPage/>}></Route>
          <Route path='/create-listing' element={<CreateListing/>}></Route>
          <Route path='/properties/:listingId' element={<ListingDetails/>}></Route>
          <Route path="/properties/category/:category" element={<CategoryPage />} />
          <Route path="/properties/search/:search" element={<SearchPage />} />
          <Route path='/:userId/trips' element={<TripList/>}></Route>
          <Route path='/:userId/wishList' element={<WishList/>}></Route>
          <Route path="/:userId/properties" element={<PropertyList />} />
          <Route path="/:userId/reservations" element={<ReservationList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
