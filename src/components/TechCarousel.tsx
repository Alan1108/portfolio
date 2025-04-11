import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "../css/TechCarousel.css";
import { COLOR_PALETTE, SKILLS_AND_ICONS } from "../utils/constants";
import { Box } from "@mui/material";

const animation = { duration: 2500, easing: (t: number) => t };

export const TechCarousel = () => {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    drag: true,
    renderMode: "performance",
    slides: {
      perView: 10,
      spacing: 15,
      origin: "center",
    },
    created(s) {
      s.moveToIdx(1, false, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 1, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 1, true, animation);
    },
  });
  const imgComponents = Object.keys(SKILLS_AND_ICONS).map((key) => {
    return (
      <Box key={key} className="keen-slider__slide" sx={{ paddingY: "16px" }}>
        <Box
          component="img"
          src={SKILLS_AND_ICONS[key]}
          alt={key}
          sx={{
            width: "100%",
            height: "auto",
            objectFit: "contain",
          }}
        />
      </Box>
    );
  });

  return (
    <Box
      ref={sliderRef}
      className="keen-slider"
      sx={{
        maxWidth: "50rem",
        background: `radial-gradient(circle at center, ${COLOR_PALETTE.secondary}, ${COLOR_PALETTE.background}) `,
      }}
    >
      {imgComponents}
    </Box>
  );
};
