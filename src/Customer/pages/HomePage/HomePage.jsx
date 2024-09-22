import React from 'react'
import MainCarousel from '../../components/HomeCarousel/MainCarousel'
import HomeSectionCarousel from '../../components/HomSectionCarousel/HomeSectionCarousel';
import { tea_infusion } from '../../../Data/TeaInfusion';

const HomePage = () => {
    return(
        <div>
            <MainCarousel/>

            <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
                <HomeSectionCarousel data={tea_infusion} sectionName={"Tea Infusions"}/>
                <HomeSectionCarousel data={tea_infusion} sectionName={"Personal Hair Care"}/>
                <HomeSectionCarousel data={tea_infusion} sectionName={"Daily Nutrition"}/>
                <HomeSectionCarousel data={tea_infusion} sectionName={"Nuts and Seeds"}/>
            </div>
        </div>
    )
}

export default HomePage;
