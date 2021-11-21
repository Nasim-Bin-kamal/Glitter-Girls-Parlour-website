import React from 'react';
import NavigationBar from '../../components/Shared/NavigationBar/NavigationBar';
import TopBanner from '../../components/Home/TopBanner/TopBanner';
import TopServices from '../../components/Home/TopServices/TopServices';
import MiddleBanner from '../../components/Home/MiddleBanner/MiddleBanner';
import Testimonials from '../../components/Home/Testimonials/Testimonials';
import CustomerForm from '../../components/Home/CustomerForm/CustomerForm';
import Footer from '../../StyledComponent/Footer/Footer';



const Home = () => {
    return (
        <div>
            <NavigationBar />
            <TopBanner />
            <TopServices />
            <MiddleBanner />
            <Testimonials />
            <CustomerForm />
            <Footer />


        </div>
    );
};

export default Home;