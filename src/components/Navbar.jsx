import {
    LiaUserCheckSolid,
    LiaUserMinusSolid,
    LiaShoppingCartSolid,
} from "react-icons/lia";
import { SiLogitech } from "react-icons/si";
import "../styles/navbar.css";

export function Navbar() {
    return (
        <nav className="flex items-center navbar px-3 border-b shadow-md">
            <div className="text-5xl">
                <SiLogitech />
            </div>
            <div>Stores</div>
            <div>Contact us</div>
            <div className="flex justify-between text-3xl sm:justify-end sm:gap-4">
                <LiaUserCheckSolid />
                <span className="after:content-['1'] after:text-red-500">
                    <LiaShoppingCartSolid />
                </span>
            </div>
        </nav>
    );
}
