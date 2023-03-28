import { Swiper, SwiperSlide } from 'swiper/react';
import { Box, styled, Typography } from '@mui/material';
import slide1 from '../../assets/slider/slide1.jpg';
import slide2 from '../../assets/slider/slide2.jpg';
import slide3 from '../../assets/slider/slide3.jpg';
import slide4 from '../../assets/slider/slide4.jpg';
import slide5 from '../../assets/slider/slide5.jpg';
import slide6 from '../../assets/slider/slide6.jpg';
import slide7 from '../../assets/slider/slide7.jpg';
import slide8 from '../../assets/slider/slide8.jpg';
import 'swiper/css';
import { Autoplay } from 'swiper';
import { useRef } from 'react';

export default function Slider() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  const StyledCard = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    width: '100%',
    cursor: 'pointer',
    [theme.breakpoints.up('md')]: {
      height: 300,
    },
    [theme.breakpoints.down('md')]: {
      height: 200,
    },
    
  }));

  const StyledTypography = styled(Typography)({
    textAlign: 'center',
    color: 'white',
    lineHeight: '50px',
    fontFamily: 'Lora',
    fontWeight: 600,
    background: 'rgba(207, 25, 25, 0.6);',
    fontSize: 'calc(8px + 1.1vw)',
  });

  const StyledWrapper = styled(Box)(({ theme }) => ({
    [theme.breakpoints.up('md')]: {
      paddingTop: '12%',
    },
    [theme.breakpoints.down('md')]: {
      paddingTop: '20%',
    },

    width: '80%',
  }));
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide>
          <StyledCard sx={{ backgroundImage: `url(${slide1})` }}>
            <StyledWrapper>
              <StyledTypography>
                Як правильно користуватися мультіваркою
              </StyledTypography>
            </StyledWrapper>
          </StyledCard>
        </SwiperSlide>
        <SwiperSlide>
          <StyledCard sx={{ backgroundImage: `url(${slide2})` }}>
            <StyledWrapper>
              <StyledTypography>
                TOP-10 корисних овочевих супів
              </StyledTypography>
            </StyledWrapper>
          </StyledCard>
        </SwiperSlide>
        <SwiperSlide>
          <StyledCard sx={{ backgroundImage: `url(${slide3})` }}>
            <StyledWrapper>
              <StyledTypography>
                А якщо їсти рибу п'ять разів на тиждень?
              </StyledTypography>
            </StyledWrapper>
          </StyledCard>
        </SwiperSlide>
        <SwiperSlide>
          <StyledCard sx={{ backgroundImage: `url(${slide4})` }}>
            <StyledWrapper>
              <StyledTypography>
                Як колір впливає на користь їжі
              </StyledTypography>
            </StyledWrapper>
          </StyledCard>
        </SwiperSlide>
        <SwiperSlide>
          <StyledCard sx={{ backgroundImage: `url(${slide5})` }}>
            <StyledWrapper>
              <StyledTypography>
                Розумні способи використання залишків
              </StyledTypography>
            </StyledWrapper>
          </StyledCard>
        </SwiperSlide>
        <SwiperSlide>
          <StyledCard sx={{ backgroundImage: `url(${slide6})` }}>
            <StyledWrapper>
              <StyledTypography>
                Як борються з похміллям у різних країнах
              </StyledTypography>
            </StyledWrapper>
          </StyledCard>
        </SwiperSlide>
        <SwiperSlide>
          <StyledCard sx={{ backgroundImage: `url(${slide7})` }}>
            <StyledWrapper>
              <StyledTypography>
                Вчимося робити класичне барбекю
              </StyledTypography>
            </StyledWrapper>
          </StyledCard>
        </SwiperSlide>
        <SwiperSlide>
          <StyledCard sx={{ backgroundImage: `url(${slide8})` }}>
            <StyledWrapper>
              <StyledTypography>
                Як зробити їжу привабливою для дітей
              </StyledTypography>
            </StyledWrapper>
          </StyledCard>
        </SwiperSlide>
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 40 40" ref={progressCircle}>
            <circle cx="20" cy="20" r="16"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
}
