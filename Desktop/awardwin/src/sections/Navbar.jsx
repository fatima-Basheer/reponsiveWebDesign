import React from "react";
import { useEffect, useState, useRef } from "react";
import { socials } from "../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Link } from "react-scroll";
import logo from "../assets/logo.webp";
function Navbar() {
  const navRef = useRef();
  const linksRef = useRef([]);
  const contactRef = useRef();
  const toplineRef = useRef();
  const bottomlineRef = useRef();
  const tl = useRef();
  const iconTl = useRef();
  const [isOpen, setIsOpen] = useState(false);
  const [showBurger, setShowBurger] = useState(true);
  useGSAP(() => {
    gsap.set(navRef.current, { xPercent: 100 });
    gsap.set([linksRef.current, contactRef.current], {
      autoAlpha: 0,
      x: -20,
    });
    tl.current = gsap
      .timeline({ paused: true })
      .to(navRef.current, {
        xPercent: 0,
        duration: 1,
        ease: "power3.out",
      })
      .to(
        linksRef.current,
        {
          autoAlpha: 1,
          x: 0,
          stagger: 0.1,
          duration: 0.5,
          ease: "power2.out",
        },
        "<",
      )
      .to(
        contactRef.current,
        {
          autoAlpha: 1,
          x: 0,
          duration: 0.5,
          ease: "power2.out",
        },
        "<+0.2",
      );
    iconTl.current = gsap
      .timeline({ paused: true })
      .to(toplineRef.current, {
        rotate: 45,
        y: 3.3,
        duration: 0.3,
        ease: "power2.inOut",
      })
      .to(
        bottomlineRef.current,
        {
          rotate: -45,
          y: -3.3,
          duration: 0.3,
          ease: "power2.inOut",
        },
        "<",
      );
  }, []);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      if (isOpen) {
        setShowBurger(true);
        return;
      }
      let currentScrollY = window.scrollY;
      setShowBurger(currentScrollY <= lastScrollY || currentScrollY < 10);
      lastScrollY = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  const toggleMenu = () => {
    if (isOpen) {
      tl.current.reverse();
      iconTl.current.reverse();
    } else {
      tl.current.play();
      iconTl.current.play();
    }
    setIsOpen(!isOpen);
  };
  return (
    <>
      <nav
        ref={navRef}
        className="fixed z-50 flex flex-col justify-between w-full h-full px-6 md:px-10 uppercase bg-black text-white/90 py-28 gap-y-10 md:w-1/2 md:left-1/2"
      >
        <div className="flex flex-col text-4xl gap-y-2 md:text-5xl">
          {["home", "services", "about", "work", "contact"].map(
            (section, index) => (
              <div key={index} ref={(el) => (linksRef.current[index] = el)}>
                <Link
                  className="transition-all duration-700 cursor-pointer hover:text-white hover:tracking-[0.5rem] ease-in-out hover:font-bold"
                  to={`${section}`}
                  smooth="true"
                  offset={0}
                  duration={2000}
                >
                  {section}
                </Link>
              </div>
            ),
          )}
        </div>

        <div className="flex flex-col flex-wrap justify-between gap-8 md:flex-row">
          <div className="font-light">
            <p className="tracking-wider text-white/50">Email</p>
            <div className="text-xl-tracking-widset lowercase text-pretty">
              fatimabasheer8214@gmail.com
            </div>
          </div>
          <div className="font-light">
            <p className="tracking-wider text-white/50">Social Media</p>
            <div className="flex flex-wrap gap-x-3">
              {socials.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-sm leading-loose tracking-widest uppercase hover:text-whitetransition-colors duration-300"
                >
                  {"["}
                  {social.name}
                  {"]"}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>
      <div className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-4 md:px-10 pt-4">
        <div
          className="h-10 md:h-14 transition-all duration-300 cursor-pointer"
          style={
            showBurger
              ? { clipPath: "circle(100% at 50% 50%)" }
              : { clipPath: "circle(0% at 50% 50%)" }
          }
        >
          <img src={logo} alt="" className="h-full w-auto" />
        </div>
        <div
          className="flex flex-col items-center justify-center gap-1 transition-all duration-300 bg-black rounded-full cursor-pointer w-10 h-10 md:w-14 md:h-14"
          onClick={toggleMenu}
          style={
            showBurger
              ? { clipPath: "circle(50% at 50% 50%)" }
              : { clipPath: "circle(0% at 50% 50%)" }
          }
        >
          <span
            ref={toplineRef}
            className="block w-6 md:w-8 h-0.5 bg-white rounded-full origin-center"
          ></span>
          <span
            ref={bottomlineRef}
            className="block w-6 md:w-8 h-0.5 bg-white rounded-full origin-center"
          ></span>
        </div>
      </div>
    </>
  );
}

export default Navbar;
