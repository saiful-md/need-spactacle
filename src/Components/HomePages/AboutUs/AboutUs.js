import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import image from '../../../images/banner-3.jpg';

const AboutUs = () => {
	return (
		<Container style={{ marginTop: '30px', marginBottom: '30px' }}>
			<h2 style={{ textAlign: 'center', marginBottom: '30px' }}>About Us</h2>
			<Row>
				<Col xs={12} lg={6}>
					<img src={image} style={{ width: '100%' }} alt="" />
				</Col>
				<Col style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} xs={12} lg={6}>
					<p>
						For us, this means fundamentally keeping the community’s trust and personal experience at the
						core of our work. We believe that above all else, humanity should be put first. We created this
						set of principles to guide us as we introduce new hardware capable of understanding your
						environment and overlaying computing on the world around you.Snap has said it before, but we
						believe that it’s worth repeating: our products are designed with privacy and transparency in
						mind. Our products are meant to be easy to use and control. We provide clear indication for
						users and bystanders when our devices are capturing and saving content and we aim to empower you
						with tools to control and protect your privacy.
					</p>
				</Col>
			</Row>
		</Container>
	);
};

export default AboutUs;
