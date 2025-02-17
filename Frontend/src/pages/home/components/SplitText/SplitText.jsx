import { useSprings, animated } from "@react-spring/web";
import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types"; // For prop validation

/**
 * SplitText Component
 * Animates each letter of the provided text with a fade-in and slide-up effect.
 *
 * @param {string} text - The text to animate.
 * @param {string} className - CSS class for the text container.
 * @param {number} delay - Delay between each letter animation (in milliseconds).
 * @param {object} animationFrom - Initial animation state (e.g., opacity, transform).
 * @param {object} animationTo - Final animation state (e.g., opacity, transform).
 * @param {string} easing - Easing function for the animation.
 * @param {number} threshold - IntersectionObserver threshold for triggering animations.
 * @param {string} rootMargin - IntersectionObserver root margin.
 * @param {string} textAlign - Text alignment for the container.
 * @param {function} onLetterAnimationComplete - Callback when all letters finish animating.
 */
const SplitText = ({
  text = "AI-Powered Shopping: Scan, Compare, Save & Deliver",
  className = "max-w-4xl text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight",
  delay = 50,
  animationFrom = { opacity: 0, transform: "translate3d(0,40px,0)" },
  animationTo = { opacity: 1, transform: "translate3d(0,0,0)" },
  easing = "easeOutCubic",
  threshold = 0.1,
  rootMargin = "-100px",
  textAlign = "center",
  onLetterAnimationComplete,
}) => {
  // Split the text into words and then into letters
  const words = text.split(" ").map((word) => word.split(""));
  const letters = words.flat();

  // State to track if the component is in view
  const [inView, setInView] = useState(false);
  const ref = useRef();
  const animatedCount = useRef(0);

  // IntersectionObserver to trigger animations when the component is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(ref.current);
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  // Create spring animations for each letter
  const springs = useSprings(
    letters.length,
    letters.map((_, index) => ({
      from: animationFrom,
      to: inView
        ? async (next) => {
            await next(animationTo);
            animatedCount.current += 1;

            // Trigger callback when all letters have finished animating
            if (
              animatedCount.current === letters.length &&
              onLetterAnimationComplete
            ) {
              onLetterAnimationComplete();
            }
          }
        : animationFrom,
      delay: index * delay,
      config: { easing },
    })),
  );

  return (
    <p
      ref={ref}
      className={`split-parent overflow-hidden inline ${className}`}
      style={{ textAlign, whiteSpace: "normal", wordWrap: "break-word" }}
    >
      {words.map((word, wordIndex) => (
        <span
          key={`word-${word.join("")}-${wordIndex}`} // Unique key for each word
          style={{ display: "inline-block", whiteSpace: "nowrap" }}
        >
          {word.map((letter, letterIndex) => {
            // Calculate the global index of the letter
            const index =
              words
                .slice(0, wordIndex)
                .reduce((acc, w) => acc + w.length, 0) + letterIndex;

            return (
              <animated.span
                key={`letter-${letter}-${index}`} // Unique key for each letter
                style={springs[index]}
                className="inline-block transform transition-opacity will-change-transform"
              >
                {letter}
              </animated.span>
            );
          })}
          {/* Add space between words */}
          <span style={{ display: "inline-block", width: "0.3em" }}>
            &nbsp;
          </span>
        </span>
      ))}
    </p>
  );
};

// Prop validation
SplitText.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
  delay: PropTypes.number,
  animationFrom: PropTypes.object,
  animationTo: PropTypes.object,
  easing: PropTypes.string,
  threshold: PropTypes.number,
  rootMargin: PropTypes.string,
  textAlign: PropTypes.string,
  onLetterAnimationComplete: PropTypes.func,
};

export default SplitText;