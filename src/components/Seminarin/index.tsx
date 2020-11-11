import React, { FC } from 'react';
import Footer from '../../layout/Footer';
import Header from '../../layout/Header';
import NavButton from '../../layout/NavButton';
import NavBar from '../../layout/NavBar';
import PageTitle from '../../layout/PageTitle';
import FooterBlock from '../../layout/FooterBlock';
import Container from '../../layout/Container';
import ContainerBlock from '../../layout/ContainerBlock/index';
import videoImage from '../../assets/video.png';

const Seminarin: FC = () => {
  const loremIpsum =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed porta ipsum, sed tristique nisl. ';

  return (
    <div className="flex flex-col font-sans w-3/4 mx-auto">
      <Header className="flex items-center ">
        <PageTitle className="w-4/12 pt-5 pb-10 font-extrabold text-xl">Seminarin</PageTitle>
        <NavBar className="w-8/12 pt-5 pb-10 flex px-10 justify-between bg-gray-100">
          <NavButton href="/" title="Home" isActive></NavButton>
          <NavButton href="/" title="Events"></NavButton>
          <NavButton href="/" title="Features"></NavButton>
          <NavButton href="/" title="Demos"></NavButton>
          <NavButton href="/" title="Contact us"></NavButton>
        </NavBar>
      </Header>
      <Container className="flex flex-col">
        <ContainerBlock className="flex">
          <div className="w-4/12">
            <img src={videoImage} alt="Video" />
          </div>
          <div className="w-8/12 flex flex-col bg-gray-100">
            <div className="w-full px-10 pt-20 text-6xl font-extrabold leading-snug">
              Ready not to
              <br />
              Stop Talking
              <br />
              Design?
            </div>

            <div className="w-full h-full flex items-center justify-end">
              <div className="w-1/4 h-full text-center bg-orange-500 text-white underline">
                <a href="/">
                  I want to
                  <br />
                  Join now!
                </a>
              </div>
            </div>
          </div>
        </ContainerBlock>

        <ContainerBlock className="flex items-center">
          <div className="w-4/12 pl-10">
            <a href="/">Check the schedule!</a>
          </div>
          <div className="w-8/12 bg-gray-100 flex">
            <div className="w-full h-full flex items-center">
              <div className="w-3/4 h-full p-10 bg-gray-200">
                <h4 className=" font-bold ">Augustus 8, Bengkulu</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          </div>
        </ContainerBlock>

        <ContainerBlock className="flex">
          <div className="w-4/12 pt-24 pr-10 text-5xl font-extrabold leading-snug">Your luck if you join us now!</div>
          <div className="w-8/12 pt-24 bg-gray-100">
            <div></div>
          </div>
        </ContainerBlock>
      </Container>
      <Footer className="flex flex-row">
        <FooterBlock title="Certificate" text={loremIpsum} />
        <FooterBlock className="bg-gray-100" title="Material Book" text={loremIpsum} />
        <FooterBlock className="bg-gray-100" title="Our mission" text={loremIpsum} />
      </Footer>
    </div>
  );
};

export default Seminarin;
