import React from 'react'
import LandingCTA from '../../components/LandingCTA/LandingCTA';
import { Layout, Typography } from 'antd';

import BackgroundImg from '../../assets/landing-background.jpg';
import Mascot from '../../assets/mascot.png';
import Mascot2 from '../../assets/mascot2.png';
import Mascot3 from '../../assets/mascot3.png';
import March from '../../assets/march.png';
import Logo from '../../assets/logo.png';

import EmailIcon from '../../assets/email.png';
import PhoneIcon from '../../assets/phone-call.png';
import TikTokIcon from '../../assets/tik-tok.png';
import YoutubelIcon from '../../assets/youtube.png';

const socialIcons = [PhoneIcon, EmailIcon, TikTokIcon, YoutubelIcon ];

const Home = () => {
  const { Header, Content } = Layout;
  const { Title } = Typography;

  return (
    <Layout className="App" style={{ background: `linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url(${BackgroundImg}) no-repeat fixed center`, backgroundSize: 'cover', minHeight: '100vh' }}>
      <Header style={{ background: 'none', padding: 50, marginBottom: 40 }}>
        <img style={{ borderRadius: '10px', width: 250 }} src={Logo} alt="" />
      </Header>
      <Layout style={{ background: 'none', display: 'flex', flexDirection: 'row', position: 'relative'}}>
        <div>
          <img style={{ maxWidth: 1000, padding: 50 }} src={March} alt="" />
          <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'row', alignContent: 'center', width: '55%', height: 65, backgroundColor: 'white', borderRadius: '5px', margin: '20px auto' }}>
            <Title level={4} style={{ margin: '17px 0px 0px', padding: '0px 10px', fontWeight: 900 }}>REACH OUT TO US:</Title>
            {socialIcons.map((src) => (
              <div style={{ display: 'block', borderRadius: 10, border: '3px solid black', padding: '10px', margin: '8px 10px 0px', height: 49, width: 49 }}>
                <img style={{ height: 23, width: 23, alignSelf: 'center' }} src={src} alt="" />
              </div>
            ))}
          </div>
        </div>
        <br />
        <Content style={{ background: 'none', position: 'relative', width: '50%' }}>
          <LandingCTA />
        </Content>
      </Layout>
    </Layout>
  )
}

export default Home