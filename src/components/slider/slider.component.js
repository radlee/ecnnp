import React, { useState } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption,
    Jumbotron,
    Container
} from 'reactstrap';
import g1 from '../../media/slide-pictures/gallery1.jpg';
import g2 from '../../media/slide-pictures/gallery2.jpg';
import g3 from '../../media/slide-pictures/gallery3.jpg';


const items = [
    {
        src: `${g1}`,
        altText: '',
        caption: ''
    },
    {
        src: `${g2}`,
        altText: '',
        caption: ''
    },
    {
        src: `${g3}`,
        altText: '',
        caption: ''
    }
];

const Slider = (props) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    }

    const slides = items.map((item) => {
        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={item.src}
            >
                <img className="image-sizing" src={item.src} alt={item.altText} />
                <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
            </CarouselItem>
        );
    });

    return (

        <Jumbotron fluid>
            <Container fluid>
                <h1 className="h1">The Company</h1>
                <hr className="heading-horizon" />
                <br />
                <Carousel
                    activeIndex={activeIndex}
                    next={next}
                    previous={previous}
                >
                    <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
                    {slides}
                    <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
                    <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
                </Carousel>
            </Container>
        </Jumbotron>


    );
}

export default Slider;