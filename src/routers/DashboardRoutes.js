import React from 'react';
import { Routes, Route } from "react-router-dom";

import { Navbar } from "../components/ui/Navbar";
import { DcScreen } from '../components/dc/DcScreen';
import { MarvellScreen } from '../components/marvell/MarvellScreen';
import { SearchScreen } from '../components/search/SearchScreen';
import { HeroScreen } from '../components/hero/HeroScreen';


export const DashboardRoutes = () => {
    return (<>
        <Navbar />
        <div className='container'>
            <Routes>

                <Route path="marvel" element={<MarvellScreen />} />
                <Route path="dc" element={<DcScreen />} />
                <Route path="search" element={<SearchScreen />} />
                <Route path="hero/:heroeId" element={<HeroScreen />} />
                <Route path="/" element={<MarvellScreen />} />
            </Routes>

        </div>


    </>);
};
