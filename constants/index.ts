import home from "../assets/icons/home.png";
import search from "../assets/icons/search.png";
import person from "../assets/icons/person.png";
import logo from "../assets/icons/logo.png";
import save from "../assets/icons/save.png";
import star from "../assets/icons/star.png";
import play from "../assets/icons/play.png";
import arrow from "../assets/icons/arrow.png";

import bg from "../assets/images/bg.png";
import highlight from "../assets/images/highlight.png";
import rankingGradient from "../assets/images/rankingGradient.png";

export const tabsData: { name: string, title: string, icon: string }[] = [
    {name: 'index', title: 'Home', icon: home},
    {name: 'search', title: 'Search', icon: search},
    {name: 'saved', title: 'Saved', icon: save},
    {name: 'profile', title: 'Profile', icon: person},
];

export const icons = {
    home,
    search,
    person,
    logo,
    save,
    star,
    play,
    arrow,
};

export const images = {
    bg,
    highlight,
    rankingGradient,
};