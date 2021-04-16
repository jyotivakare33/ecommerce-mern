import Header from '../components/Header';
import Carousel from '../components/CarouselHeader';
import Offers from '../components/Offers';

function Home() {
    return (
        <div>
            <Header />
            <Carousel />
            <Offers src="https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/23/aa2d33c3-e2ff-49ea-9e7d-d5eed1b2e9d31595496205200-Sangria.jpg" href="brand/sangria" />
            <Offers src="https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/23/88049f61-7293-42ad-9b0e-f65255a1595b1595496205059-Anouk.jpg" href="brand/anouk" />
            <Offers src="https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/17/137c7c37-f038-4113-a56c-c6137f2f969f1594984508589-Vishudh.jpg" href="brand/vishudh" />
            <Offers src="https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/814b8ff4-1dec-4a6e-86b8-c26f5c40fe4c1598892518923-Biba.jpg" href="brand/biba" />
            <Offers src="https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/e72c82f2-cfd5-4f9a-b1b0-ba9e2b3e51251598892519506-W.jpg" href="brand/w" />
            <Offers src="https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/5/29/1e487167-0f78-48ea-b47e-abfb099bbdfb1590740530724-Sassafras.jpg" href="brand/sassafras" />
            <Offers src="https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/14/1bca9470-d861-41c8-93e6-6cac31c8d6661597408345961-J-J.jpg" href="brand/Jack & Jones" />
        </div>
    );
}

export default Home;
