import React from 'react'
import { Typography, Radio, Space, Steps,Card } from 'antd';
import Mascot4 from '../../assets/mascot4.webp'
import BackgroundImg from '../../assets/landing-background.jpg';
import Logo from '../../assets/logo.png';

const { Step } = Steps;
const { Title } = Typography;

const steps = [
  {
    title: 'First',
    content: 'First-content',
  },
  {
    title: 'Second',
    content: 'Second-content',
  },
  {
    title: 'Last',
    content: 'Last-content',
  },
];


const StepPage = () => {
  return (
    <div style={{ background: `linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url(${BackgroundImg}) no-repeat fixed center`, backgroundSize: 'cover', minHeight: '100vh', paddingTop: 80 }}>
        <img src={Logo} style={{ display: 'block', height: 160, width: 300, margin: '0 auto 60px' }}  />
       <Card style={{ borderRadius: '10px', width: '40%', margin: 'auto auto' }}>
        <Steps current={0} style={{ padding: 20 }}>
          {steps.map(item => (
            <Step key={item.title} title={item.title} />
          ))}
        </Steps>
        <div style={{ background: `url(${Mascot4}) no-repeat fixed left center`, backgroundSize: 'cover', height: '50%', width: '50%' }}>
          
        </div>
        {0 === 0 ? (
          <div style={{
            margin: 0,
            textAlign: 'center'
          }}>
            <Title>What type of t-shirt brand would you like to have?</Title>
            <Radio.Group style={{ margin: '40px auto', transform: 'scale(1.5)', paddingBottom: 10 }}>
              <Space direction="vertical">
                <Radio value={1}>Adidas</Radio>
                <Radio value={2}>Anvil</Radio>
                <Radio value={3}>Haynes</Radio>
              </Space>
            </Radio.Group>
          </div>
        ) : null}
       </Card>
    </div>
  )
}

export default StepPage