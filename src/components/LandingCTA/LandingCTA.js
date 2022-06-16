import { Card, Divider, Row, Col, Button, Typography } from 'antd';
import { Link } from 'react-router-dom';
import ReviewCarousel from '../../components/ReviewCarousel/ReviewCarousel';
import ColorOption from '../ColorOption/ColorOption';
import './styles.css';

import tshirtIcon from '../../assets/tshirt.png'
import hatIcon from '../../assets/hats.png'
import pantsIcon from '../../assets/pants.png'

import tshirtFront from '../../assets/tshirt-front.svg';
import tshirtCenter from '../../assets/tshirt-center.svg';
import tshirtSide from '../../assets/tshirt-side.svg';

const clothingIcons = [{
  src: tshirtFront,
  title: 'Full Front',
  desc: '12" x 13.5"'
}, {
  src: tshirtCenter,
  title: 'Center Chest',
  desc: '12" x 6"'
}, {
  src: tshirtSide,
  title: 'Left Chest',
  desc: '4" x 4"'
}];

const landingCTA = () => {
  const { Title, Text } = Typography;
  
  return (
    <div style={{ position: 'absolute', top: '40%', left: '50%', transform: 'translate(-50%, -50%)'}}>
        <Card className="landing-cta-card" bordered={false} style={{ width: 500, height: '560px', borderRadius: '10px', padding: 15 }}>
          <Title level={3}>Get started</Title>
          <Row gutter={20} style={{ jusitfyContent: 'center' }}>
            <Col className="gutter-row" span={4}>
              <ColorOption color="black" />
            </Col>
            <Col className="gutter-row" span={4}>
              <ColorOption color="gray" />
            </Col>
            <Col className="gutter-row" span={4}>
              <ColorOption color="red" />
            </Col>
            <Col className="gutter-row" span={4}>
              <ColorOption color="blue" />
            </Col>
            <Col className="gutter-row" span={4}>
              <ColorOption color="yellow" />
            </Col>
            <Col className="gutter-row" span={4}>
              <ColorOption color="pink" />
            </Col>
          </Row>
          <Divider />
          <Title level={3}>Pick a style</Title>
          <Card>
            {clothingIcons.map(({ src, title, desc }) => (
              <Card.Grid style={{ padding: 20, textAlign: 'center' }}>
                <img style={{ height: 80, width: 80 }} src={src} alt="" />
                <Title level={5}>{title}</Title>
                <Text code>{desc}</Text>
              </Card.Grid>
            ))}
          </Card>
          <Divider />
          <Link to="/checkout">
            <Button style={{ backgroundColor: '#feb714', borderColor: 'transparent', color: 'black', fontSize: 25, fontWeight: '900', height: '60px', width: '100%' }} type="primary" size="large">
              CONTINUE
            </Button>
          </Link>
        </Card>
        <ReviewCarousel />
    </div>
  )
}

export default landingCTA
