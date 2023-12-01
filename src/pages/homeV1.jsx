import Header from "../components/section/header/Header";
import Intro from "../components/section/intro/Intro";
import Connect from "../components/section/connect/Connect";
import Sms from "../components/section/sms/Sms";
import Feature from "../components/section/feature/Feature";
import Info from "../components/section/info/Info";
import News from "../components/section/news/News";

const HomeV1 = () => {
    return (
        <div>
            <Header />
            <Intro />
            <Connect />
            <Sms />
            <Feature />
            <Info />
            <News />
        </div>
    );
}

export default HomeV1;